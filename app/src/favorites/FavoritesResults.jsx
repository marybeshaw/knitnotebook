import { Fragment } from "react"
import {
  FavoriteBorder,
  BorderColor,
  ImportContacts,
  Gesture,
  Backpack,
  Forum,
  Psychology,
  Store,
  Workspaces,
  BrandingWatermark,
} from "@mui/icons-material"

export default function FavoritesResults({ favoritesResults }) {
  return (
    <Fragment>
      {favoritesResults.map((fav) => (
        <Fragment key={fav.id}>
          <p>
            <FavoriteBorder />
            <FavItem fav={fav} />
          </p>
        </Fragment>
      ))}
    </Fragment>
  )
}

function FavItem({ fav }) {
  switch (fav.type) {
    // case "pattern":
    //   return <p>{fav.favorited.name}</p>
    default:
      return (
        <p>
          {fav.favorited.name}
          <img src={fav.favorited.first_photo.small_url} />
          <FavIcon fav={fav} />
        </p>
      )
  }
}

function FavIcon({ fav }) {
  switch (fav.type) {
    case "pattern":
      return <ImportContacts />
    case "project":
      return <BorderColor />
    case "yarn":
      return <Gesture />
    case "stash":
      return <Backpack />
    case "forumpost":
      return <Forum />
    case "designer":
      return <Psychology />
    case "yarnshop":
      return <Store />
    case "yarnbrand":
      return <BrandingWatermark />
    case "bundle":
      return <Workspaces />
    default:
      return fav.type
  }
}
