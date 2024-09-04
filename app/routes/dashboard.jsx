import { Fragment } from "react"

import { css } from "@emotion/css"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { json } from "@remix-run/react"

import { authenticator } from "../services/auth.server"
import Link from "../src/routing/Link"

const thumbnailContainerCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
`

const thumbnailInnerContainerCss = css`
  margin: 3px 8px 8px;
  flex: 1 0 21%;
  max-width: 350px;
  min-width: 250px;
`

export const loader = async ({ request }) => {
  let data = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  })

  return json(data)
}

const cardItems = [
  {
    name: "Projects",
    path: "/projects",
    description:
      "See all of your knitting projects in one place! The good, the bad, and maybe the ugly....",
    splashUrl: "../images/projects-splash.jpeg",
  },
  {
    name: "Queue",
    path: "/queue",
    description:
      "What will you work on next? Possibilities are endless, but they are here!",
    splashUrl: "../images/queue-splash.jpeg",
  },
  {
    name: "Stash",
    path: "/stash",
    description:
      'Do you have a "stash beyond live expectancy" (SABLE)? Click to find out!',
    splashUrl: "../images/stash-splash.jpeg",
  },
  {
    name: "Favorites",
    path: "/favorites",
    description:
      "See and search the Ravelry items you love, including projects, patterns, and forum posts!",
    splashUrl: "../images/favorites-splash.jpeg",
  },
]

export default function Dashboard() {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Knit Notebook Dashboard
      </Typography>
      <Typography variant="body2" component="p">
        Welcome to your Knit Notebook, where you can update your Ravelry
        notebook with a different UI for a limited time.
      </Typography>
      <Typography variant="body2" component="p">
        What will you work on next?
      </Typography>
      <div className={thumbnailContainerCss}>
        {cardItems.map((cardItem) => (
          <MenuCardItem key={cardItem.name} {...cardItem} />
        ))}
      </div>
    </Fragment>
  )
}

function MenuCardItem({ name, path, description, splashUrl }) {
  return (
    <div className={thumbnailInnerContainerCss}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={splashUrl} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={path} variant="contained">
            Visit your {name}
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}
