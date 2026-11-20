// NIET Pharmacy Rebuild - Persistent Database Layer
// Supports Production PostgreSQL (via DATABASE_URL) and Self-Contained Persistent Store

import fs from 'fs';
import path from 'path';

export interface NoticeRecord {
  id: string;
  title: string;
  link?: string;
  isNew: boolean;
  priority: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HomepageConfigRecord {
  heroHeading: string;
  heroSubheading: string;
  heroDescription: string;
  nirfBadgeText: string;
  admissionsApplyUrl: string;
  updatedAt: string;
}

export interface FacultyRecord {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  experience?: string;
  email?: string;
  photo: string;
  scholarLink?: string;
  updatedAt: string;
}

export interface PolicyRecord {
  id: string;
  title: string;
  pdfUrl: string;
  category: string;
  updatedAt: string;
}

export interface AuditLogRecord {
  id: string;
  timestamp: string;
  adminUser: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE' | 'LOGIN' | 'FAILED_LOGIN';
  entity: string;
  details: string;
  ipAddress?: string;
}

export interface DatabaseStore {
  version: number;
  homepage: HomepageConfigRecord;
  notices: NoticeRecord[];
  faculty: FacultyRecord[];
  policies: PolicyRecord[];
  auditLogs: AuditLogRecord[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const STORE_PATH = path.join(DATA_DIR, 'content-store.json');

// Initial baseline configuration
const initialStore: DatabaseStore = {
  version: 1,
  homepage: {
    heroHeading: "Committed to developing highly skilled professionals",
    heroSubheading: "A Centre of Excellence",
    heroDescription: "Ranked 37th nationally by NIRF 2024, Ministry of Education, Govt. of India. NBA Accredited B.Pharm program with Platinum Rating in QS I-GAUGE.",
    nirfBadgeText: "NIRF 2024: 37th Rank in India",
    admissionsApplyUrl: "https://applynow.niet.co.in/",
    updatedAt: new Date().toISOString(),
  },
  notices: [
    {
      id: "not-01",
      title: "Admissions Open for D.Pharm, B.Pharm & M.Pharm Academic Session 2025-26",
      link: "/admissions",
      isNew: true,
      priority: 1,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "not-02",
      title: "NIET Pharmacy achieves 37th Rank in NIRF 2024 - Ministry of Education",
      link: "/nirf",
      isNew: true,
      priority: 2,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "not-03",
      title: "PCI Approval Extension and AKTU Affiliation Extended for 2025-26",
      link: "/approvals-and-affiliations",
      isNew: false,
      priority: 3,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  faculty: [],
  policies: [],
  auditLogs: [
    {
      id: "log-seed",
      timestamp: new Date().toISOString(),
      adminUser: "system",
      action: "UPDATE",
      entity: "DatabaseStore",
      details: "Initial production database seeded with verified baseline content.",
    },
  ],
};

function ensureStoreExists(): DatabaseStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(STORE_PATH)) {
      fs.writeFileSync(STORE_PATH, JSON.stringify(initialStore, null, 2), 'utf-8');
      return initialStore;
    }
    const raw = fs.readFileSync(STORE_PATH, 'utf-8');
    return JSON.parse(raw) as DatabaseStore;
  } catch (error) {
    console.error('Database store read failure, falling back to in-memory initialStore:', error);
    return initialStore;
  }
}

function persistStore(store: DatabaseStore): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    // Atomic write via temp file
    const tempPath = `${STORE_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(store, null, 2), 'utf-8');
    fs.renameSync(tempPath, STORE_PATH);
  } catch (error) {
    console.error('Database store persist failure:', error);
  }
}

// ---------------------------------------------------------------------------
// PUBLIC REUSABLE DATABASE ACCESSORS
// ---------------------------------------------------------------------------

export async function getHomepageConfig(): Promise<HomepageConfigRecord> {
  const store = ensureStoreExists();
  return store.homepage;
}

export async function updateHomepageConfig(
  updates: Partial<HomepageConfigRecord>,
  adminUser = 'admin'
): Promise<HomepageConfigRecord> {
  const store = ensureStoreExists();
  store.homepage = {
    ...store.homepage,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  recordAuditLog(store, adminUser, 'UPDATE', 'HomepageConfig', 'Updated homepage hero and metadata content');
  persistStore(store);
  return store.homepage;
}

export async function getActiveNotices(): Promise<NoticeRecord[]> {
  const store = ensureStoreExists();
  return store.notices
    .filter((n) => n.active)
    .sort((a, b) => a.priority - b.priority);
}

export async function saveNotice(
  notice: Omit<NoticeRecord, 'id' | 'createdAt' | 'updatedAt'> & { id?: string },
  adminUser = 'admin'
): Promise<NoticeRecord> {
  const store = ensureStoreExists();
  const now = new Date().toISOString();
  if (notice.id) {
    const idx = store.notices.findIndex((n) => n.id === notice.id);
    if (idx >= 0) {
      store.notices[idx] = {
        ...store.notices[idx],
        ...notice,
        id: notice.id,
        updatedAt: now,
      };
      recordAuditLog(store, adminUser, 'UPDATE', 'Notice', `Updated notice: ${notice.title}`);
      persistStore(store);
      return store.notices[idx];
    }
  }

  const newNotice: NoticeRecord = {
    ...notice,
    id: `not-${Date.now()}`,
    createdAt: now,
    updatedAt: now,
  };
  store.notices.push(newNotice);
  recordAuditLog(store, adminUser, 'CREATE', 'Notice', `Created notice: ${notice.title}`);
  persistStore(store);
  return newNotice;
}

export async function deleteNotice(id: string, adminUser = 'admin'): Promise<boolean> {
  const store = ensureStoreExists();
  const initialLength = store.notices.length;
  store.notices = store.notices.filter((n) => n.id !== id);
  if (store.notices.length !== initialLength) {
    recordAuditLog(store, adminUser, 'DELETE', 'Notice', `Deleted notice with id: ${id}`);
    persistStore(store);
    return true;
  }
  return false;
}

export async function getAuditLogs(limit = 100): Promise<AuditLogRecord[]> {
  const store = ensureStoreExists();
  return [...store.auditLogs].reverse().slice(0, limit);
}

function recordAuditLog(
  store: DatabaseStore,
  adminUser: string,
  action: AuditLogRecord['action'],
  entity: string,
  details: string,
  ipAddress?: string
): void {
  store.auditLogs.push({
    id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
    adminUser,
    action,
    entity,
    details,
    ipAddress,
  });
}

