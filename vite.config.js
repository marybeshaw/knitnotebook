import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"

import { readFileSync } from "fs"

export default defineConfig({
  server: {
    https: {
      key: readFileSync(`${process.cwd()}/knitnotebook.com+5-key.pem`),
      cert: readFileSync(`${process.cwd()}/knitnotebook.com+5.pem`),
    },
  },
  plugins: [remix()],
})
