import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://miikkamakela.fi",
  redirects: {
    "/ansioluettelo": "/cv"
  }
});
