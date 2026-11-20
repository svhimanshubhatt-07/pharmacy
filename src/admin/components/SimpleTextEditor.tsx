"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface SimpleTextEditorProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number | string;
  error?: string;
}

export function SimpleTextEditor({
  id = "simple-text-editor",
  value,
  onChange,
  placeholder = "Write blog content, findings, methodology, and key takeaways...",
  minHeight = 220,
  error
}: SimpleTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isCodeView, setIsCodeView] = useState(false);
  const [codeValue, setCodeValue] = useState(value || "");
  const [isFocused, setIsFocused] = useState(false);
  const [blockFormat, setBlockFormat] = useState("p");

  // Track active command states
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    unorderedList: false,
    orderedList: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false
  });

  // Keep editor content synchronized with prop only when not typing internally
  const lastHtmlRef = useRef(value || "");

  useEffect(() => {
    if (editorRef.current && value !== lastHtmlRef.current) {
      lastHtmlRef.current = value || "";
      editorRef.current.innerHTML = value || "";
    }
    setCodeValue(value || "");
  }, [value]);

  // Initial populate on mount
  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML && value) {
      editorRef.current.innerHTML = value;
      lastHtmlRef.current = value;
    }
  }, []);

  const updateActiveStates = useCallback(() => {
    if (typeof document === "undefined" || !document.queryCommandState) return;
    try {
      setActiveFormats({
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikeThrough: document.queryCommandState("strikeThrough"),
        unorderedList: document.queryCommandState("insertUnorderedList"),
        orderedList: document.queryCommandState("insertOrderedList"),
        justifyLeft: document.queryCommandState("justifyLeft"),
        justifyCenter: document.queryCommandState("justifyCenter"),
        justifyRight: document.queryCommandState("justifyRight")
      });

      // Detect current block format
      const block = document.queryCommandValue("formatBlock");
      if (block) {
        const lower = block.toLowerCase().replace(/[<>]/g, "");
        if (["h2", "h3", "blockquote", "p"].includes(lower)) {
          setBlockFormat(lower);
        } else {
          setBlockFormat("p");
        }
      }
    } catch {
      // Ignore security/query errors in sandboxed contexts
    }
  }, []);

  const handleInput = useCallback(() => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    lastHtmlRef.current = html;
    setCodeValue(html);
    onChange(html);
    updateActiveStates();
  }, [onChange, updateActiveStates]);

  const exec = (command: string, value: string | undefined = undefined) => {
    if (isCodeView) return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, value);
    handleInput();
  };

  const handleBlockFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const format = e.target.value;
    setBlockFormat(format);
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand("formatBlock", false, format === "p" ? "<p>" : `<${format}>`);
    handleInput();
  };

  const handleInsertLink = () => {
    if (isCodeView) return;
    const url = window.prompt("Enter link URL (e.g. https://example.com):", "https://");
    if (url && url.trim() && url !== "https://") {
      exec("createLink", url.trim());
    }
  };

  const toggleCodeView = () => {
    if (isCodeView) {
      // Switch back from Code to Visual
      if (editorRef.current) {
        editorRef.current.innerHTML = codeValue;
        lastHtmlRef.current = codeValue;
      }
      onChange(codeValue);
      setIsCodeView(false);
    } else {
      // Switch from Visual to Code
      if (editorRef.current) {
        const html = editorRef.current.innerHTML;
        setCodeValue(html);
        lastHtmlRef.current = html;
      }
      setIsCodeView(true);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCodeValue(newCode);
    lastHtmlRef.current = newCode;
    onChange(newCode);
  };

  // Word and character count stats
  const cleanText = (codeValue || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = cleanText ? cleanText.split(/\s+/).length : 0;
  const charCount = cleanText.length;
  const isContentEmpty = !cleanText;

  return (
    <div
      className={`flex flex-col w-full bg-white transition-colors font-inherit ${
        error
          ? "border border-[var(--admin-danger-text)]"
          : isFocused
          ? "border border-[var(--admin-primary)]"
          : "border border-[var(--admin-border)]"
      }`}
    >
      {/* Top Toolbar */}
      <div className="flex items-center flex-wrap gap-0.5 py-1.5 px-2 border-b border-[var(--admin-border)] bg-[var(--admin-bg-secondary)] select-none">
        {/* Block Formatter Dropdown */}
        <select
          value={blockFormat}
          onChange={handleBlockFormatChange}
          disabled={isCodeView}
          className={`h-7 text-xs font-semibold px-1.5 border border-[var(--admin-border)] bg-white text-[var(--admin-text)] mr-1 ${
            isCodeView ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          title="Text Style"
        >
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2 (H2)</option>
          <option value="h3">Heading 3 (H3)</option>
          <option value="blockquote">Quote Block</option>
        </select>

        <ToolbarDivider />

        {/* Basic Inlines */}
        <ToolbarButton
          label="Bold"
          shortcut="Ctrl+B"
          active={activeFormats.bold}
          disabled={isCodeView}
          onClick={() => exec("bold")}
        >
          <strong>B</strong>
        </ToolbarButton>

        <ToolbarButton
          label="Italic"
          shortcut="Ctrl+I"
          active={activeFormats.italic}
          disabled={isCodeView}
          onClick={() => exec("italic")}
        >
          <em>I</em>
        </ToolbarButton>

        <ToolbarButton
          label="Underline"
          shortcut="Ctrl+U"
          active={activeFormats.underline}
          disabled={isCodeView}
          onClick={() => exec("underline")}
        >
          <span className="underline">U</span>
        </ToolbarButton>

        <ToolbarButton
          label="Strikethrough"
          active={activeFormats.strikeThrough}
          disabled={isCodeView}
          onClick={() => exec("strikeThrough")}
        >
          <span className="line-through">S</span>
        </ToolbarButton>

        <ToolbarDivider />

        {/* Lists */}
        <ToolbarButton
          label="Bullet List"
          active={activeFormats.unorderedList}
          disabled={isCodeView}
          onClick={() => exec("insertUnorderedList")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="4" />
            <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="4" />
            <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="4" />
          </svg>
        </ToolbarButton>

        <ToolbarButton
          label="Numbered List"
          active={activeFormats.orderedList}
          disabled={isCodeView}
          onClick={() => exec("insertOrderedList")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="6" x2="21" y2="6" />
            <line x1="10" y1="12" x2="21" y2="12" />
            <line x1="10" y1="18" x2="21" y2="18" />
            <path d="M4 6h1v4" strokeWidth="1.5" />
            <path d="M4 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4h3" strokeWidth="1.5" />
          </svg>
        </ToolbarButton>

        <ToolbarDivider />

        {/* Alignment */}
        <ToolbarButton
          label="Align Left"
          active={activeFormats.justifyLeft}
          disabled={isCodeView}
          onClick={() => exec("justifyLeft")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="17" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="17" y1="18" x2="3" y2="18" />
          </svg>
        </ToolbarButton>

        <ToolbarButton
          label="Align Center"
          active={activeFormats.justifyCenter}
          disabled={isCodeView}
          onClick={() => exec("justifyCenter")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="10" x2="6" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="18" y1="18" x2="6" y2="18" />
          </svg>
        </ToolbarButton>

        <ToolbarButton
          label="Align Right"
          active={activeFormats.justifyRight}
          disabled={isCodeView}
          onClick={() => exec("justifyRight")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="10" x2="7" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="7" y2="18" />
          </svg>
        </ToolbarButton>

        <ToolbarDivider />

        {/* Links & Cleanup */}
        <ToolbarButton
          label="Insert Link"
          disabled={isCodeView}
          onClick={handleInsertLink}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </ToolbarButton>

        <ToolbarButton
          label="Remove Link"
          disabled={isCodeView}
          onClick={() => exec("unlink")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m18.84 12.25 1.72-1.71a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="m5.16 11.75-1.72 1.71a5 5 0 0 0 7.07 7.07l1.72-1.71" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </ToolbarButton>

        <ToolbarButton
          label="Clear Formatting"
          disabled={isCodeView}
          onClick={() => exec("removeFormat")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7V4h16v3" />
            <path d="M9 20h6" />
            <path d="M12 4v16" />
            <line x1="2" y1="2" x2="22" y2="22" stroke="var(--admin-danger-text, #dc2626)" />
          </svg>
        </ToolbarButton>

        <ToolbarDivider />

        {/* Undo / Redo */}
        <ToolbarButton
          label="Undo"
          shortcut="Ctrl+Z"
          disabled={isCodeView}
          onClick={() => exec("undo")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7v6h6" />
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
          </svg>
        </ToolbarButton>

        <ToolbarButton
          label="Redo"
          shortcut="Ctrl+Y"
          disabled={isCodeView}
          onClick={() => exec("redo")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
          </svg>
        </ToolbarButton>

        <ToolbarDivider />

        {/* HTML / Code View Toggle */}
        <ToolbarButton
          label={isCodeView ? "Switch to Visual Editor" : "Switch to HTML Code View"}
          active={isCodeView}
          onClick={toggleCodeView}
        >
          <span className="font-mono text-[11px] font-bold">&lt;/&gt;</span>
        </ToolbarButton>
      </div>

      {/* Editor Content Area */}
      <div className="relative w-full bg-white">
        {isCodeView ? (
          <textarea
            value={codeValue}
            onChange={handleCodeChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Edit raw HTML..."
            className="w-full p-3 font-mono text-[13px] leading-[1.6] text-slate-800 bg-slate-50 border-none outline-none resize-y block"
            style={{ minHeight }}
          />
        ) : (
          <>
            {/* Empty Placeholder overlay */}
            {isContentEmpty && !isFocused && (
              <div className="absolute top-3 left-3.5 text-[var(--admin-text-subtle)] pointer-events-none text-sm select-none">
                {placeholder}
              </div>
            )}

            <div
              id={id}
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              onInput={handleInput}
              onFocus={() => {
                setIsFocused(true);
                updateActiveStates();
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              onKeyUp={updateActiveStates}
              onMouseUp={updateActiveStates}
              className="admin-simple-editor-body w-full p-3 text-sm leading-[1.6] text-[var(--admin-text)] outline-none overflow-y-auto break-words"
              style={{ minHeight }}
            />
          </>
        )}
      </div>

      {/* Bottom Status & Counter Bar */}
      <div className="flex items-center justify-between py-1 px-2.5 border-t border-[var(--admin-border)] bg-[var(--admin-bg-secondary)] text-[11px] text-[var(--admin-text-subtle)] select-none">
        <div className="flex items-center gap-2">
          <span className="font-semibold">
            {isCodeView ? "HTML Source View" : "Visual Text Editor"}
          </span>
          <span>•</span>
          <span>Rich Text formatting enabled</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span>
            Words: <strong>{wordCount}</strong>
          </span>
          <span>
            Characters: <strong>{charCount}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

function ToolbarButton({
  children,
  onClick,
  active = false,
  disabled = false,
  label,
  shortcut
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  label: string;
  shortcut?: string;
}) {
  return (
    <button
      type="button"
      tabIndex={-1}
      // CRITICAL: onMouseDown preventDefault keeps contentEditable selection active!
      onMouseDown={(e) => {
        e.preventDefault();
        if (!disabled) onClick();
      }}
      disabled={disabled}
      title={shortcut ? `${label} (${shortcut})` : label}
      className={`inline-flex items-center justify-center w-7 h-7 p-0 transition-all outline-none ${
        active
          ? "border border-[var(--admin-primary)] bg-[var(--admin-primary-light,#fef2f2)] text-[var(--admin-primary)]"
          : "border border-transparent bg-transparent"
      } ${
        disabled
          ? "text-slate-300 cursor-not-allowed"
          : active
          ? ""
          : "text-[var(--admin-text)] cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return (
    <span className="inline-block w-px h-[18px] bg-[var(--admin-border)] my-0 mx-[3px]" />
  );
}
