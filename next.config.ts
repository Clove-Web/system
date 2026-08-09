/* system/next.config.ts
 * Copyright (c) 2026 Clove Nytrix Doughmination Twilight
 * Licensed under the DASL-1.0 Licence.
 * See LICENCE.md in the project root for full licence information.
 */

import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

/* Compiles .css.ts files to static CSS at build time — zero runtime. The plugin
 * only wires up Turbopack when explicitly opted in; `mode: "auto"` enables it on
 * Next >= 16 and falls back to webpack below that. */
const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: "auto",
  },
});

const nextConfig: NextConfig = {
  /* Deployed to Cloudflare Workers via @opennextjs/cloudflare, which bundles a
   * standard `next build` (default output) into a Worker — so no `output:
   * "standalone"`. Server components keep running on the Node.js runtime, so
   * per-request member metadata and `revalidate` still work. */

  // Allows overriding the build output dir (e.g. in sandboxed CI environments)
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default withVanillaExtract(nextConfig);

// Lets `next dev` talk to local Cloudflare bindings during development. No-op
// in production. Must be called at the bottom of this config.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
