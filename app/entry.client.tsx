import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { RemixBrowser } from "@remix-run/react"
import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ClientStyleContext from "./src/styles/client.context"
import createEmotionCache from "./src/styles/createEmotionCache"
import theme from "./src/styles/theme"

interface ClientCacheProviderProps {
  children: React.ReactNode
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache())

  const reset = React.useCallback(() => {
    setCache(createEmotionCache())
  }, [])

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

const hydrate = () => {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(
      document,
      <ClientCacheProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <RemixBrowser />
        </ThemeProvider>
      </ClientCacheProvider>,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1)
}
