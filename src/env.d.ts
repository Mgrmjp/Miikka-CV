/// <reference path="../.astro/types.d.ts" />

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface CloudflareEnv {
  DB: D1Database;
  TURNSTILE_SECRET_KEY: string;
}

declare namespace App {
  interface Locals {
    runtime: {
      env: CloudflareEnv;
    };
  }
}
