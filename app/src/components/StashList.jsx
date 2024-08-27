import { Grid } from "@mui/material"

import { useDisplayPrefs } from "./DisplayPrefsProvider"
import StashListItem from "./StashListItem"

export default function StashList({ stashes }) {
  const { displayPrefs } = useDisplayPrefs()

  // depending on the results style, render a different container
  const Tag =
    displayPrefs.resultsStyle === "list"
      ? StashListRowStyle
      : StashListThumbnailStyle
  return (
    <Tag>
      {stashes.map((stash) => (
        <StashListItem key={`stash-list-item-${stash.id}`} stash={stash} />
      ))}
    </Tag>
  )
}

function StashListRowStyle({ children }) {
  return <>{children}</>
}

function StashListThumbnailStyle({ children }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {children}
    </Grid>
  )
}
