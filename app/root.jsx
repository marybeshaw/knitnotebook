import React from "react"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react"

// Material UI & Emotion
import { withEmotionCache } from "@emotion/react"
import {
  Box,
  unstable_useEnhancedEffect as useEnhancedEffect,
} from "@mui/material"

import theme from "./src/styles/theme"
import ClientStyleContext from "./src/styles/client.context"
import ServerStyleContext from "./src/styles/server.context"
import Layout from "./src/Layout"

import UserProvider from "./src/UserProvider"
import { authenticator } from "./services/auth.server"

export const loader = async ({ request }) => {
  let data = {}
  try {
    data = await authenticator.isAuthenticated(request)
  } catch (e) {
    console.log("error loading root data", e)
  }
  return json(data)
}

const Document = withEmotionCache(({ children, title }, emotionCache) => {
  const clientStyleData = React.useContext(ClientStyleContext)
  const serverStyleData = React.useContext(ServerStyleContext)

  // Only executed on client
  useEnhancedEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head
    // re-inject tags
    const tags = emotionCache.sheet.tags
    emotionCache.sheet.flush()
    tags.forEach((tag) => {
      // eslint-disable-next-line no-underscore-dangle
      emotionCache.sheet._insertTag(tag)
    })
    // reset cache to reapply global styles
    clientStyleData.reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content={theme.palette.primary.main} />

        {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico" /> */}
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://use.typekit.net/ojf8ene.css" />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
})

// https://remix.run/docs/en/main/route/component
// https://remix.run/docs/en/main/file-conventions/routes
export default function App() {
  const loaderData = useLoaderData()

  return (
    <UserProvider user={loaderData?.user}>
      <Document>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Layout>
            <Outlet />
          </Layout>
        </Box>
      </Document>
    </UserProvider>
  )
}

// https://remix.run/docs/en/main/route/error-boundary
export function ErrorBoundary() {
  const error = useRouteError()
  // debugger
  if (isRouteErrorResponse(error)) {
    let message
    switch (error.status) {
    case 401:
      message = (
        <p>
            Oops! Looks like you tried to visit a page that you do not have
            access to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(error.data || error.statusText)
    }

    return (
      <Document title={`${error.status} ${error.statusText}`}>
        <Layout>
          <h1>
            {error.status}: {error.statusText}
          </h1>
          {message}
        </Layout>
      </Document>
    )
  }

  if (error instanceof Error) {
    console.error(error)
    return (
      <Document title="Error!">
        <Layout>
          <div>
            <h1>There was an error</h1>
            <p>{error.message}</p>
            <hr />
            <p>
              Hey, developer, you should replace this with what you want your
              users to see.
            </p>
          </div>
        </Layout>
      </Document>
    )
  }

  return <h1>Unknown Error</h1>
}
