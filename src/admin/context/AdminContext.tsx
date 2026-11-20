"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useAdminData } from "../hooks/useAdminData";
import {
  AdminItem,
  EventItem,
  PressReleaseItem,
  ActivityLog,
  AdminStats,
  HeroBannerItem,
  RankingItem,
  RecognitionItem,
  FacultyItem,
  AuthorityCouncilItem,
  AdminInfrastructureModule,
  ApprovalDocItem,
  AdminGalleryItem,
  AdminBlogItem,
  AdminResearchDoc,
  AdminFundedSeminar,
  ResearchSubcomponentKey,
  AdminSyllabusDoc,
  SyllabusCourseKey,
  AdminFeeStructureDoc,
  FeeStructureCourseKey,
  toggleStatusValue
} from "../types";
import { initialHeroBanners } from "../data/heroBanner";
import { initialRankings } from "../data/rankings";
import { initialRecognitions } from "../data/recognitions";
import { initialFaculty } from "../data/faculty";
import { initialAuthoritiesCouncil } from "../data/authoritiesCouncil";
import { initialInfrastructureModules } from "../data/infrastructure";
import { initialApprovalDocs } from "../data/allApprovals";
import { initialGalleryItems } from "../data/gallery";
import { initialBlogs } from "../data/blogs";
import { initialResearchDocs, initialFundedSeminars } from "../data/research";
import { initialSyllabusDocs } from "../data/syllabus";
import { initialFeeStructureDocs } from "../data/feeStructure";

interface AdminContextType {
  // Existing Events & Press Releases
  events: EventItem[];
  pressReleases: PressReleaseItem[];
  activities: ActivityLog[];
  stats: AdminStats;
  addEvent: (data: Omit<EventItem, "id" | "createdAt">) => void;
  updateEvent: (id: number, data: Partial<EventItem>) => void;
  toggleEventStatus: (id: number) => void;
  deleteEvent: (id: number) => void;
  addPressRelease: (data: Omit<PressReleaseItem, "id" | "createdAt">) => void;
  updatePressRelease: (id: number, data: Partial<PressReleaseItem>) => void;
  togglePressReleaseStatus: (id: number) => void;
  deletePressRelease: (id: number) => void;
  getEventById: (id: number) => EventItem | undefined;
  getPressReleaseById: (id: number) => PressReleaseItem | undefined;

  // 1. Home - Hero Banners
  heroBanners: HeroBannerItem[];
  addHeroBanner: (data: Omit<HeroBannerItem, "id">) => void;
  updateHeroBanner: (id: number, data: Partial<HeroBannerItem>) => void;
  toggleHeroBannerStatus: (id: number) => void;
  deleteHeroBanner: (id: number) => void;
  getHeroBannerById: (id: number) => HeroBannerItem | undefined;

  // 2. Home - Rankings
  rankings: RankingItem[];
  addRanking: (data: Omit<RankingItem, "id">) => void;
  updateRanking: (id: number, data: Partial<RankingItem>) => void;
  toggleRankingStatus: (id: number) => void;
  deleteRanking: (id: number) => void;
  getRankingById: (id: number) => RankingItem | undefined;

  // 2b. Home - Government Recognitions
  recognitions: RecognitionItem[];
  addRecognition: (data: Omit<RecognitionItem, "id">) => void;
  updateRecognition: (id: number, data: Partial<RecognitionItem>) => void;
  toggleRecognitionStatus: (id: number) => void;
  deleteRecognition: (id: number) => void;
  getRecognitionById: (id: number) => RecognitionItem | undefined;

  // 3. About - Faculty & Facilities (Full CRUD)
  facultyList: FacultyItem[];
  addFaculty: (data: Omit<FacultyItem, "id">) => void;
  updateFaculty: (id: number, data: Partial<FacultyItem>) => void;
  toggleFacultyStatus: (id: number) => void;
  deleteFaculty: (id: number) => void;
  getFacultyById: (id: number) => FacultyItem | undefined;

  // 4. About - Authorities & Council (PDF Documents Control)
  authoritiesCouncil: AuthorityCouncilItem[];
  addAuthorityCouncil: (data: Omit<AuthorityCouncilItem, "id">) => void;
  updateAuthorityCouncil: (id: number, data: Partial<AuthorityCouncilItem>) => void;
  toggleAuthorityCouncilStatus: (id: number) => void;
  deleteAuthorityCouncil: (id: number) => void;
  getAuthorityCouncilById: (id: number) => AuthorityCouncilItem | undefined;

  // 6. Infrastructure
  infrastructureList: AdminInfrastructureModule[];
  addInfrastructureModule: (data: AdminInfrastructureModule) => void;
  updateInfrastructureModule: (slug: string, data: Partial<AdminInfrastructureModule>) => void;
  deleteInfrastructureModule: (slug: string) => void;
  toggleInfrastructureStatus: (slug: string) => void;
  getInfrastructureBySlug: (slug: string) => AdminInfrastructureModule | undefined;

  // 7. Approvals Page
  approvalDocs: ApprovalDocItem[];
  addApprovalDoc: (data: Omit<ApprovalDocItem, "id">) => void;
  updateApprovalDoc: (id: number, data: Partial<ApprovalDocItem>) => void;
  toggleApprovalDocStatus: (id: number) => void;
  deleteApprovalDoc: (id: number) => void;
  getApprovalDocById: (id: number) => ApprovalDocItem | undefined;

  // 8. Gallery Photos Module
  galleryList: AdminGalleryItem[];
  addGalleryItem: (data: Omit<AdminGalleryItem, "id">) => void;
  updateGalleryItem: (id: number, data: Partial<AdminGalleryItem>) => void;
  toggleGalleryItemStatus: (id: number) => void;
  deleteGalleryItem: (id: number) => void;
  getGalleryItemById: (id: number) => AdminGalleryItem | undefined;

  // 9. Blog Articles Module
  blogList: AdminBlogItem[];
  addBlog: (data: Omit<AdminBlogItem, "id">) => void;
  updateBlog: (id: number, data: Partial<AdminBlogItem>) => void;
  toggleBlogStatus: (id: number) => void;
  deleteBlog: (id: number) => void;
  getBlogById: (id: number) => AdminBlogItem | undefined;

  // 10. Research & Development (R&D) Module
  researchDocs: AdminResearchDoc[];
  addResearchDoc: (data: Omit<AdminResearchDoc, "id">) => void;
  updateResearchDoc: (id: number, data: Partial<AdminResearchDoc>) => void;
  toggleResearchDocStatus: (id: number) => void;
  deleteResearchDoc: (id: number) => void;
  getResearchDocById: (id: number) => AdminResearchDoc | undefined;
  getResearchDocsBySubcomponent: (subcomponent: ResearchSubcomponentKey) => AdminResearchDoc[];

  // Funded Seminars Gallery & Day-wise Sessions
  fundedSeminars: AdminFundedSeminar[];
  addFundedSeminar: (data: Omit<AdminFundedSeminar, "id">) => void;
  updateFundedSeminar: (id: number, data: Partial<AdminFundedSeminar>) => void;
  toggleFundedSeminarStatus: (id: number) => void;
  deleteFundedSeminar: (id: number) => void;
  getFundedSeminarById: (id: number) => AdminFundedSeminar | undefined;

  // 11. Syllabus Module (Course Syllabus PDF Management)
  syllabusDocs: AdminSyllabusDoc[];
  addSyllabusDoc: (data: Omit<AdminSyllabusDoc, "id">) => void;
  updateSyllabusDoc: (id: number, data: Partial<AdminSyllabusDoc>) => void;
  toggleSyllabusDocStatus: (id: number) => void;
  deleteSyllabusDoc: (id: number) => void;
  getSyllabusDocById: (id: number) => AdminSyllabusDoc | undefined;
  getSyllabusDocsByCourse: (course: SyllabusCourseKey) => AdminSyllabusDoc[];

  // 12. Fee Structure Module (Official AFRC Approved Annual Fee Matrix Control)
  feeStructureDocs: AdminFeeStructureDoc[];
  addFeeStructureDoc: (data: Omit<AdminFeeStructureDoc, "id">) => void;
  updateFeeStructureDoc: (id: number, data: Partial<AdminFeeStructureDoc>) => void;
  toggleFeeStructureDocStatus: (id: number) => void;
  deleteFeeStructureDoc: (id: number) => void;
  getFeeStructureDocById: (id: number) => AdminFeeStructureDoc | undefined;
  getFeeStructureDocsByCourse: (course: FeeStructureCourseKey) => AdminFeeStructureDoc[];
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const adminData = useAdminData();

  // 1. Hero Banners State
  const [heroBanners, setHeroBanners] = useState<HeroBannerItem[]>(initialHeroBanners);
  const addHeroBanner = useCallback((data: Omit<HeroBannerItem, "id">) => {
    setHeroBanners((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((h) => h.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateHeroBanner = useCallback((id: number, data: Partial<HeroBannerItem>) => {
    setHeroBanners((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleHeroBannerStatus = useCallback((id: number) => {
    setHeroBanners((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteHeroBanner = useCallback((id: number) => {
    setHeroBanners((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 2. Rankings State
  const [rankings, setRankings] = useState<RankingItem[]>(initialRankings);
  const addRanking = useCallback((data: Omit<RankingItem, "id">) => {
    setRankings((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((r) => r.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateRanking = useCallback((id: number, data: Partial<RankingItem>) => {
    setRankings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleRankingStatus = useCallback((id: number) => {
    setRankings((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteRanking = useCallback((id: number) => {
    setRankings((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 2b. Government Recognitions State
  const [recognitions, setRecognitions] = useState<RecognitionItem[]>(initialRecognitions);
  const addRecognition = useCallback((data: Omit<RecognitionItem, "id">) => {
    setRecognitions((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((r) => r.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateRecognition = useCallback((id: number, data: Partial<RecognitionItem>) => {
    setRecognitions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleRecognitionStatus = useCallback((id: number) => {
    setRecognitions((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteRecognition = useCallback((id: number) => {
    setRecognitions((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 3. Faculty & Facilities State (Full CRUD)
  const [facultyList, setFacultyList] = useState<FacultyItem[]>(initialFaculty);
  const addFaculty = useCallback((data: Omit<FacultyItem, "id">) => {
    setFacultyList((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((f) => f.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateFaculty = useCallback((id: number, data: Partial<FacultyItem>) => {
    setFacultyList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleFacultyStatus = useCallback((id: number) => {
    setFacultyList((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteFaculty = useCallback((id: number) => {
    setFacultyList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 4. Authorities & Council (PDF Documents Control) State
  const [authoritiesCouncil, setAuthoritiesCouncil] = useState<AuthorityCouncilItem[]>(
    initialAuthoritiesCouncil
  );
  const addAuthorityCouncil = useCallback((data: Omit<AuthorityCouncilItem, "id">) => {
    setAuthoritiesCouncil((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((a) => a.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateAuthorityCouncil = useCallback(
    (id: number, data: Partial<AuthorityCouncilItem>) => {
      setAuthoritiesCouncil((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...data } : item))
      );
    },
    []
  );
  const toggleAuthorityCouncilStatus = useCallback((id: number) => {
    setAuthoritiesCouncil((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteAuthorityCouncil = useCallback((id: number) => {
    setAuthoritiesCouncil((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 6. Infrastructure Modules State
  const [infrastructureList, setInfrastructureList] = useState<AdminInfrastructureModule[]>(
    initialInfrastructureModules
  );
  const addInfrastructureModule = useCallback((data: AdminInfrastructureModule) => {
    setInfrastructureList((prev) => [data, ...prev]);
  }, []);
  const updateInfrastructureModule = useCallback(
    (slug: string, data: Partial<AdminInfrastructureModule>) => {
      setInfrastructureList((prev) =>
        prev.map((item) => (item.slug === slug ? { ...item, ...data } : item))
      );
    },
    []
  );
  const deleteInfrastructureModule = useCallback((slug: string) => {
    setInfrastructureList((prev) => prev.filter((item) => item.slug !== slug));
  }, []);
  const toggleInfrastructureStatus = useCallback((slug: string) => {
    setInfrastructureList((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const getInfrastructureBySlug = useCallback(
    (slug: string) => {
      return infrastructureList.find((item) => item.slug === slug);
    },
    [infrastructureList]
  );

  // 7. Approvals Documents State
  const [approvalDocs, setApprovalDocs] = useState<ApprovalDocItem[]>(initialApprovalDocs);
  const addApprovalDoc = useCallback((data: Omit<ApprovalDocItem, "id">) => {
    setApprovalDocs((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((a) => a.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateApprovalDoc = useCallback((id: number, data: Partial<ApprovalDocItem>) => {
    setApprovalDocs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleApprovalDocStatus = useCallback((id: number) => {
    setApprovalDocs((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteApprovalDoc = useCallback((id: number) => {
    setApprovalDocs((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 8. Gallery Photos State
  const [galleryList, setGalleryList] = useState<AdminGalleryItem[]>(initialGalleryItems);
  const addGalleryItem = useCallback((data: Omit<AdminGalleryItem, "id">) => {
    setGalleryList((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((g) => g.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateGalleryItem = useCallback((id: number, data: Partial<AdminGalleryItem>) => {
    setGalleryList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleGalleryItemStatus = useCallback((id: number) => {
    setGalleryList((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteGalleryItem = useCallback((id: number) => {
    setGalleryList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 9. Blog Articles State
  const [blogList, setBlogList] = useState<AdminBlogItem[]>(initialBlogs);
  const addBlog = useCallback((data: Omit<AdminBlogItem, "id">) => {
    setBlogList((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((b) => b.id)) + 1 : 1;
      return [{ ...data, id: nextId }, ...prev];
    });
  }, []);
  const updateBlog = useCallback((id: number, data: Partial<AdminBlogItem>) => {
    setBlogList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);
  const toggleBlogStatus = useCallback((id: number) => {
    setBlogList((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);
  const deleteBlog = useCallback((id: number) => {
    setBlogList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 10. Research & Development (R&D) State
  const [researchDocs, setResearchDocs] = useState<AdminResearchDoc[]>(initialResearchDocs);

  const addResearchDoc = useCallback((data: Omit<AdminResearchDoc, "id">) => {
    setResearchDocs((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((r) => r.id)) + 1 : 1;
      const newDoc: AdminResearchDoc = {
        ...data,
        id: nextId,
        createdAt: new Date().toISOString()
      };
      return [newDoc, ...prev];
    });
  }, []);

  const updateResearchDoc = useCallback((id: number, data: Partial<AdminResearchDoc>) => {
    setResearchDocs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);

  const toggleResearchDocStatus = useCallback((id: number) => {
    setResearchDocs((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);

  const deleteResearchDoc = useCallback((id: number) => {
    setResearchDocs((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const getResearchDocById = useCallback(
    (id: number) => researchDocs.find((doc) => doc.id === id),
    [researchDocs]
  );

  const getResearchDocsBySubcomponent = useCallback(
    (subcomponent: ResearchSubcomponentKey) =>
      researchDocs.filter((doc) => doc.subcomponent === subcomponent),
    [researchDocs]
  );

  // Funded Seminars Day-wise Gallery State (Seminar 1, 2, 3...)
  const [fundedSeminars, setFundedSeminars] = useState<AdminFundedSeminar[]>(initialFundedSeminars);

  const addFundedSeminar = useCallback((data: Omit<AdminFundedSeminar, "id">) => {
    setFundedSeminars((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((s) => s.id)) + 1 : 1;
      const newSeminar: AdminFundedSeminar = {
        ...data,
        id: nextId,
        createdAt: new Date().toISOString()
      };
      return [newSeminar, ...prev];
    });
  }, []);

  const updateFundedSeminar = useCallback((id: number, data: Partial<AdminFundedSeminar>) => {
    setFundedSeminars((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);

  const toggleFundedSeminarStatus = useCallback((id: number) => {
    setFundedSeminars((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);

  const deleteFundedSeminar = useCallback((id: number) => {
    setFundedSeminars((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const getFundedSeminarById = useCallback(
    (id: number) => fundedSeminars.find((item) => item.id === id),
    [fundedSeminars]
  );

  // 11. Syllabus Module State
  const [syllabusDocs, setSyllabusDocs] = useState<AdminSyllabusDoc[]>(initialSyllabusDocs);

  const addSyllabusDoc = useCallback((data: Omit<AdminSyllabusDoc, "id">) => {
    setSyllabusDocs((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((s) => s.id)) + 1 : 1;
      const newDoc: AdminSyllabusDoc = {
        ...data,
        id: nextId,
        createdAt: new Date().toISOString()
      };
      return [newDoc, ...prev];
    });
  }, []);

  const updateSyllabusDoc = useCallback((id: number, data: Partial<AdminSyllabusDoc>) => {
    setSyllabusDocs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);

  const toggleSyllabusDocStatus = useCallback((id: number) => {
    setSyllabusDocs((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);

  const deleteSyllabusDoc = useCallback((id: number) => {
    setSyllabusDocs((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const getSyllabusDocById = useCallback(
    (id: number) => syllabusDocs.find((doc) => doc.id === id),
    [syllabusDocs]
  );

  const getSyllabusDocsByCourse = useCallback(
    (course: SyllabusCourseKey) =>
      syllabusDocs.filter((doc) => doc.course === course),
    [syllabusDocs]
  );

  // 12. Fee Structure Module State
  const [feeStructureDocs, setFeeStructureDocs] = useState<AdminFeeStructureDoc[]>(initialFeeStructureDocs);

  const addFeeStructureDoc = useCallback((data: Omit<AdminFeeStructureDoc, "id">) => {
    setFeeStructureDocs((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((f) => f.id)) + 1 : 1;
      const newDoc: AdminFeeStructureDoc = {
        ...data,
        id: nextId,
        createdAt: new Date().toISOString()
      };
      return [newDoc, ...prev];
    });
  }, []);

  const updateFeeStructureDoc = useCallback((id: number, data: Partial<AdminFeeStructureDoc>) => {
    setFeeStructureDocs((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }, []);

  const toggleFeeStructureDocStatus = useCallback((id: number) => {
    setFeeStructureDocs((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: toggleStatusValue(item.status) }
          : item
      )
    );
  }, []);

  const deleteFeeStructureDoc = useCallback((id: number) => {
    setFeeStructureDocs((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const getFeeStructureDocById = useCallback(
    (id: number) => feeStructureDocs.find((doc) => doc.id === id),
    [feeStructureDocs]
  );

  const getFeeStructureDocsByCourse = useCallback(
    (course: FeeStructureCourseKey) =>
      feeStructureDocs.filter((doc) => doc.course === course),
    [feeStructureDocs]
  );

  return (
    <AdminContext.Provider
      value={{
        ...adminData,
        getEventById: (id: number) => adminData.events.find((e) => e.id === id),
        getPressReleaseById: (id: number) => adminData.pressReleases.find((p) => p.id === id),

        // Home
        heroBanners,
        addHeroBanner,
        updateHeroBanner,
        toggleHeroBannerStatus,
        deleteHeroBanner,
        getHeroBannerById: (id: number) => heroBanners.find((h) => h.id === id),
        rankings,
        addRanking,
        updateRanking,
        toggleRankingStatus,
        deleteRanking,
        getRankingById: (id: number) => rankings.find((r) => r.id === id),
        recognitions,
        addRecognition,
        updateRecognition,
        toggleRecognitionStatus,
        deleteRecognition,
        getRecognitionById: (id: number) => recognitions.find((rc) => rc.id === id),

        // About
        facultyList,
        addFaculty,
        updateFaculty,
        toggleFacultyStatus,
        deleteFaculty,
        getFacultyById: (id: number) => facultyList.find((f) => f.id === id),
        authoritiesCouncil,
        addAuthorityCouncil,
        updateAuthorityCouncil,
        toggleAuthorityCouncilStatus,
        deleteAuthorityCouncil,
        getAuthorityCouncilById: (id: number) => authoritiesCouncil.find((a) => a.id === id),

        // Infrastructure
        infrastructureList,
        addInfrastructureModule,
        updateInfrastructureModule,
        deleteInfrastructureModule,
        toggleInfrastructureStatus,
        getInfrastructureBySlug,

        // Approvals
        approvalDocs,
        addApprovalDoc,
        updateApprovalDoc,
        toggleApprovalDocStatus,
        deleteApprovalDoc,
        getApprovalDocById: (id: number) => approvalDocs.find((d) => d.id === id),

        // Gallery
        galleryList,
        addGalleryItem,
        updateGalleryItem,
        toggleGalleryItemStatus,
        deleteGalleryItem,
        getGalleryItemById: (id: number) => galleryList.find((g) => g.id === id),

        // Blogs
        blogList,
        addBlog,
        updateBlog,
        toggleBlogStatus,
        deleteBlog,
        getBlogById: (id: number) => blogList.find((b) => b.id === id),

        // R&D Module
        researchDocs,
        addResearchDoc,
        updateResearchDoc,
        toggleResearchDocStatus,
        deleteResearchDoc,
        getResearchDocById,
        getResearchDocsBySubcomponent,

        // Funded Seminars Module
        fundedSeminars,
        addFundedSeminar,
        updateFundedSeminar,
        toggleFundedSeminarStatus,
        deleteFundedSeminar,
        getFundedSeminarById,

        // Syllabus Module
        syllabusDocs,
        addSyllabusDoc,
        updateSyllabusDoc,
        toggleSyllabusDocStatus,
        deleteSyllabusDoc,
        getSyllabusDocById,
        getSyllabusDocsByCourse,

        // Fee Structure Module
        feeStructureDocs,
        addFeeStructureDoc,
        updateFeeStructureDoc,
        toggleFeeStructureDocStatus,
        deleteFeeStructureDoc,
        getFeeStructureDocById,
        getFeeStructureDocsByCourse
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
