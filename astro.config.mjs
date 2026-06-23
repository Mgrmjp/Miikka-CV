import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://miikkamakela.fi",
  adapter: cloudflare(),
  devToolbar: {
    enabled: false
  },
  redirects: {
    "/ansioluettelo": "/cv"
  }
});
