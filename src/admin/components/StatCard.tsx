import React from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  description?: string;
  icon?: React.ReactNode;
  accent?: "red" | "dark" | "subtle" | "amber" | "blue";
  onClick?: () => void;
}

export function StatCard({
  label,
  value,
  description,
  icon,
  accent = "subtle",
  onClick
}: StatCardProps) {
  const accentClass =
    accent === "red"
      ? "accent-red"
      : accent === "dark"
      ? "accent-dark"
      : accent === "amber"
      ? "accent-amber"
      : accent === "blue"
      ? "accent-blue"
      : "accent-subtle";

  const iconColorClass =
    accent === "red"
      ? "text-[var(--admin-primary)]"
      : accent === "amber"
      ? "text-[#D97706]"
      : accent === "blue"
      ? "text-[#2563EB]"
      : accent === "dark"
      ? "text-[var(--admin-text)]"
      : "text-[var(--admin-text-subtle)]";

  return (
    <div
      className={`admin-stat-card ${accentClass} ${onClick ? "cursor-pointer" : "cursor-default"}`}
      onClick={onClick}
    >
      <div className="admin-stat-header">
        <span className="admin-stat-label">{label}</span>
        {icon && (
          <div className={`${iconColorClass} flex items-center`}>
            {icon}
          </div>
        )}
      </div>

      <div className="admin-stat-value">{value}</div>

      {description && <div className="admin-stat-desc">{description}</div>}
    </div>
  );
}
