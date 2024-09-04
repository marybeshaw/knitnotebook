import { css } from "@emotion/css"
import { Button, Typography } from "@mui/material"
import { useSearchParams } from "@remix-run/react"
import { Fragment } from "react"

const noResultsCss = css`
  margin: 20px 20px 40px 10px;
`

export default function NoResults({ searchText, dataType = "stash" }) {
  const [, setSearchParams] = useSearchParams()

  // Remove the search term to see the entire stash
  function handleClick() {
    setSearchParams(
      (params) => {
        params.delete("searchText")
        return params
      },
      { replace: false }, // this causes navigation to the url with this  value in the path
    )
  }

  return (
    <div className={noResultsCss}>
      {searchText ? (
        <Fragment>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {dataType === "favorites"
              ? "No favorites match"
              : "No stash yarn matches"}{" "}
            your search term, {searchText}.
          </Typography>
          <Button onClick={handleClick} variant="contained">
            See your entire{" "}
            {dataType === "favorites" ? "favorites list" : "stash"}
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <Typography variant="h2">No stash yarn found.</Typography>
          <Typography variant="body2">
            You are missing out on something awesome!
          </Typography>
        </Fragment>
      )}
    </div>
  )
}
