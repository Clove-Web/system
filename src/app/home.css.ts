/* system/src/app/home.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 *
 * Styles for the home / fronting page (formerly Tailwind utility classes on
 * pages/Index.tsx).
 */

import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

const mix = (color: string, pct: number) =>
  `color-mix(in srgb, ${color} ${pct}%, transparent)`;

/** Trans-flag stripe, reused as a thin accent rule under the header and above
 *  the footer instead of the old animated gradient page title. */
export const flagStripe = style({
  height: "3px",
  width: "100%",
  flexShrink: 0,
  background:
    "repeating-linear-gradient(90deg, #5BCEFA 0 20%, #F5A9B8 20% 40%, #ffffff 40% 60%, #F5A9B8 60% 80%, #5BCEFA 80% 100%)",
});

export const loadingWrap = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

export const loadingText = style({
  fontSize: "1.5rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  color: vars.text,
});

export const page = style({
  position: "relative",
  isolation: "isolate",
  minHeight: "100vh",
  backgroundColor: vars.bg,
  color: vars.text,
});

/** Full-bleed background image behind everything else on the page — blurred
 *  and darkened so panel text stays legible over it. Swap the URL for a
 *  different asset here if the source image ever moves. */
export const bgImageLayer = style({
  position: "fixed",
  inset: "-40px",
  zIndex: -1,
  backgroundImage: "url('https://m.doughmination.gay/img/bg/main.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(16px) brightness(0.55) saturate(0.9)",
  transform: "scale(1.08)",
});

export const bgScrim = style({
  position: "fixed",
  inset: 0,
  zIndex: -1,
  backgroundColor: "rgba(5, 6, 10, 0.45)",
});

export const wsBanner = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: vars.accentAlt,
  color: vars.bgDeep,
  textAlign: "center",
  padding: "0.5rem 0",
  fontSize: "0.75rem",
  fontFamily: vars.fontComic,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
});

/* Header */
export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 40,
  backgroundColor: mix(vars.bgDeep, 82),
  borderBottom: `2px solid ${vars.surfaceHigher}`,
});

export const headerInner = style({
  width: "100%",
  margin: "0 auto",
  padding: "0.75rem 1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const logoLink = style({
  fontSize: "1.0625rem",
  fontWeight: 700,
  fontFamily: vars.fontComic,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  color: vars.text,
  textDecoration: "none",
  transition: "color 0.15s ease",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.625rem",
  ":hover": { color: mix(vars.text, 80) },
  "::before": {
    content: "''",
    display: "inline-block",
    width: "8px",
    height: "8px",
    backgroundColor: vars.accent,
    flexShrink: 0,
  },
});

export const navUser = style({
  fontSize: "0.875rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  color: vars.textMuted,
  marginRight: "0.5rem",
});

export const navUserName = style({
  color: vars.text,
  fontWeight: 600,
});

export const mobileMenuBtn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  borderRadius: 0,
  backgroundColor: vars.surface,
  color: vars.text,
  border: `1px solid ${vars.surfaceHigher}`,
  cursor: "pointer",
  transition: "color 0.15s ease, background-color 0.15s ease",
  ":hover": {
    backgroundColor: vars.accent,
    color: vars.bg,
  },
  "@media": {
    "screen and (min-width: 768px)": { display: "none" },
  },
});

export const icon24 = style({
  width: "1.5rem",
  height: "1.5rem"
});
export const icon20 = style({
  width: "1.25rem",
  height: "1.25rem"
});

/* Mobile menu */
export const mobileOverlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 30,
  backgroundColor: "rgb(0 0 0 / 0.5)",
  "@media": {
    "screen and (min-width: 768px)": { display: "none" },
  },
});

export const mobilePanel = style({
  position: "absolute",
  right: 0,
  top: "61px",
  width: "16rem",
  maxWidth: "80vw",
  height: "100vh",
  backgroundColor: vars.bgDeep,
  borderLeft: `2px solid ${vars.surfaceHigher}`,
});

export const mobileList = style({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "0.75rem",
  listStyle: "none",
});

export const mobileUser = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  color: vars.textMuted,
  borderBottom: `1px solid ${vars.surface}`,
});

export const mobileUserName = style({
  color: vars.text,
  fontWeight: 600,
  display: "block",
  marginTop: "0.25rem",
});

export const mobileLink = style({
  display: "block",
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: 0,
  fontSize: "0.8125rem",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  transition: "background-color 0.15s ease, color 0.15s ease",
  fontFamily: vars.fontComic,
  fontWeight: 700,
  backgroundColor: vars.surface,
  color: vars.textSoft,
  textDecoration: "none",
  border: `1px solid ${vars.surfaceHigher}`,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.accent,
    color: vars.bgDeep,
  },
});

export const mobileLogout = style([mobileLink, {
  backgroundColor: "transparent",
  color: vars.danger,
  border: `1px solid ${vars.danger}`,
  ":hover": { backgroundColor: vars.danger, color: vars.bgDeep },
}]);

export const headerSpacer = style({ height: "5rem" });

/* Main content */
export const main = style({
  width: "100%",
  margin: "0 auto",
  padding: "1rem 0.5rem 0",
  flexGrow: 1,
  "@media": {
    "screen and (min-width: 640px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem"
    },
  },
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  "@media": {
    "screen and (min-width: 640px)": { gap: "1rem" },
  },
});

export const pageOverline = style({
  fontSize: "0.75rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  color: vars.textDim,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: "0.375rem",
});

export const pageTitle = style({
  fontSize: "1.75rem",
  fontWeight: 700,
  marginBottom: "2rem",
  textAlign: "center",
  fontFamily: vars.fontComic,
  letterSpacing: "-0.01em",
  textTransform: "uppercase",
  color: vars.text,
});

/* Mental state banner extras */
export const bannerRow = style({
  display: "flex",
  alignItems: "stretch",
  gap: 0,
});

export const bannerIconBlock = style({
  width: "3.25rem",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "currentColor",
});

export const bannerIcon = style({
  width: "1.25rem",
  height: "1.25rem",
  color: vars.bgDeep,
});

export const bannerBody = style({
  padding: "0.875rem 1.125rem",
  flex: 1,
  textAlign: "left",
});

export const bannerLabelRow = style({
  display: "flex",
  alignItems: "baseline",
  gap: "0.625rem",
});

export const bannerLabelKey = style({
  fontSize: "0.6875rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: vars.textDim,
  fontFamily: vars.fontComic,
});

export const bannerLabelValue = style({
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: "0.03em",
  textTransform: "uppercase",
  fontFamily: vars.fontComic,
});

export const bannerNotes = style({
  marginTop: "0.375rem",
  fontFamily: vars.fontComic,
  fontSize: "0.8125rem",
  color: vars.textSoft,
});

export const bannerUpdated = style({
  display: "block",
  marginTop: "0.5rem",
  fontSize: "0.6875rem",
  color: vars.textFaint,
  fontFamily: vars.fontComic,
});

/* Currently fronting */
export const frontingSection = style({
  marginBottom: "1.5rem",
  padding: "1rem",
  border: `1px solid ${vars.surfaceHigher}`,
});

export const frontingTitle = style({
  fontSize: "0.6875rem",
  fontFamily: vars.fontComic,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: vars.textDim,
  marginBottom: "0.875rem",
  textAlign: "center",
});

export const frontingRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",
});

export const frontingItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

/* Status tag — a plain bordered box in normal flow, replacing the old
   floating thought-bubble-with-dots treatment. */
export const statusTagWrap = style({
  marginTop: "0.5rem",
  textAlign: "center",
});

export const statusTag = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.3rem",
  justifyContent: "center",
  backgroundColor: vars.bgDeep,
  border: `1px solid ${vars.surfaceHigher}`,
  padding: "0.3rem 0.6rem",
  maxWidth: "140px",
});

export const statusTagEmoji = style({ fontSize: "0.8125rem" });

export const statusTagText = style({
  fontSize: "0.6875rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  color: vars.textSoft,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

/* Avatars & member cards */
export const avatarImg = style({
  width: "4rem",
  height: "4rem",
  borderRadius: 0,
  objectFit: "cover",
  borderWidth: "2px",
  borderStyle: "solid",
  transition: "filter 0.15s ease",
  cursor: "pointer",
  ":hover": { filter: "brightness(1.15)" },
});

export const avatarImgGrid = style([
  avatarImg,
  {
    margin: "0 auto 0.5rem",
    display: "block",
  },
]);

export const frontingNameWrap = style({
  marginTop: "0.5rem",
  textAlign: "center",
  maxWidth: "120px",
});

export const memberLink = style({
  fontFamily: vars.fontComic,
  fontWeight: 600,
  fontSize: "0.875rem",
  transition: "color 0.15s ease",
  display: "block",
  textDecoration: "none",
});

export const memberCardName = style({
  fontFamily: vars.fontComic,
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: 1.25,
  margin: 0,
  transition: "color 0.15s ease",
  /* Names wrap to at most two lines; the reserved height keeps every card in
     a row the same height whether or not the name wraps. */
  minHeight: "2.5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const memberPronouns = style({
  fontSize: "0.75rem",
  color: vars.textMuted,
  marginTop: "0.25rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

export const tagRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.25rem",
  marginTop: "0.25rem",
  justifyContent: "center",
});

export const tagRowSpaced = style([tagRow, { marginTop: "0.5rem" }]);

export const tagChip = style({
  fontSize: "0.6875rem",
  padding: "0.125rem 0.5rem",
  borderRadius: 0,
  border: `1px solid ${vars.surfaceHigher}`,
  backgroundColor: "transparent",
  color: vars.textSoft,
  fontFamily: vars.fontComic,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.03em",
});

export const tagMore = style({
  fontSize: "0.6875rem",
  color: vars.textDim,
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

/* Search & filters */
export const filtersBlock = style({
  marginBottom: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const filterRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  justifyContent: "center",
  alignItems: "center",
});

/* Clickable tag chips — same look as tagChip, but interactive. Used both on
   member cards (click to filter by that tag) and inside the filters panel. */
export const tagChipButton = style([
  tagChip,
  {
    cursor: "pointer",
    transition: "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
    ":hover": {
      backgroundColor: vars.accent,
      color: vars.bg,
      borderColor: vars.accent,
    },
    ":focus-visible": {
      outline: `2px solid ${vars.accent}`,
      outlineOffset: "2px",
    },
  },
]);

export const tagChipButtonActive = style({
  backgroundColor: `${vars.accent} !important` as unknown as string,
  color: `${vars.bg} !important` as unknown as string,
  borderColor: vars.accent,
});

/* Filters popover — single "Filters" trigger grouping the tag + identity
   pickers, replacing the old flat button row. */
export const filtersWrap = style({
  position: "relative",
  display: "inline-block",
});

export const filtersButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.55rem",
  fontFamily: vars.fontComic,
  fontWeight: 700,
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  cursor: "pointer",
  border: `1px solid ${vars.surfaceHigher}`,
  backgroundColor: vars.surface,
  color: vars.textSoft,
  padding: "0.625rem 1.05rem",
  borderRadius: 0,
  transition: "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
  ":hover": {
    backgroundColor: vars.surfaceHi,
    color: vars.text,
    borderColor: vars.accent,
  },
});

export const filtersButtonActive = style({
  backgroundColor: vars.accent,
  color: vars.bg,
  borderColor: vars.accent,
  ":hover": {
    backgroundColor: vars.accentAlt,
    color: vars.bg,
    borderColor: vars.accentAlt,
  },
});

export const filtersCount = style({
  fontSize: "0.6875rem",
  fontWeight: 700,
  padding: "0.05rem 0.4rem",
  backgroundColor: vars.bg,
  color: vars.accent,
});

export const filtersPanel = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  width: "21rem",
  maxWidth: "calc(100vw - 2rem)",
  backgroundColor: vars.bgRaised,
  border: `1px solid ${vars.accent}`,
  boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.4)",
  padding: "1.1rem",
  zIndex: 30,
  "@media": {
    "screen and (max-width: 640px)": {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
});

export const filterGroupLabel = style({
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: vars.textDim,
  margin: "0 0 0.55rem",
  fontFamily: vars.fontComic,
});

export const filterGroup = style({
  selectors: {
    "& + &": {
      marginTop: "1.1rem",
    },
  },
});

export const filterPillRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.4rem",
});

export const activeFiltersRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

export const activeChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  fontFamily: vars.fontComic,
  fontSize: "0.6875rem",
  fontWeight: 600,
  backgroundColor: vars.surface,
  border: `1px solid ${vars.surfaceHigher}`,
  color: vars.textSoft,
  padding: "0.3rem 0.35rem 0.3rem 0.6rem",
  borderRadius: 0,
});

export const activeChipKey = style({
  color: vars.accent,
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "0.625rem",
  letterSpacing: "0.03em",
});

export const activeChipRemove = style({
  all: "unset",
  cursor: "pointer",
  color: vars.textDim,
  padding: "0 0.2rem",
  lineHeight: 1,
  ":hover": { color: vars.text },
});

export const flagSwatch = style({
  display: "inline-block",
  width: "0.75rem",
  height: "0.75rem",
  border: "1px solid rgba(0, 0, 0, 0.4)",
  marginRight: "0.4rem",
  verticalAlign: "-1px",
  flexShrink: 0,
});

export const searchRelative = style({ position: "relative" });

/* Grid extras */
export const gridItemRelative = style({ position: "relative" });

export const cardCenter = style({
  textAlign: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.125rem",
});

export const relativeInline = style({
  position: "relative",
  display: "inline-block"
});

/* Empty state */
export const emptyState = style({
  textAlign: "center",
  padding: "2rem 0",
});

export const emptyText = style({
  fontFamily: vars.fontComic,
  fontWeight: 600,
  fontSize: "1.125rem",
  color: vars.textMuted,
});

export const emptyActions = style({
  marginTop: "1rem",
  display: "flex",
  gap: "0.5rem",
  justifyContent: "center",
});

/* Footer extras */
export const footerNote = style({
  marginTop: "1rem",
  fontSize: "0.875rem",
  color: vars.textMuted,
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

export const footerNoteLink = style({
  textDecoration: "underline",
  color: "inherit",
  transition: "color 0.15s ease",
  ":hover": { color: vars.text },
});

/* Screen-reader-only SEO block */
export const srOnly = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});

globalStyle(`${srOnly} *`, {
  position: "static",
});

/* Desktop nav (plain flex version used on the home header) */
export const desktopNavRow = style({
  display: "none",
  alignItems: "center",
  gap: "0.75rem",
  "@media": {
    "screen and (min-width: 768px)": { display: "flex" },
  },
});
