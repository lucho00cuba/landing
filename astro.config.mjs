// @ts-check
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://justme.ovh",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [sitemap()],
});
