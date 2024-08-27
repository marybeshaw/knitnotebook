import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"

import { readFileSync } from "fs"

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === "serve" && process.env) {
    return {
      server: {
        https: {
          key: readFileSync(`${process.cwd()}/knitnotebook.com+5-key.pem`),
          cert: readFileSync(`${process.cwd()}/knitnotebook.com+5.pem`),
        },
      },
      hmr: {
        protocol: "wws",
        host: "localhost",
      },
      plugins: [remix()],
    }
  }
  return { plugins: [remix()] }
})
