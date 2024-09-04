import {
  Backpack,
  BorderColor,
  BrandingWatermark,
  Forum,
  Gesture,
  ImportContacts,
  Psychology,
  Store,
  Workspaces,
} from "@mui/icons-material"
import { Tooltip } from "@mui/material"

/**
 *
 *
 * @param {{type: string}} param0 - favorited item object
 * @returns Returns an icon for the type of favorite passed in
 */
export default function FavTypeIcon({ fav }) {
  switch (fav.type) {
    case "pattern":
      return (
        <Tooltip title="Pattern">
          <ImportContacts />
        </Tooltip>
      )
    case "project":
      return (
        <Tooltip title="Project">
          <BorderColor />
        </Tooltip>
      )
    case "yarn":
      return (
        <Tooltip title="Yarn">
          <Gesture />
        </Tooltip>
      )
    case "stash":
      return (
        <Tooltip title="Stash">
          <Backpack />
        </Tooltip>
      )
    case "forumpost":
      return (
        <Tooltip title="Forum">
          <Forum />
        </Tooltip>
      )
    case "designer":
      return (
        <Tooltip title="Designer">
          <Psychology />
        </Tooltip>
      )
    case "yarnshop":
      return (
        <Tooltip title="Yarn Shop">
          <Store />
        </Tooltip>
      )
    case "yarnbrand":
      return (
        <Tooltip title="Yarn Brand">
          <BrandingWatermark />
        </Tooltip>
      )
    case "bundle":
      return (
        <Tooltip title="Bundle">
          <Workspaces />
        </Tooltip>
      )
    default:
      return fav.type
  }
}
