/* system/src/components/components.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 *
 * Styles for app-level components (MemberStatus, ThemeToggle, ProtectedRoute).
 */

import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

/* MemberStatus */
export const statusCompact = style({
  marginTop: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
});

export const statusCompactEmoji = style({
  fontSize: "0.875rem",
});

export const statusCompactText = style({
  fontSize: "0.75rem",
  color: vars.textMuted,
  fontFamily: vars.fontComic,
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100px",
});

export const statusFull = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "0.5rem",
  padding: "0.75rem",
  borderRadius: 0,
  backgroundColor: vars.surface,
  border: `1px solid ${vars.surfaceHigher}`,
});

export const statusFullEmoji = style({
  fontSize: "1.5rem",
  flexShrink: 0,
});

export const statusFullBody = style({
  flex: 1,
  minWidth: 0,
});

export const statusFullText = style({
  fontFamily: vars.fontComic,
  fontWeight: 600,
  fontSize: "0.875rem",
  wordBreak: "break-word",
});

export const statusFullUpdated = style({
  fontSize: "0.75rem",
  color: vars.textMuted,
  fontFamily: vars.fontComic,
  fontWeight: 600,
  marginTop: "0.25rem",
});

/* ThemeToggle */
export const themeToggleButton = style({
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const themeToggleInner = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const themeToggleIcon = style({ fontSize: "0.875rem" });
export const themeToggleLabel = style({
  fontSize: "0.75rem",
  fontWeight: 500
});

/* ProtectedRoute */
export const guardLoading = style({
  textAlign: "center",
  padding: "2rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

export const guardPage = style({
  width: "100%",
  margin: "0 auto",
  padding: "1.5rem",
  paddingTop: "5rem",
});

export const guardCard = style({
  maxWidth: "28rem",
  margin: "0 auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const guardIconBlock = style({
  width: "4rem",
  height: "4rem",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `2px solid ${vars.danger}`,
});

export const guardIcon = style({
  width: "1.75rem",
  height: "1.75rem",
  color: vars.danger,
});

export const guardTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  fontFamily: vars.fontComic,
});

export const guardText = style({
  color: vars.textMuted,
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

export const guardBack = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  color: vars.accent,
  fontFamily: vars.fontComic,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  fontSize: "0.8125rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  margin: "0 auto",
  ":hover": { color: vars.accentAlt },
});

export const guardBackIcon = style({
  width: "0.75rem",
  height: "0.75rem",
});
