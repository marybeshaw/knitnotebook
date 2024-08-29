import { Typography } from "@mui/material"
import { json, useLoaderData } from "@remix-run/react"
import { Fragment } from "react"

import { authenticator } from "../services/auth.server"
import { getFavorites } from "../services/favorites.server"

import FavoritesResults from "../src/favorites/FavoritesResults"
import DisplayPrefsProvider from "../src/results/DisplayPrefsProvider"
import HeaderRow from "../src/results/HeaderRow"
import NoResults from "../src/results/NoResults"
import Paginator from "../src/results/Paginator"

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_CURRENT_PAGE = 1
const DEFAULT_SORT_ORDER = "recent" // Should be one of: recent, alpha, weight, colorfamily, yards. Defaults to "alpha".

export const loader = async ({ request }) => {
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

  // todo fix this to work like stash does
  const { favorites /*,data*/ } = await getFavorites({
    accessToken: tokens.access_token,
    username: user.username,
    /* todo add more search terms */
    currentPage,
    pageSize,
    searchText,
    sortOrder,
  })
  return json({
    user,
    tokens,
    favorites,
    pageProps: { pageSize, currentPage, sortOrder, searchText },
  })
}

export default function Favorites() {
  const { favorites, data, pageProps } = useLoaderData()

  // Derived variable here!
  // It must change every time the # results or page size changes.
  // uch simpler than a useEffect!
  const numPages = data?.paginator?.last_page || 1

  return (
    <DisplayPrefsProvider>
      <HeaderRow {...pageProps}>My Favorites</HeaderRow>

      {favorites.length ? (
        <Fragment>
          <FavoritesResults favoritesResults={favorites} />

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
        To add something to your Ravelry favorites, please visit Ravelry.
      </Typography>
    </DisplayPrefsProvider>
  )
}
