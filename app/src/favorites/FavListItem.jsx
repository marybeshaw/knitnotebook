import { css } from "@emotion/css"
import { Paper, Typography } from "@mui/material"

import FavItemByline from "./FavItemByline"
import { useFavItem } from "./FavItemProvider"
import FavPermalink from "./FavPermalink"
import FavTypeIcon from "./FavTypeIcon"

const rowCss = css`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`
const outerImageCss = css`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const rowDetailsCss = css`
  flex-grow: 1;
`
const rowImageCss = css`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`
const typeLinkContainerCss = css`
  display: flex;
  margin-top: 10px;
  max-width: 400px;
  & * {
    margin-right: 10px;
  }
`

const missingImageUrl = `../../images/yarn-ball.jpg`

export default function FavListItem() {
  const fav = useFavItem()

  return (
    <Paper key={`stash-${fav.id}`} elevation={2}>
      <div className={rowCss}>
        <div className={outerImageCss}>
          <img
            className={rowImageCss}
            src={fav.favorited.first_photo.small_url || missingImageUrl}
            alt=""
          />
        </div>

        <div className={rowDetailsCss}>
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
          <div className={typeLinkContainerCss}>
            <FavTypeIcon fav={fav} />
            <FavPermalink />
          </div>
        </div>
      </div>
    </Paper>
  )
}
