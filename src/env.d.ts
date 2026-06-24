/// <reference types="@astrojs/cloudflare" />
/// <reference path="../.astro/types.d.ts" />

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}
