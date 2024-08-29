import { css } from "@emotion/css"
import { Paper, Typography } from "@mui/material"

import StashListItemDetails from "./StashListItemDetails"

const thumbnailLinkCss = css`
  // box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 200px;
  overflow: hidden;
`
const thumbnailImageCss = css`
  overflow: hidden;
  object-fit: cover;
  max-width: 350px;
`
const thumbnailContentCss = css`
  padding: 3px 10px 10px 10px;
`

const thumbnailInnerContainerCss = css`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`
const missingImageUrl = `../../images/yarn-ball.jpg`

export default function StashListItemThumbnail({ stash }) {
  const stashPhoto = stash?.photos[0] // project?.pattern?.photos?.[0]

  return (
    <div className={thumbnailInnerContainerCss} key={stash.id}>
      <Paper key={`stash-${stash.id}`} elevation={2}>
        <a
          href={`https://www.ravelry.com/people/marybeshaw/stash/${stash.permalink}`}
          target="_blank"
          className={thumbnailLinkCss}
        >
          <img
            className={thumbnailImageCss}
            src={stashPhoto?.medium_url || missingImageUrl}
            alt=""
          />
        </a>

        <div className={thumbnailContentCss}>
          <Typography variant="h3" component="h3">
            {stash.name}
          </Typography>
          <StashListItemDetails stash={stash} type="thumbnail" />
        </div>
      </Paper>
    </div>
  )
}
