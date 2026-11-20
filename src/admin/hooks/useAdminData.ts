"use client";

import { useState, useMemo, useCallback } from "react";
import { AdminItem, EventItem, PressReleaseItem, ActivityLog, AdminStats } from "../types";
import { initialEvents } from "../data/events";
import { initialPressReleases } from "../data/pressReleases";

const initialActivityLogs: ActivityLog[] = [
  {
    id: "act-1",
    type: "press",
    action: "created",
    title: "NIET Pharmacy Ranks 37th Across India in NIRF 2024",
    timestamp: "Today, 08:45 AM",
    details: "New press release published with media link."
  },
  {
    id: "act-2",
    type: "event",
    action: "created",
    title: "National Pharmacy Week 2026: Innovations in Drug Discovery",
    timestamp: "Yesterday, 04:30 PM",
    details: "New event created and set to Visible."
  },
  {
    id: "act-3",
    type: "event",
    action: "status_changed",
    title: "Community Health Outreach: Safe Medication",
    timestamp: "2 days ago",
    details: "Visibility toggled to Hidden."
  },
  {
    id: "act-4",
    type: "press",
    action: "updated",
    title: "Faculty Researchers Awarded Patent for Novel Nanocarrier",
    timestamp: "3 days ago",
    details: "Updated description and publication details."
  }
];

export function useAdminData() {
  const [events, setEvents] = useState<EventItem[]>(initialEvents);
  const [pressReleases, setPressReleases] = useState<PressReleaseItem[]>(initialPressReleases);
  const [activities, setActivities] = useState<ActivityLog[]>(initialActivityLogs);

  const logActivity = useCallback((log: Omit<ActivityLog, "id" | "timestamp">) => {
    const now = new Date();
    const timeString = `Today, ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    const newActivity: ActivityLog = {
      ...log,
      id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: timeString
    };
    setActivities((prev) => [newActivity, ...prev.slice(0, 19)]); // Keep latest 20 activities
  }, []);

  // Events CRUD
  const addEvent = useCallback((data: Omit<EventItem, "id" | "createdAt">) => {
    setEvents((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((e) => e.id)) + 1 : 1;
      const newEvent: EventItem = {
        ...data,
        id: nextId,
        createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
      };
      return [newEvent, ...prev];
    });
    logActivity({
      type: "event",
      action: "created",
      title: data.title,
      details: `New event added with status: ${data.status}`
    });
  }, [logActivity]);

  const updateEvent = useCallback((id: number, data: Partial<EventItem>) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === id) {
          const updated = { ...event, ...data };
          return updated;
        }
        return event;
      })
    );
    if (data.title) {
      logActivity({
        type: "event",
        action: "updated",
        title: data.title,
        details: "Event details updated successfully."
      });
    }
  }, [logActivity]);

  const toggleEventStatus = useCallback((id: number) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === id) {
          const newStatus = event.status === "Visible" ? "Hidden" : "Visible";
          logActivity({
            type: "event",
            action: "status_changed",
            title: event.title,
            details: `Status toggled to ${newStatus}`
          });
          return { ...event, status: newStatus };
        }
        return event;
      })
    );
  }, [logActivity]);

  const deleteEvent = useCallback((id: number) => {
    setEvents((prev) => {
      const itemToDelete = prev.find((e) => e.id === id);
      if (itemToDelete) {
        logActivity({
          type: "event",
          action: "deleted",
          title: itemToDelete.title,
          details: "Event deleted permanently from session."
        });
      }
      return prev.filter((event) => event.id !== id);
    });
  }, [logActivity]);

  // Press Releases CRUD
  const addPressRelease = useCallback((data: Omit<PressReleaseItem, "id" | "createdAt">) => {
    setPressReleases((prev) => {
      const nextId = prev.length > 0 ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      const newPress: PressReleaseItem = {
        ...data,
        id: nextId,
        createdAt: new Date().toISOString().slice(0, 16).replace("T", " ")
      };
      return [newPress, ...prev];
    });
    logActivity({
      type: "press",
      action: "created",
      title: data.title,
      details: `New press release added with status: ${data.status}`
    });
  }, [logActivity]);

  const updatePressRelease = useCallback((id: number, data: Partial<PressReleaseItem>) => {
    setPressReleases((prev) =>
      prev.map((press) => {
        if (press.id === id) {
          return { ...press, ...data };
        }
        return press;
      })
    );
    if (data.title) {
      logActivity({
        type: "press",
        action: "updated",
        title: data.title,
        details: "Press release updated successfully."
      });
    }
  }, [logActivity]);

  const togglePressReleaseStatus = useCallback((id: number) => {
    setPressReleases((prev) =>
      prev.map((press) => {
        if (press.id === id) {
          const newStatus = press.status === "Visible" ? "Hidden" : "Visible";
          logActivity({
            type: "press",
            action: "status_changed",
            title: press.title,
            details: `Status toggled to ${newStatus}`
          });
          return { ...press, status: newStatus };
        }
        return press;
      })
    );
  }, [logActivity]);

  const deletePressRelease = useCallback((id: number) => {
    setPressReleases((prev) => {
      const itemToDelete = prev.find((p) => p.id === id);
      if (itemToDelete) {
        logActivity({
          type: "press",
          action: "deleted",
          title: itemToDelete.title,
          details: "Press release deleted permanently from session."
        });
      }
      return prev.filter((press) => press.id !== id);
    });
  }, [logActivity]);

  // Statistics
  const stats: AdminStats = useMemo(() => {
    const totalEvents = events.length;
    const totalPressReleases = pressReleases.length;
    const visibleEvents = events.filter((e) => e.status === "Visible").length;
    const hiddenEvents = events.filter((e) => e.status === "Hidden").length;
    const visiblePressReleases = pressReleases.filter((p) => p.status === "Visible").length;
    const hiddenPressReleases = pressReleases.filter((p) => p.status === "Hidden").length;
    const totalHiddenItems = hiddenEvents + hiddenPressReleases;

    return {
      totalEvents,
      totalPressReleases,
      totalHiddenItems,
      visibleEvents,
      hiddenEvents,
      visiblePressReleases,
      hiddenPressReleases
    };
  }, [events, pressReleases]);

  return {
    events,
    pressReleases,
    activities,
    stats,
    addEvent,
    updateEvent,
    toggleEventStatus,
    deleteEvent,
    addPressRelease,
    updatePressRelease,
    togglePressReleaseStatus,
    deletePressRelease
  };
}
