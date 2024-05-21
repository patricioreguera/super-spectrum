import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), react()],
  output: "server",
  adapter: vercel()
});

//npx astro add db
//npx astro login
//npx astro link
//npx astro add auth-astro para autorizaciones
//  npm run astro db push --remote  para pushear la db local
// npm install @astrojs/vercel  para instalar vercel
//npm install @astrojs/tailwind tailwindcss taiwind install