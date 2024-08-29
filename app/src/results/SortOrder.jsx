import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useSearchParams } from "@remix-run/react"

const stashSort = {
  recent: "Date Added",
  alpha: "A to Z",
  weight: "Weight",
  colorfamily: "Color",
  _yards: "Most Yardage",
}

/**
 * Displays the sort order select
 *
 * @param {'stash'|'favorites'} dataType - show different text based on the thing being searched
 * @returns {jsx}
 */
export default function SortOrder({ dataType = "stash", sortOrder }) {
  const [, setSearchParams] = useSearchParams()
  // Derived variable: sort on the page's search data type (stash, projects, etc.)
  const sortOptions = stashSort

  // new sort order is in e.target.value
  function onChangeSortOrder(e) {
    setSearchParams(
      (params) => {
        params.set("sortOrder", e.target.value)
        return params
      },
      { replace: false }, // this causes navigation to the url with this  value in the path
    )
  }

  return (
    <Box sx={{ marginRight: "10px" }}>
      <FormControl fullWidth>
        <InputLabel id="sort-by-label">Sort By:</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          value={sortOrder}
          label="Sort By"
          autoWidth={false}
          defaultValue={sortOrder}
          onChange={onChangeSortOrder}
        >
          {Object.keys(sortOptions).map((sortOptionKey) => {
            return (
              <MenuItem key={sortOptionKey} value={sortOptionKey}>
                {sortOptions[sortOptionKey]}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
