/* system/src/app/[member_id]/member.css.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const page = style({
  width: "100%",
  margin: "0 auto",
  padding: "1.5rem",
  paddingTop: "5rem",
});

export const loadingText = style({
  textAlign: "center",
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

export const errorWrap = style({
  maxWidth: "28rem",
  margin: "0 auto",
});

export const errorActions = style({
  marginTop: "1rem",
  textAlign: "center",
});

export const cardWrap = style({
  maxWidth: "42rem",
  margin: "0 auto",
});

export const headerCenter = style({
  textAlign: "center",
});

export const avatarBlock = style({
  marginBottom: "1rem",
  position: "relative",
  display: "inline-block",
});

/* Status tag — plain bordered box below the avatar, not a floating bubble */
export const bubbleWrap = style({
  marginTop: "0.75rem",
  display: "flex",
  justifyContent: "center",
});

export const bubble = style({
  position: "relative",
  backgroundColor: vars.bgDeep,
  border: `1px solid ${vars.surfaceHigher}`,
  borderRadius: 0,
  padding: "0.5rem 1rem",
  maxWidth: "200px",
});

export const bubbleRow = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const bubbleEmoji = style({ fontSize: "1.125rem" });

export const bubbleText = style({
  fontSize: "0.875rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  color: vars.text,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const avatar = style({
  width: "8rem",
  height: "8rem",
  borderRadius: 0,
  margin: "0 auto",
  objectFit: "cover",
  borderWidth: "2px",
  borderStyle: "solid",
  transition: "filter 0.15s ease",
  display: "block",
});

export const title = style({
  fontSize: "1.875rem",
  fontFamily: vars.fontComic,
  fontWeight: 600,
  transition: "color 0.15s ease",
});

export const pronouns = style({
  fontFamily: vars.fontComic,
  fontWeight: 600,
  marginTop: "0.25rem",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const sectionTitle = style({
  fontSize: "0.75rem",
  fontFamily: vars.fontComic,
  marginBottom: "0.625rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: vars.textDim,
});

export const description = style({
  color: vars.textMuted,
  fontFamily: vars.fontComic,
  fontWeight: 600,
});

export const tagRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

export const backWrap = style({
  textAlign: "center",
  paddingTop: "1rem",
});
