import { css } from "@emotion/css"
import { Paper, Typography } from "@mui/material"

import StashListItemDetails from "./StashListItemDetails"

const stashRowCss = css`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`
const rowLinkCss = css`
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
const missingImageUrl = `../../images/yarn-ball.jpg`

export default function StashListItemRow({ stash }) {
  const stashPhoto = stash?.photos[0] // project?.pattern?.photos?.[0]

  return (
    <Paper key={`stash-${stash.id}`} elevation={2}>
      <div className={stashRowCss}>
        <a
          href={`https://www.ravelry.com/people/marybeshaw/stash/${stash.permalink}`}
          target="_blank"
          className={rowLinkCss}
        >
          <img
            className={rowImageCss}
            src={stashPhoto?.small_url || missingImageUrl}
            alt=""
          />
        </a>

        <div className={rowDetailsCss}>
          <Typography variant="h2" component="h2" key={stash.id}>
            {stash.name}
          </Typography>
          <StashListItemDetails stash={stash} />
        </div>
      </div>
    </Paper>
  )
}
