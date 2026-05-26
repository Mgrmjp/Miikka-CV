import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://miikkamakela.fi",
  devToolbar: {
    enabled: false
  },
  redirects: {
    "/ansioluettelo": "/cv"
  }
});
