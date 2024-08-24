import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"

import { readFileSync } from "fs"

const config =
  process.env.NODE_ENV === "development" && process.env.USE_LOCAL_HTTPS
    ? {
        server: {
          https: {
            key: readFileSync(`${process.cwd()}/knitnotebook.com+5-key.pem`),
            cert: readFileSync(`${process.cwd()}/knitnotebook.com+5.pem`),
          },
        },
        plugins: [remix()],
      }
    : { plugins: [remix()] }

export default defineConfig(config)
