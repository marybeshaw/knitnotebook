import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
  Unstable_Grid2 as Grid
} from "@mui/material"
import { json, useLoaderData, useSearchParams } from "@remix-run/react"
import { Fragment } from "react"

import { authenticator } from "../services/auth.server"
import { getFavorites } from "../services/favorites.server"

import FavoriteTypeChips, { allFavoriteTypes } from "../src/favorites/FavoriteTypeChips"
import FavoritesResults from "../src/favorites/FavoritesResults"
import DisplayPrefsProvider from "../src/results/DisplayPrefsProvider"
// import HeaderRow from "../src/results/HeaderRow"
import NoResults from "../src/results/NoResults"
import SearchInput from "../src/results/SearchInput.jsx"
import DisplayPrefOptions from "../src/results/DisplayPrefsOptions.jsx"
// import Paginator from "../src/results/Paginator"

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_CURRENT_PAGE = 1
const DEFAULT_SORT_ORDER = "recent" // Should be one of: recent, alpha, weight, colorfamily, yards. Defaults to "alpha".

// modify this array to change our available options.
// To make it fully configurable, use a component prop and just make this default
const pageSizeOptions = [10, 20, 50]

export const loader = async ({ request }) => {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  // load search params for the URL; use defaults if needed
  const searchParams = new URL(request.url).searchParams

  const favoriteTypes = getFavoriteTypes(searchParams)
  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE
  const sortOrder = searchParams.get("sortOrder") || DEFAULT_SORT_ORDER
  const searchText = searchParams.get("searchText") || ""
  const currentPage = searchParams.get("currentPage")
    ? +searchParams.get("currentPage")
    : DEFAULT_CURRENT_PAGE

  // todo fix this to work like stash does
  const { favorites, data } = await getFavorites({
    accessToken: tokens.access_token,
    username: user.username,
    /* todo add more search terms */
    currentPage,
    favoriteTypes,
    pageSize,
    searchText,
    sortOrder,
  })
  return json({
    user,
    tokens,
    favorites,
    data,
    pageProps: { pageSize, currentPage, sortOrder, searchText },
  })
}

export default function Favorites() {
  const { favorites, data, pageProps } = useLoaderData()
  const [, setSearchParams] = useSearchParams()

  // new page # is in the second param, value
  function onChangePageNum(e, value) {
    setSearchParams(
      (params) => {
        params.set("currentPage", value)
        return params
      },
      { replace: false }, // this causes navigation to the url with this  value in the path
    )
  }

  // new page size is in e.target.value
  function onChangePageSize(e) {
    setSearchParams(
      (params) => {
        const pageSize = e.target.value
        const startNumberGoal =
          params.get("pageSize") * (params.get("currentPage") - 1)

        params.set("pageSize", pageSize)
        // Stay at the same starting item (or keep the same starting  item on the page)
        // when changing results per page by adjusting the current page number
        params.set("currentPage", Math.floor(startNumberGoal / pageSize + 1))
        return params
      },
      { replace: false }, // this causes navigation to the url with this  value in the path
    )
  }

  // Derived variable here!
  // It must change every time the # results or page size changes.
  // uch simpler than a useEffect!
  const numPages = data?.paginator?.last_page || 1

  return (
    <DisplayPrefsProvider>
      <Grid
        container
        spacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        disableEqualOverflow
        sx={{ marginBottom: "10px" }}
      >
        <Grid
          xs={12}
          sm={12}
          md={ 3 }
        >
          <Typography variant="h1" component="h1" sx={{ padding: "10px" }}>
            My Favorites
          </Typography>
        </Grid>
        {(
          <Grid
            xs={12}
            sm={6}
            md={5}
            sx={{ alignSelf: "center", textAlign: "right" }}
          >
            <FavoriteTypeChips />
          </Grid>
        )}
        <Grid
          xs={12}
          sm={6}
          md={4}
          display="flex"
          justifyContent="right"
          alignItems="right"
        >
          <SearchInput searchText={pageProps.searchText} />
          <DisplayPrefOptions />
        </Grid>
      </Grid>

      {favorites.length ? (
        <Fragment>
          <FavoritesResults favoritesResults={favorites} />

          {/* Start Pagination */}
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginRight: "-4px" }}
          >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="page-size-label">Page Size</InputLabel>
                <Select
                  labelId="page-size-label"
                  id="page-size"
                  value={pageProps.pageSize}
                  label="Page Size"
                  onChange={onChangePageSize}
                >
                  {pageSizeOptions.map((pageSizeOption) => (
                    <MenuItem key={pageSizeOption} value={pageSizeOption}>
                      {pageSizeOption}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Pagination
              count={numPages}
              variant="outlined"
              shape="rounded"
              size="large"
              page={+pageProps.currentPage}
              onChange={onChangePageNum}
            />
          </Box>
          {/* End Pagination */}

        </Fragment>
      ) : (
        <NoResults searchText={pageProps.searchText} dataType="favorites" />
      )}

      <Typography
        variant="body2"
        sx={{ marginTop: "10px", marginLeft: "10px" }}
      >
        To add something to your Ravelry favorites, please visit Ravelry.
      </Typography>
    </DisplayPrefsProvider>
  )
}

/**
 * Return which favorite types to filter on.
 * If the returned array is empty, the API will return everything.
 *
 * @param {URLSearchParams} searchParams
 * @returns
 */
function getFavoriteTypes(searchParams) {
  allFavoriteTypes.sort()
  const favoriteTypeSearchParams = (
    searchParams.getAll("favoriteType") || []
  ).sort()

  // If every chip is clicked, return everything
  if (areArraysEqual(allFavoriteTypes, favoriteTypeSearchParams)) {
    return []
  }

  return favoriteTypeSearchParams
}

/**
 * checks to see if the arrays are equal
 * @param {array} array1
 * @param {array} array2
 */
function areArraysEqual(array1, array2) {
  array1?.length === array2?.length &&
    array1.every((value, index) => value === array2[index])
}
