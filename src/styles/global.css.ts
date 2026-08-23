/* system/src/styles/global.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 *
 * Global reset, typography, fonts and scrollbar styling — ported from the old
 * app's src/css/main.css + fonts.css to vanilla-extract globalStyle calls.
 */

import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

/* ============================================================================
   FONTS — IBM Plex Mono, loaded via the Google Fonts <link> in layout.tsx
   (the terminal/clunky redesign replaced the old self-hosted Comic Code face)
   ============================================================================ */
const mono = "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

/* ============================================================================
   GLOBAL RESET & BASE STYLES
   ============================================================================ */
globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  borderColor: vars.surface,
});

globalStyle("html, body", {
  overflowX: "hidden",
  maxWidth: "100vw",
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  fontFamily: mono,
  background: vars.bg,
  color: vars.text,
  minHeight: "100vh",
  transition: "background-color 0.3s ease, color 0.3s ease",
});

globalStyle(
  "h1, h2, h3, h4, h5, h6, label, input, select, textarea, button",
  {
    fontFamily: mono,
  },
);

/* Anchors inherit their surrounding colour and are not underlined by default.
   Without this, every next/link renders with the user-agent blue/purple
   underline, which wrecks card and nav styling. Content links opt back in
   via their own class. */
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("h1", {
  fontSize: "2.5rem",
  fontWeight: 700
});
globalStyle("h2", {
  fontSize: "2rem",
  fontWeight: 600
});
globalStyle("h3", {
  fontSize: "1.75rem",
  fontWeight: 600
});

globalStyle(
  "button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible",
  {
    outline: `2px solid ${vars.accent}`,
    outlineOffset: "2px",
  },
);

/* Mobile heading sizes */
globalStyle("h1", { "@media": { "screen and (max-width: 640px)": { fontSize: "2rem" } } });
globalStyle("h2", { "@media": { "screen and (max-width: 640px)": { fontSize: "1.75rem" } } });
globalStyle("h3", { "@media": { "screen and (max-width: 640px)": { fontSize: "1.5rem" } } });

/* ============================================================================
   SCROLLBAR STYLING — THEME AWARE
   ============================================================================ */
globalStyle("html ::-webkit-scrollbar", {
  width: "12px",
  height: "12px",
});
globalStyle("html ::-webkit-scrollbar-track", {
  background: vars.bgRaised,
  borderRadius: "6px",
});
globalStyle("html ::-webkit-scrollbar-thumb", {
  background: vars.accent,
  borderRadius: "6px",
  border: `2px solid ${vars.bgRaised}`,
  transition: "background-color 0.2s ease",
});
globalStyle("html ::-webkit-scrollbar-thumb:hover", {
  background: vars.accentAlt,
});
globalStyle("html ::-webkit-scrollbar-thumb:active", {
  background: vars.lavender,
});
globalStyle("html", {
  scrollbarWidth: "thin",
  scrollbarColor: `${vars.accent} ${vars.bgRaised}`,
});
