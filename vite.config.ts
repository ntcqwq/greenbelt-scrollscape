import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Set this env var in your GitHub Actions (or edit the fallback):
//   GH_PAGES_REPO=REPO_NAME
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const repo =
    process.env.GH_PAGES_REPO /* e.g. "greenbelt-guardians" */ || "greenbelt-scrollscape";

  return {
    // For GitHub Pages project sites, the site lives at /REPO_NAME/
    base: isProd ? "/greenbelt-scrollscape/" : "/",

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      !isProd && componentTagger(), // dev-only
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    // Optional but handy for debugging production issues
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
