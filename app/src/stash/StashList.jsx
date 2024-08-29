import { css } from "@emotion/css"

import { useDisplayPrefs } from "../results/DisplayPrefsProvider"
import StashListItemRow from "./StashListItemRow"
import StashListItemThumbnail from "./StashListItemThumbnail"

const listWrapperCss = css`
  margin-right: 4px; // to match the paginator form's right margin
`

const thumbnailWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px 10px -8px; // to compensate for margins on the edge thumbnails
`

/**
 * Display all stash items in a pretty wrapper
 *
 * @param {array} stashes - all stash items
 * @returns {jsx}
 */
export default function StashList({ stashes }) {
  const { displayPrefs } = useDisplayPrefs()

  // Composition decision here!
  // Render a completely different component based on the user's display setting
  const Tag =
    displayPrefs.resultsStyle === "list"
      ? StashListItemRow
      : StashListItemThumbnail

  return (
    <div
      className={
        displayPrefs.resultsStyle === "list"
          ? listWrapperCss
          : thumbnailWrapperCss
      }
    >
      {stashes.map((stash) => (
        <Tag key={`stash-list-item-${stash.id}`} stash={stash} />
      ))}
    </div>
  )
}
