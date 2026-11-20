"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import { ArrowLeftIcon, CheckIcon } from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { ItemStatus, isItemActive } from "@/admin/types";

interface FacultyFormPageProps {
  mode: "add" | "edit";
  id?: number;
}

export function FacultyFormPage({ mode, id }: FacultyFormPageProps) {
  const router = useRouter();
  const {
    getFacultyById,
    addFaculty,
    updateFaculty
  } = useAdmin();

  const isEditing = mode === "edit" && typeof id === "number";
  const existingItem = isEditing && id ? getFacultyById(id) : undefined;

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [academicExperience, setAcademicExperience] = useState("");
  const [experience, setExperience] = useState("");
  const [researchExperience, setResearchExperience] = useState("");
  const [researchInterest, setResearchInterest] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setName(existingItem.name || "");
      setDesignation(existingItem.designation || "");
      setQualification(existingItem.qualification || "");
      setSpecialization(existingItem.specialization || "");
      setAcademicExperience(existingItem.academicExperience || "");
      setExperience(existingItem.experience || "");
      setResearchExperience(existingItem.researchExperience || "");
      setResearchInterest(existingItem.researchInterest || "");
      setImageUrl(existingItem.imageUrl || "");
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setName("");
      setDesignation("");
      setQualification("");
      setSpecialization("");
      setAcademicExperience("");
      setExperience("");
      setResearchExperience("");
      setResearchInterest("");
      setImageUrl("");
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!designation.trim()) newErrors.designation = "Designation is required.";
    if (!qualification.trim()) newErrors.qualification = "Qualification is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      name: name.trim(),
      designation: designation.trim(),
      qualification: qualification.trim(),
      specialization: specialization.trim() || undefined,
      academicExperience: academicExperience.trim() || undefined,
      experience: experience.trim() || undefined,
      researchExperience: researchExperience.trim() || undefined,
      researchInterest: researchInterest.trim() || undefined,
      imageUrl: imageUrl.trim() || undefined,
      status
    };

    if (isEditing && id) {
      updateFaculty(id, payload);
      router.push(`/admin/about/faculty/${id}`);
    } else {
      addFaculty(payload);
      router.push("/admin/about/faculty");
    }
  };

  const backUrl = isEditing && id
    ? `/admin/about/faculty/${id}`
    : "/admin/about/faculty";

  return (
    <div className="admin-form-container">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to {isEditing ? "Profile Details" : "Faculty Directory"}</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? "Edit Faculty Profile" : "Add Faculty Member"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update profile information for Record #${existingItem?.id} - "${existingItem?.name}".`
            : "Enter member details, qualifications, specialization, and research experience."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-card flex flex-col gap-5">
        {/* 1. Name */}
        <div className="admin-form-group">
          <label className="admin-label">
            Name <span className="text-[var(--admin-primary)]">*</span>
          </label>
          <input
            type="text"
            className="admin-input"
            placeholder="e.g. Dr. Avijit Mazumder"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
          />
          {errors.name && <span className="admin-field-error">{errors.name}</span>}
        </div>

        {/* 2. Designation & 3. Qualification */}
        <div className="admin-grid-2">
          <div className="admin-form-group">
            <label className="admin-label">
              Designation <span className="text-[var(--admin-primary)]">*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. Professor & Director"
              value={designation}
              onChange={(e) => {
                setDesignation(e.target.value);
                if (errors.designation) setErrors((prev) => ({ ...prev, designation: "" }));
              }}
            />
            {errors.designation && <span className="admin-field-error">{errors.designation}</span>}
          </div>

          <div className="admin-form-group">
            <label className="admin-label">
              Qualification <span className="text-[var(--admin-primary)]">*</span>
            </label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. B.Pharm, M.Pharm, MBA, Ph.D."
              value={qualification}
              onChange={(e) => {
                setQualification(e.target.value);
                if (errors.qualification) setErrors((prev) => ({ ...prev, qualification: "" }));
              }}
            />
            {errors.qualification && <span className="admin-field-error">{errors.qualification}</span>}
          </div>
        </div>

        {/* 4. Specialization & 5. Academic Experience (Years) */}
        <div className="admin-grid-2">
          <div className="admin-form-group">
            <label className="admin-label">Specialization</label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. Pharmacology & Clinical Pharmacy"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label className="admin-label">Academic Experience (Years)</label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. 25+ Years"
              value={academicExperience}
              onChange={(e) => setAcademicExperience(e.target.value)}
            />
          </div>
        </div>

        {/* 6. Experience & 7. Research Experience (Years) */}
        <div className="admin-grid-2">
          <div className="admin-form-group">
            <label className="admin-label">Experience</label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. Teaching career since IPT Salipur, BIT Mesra, NMIMS Mumbai, and NIET"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label className="admin-label">Research Experience (Years)</label>
            <input
              type="text"
              className="admin-input"
              placeholder="e.g. 20+ Years"
              value={researchExperience}
              onChange={(e) => setResearchExperience(e.target.value)}
            />
          </div>
        </div>

        {/* 8. Area of Interest */}
        <div className="admin-form-group">
          <label className="admin-label">Area of Interest</label>
          <input
            type="text"
            className="admin-input"
            placeholder="e.g. Clinical Pharmacology, Natural Bioactives & Healthcare Management"
            value={researchInterest}
            onChange={(e) => setResearchInterest(e.target.value)}
          />
        </div>

        {/* Profile Photo Upload */}
        <div className="mb-4.5">
          <ImageUploadInput
            id="form-faculty-photo"
            label="Faculty Profile Photo"
            value={imageUrl}
            onChange={setImageUrl}
            helperText="Upload faculty photo from your device storage (PNG, JPG, WEBP)."
            previewHeight={140}
          />
        </div>

        {/* Status (Always in the last line) */}
        <div className="admin-form-group">
          <label className="admin-label">Status</label>
          <select
            className="admin-input"
            value={isItemActive(status) ? "Active" : "Inactive"}
            onChange={(e) => setStatus(e.target.value as ItemStatus)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Form Actions */}
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[var(--admin-border)]">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Save Changes" : "Save Member"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
