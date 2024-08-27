import { useCallback } from "react"
import { ViewList, GridView } from "@mui/icons-material"
import {
  Dialog,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
} from "@mui/material"

import { useDisplayPrefs } from "./DisplayPrefsProvider"

export default function ResultsPreferences() {
  const { displayPrefs, setResultsStyle } = useDisplayPrefs()

  const handleAlignment = (event, newAlignment) => {
    setResultsStyle(newAlignment)
  }
  return (
    <ToggleButtonGroup
      value={displayPrefs.resultsStyle}
      exclusive
      onChange={handleAlignment}
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
