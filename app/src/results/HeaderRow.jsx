import { Unstable_Grid2 as Grid, Typography } from "@mui/material"

import FavoriteTypeChips from "../favorites/FavoriteTypeChips"
import DisplayPrefOptions from "./DisplayPrefsOptions"
import SearchInput from "./SearchInput"
import SortOrder from "./SortOrder"

/**
 * Displays a header row with header text, a search bar, sort order, and display prefs toggle
 *
 * @param {string} searchText - search query text (from loader)
 * @param {string} sortOrder - sort order (from loader)
 * @param {string} dataType - stash, favorites; defaults to stash
 * @param {jsx} children - this should include header text!
 * @returns {jsx}
 */
export default function HeaderRow({
  searchText,
  sortOrder,
  dataType = "stash",
  children,
}) {
  return (
    <Grid
      container
      spacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      disableEqualOverflow
      sx={{ marginBottom: "10px" }}
    >
      <Grid
        xs={12}
        sm={dataType === "favorites" ? 12 : 6}
        md={dataType === "favorites" ? 3 : 4}
      >
        <Typography variant="h1" component="h1" sx={{ padding: "10px" }}>
          {children}
        </Typography>
      </Grid>
      {dataType === "favorites" && (
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
        md={dataType === "favorites" ? 4 : 6}
        display="flex"
        justifyContent="right"
        alignItems="right"
      >
        <SearchInput searchText={searchText} />
        {dataType === "stash" && <SortOrder sortOrder={sortOrder} />}
        <DisplayPrefOptions />
      </Grid>
    </Grid>
  )
}
