import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material"
export default function Paginator({
  pageSize,
  currentPage,
  numPages,
  onChangePageNum,
  onChangePageSize,
}) {
  console.log(
    "rendering page number",
    currentPage,
    "page size",
    pageSize,
    "numPages",
    numPages,
  )
  return (
    <Box display="flex" justifyContent="space-between">
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
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
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
