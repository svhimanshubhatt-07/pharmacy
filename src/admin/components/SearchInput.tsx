"use client";

import React from "react";
import { SearchIcon, CloseIcon } from "./Icons";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  ariaLabel = "Search input"
}: SearchInputProps) {
  return (
    <div className="admin-search-wrapper">
      <div className="admin-search-icon">
        <SearchIcon size={16} />
      </div>
      <input
        type="text"
        className="admin-input admin-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={ariaLabel}
      />
      {value && (
        <button
          type="button"
          className="admin-search-clear"
          onClick={() => onChange("")}
          title="Clear search"
          aria-label="Clear search"
        >
          <CloseIcon size={14} />
        </button>
      )}
    </div>
  );
}
