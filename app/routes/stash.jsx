import { css } from "@emotion/css"
import { json, useLoaderData, useSearchParams } from "@remix-run/react"

import { Unstable_Grid2 as Grid, Typography } from "@mui/material"

import { authenticator } from "../services/auth.server"
import { getStash } from "../services/stash.server"

import DisplayPrefsProvider from "../src/components/DisplayPrefsProvider"
import Paginator from "../src/components/Paginator"
import ResultsPreferences from "../src/components/ResultsPreferences"
import StashList from "../src/components/StashList"

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_CURRENT_PAGE = 1
const DEFAULT_SORT_ORDER = "recent" // Should be one of: recent, alpha, weight, colorfamily, yards. Defaults to "alpha".

const stashListWrapperCss = css`
  margin-right: 4px; // to match the paginator form's right margin
`
export async function loader({ request }) {
  let { user, tokens } = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })
  const searchParams = new URL(request.url).searchParams
  const pageSize = searchParams.get("pageSize") || DEFAULT_PAGE_SIZE
  const currentPage = searchParams.get("currentPage") || DEFAULT_CURRENT_PAGE
  const sortOrder = searchParams.get("sortOrder") || DEFAULT_SORT_ORDER
  const { stashes, data } = await getStash({
    accessToken: tokens.access_token,
    username: user.username,
    pageSize: pageSize,
    page: currentPage,
    sortOrder,
  })
  return json({
    user,
    tokens,
    stashes,
    data,
    pageProps: { pageSize, currentPage, sortOrder },
  })
}

export default function Stash() {
  const { stashes, data, pageProps } = useLoaderData()
  const [searchParams] = useSearchParams()

  // Derived variable here! It must change every time the # results or page size changes.
  const numPages = data.paginator.last_page

  console.log(
    "num results",
    data.paginator.results,
    "page size",
    pageProps.pageSize,
    "current page",
    pageProps.currentPage,
    "sort order",
    pageProps.sortOrder,
    "num pages",
    numPages,
  )
  console.log("data", data)

  // new page # is in the second param, value
  function handleChangePageNum(e, value) {
    console.log("change page number to", value)

    // this causes navigation to the url with this  value in the path
    searchParams.set("currentPage", value)
  }

  // new page size is in e.target.value
  function handleChangePageSize(e) {
    console.log("change page size to", e.target.value)

    // this causes navigation to the url with this  value in the path
    searchParams.set("pageSize", e.target.value)
  }
  // todo: add display style (grid, list), also add search & sort (/stash/search.json instead)
  return (
    <DisplayPrefsProvider>
      <Grid
        container
        spacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        disableEqualOverflow
        sx={{ marginBottom: "10px" }}
      >
        <Grid xs={12} sm={8}>
          <Typography variant="h1" component="h1" sx={{ padding: "10px" }}>
            My Yarn Collection
          </Typography>
        </Grid>

        <Grid
          xs={12}
          sm={4}
          display="flex"
          justifyContent="right"
          alignItems="right"
        >
          <ResultsPreferences />
        </Grid>
      </Grid>

      <div className={stashListWrapperCss}>
        <StashList stashes={stashes} />
      </div>
      <Paginator
        pageSize={pageProps.pageSize}
        currentPage={pageProps.currentPage}
        onChangePageNum={handleChangePageNum}
        onChangePageSize={handleChangePageSize}
        numPages={numPages}
      />
      <Typography>
        To add something to your Ravelry stash, please visit Ravelry.
      </Typography>
    </DisplayPrefsProvider>
  )
}
