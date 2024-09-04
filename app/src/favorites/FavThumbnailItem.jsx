import { css } from "@emotion/css"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"

import FavItemByline from "./FavItemByline"
import { useFavItem } from "./FavItemProvider"
import FavPermalink from "./FavPermalink"
import FavTypeIcon from "./FavTypeIcon"

const thumbnailInnerContainerCss = css`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`

export default function FavThumbnailItem() {
  const fav = useFavItem()
  console.log("fav item", fav)

  return (
    <div className={thumbnailInnerContainerCss}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={fav.favorited.first_photo.small_url}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fav.favorited.name}
          </Typography>
          <FavItemByline />
          {fav.type === "yarn" && fav.favorited.yarn_weight?.name && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {fav.favorited.yarn_weight.name}
            </Typography>
          )}
          {fav.comment && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              "{fav.comment}"
            </Typography>
          )}
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <FavTypeIcon fav={fav} />
          <FavPermalink />
        </CardActions>
      </Card>
    </div>
  )
}
