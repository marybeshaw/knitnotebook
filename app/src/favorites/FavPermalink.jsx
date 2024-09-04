import { Link as MLink } from "@mui/material"
import { Fragment } from "react"

import { useFavItem } from "./FavItemProvider"

export default function FavPermalink() {
  const fav = useFavItem()

  return (
    <Fragment>
      {fav.type === "yarn" && fav.favorited.permalink && (
        <MLink
          href={`https://www.ravelry.com/yarns/library/${fav.favorited.permalink}`}
          variant="contained"
          target="_blank"
        >
          Yarn on Ravelry
        </MLink>
      )}
      {fav.type === "pattern" && fav.favorited.permalink && (
        <MLink
          href={`https://www.ravelry.com/patterns/library/${fav.favorited.permalink}`}
          variant="contained"
          target="_blank"
          component="a"
        >
          Pattern on Ravelry
        </MLink>
      )}
      {fav.type === "stash" &&
        fav.favorited.permalink &&
        fav.favorited.user?.username && (
          <MLink
            href={`https://www.ravelry.com/people/${fav.favorited.user.username}/stash/${fav.favorited.permalink}`}
            variant="contained"
            target="_blank"
            component="a"
          >
            Stash on Ravelry
          </MLink>
        )}
      {fav.type === "project" &&
        fav.favorited.permalink &&
        fav.favorited.user?.username && (
          <MLink
            href={`https://www.ravelry.com/projects/${fav.favorited.user.username}/${fav.favorited.permalink}`}
            variant="contained"
            target="_blank"
            component="a"
          >
            Project on Ravelry
          </MLink>
        )}
    </Fragment>
  )
}
