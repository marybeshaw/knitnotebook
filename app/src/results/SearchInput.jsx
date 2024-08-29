import { Search } from "@mui/icons-material"
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material"
import { useSearchParams } from "@remix-run/react"
import { useCallback } from "react"
import { useDebouncedCallback } from "use-debounce"

/**
 * A search input box
 *
 * @param {string} searchText - text we are searching on
 * @param {function} onChangeSearchText - function to call when text changes
 * @returns {jsx} the search input box
 */
export default function SearchInput({ searchText }) {
  const [, setSearchParams] = useSearchParams()

  const onChangeSearchText = useCallback(
    (e) => {
      // if (searchText !== e.target.value) {
      setSearchParams(
        (params) => {
          if (params.get("searchText") !== e.target.value) {
            params.set("searchText", e.target.value)
          }
          return params
        },
        { replace: false }, // this causes navigation to the url with this  value in the path
      )
      // }
    },
    [searchText, setSearchParams],
  )
  // Don't search on every key-press, that will make too many API calls; wait 300 milliseconds in between each search
  const handleChangeSearchText = useDebouncedCallback(onChangeSearchText, 300)

  return (
    <Box sx={{ marginRight: "10px" }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="search-text">Search</InputLabel>
        <OutlinedInput
          id="search-text"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
          label="Search"
          defaultValue={searchText}
          onChange={handleChangeSearchText}
        />
      </FormControl>
    </Box>
  )
}
