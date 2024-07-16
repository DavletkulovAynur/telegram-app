import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import { vitePwaConfig } from "./vite.pwa.config";
import { IViteConfigParams } from "./vite.config.types";
import path from "path";

export default ({ mode }) => {
  const params: IViteConfigParams = {
    isDev: mode === "development",
    outDir: "build",
    port: 3000,
  };

  return defineConfig({
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
      }),
      vitePwaConfig(params),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: params.outDir,
      emptyOutDir: true,
    },
    server: {
      port: params.port,
      open: "http://localhost:" + params.port,
    },
    preview: {
      open: true,
    },
  });
};
