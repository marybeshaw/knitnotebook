import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material"
import { useSearchParams } from "@remix-run/react"

// modify this array to change our available options.
// To make it fully configurable, use a component prop and just make this default
const pageSizeOptions = [10, 20, 50]

/**
 * Pagination component
 * This should be an entire bottom row below results.
 * Desktop: Page size is on the left and the pages list is on the right.
 * Mobile: Page size is on top of the pages list.
 *
 * @param {string} pageSize - how many results are in a page
 * @param {string} currentPage - the user's current page in pagination
 * @param {string} numPages - the number of pages available to the user
 * @param {function} onChangePageNum - function to call when the user changes the page number
 * @param {function} onChangePageSize - function to call when the user changes how many results are in a page
 * @returns {jsx}
 */
export default function Paginator({ pageSize, currentPage, numPages }) {
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

  return (
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
            value={pageSize}
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
        page={+currentPage}
        onChange={onChangePageNum}
      />
    </Box>
  )
}
