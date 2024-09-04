import { css } from "@emotion/css"
import { Fragment } from "react"

import { useDisplayPrefs } from "../results/DisplayPrefsProvider"
import FavItemProvider from "./FavItemProvider"
import FavListItem from "./FavListItem"
import FavThumbnailItem from "./FavThumbnailItem"

const thumbnailContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
`
const listWrapperCss = css`
  margin-right: 4px; // to match the paginator form's right margin
`

export default function FavoritesResults({ favoritesResults }) {
  const { displayPrefs } = useDisplayPrefs()

  // Composition decision here!
  // Render a completely different component based on the user's display setting
  const Tag =
    displayPrefs.resultsStyle === "list" ? FavListItem : FavThumbnailItem
  return (
    <Fragment>
      <div
        className={
          displayPrefs.resultsStyle === "list"
            ? listWrapperCss
            : thumbnailContainerCss
        }
      >
        {favoritesResults.map((fav) => (
          <FavItemProvider fav={fav} key={fav.id}>
            <Tag fav={fav} />
          </FavItemProvider>
        ))}
      </div>
    </Fragment>
  )
}
