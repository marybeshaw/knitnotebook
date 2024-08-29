import { GridView, ViewList } from "@mui/icons-material"
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material"

import { useDisplayPrefs } from "./DisplayPrefsProvider"

/**
 * Show available display preference options
 * @returns {jsx}
 */
export default function DisplayPrefsOptions() {
  const { displayPrefs, setResultsStyle } = useDisplayPrefs()

  return (
    <ToggleButtonGroup
      value={displayPrefs.resultsStyle}
      exclusive
      onChange={(event, newAlignment) => {
        setResultsStyle(newAlignment)
      }}
      aria-label="results display preferences"
    >
      <Tooltip title="Delete">
        <ToggleButton value="list" aria-label="list with images">
          <ViewList alt="View as List" />
        </ToggleButton>
      </Tooltip>

      <ToggleButton value="thumbnails" aria-label="large thumbnails">
        <GridView alt="View as Thumbnails" />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
