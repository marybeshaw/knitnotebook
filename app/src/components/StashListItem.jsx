import { css } from "@emotion/css"
import { Grid, Paper, Typography } from "@mui/material"

import { useDisplayPrefs } from "./DisplayPrefsProvider"

const projectRowCss = css`
  display: flex;
  flex-direction: row;
  //   border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
`
const linkCss = css`
  margin: 0 10px 0 0;
  padding: 0;
  border: 0;
  line-height: 0;

  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const detailsCss = css`
  flex-grow: 1;
`
const imageCss = css`
  height: 100%;
  width: 165px;
  margin: 0;
  object-fit: cover;
`

const missingImageUrl = `../../images/yarn-ball.jpg`
export default function StashListItem({ stash }) {
  const { displayPrefs } = useDisplayPrefs()

  if (displayPrefs.resultsStyle === "list") {
    return <StashListItemRow stash={stash} />
  } else {
    // thumbnails
    return <StashListItemThumbnail stash={stash} />
  }
}

function StashListItemThumbnail({ stash }) {
  return (
    <Grid item xs={2} sm={4} md={4} key={stash.id}>
      <Typography variant="h2" component="h2">
        {stash.name}
      </Typography>
    </Grid>
  )
}

function StashListItemRow({ stash }) {
  const stashPhoto = stash?.photos[0] // project?.pattern?.photos?.[0]
  const totalYardage = getTotalYardage(stash?.packs)

  return (
    <Paper key={`stash-${stash.id}`} elevation={2}>
      <div className={projectRowCss}>
        <a
          href={`https://www.ravelry.com/people/marybeshaw/stash/${stash.permalink}`}
          target="_blank"
          className={linkCss}
        >
          <img
            className={imageCss}
            src={stashPhoto?.medium_url || missingImageUrl}
            alt=""
          />
        </a>

        <div className={detailsCss}>
          <Typography variant="h2" component="h2" key={stash.id}>
            {stash.name}
          </Typography>
          {stash.colorway_name && (
            <Typography variant="body2" component="div">
              Colorway: {stash.colorway_name}
            </Typography>
          )}
          {stash.long_yarn_weight_name && (
            <Typography variant="body2" component="div">
              Weight: {stash.long_yarn_weight_name}
            </Typography>
          )}
          {totalYardage && (
            <Typography variant="body2" component="div">
              {totalYardage} yards
            </Typography>
          )}
          {stash.stash_status?.name && (
            <Typography variant="body2" component="div">
              {stash.stash_status.name}
            </Typography>
          )}
          {stash.location && (
            <Typography variant="body2" component="div">
              Location: {stash.location}
            </Typography>
          )}
          {stash.notes && (
            <Typography variant="body2" component="div">
              Notes: {stash.notes}
            </Typography>
          )}
        </div>
      </div>
    </Paper>
  )
}

function getTotalYardage(packs) {
  if (!packs) {
    return 0
  }
  const totalYardage = packs.reduce(function (acc, pack) {
    return acc + pack.total_yards
  }, 0)
}
