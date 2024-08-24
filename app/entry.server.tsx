import * as React from "react"
import * as ReactDOMServer from "react-dom/server"
import { RemixServer } from "@remix-run/react"
import type { EntryContext } from "@remix-run/node"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { CacheProvider } from "@emotion/react"
import createEmotionServer from "@emotion/server/create-instance"

import ServerStyleContext from "./src/styles/client.context"
import createEmotionCache from "./src/styles/createEmotionCache"
import theme from "./src/styles/theme"

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  function MuiRemixServer(styles = null) {
    return (
      <ServerStyleContext.Provider value={null}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <RemixServer context={remixContext} url={request.url} />
          </ThemeProvider>
        </CacheProvider>
      </ServerStyleContext.Provider>
    )
  }

  // Render the component to a string without styles
  const html = ReactDOMServer.renderToString(<MuiRemixServer />)

  // Grab the CSS from emotion
  const { styles } = extractCriticalToChunks(html)

  // Render again, this time with styles
  const markup = ReactDOMServer.renderToString(
    <MuiRemixServer styles={styles} />,
  )

  responseHeaders.set("Content-Type", "text/html")

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
