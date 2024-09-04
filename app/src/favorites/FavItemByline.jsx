import { Typography } from "@mui/material"

import { useFavItem } from "./FavItemProvider"

export default function FavItemByline() {
  const fav = useFavItem()
  console.log("in fav item title.", fav.type)

  return (
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {fav.type === "pattern" && (
        <span>by {fav.favorited.designer?.name || "a designer"}</span>
      )}
      {fav.type === "project" && (
        <span>by {fav.favorited.user?.username || "a knitter"}</span>
      )}
      {fav.type === "yarn" && (
        <span>
          {fav.favorited.name} by {fav.favorited.yarn_company_name}
        </span>
      )}
      {fav.type === "stash" && (
        <span>by {fav.favorited.user?.username || "a collector"}</span>
      )}
    </Typography>
  )
}
