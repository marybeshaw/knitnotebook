import { Typography } from "@mui/material"
import { json, useLoaderData } from "@remix-run/react"
import { Fragment } from "react"

import { authenticator } from "../services/auth.server"
import { getStash } from "../services/stash.server"

import DisplayPrefsProvider from "../src/results/DisplayPrefsProvider"
import HeaderRow from "../src/results/HeaderRow"
import NoResults from "../src/results/NoResults"
import Paginator from "../src/results/Paginator"
import StashList from "../src/stash/StashList"

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_CURRENT_PAGE = 1
const DEFAULT_SORT_ORDER = "recent" // Should be one of: recent, alpha, weight, colorfamily, yards. Defaults to "alpha".

/**
 * Remix's standard loader function
 *
 * @param {object} request - request object
 * @returns {json} - data for the React component
 */
export async function loader({ request }) {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })

  // load search params for the URL; use defaults if needed
  const searchParams = new URL(request.url).searchParams

  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE
  const sortOrder = searchParams.get("sortOrder") || DEFAULT_SORT_ORDER
  const searchText = searchParams.get("searchText") || ""
  const currentPage = searchParams.get("currentPage")
    ? +searchParams.get("currentPage")
    : DEFAULT_CURRENT_PAGE

  const { stashes, data } = await getStash({
    accessToken: tokens.access_token,
    username: user.username,

    currentPage,
    pageSize,
    searchText,
    sortOrder,
  })
  return json({
    user,
    tokens,
    stashes,
    data,
    pageProps: { pageSize, currentPage, sortOrder, searchText },
  })
}

/**
 * Renders the stash page and all the goodies!
 * React component. Remix makes loader data available via useLoaderData()
 *
 * Most user state lives in the URL query string, but display prefs are in local storage.
 *
 * @returns {jsx}
 */
export default function Stash() {
  const { stashes, data, pageProps } = useLoaderData()

  // Derived variable here!
  // It must change every time the # results or page size changes.
  // uch simpler than a useEffect!
  const numPages = data?.paginator?.last_page || 1

  console.log("search text?", pageProps.searchText)

  return (
    <DisplayPrefsProvider>
      <HeaderRow {...pageProps}>My Yarn Collection</HeaderRow>

      {stashes.length ? (
        <Fragment>
          <StashList stashes={stashes} />

          <Paginator
            pageSize={pageProps.pageSize}
            currentPage={pageProps.currentPage}
            numPages={numPages}
          />
        </Fragment>
      ) : (
        <NoResults searchText={pageProps.searchText} />
      )}

      <Typography variant="body2" sx={{ marginLeft: "10px" }}>
        To add something to your Ravelry stash, please visit Ravelry.
      </Typography>
    </DisplayPrefsProvider>
  )
}
