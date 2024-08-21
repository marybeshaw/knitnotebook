import express from "express"

import { createRequestHandler } from "@remix-run/express"
import { createServer } from "https"
import { readFileSync } from "fs"

// read port from ENV file, but default to 3000 if none exists
const port = Number(process.env.PORT || 3000)

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      )

const app = express()
app.use(
  viteDevServer ? viteDevServer.middlewares : express.static("build/client")
)

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("./build/server/index.js")

app.all("*", createRequestHandler({ build }))

if (viteDevServer) {
  // use self-signed certificates when running locally
  const httpsOptions = {
    key: readFileSync(`${process.cwd()}/localhost.key`),
    cert: readFileSync(`${process.cwd()}/localhost.crt`),
  }
  createServer(httpsOptions, app).listen(port, appCallback)
} else {
  app.listen(port, appCallback)
}

function appCallback() {
  console.log(
    `App listening on ${
      viteDevServer ? `https://localhost:${port}` : `port ${port}`
    }`
  )
}
