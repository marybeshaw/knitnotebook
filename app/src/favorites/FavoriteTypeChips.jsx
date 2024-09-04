import { css } from "@emotion/css"
import { Chip } from "@mui/material"
import { useSearchParams } from "@remix-run/react"
import { useEffect, useReducer } from "react"

const favoriteChipContainerCss = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 300px;
`

export const allFavoriteTypes = [
  { key: "project", label: "Projects" },
  { key: "pattern", label: "Patterns" },
  { key: "yarn", label: "Yarn" },
  { key: "stash", label: "Stash" },
  // I am hiding these other available types for now to make the UI simpler
  //   "forumpost",
  //   "designer",
  //   "yarnbrand",
  //   "yarnshop",
  //   "bundle",
]

/**
 * Render several chips showing the type of favorites to show.
 * @returns
 */
export default function FavoriteTypeChips() {
  const [searchParams] = useSearchParams()
  const { handleChipClick } = useFavorites(searchParams)

  // Derived state here!!
  const selectedTypes = searchParams.getAll("favoriteType")

  return (
    <div css="favoriteChipContainerCss">
      {allFavoriteTypes.map((favoriteType) => (
        <FavoriteTypeChip
          key={favoriteType.key}
          favoriteType={favoriteType}
          selectedTypes={selectedTypes}
          handleChipClick={handleChipClick}
        />
      ))}
    </div>
  )
}

/**
 *
 * @param {{key: string, label: string}} favoriteType - type of favorite
 * @param {[string]} selectedTypes - currently selected favorite keys
 * @returns
 */
function FavoriteTypeChip({ favoriteType, selectedTypes, handleChipClick }) {
  return (
    <Chip
      onClick={() => handleChipClick(favoriteType)}
      label={favoriteType.label}
      variant={
        !selectedTypes.find((type) => type === favoriteType.key)
          ? "outlined"
          : ""
      }
      sx={{ marginRight: 1 }}
    />
  )
}

function useFavorites() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [state, dispatch] = useReducer(
    favoriteTypeReducer,
    searchParams,
    initFavoriteTypeReducer,
  )

  // this is a circular infinite loop
  useEffect(() => {
    if (
      JSON.stringify(state.selectedTypes) !==
      JSON.stringify(state.lastSelectedTypes)
    ) {
      setSearchParams(
        (params) => {
          params.delete("favoriteType")
          state.selectedTypes.forEach((selectedType) => {
            params.append("favoriteType", selectedType)
          })
          return params
        },
        { replace: false }, // this causes navigation to the url with this  value in the path
      )
      // Save that we stored the search param so we don't keep storing it!
      dispatch({ actionType: "storedSearchParam" })
    }
    // when state changes, we need to set those search params
  }, [state])

  /**
   * Saves the chip toggle (on or off)
   * @param {{key: string, label: string}} favoriteType - type of favorite
   */
  const handleChipClick = (favoriteType) => {
    dispatch({ actionType: "toggleChip", key: favoriteType.key })
  }

  return { handleChipClick }
}

/**
 * Reducer to handle favorite selection state changes
 *
 * @param {{selectedTypes: [string]}} state - selectedTypes is an array of strings
 * @param {{actionType: string, key: string}} action - reducer action. either toggle a chip or save the search params
 * @returns
 */
function favoriteTypeReducer(state, action) {
  const newState = { lastSelectedTypes: state.selectedTypes }
  // The user clicked the chip.
  // Either add or remove it from our URL state.
  if (action.actionType === "toggleChip") {
    if (state.selectedTypes.find((key) => key === action.key)) {
      // remove the toggled key from the list
      newState.selectedTypes = state.selectedTypes
        .filter((key) => key !== action.key)
        .sort()
      // TODO if nothing is selected, that means everything is selected.
    } else {
      // add the toggled key to the list
      newState.selectedTypes = [action.key, ...state.selectedTypes].sort()
    }
  }
  // Equalize lastSelectedTypes and selectedTypes so we don't keep adjusting the URL
  // We store the last string variable in state to compare in the useEffect
  //   and prevent an infinite loop
  else if (action.actionType === "storedSearchParam") {
    newState.selectedTypes = state.selectedTypes
  }
  return newState
}

//
/**
 * This creates the very first state object for the reducer.
 * Read favoriteType key-value pairs out of the query string,
 *  which loads all bookmarked query string parameters.
 * @param {URLSearchParams} searchParams
 * @returns {{selectedTypes: [string]}} an object with the user's selected favorite types in an array
 */
function initFavoriteTypeReducer(searchParams) {
  return { selectedTypes: searchParams.getAll("favoriteType") }
}
