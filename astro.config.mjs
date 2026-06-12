import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://miikkamakela.fi",

  devToolbar: {
    enabled: false
  },

  redirects: {
    "/ansioluettelo": "/cv"
  },

  adapter: cloudflare()
});