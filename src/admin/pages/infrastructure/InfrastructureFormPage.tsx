"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/admin/context/AdminContext";
import {
  ArrowLeftIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon,
  GalleryIcon
} from "@/admin/components/Icons";
import { ImageUploadInput } from "@/admin/components/ImageUploadInput";
import { SimpleTextEditor } from "@/admin/components/SimpleTextEditor";
import { ItemStatus, isItemActive, AdminInfrastructureModule, InfrastructureHubItem } from "@/admin/types";

const DEFAULT_HUB_ITEMS: InfrastructureHubItem[] = [
  {
    id: "sif",
    title: "Sophisticated Instrumentation Facility (SIF)",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435162/instrument.jpg"
  },
  {
    id: "cpcsea",
    title: "CPCSEA-Approved Animal Research Centre",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435150/animalhouse1.jpg"
  },
  {
    id: "machine",
    title: "Pharmaceutics Pilot Plant & Machine Room",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435168/Machine_room_1.jpg"
  },
  {
    id: "toxicology",
    title: "Advanced Preclinical Toxicology Centre",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435309/toxicology1.jpg"
  },
  {
    id: "library",
    title: "Central Knowledge Repository & E-Library",
    image: "https://res.cloudinary.com/boss8zib/image/upload/v1793435165/Library.jpg"
  }
];

interface InfrastructureFormPageProps {
  mode: "add" | "edit";
  slug?: string;
}

export function InfrastructureFormPage({ mode, slug }: InfrastructureFormPageProps) {
  const router = useRouter();
  const {
    getInfrastructureBySlug,
    addInfrastructureModule,
    updateInfrastructureModule
  } = useAdmin();

  const isEditing = mode === "edit" && typeof slug === "string";
  const existingItem = isEditing && slug ? getInfrastructureBySlug(slug) : undefined;

  const [name, setName] = useState("");
  const [componentSlug, setComponentSlug] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [sectionHeading, setSectionHeading] = useState("Centres of Excellence & Research Hubs");
  const [sectionSubheading, setSectionSubheading] = useState("— Shaping learners into achievers through cutting-edge facilities.");
  const [hubItems, setHubItems] = useState<InfrastructureHubItem[]>([]);
  const [newHubTitle, setNewHubTitle] = useState("");
  const [newHubImage, setNewHubImage] = useState("");
  const [hubItemError, setHubItemError] = useState("");
  const [status, setStatus] = useState<ItemStatus>("Active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isEditing && existingItem) {
      setName(existingItem.name || existingItem.title.split(" ")[0] || "");
      setComponentSlug(existingItem.slug || "");
      setTitle(existingItem.title || "");
      setSubtitle(existingItem.subtitle || "");
      setDescription(existingItem.description || "");
      setImageUrl(existingItem.imageUrl || "");
      setImages(existingItem.images && existingItem.images.length > 0 ? [...existingItem.images] : []);
      setSectionHeading(existingItem.sectionHeading || "Centres of Excellence & Research Hubs");
      setSectionSubheading(existingItem.sectionSubheading || "— Shaping learners into achievers through cutting-edge facilities.");
      setHubItems(
        existingItem.hubItems && existingItem.hubItems.length > 0
          ? [...existingItem.hubItems]
          : DEFAULT_HUB_ITEMS
      );
      setStatus(isItemActive(existingItem.status) ? "Active" : "Inactive");
    } else {
      setName("");
      setComponentSlug("");
      setTitle("");
      setSubtitle("");
      setDescription("");
      setImageUrl("");
      setImages([]);
      setSectionHeading("Centres of Excellence & Research Hubs");
      setSectionSubheading("— Shaping learners into achievers through cutting-edge facilities.");
      setHubItems([]);
      setStatus("Active");
    }
    setErrors({});
  }, [isEditing, existingItem]);

  // Auto-slugify when typing name in add mode
  const handleNameChange = (val: string) => {
    setName(val);
    if (!isEditing) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      setComponentSlug(generated);
    }
    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleAddImage = (url: string) => {
    if (!url.trim()) return;
    if (images.length >= 4) return;
    setImages([...images, url.trim()]);
  };

  const handleRemoveImage = (idx: number) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const handleAddHubItem = () => {
    if (hubItems.length >= 5) {
      setHubItemError("Maximum limit reached (5/5 hub items). You cannot add more than 5 items.");
      return;
    }
    if (!newHubTitle.trim()) {
      setHubItemError("Please enter a title for the key point / hub.");
      return;
    }
    if (!newHubImage.trim()) {
      setHubItemError("Please upload or provide an image for the key point / hub.");
      return;
    }
    setHubItemError("");
    const newItem: InfrastructureHubItem = {
      id: "hub-" + Date.now(),
      title: newHubTitle.trim(),
      image: newHubImage.trim()
    };
    setHubItems([...hubItems, newItem]);
    setNewHubTitle("");
    setNewHubImage("");
  };

  const handleRemoveHubItem = (idx: number) => {
    setHubItems(hubItems.filter((_, i) => i !== idx));
  };

  const handleUpdateHubItemTitle = (idx: number, newTitle: string) => {
    setHubItems(
      hubItems.map((item, i) => (i === idx ? { ...item, title: newTitle } : item))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Component name is required.";
    if (!componentSlug.trim()) newErrors.slug = "URL slug is required.";
    if (!title.trim()) newErrors.title = "Heading / Title is required.";
    if (!subtitle.trim()) newErrors.subtitle = "Subheading is required.";
    if (!imageUrl.trim()) newErrors.imageUrl = "Main banner image is required.";
    const cleanDesc = description.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").trim();
    if (!cleanDesc) newErrors.description = "Description / Article body is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const finalSlug = componentSlug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-");

    const payload: AdminInfrastructureModule = {
      id: finalSlug,
      slug: finalSlug,
      name: name.trim(),
      title: title.trim(),
      subtitle: subtitle.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim(),
      images: images.length > 0 ? images.slice(0, 4) : [imageUrl.trim()],
      features: [],
      sectionHeading: sectionHeading.trim(),
      sectionSubheading: sectionSubheading.trim(),
      hubItems: hubItems.slice(0, 5),
      status
    };

    if (isEditing && slug) {
      updateInfrastructureModule(slug, payload);
      router.push("/admin/infrastructure");
    } else {
      addInfrastructureModule(payload);
      router.push("/admin/infrastructure");
    }
  };

  const backUrl = "/admin/infrastructure";

  return (
    <div className="admin-form-container w-full max-w-full">
      {/* Top Back Navigation */}
      <div>
        <Link href={backUrl} className="admin-back-btn">
          <ArrowLeftIcon size={14} />
          <span>Back to Infrastructure List</span>
        </Link>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="admin-heading">
          {isEditing ? `Edit ${existingItem?.name || existingItem?.title}` : "Create Infrastructure Component"}
        </h1>
        <p className="admin-subheading">
          {isEditing
            ? `Update specifications, headings, and imagery for /infrastructure/${slug}.`
            : "Add a new campus infrastructure facility with custom dynamic heading, description, banner, and gallery photos."}
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="admin-form-card flex flex-col gap-5 w-full max-w-full">
        {/* 1. Component Name & Slug Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          <div className="admin-input-group">
            <label htmlFor="form-infra-name" className="admin-label">
              Component Name <span className="required">*</span>
            </label>
            <input
              id="form-infra-name"
              type="text"
              className="admin-input"
              placeholder="e.g. Classrooms, Central Library, Machine Room..."
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
            {errors.name && (
              <span className="text-xs text-[var(--admin-danger-text)] mt-1">
                {errors.name}
              </span>
            )}
          </div>

          <div className="admin-input-group">
            <label htmlFor="form-infra-slug" className="admin-label">
              URL Slug <span className="required">*</span>
            </label>
            <div className="flex items-center">
              <span className="h-[38px] px-2.5 text-[13px] font-mono bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] border-r-0 text-[var(--admin-text-subtle)] inline-flex items-center">
                /infrastructure/
              </span>
              <input
                id="form-infra-slug"
                type="text"
                className="admin-input font-mono"
                placeholder="classrooms"
                value={componentSlug}
                onChange={(e) => {
                  setComponentSlug(e.target.value);
                  if (errors.slug) setErrors((prev) => ({ ...prev, slug: "" }));
                }}
                disabled={isEditing}
              />
            </div>
            {errors.slug && (
              <span className="text-xs text-[var(--admin-danger-text)] mt-1">
                {errors.slug}
              </span>
            )}
          </div>
        </div>

        {/* 2. Heading / Title */}
        <div className="admin-input-group">
          <label htmlFor="form-infra-title" className="admin-label">
            Heading / Title <span className="required">*</span>
          </label>
          <input
            id="form-infra-title"
            type="text"
            className="admin-input"
            placeholder="e.g. Smart Classrooms & Lecture Theatres"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: "" }));
            }}
          />
          {errors.title && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.title}
            </span>
          )}
        </div>

        {/* 3. Subheading */}
        <div className="admin-input-group">
          <label htmlFor="form-infra-subtitle" className="admin-label">
            Subheading <span className="required">*</span>
          </label>
          <input
            id="form-infra-subtitle"
            type="text"
            className="admin-input"
            placeholder="e.g. Smart ICT-Enabled Lecture Theatres & Interactive Learning Spaces"
            value={subtitle}
            onChange={(e) => {
              setSubtitle(e.target.value);
              if (errors.subtitle) setErrors((prev) => ({ ...prev, subtitle: "" }));
            }}
          />
          {errors.subtitle && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.subtitle}
            </span>
          )}
        </div>

        {/* 4. Description / Article Body (Rich Text Editor) */}
        <div className="admin-input-group">
          <label htmlFor="form-infra-desc" className="admin-label">
            Description / Article Body <span className="required">*</span>
          </label>
          <SimpleTextEditor
            id="form-infra-desc"
            value={description}
            onChange={(val) => {
              setDescription(val);
              if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
            }}
            placeholder="Enter facility description, capabilities, research focus, student utility, and specifications..."
            minHeight={220}
            error={errors.description}
          />
          {errors.description && (
            <span className="text-xs text-[var(--admin-danger-text)] mt-1">
              {errors.description}
            </span>
          )}
        </div>

        {/* 5. Main Banner Image */}
        <div className="admin-input-group">
          <ImageUploadInput
            id="form-infra-main-image"
            label="Upload Main Banner Image"
            required
            value={imageUrl}
            onChange={(val) => {
              setImageUrl(val);
              if (errors.imageUrl) setErrors((prev) => ({ ...prev, imageUrl: "" }));
            }}
            error={errors.imageUrl}
            helperText="Main showcase hero banner displayed at top of this infrastructure page."
            previewHeight={220}
          />
        </div>

        {/* 6. Niche ke Components / Additional Gallery Images (Max 4 Photos) */}
        <div className="admin-input-group">
          <label className="admin-label flex justify-between items-center">
            <span>Niche ke Component Photos / Gallery Images ({images.length}/4)</span>
            <span className="text-[11px] text-[var(--admin-text-subtle)] font-normal">
              Max 4 photos allowed
            </span>
          </label>
          <p className="text-xs text-[var(--admin-text-subtle)] m-0 mb-2.5">
            Upload or select additional photographs displayed in the 4-column facility gallery grid below the main banner.
          </p>

          {images.length < 4 ? (
            <ImageUploadInput
              id="form-infra-extra-image"
              label="Add Gallery Photo"
              value=""
              onChange={(val) => {
                if (val) handleAddImage(val);
              }}
              helperText={`Select photograph from your device storage (${4 - images.length} remaining).`}
              previewHeight={120}
            />
          ) : (
            <div className="py-2.5 px-3.5 bg-[var(--admin-bg-secondary)] border border-dashed border-[var(--admin-border)] text-xs text-[var(--admin-text-subtle)] rounded">
              Maximum limit reached (4/4 photos). To add a different photo, remove one below.
            </div>
          )}

          {images.length > 0 && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2.5 mt-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-[90px] border border-[var(--admin-border)] bg-slate-100 overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover block"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 bg-red-600/90 text-white border-none w-[22px] h-[22px] cursor-pointer flex items-center justify-center"
                    title="Remove Photo"
                  >
                    <TrashIcon size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Section: Centres of Excellence & Research Hubs (Max 5 Hubs) */}
        <div className="border border-[var(--admin-border)] bg-white p-5 flex flex-col gap-4">
          <div>
            <h3 className="text-[15px] font-bold text-[var(--admin-text)] m-0 mb-1">
              Dynamic Section: Centres of Excellence &amp; Research Hubs
            </h3>
            <p className="text-xs text-[var(--admin-text-subtle)] m-0">
              Heading, subheading, and key points list with photos (maximum 5 hubs). Clicking each key point on the public page switches the large showcase image.
            </p>
          </div>

          {/* Section Heading */}
          <div className="admin-input-group">
            <label htmlFor="form-infra-section-heading" className="admin-label">
              Section Heading
            </label>
            <input
              id="form-infra-section-heading"
              type="text"
              className="admin-input"
              placeholder="e.g. CENTRES OF EXCELLENCE & RESEARCH HUBS"
              value={sectionHeading}
              onChange={(e) => setSectionHeading(e.target.value)}
            />
          </div>

          {/* Section Subheading */}
          <div className="admin-input-group">
            <label htmlFor="form-infra-section-subheading" className="admin-label">
              Section Subheading
            </label>
            <input
              id="form-infra-section-subheading"
              type="text"
              className="admin-input"
              placeholder="e.g. — Shaping learners into achievers through cutting-edge facilities."
              value={sectionSubheading}
              onChange={(e) => setSectionSubheading(e.target.value)}
            />
          </div>

          {/* Key Points & Hub Items */}
          <div className="admin-input-group">
            <div className="flex justify-between items-center mb-1.5">
              <label className="admin-label m-0">
                Key Points &amp; Hub Items ({hubItems.length}/5 configured)
              </label>
              <span className="text-[11px] text-[var(--admin-text-subtle)]">
                Max 5 hubs allowed
              </span>
            </div>

            {hubItems.length === 0 && (
              <div className="py-2.5 px-3.5 bg-[var(--admin-bg-secondary)] border border-dashed border-[var(--admin-border)] text-xs text-[var(--admin-text-subtle)] mb-3">
                No key points added yet. Use the form below to add up to 5 key points with photos.
              </div>
            )}

            {hubItems.length > 0 && (
              <div className="flex flex-col gap-2.5 mb-4">
                {hubItems.map((hub, idx) => (
                  <div
                    key={hub.id || idx}
                    className="flex items-center gap-3 p-2.5 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)]"
                  >
                    {/* Image Thumbnail */}
                    <div className="w-[60px] h-[46px] shrink-0 bg-slate-100 border border-[var(--admin-border)] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hub.image}
                        alt={hub.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title Input */}
                    <div className="flex-1">
                      <input
                        type="text"
                        className="admin-input bg-white"
                        value={hub.title}
                        onChange={(e) => handleUpdateHubItemTitle(idx, e.target.value)}
                        placeholder="Key point / Hub title"
                      />
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => handleRemoveHubItem(idx)}
                      className="bg-transparent border-none cursor-pointer text-[var(--admin-danger-text)] p-1.5"
                      title="Remove Item"
                    >
                      <TrashIcon size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add New Hub Item Card (Only if < 5 items) */}
            {hubItems.length < 5 ? (
              <div className="p-3.5 border border-[var(--admin-border)] bg-[var(--admin-bg-secondary)] flex flex-col gap-3">
                <span className="text-[13px] font-bold text-[var(--admin-text)]">
                  + Add Key Point with Photo ({5 - hubItems.length} remaining)
                </span>

                <div className="admin-input-group m-0">
                  <label className="admin-label text-xs">
                    Key Point Title
                  </label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. Advanced Preclinical Toxicology Centre"
                    value={newHubTitle}
                    onChange={(e) => setNewHubTitle(e.target.value)}
                  />
                </div>

                <div className="admin-input-group m-0">
                  <ImageUploadInput
                    id="form-infra-hub-image"
                    label="Showcase Photo"
                    value={newHubImage}
                    onChange={(val) => setNewHubImage(val)}
                    helperText="Upload or enter image URL for this key point hub."
                    previewHeight={110}
                  />
                </div>

                {hubItemError && (
                  <span className="text-xs text-[var(--admin-danger-text)]">
                    {hubItemError}
                  </span>
                )}

                <div>
                  <button
                    type="button"
                    className="admin-btn admin-btn-secondary inline-flex items-center gap-1.5"
                    onClick={handleAddHubItem}
                  >
                    <PlusIcon size={14} />
                    <span>Add Key Point</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-3 px-4 bg-[var(--admin-bg-secondary)] border border-dashed border-[var(--admin-border)] text-xs text-[var(--admin-text-subtle)] rounded">
                Maximum limit reached (5/5 key points). Remove an item above to add a different one.
              </div>
            )}
          </div>
        </div>

        {/* Fixed Structure Notice (The excellence on campus banner) */}
        <div className="py-3 px-4 bg-[var(--admin-bg-secondary)] border border-[var(--admin-border)] border-l-4 border-l-[var(--admin-primary)] text-xs text-[var(--admin-text-subtle)] leading-normal">
          <strong>Notice:</strong> The bottom campus highlight banner (&ldquo;Excellence in the laboratories and on campus&rdquo;) is fixed and automatically rendered across all infrastructure pages by default.
        </div>

        {/* 8. Status (Always in the last line) */}
        <div className="admin-input-group mb-0">
          <label htmlFor="form-infra-status" className="admin-label">
            Status <span className="required">*</span>
          </label>
          <select
            id="form-infra-status"
            className="admin-select"
            value={isItemActive(status) ? "Active" : "Inactive"}
            onChange={(e) => setStatus(e.target.value as ItemStatus)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Form Actions */}
        <div className="admin-form-actions">
          <Link href={backUrl} className="admin-btn admin-btn-secondary">
            Cancel
          </Link>
          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckIcon size={16} />
            <span>{isEditing ? "Update Component" : "Save Component"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
