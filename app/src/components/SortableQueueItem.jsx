import { forwardRef } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Typography } from "@mui/material"
import { Drag } from "mdi-material-ui"
import { css } from "@emotion/css"

const projectRowCss = css`
  display: flex;
  flex-direction: row;
  border: 1px solid #eeeeee;
  margin: 0 0 16px 0;
  cursor: pointer;
`

const detailsCss = css`
  flex-grow: 1;
`
const imageCss = css`
  aspect-ratio: 1; /* make width equal to height  */
  height: auto;
  width: 150px;
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;

  margin: 0 10px 0 0;
`

export default function SortableQueueItem({ project }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: project.id,
      transition: {
        duration: 150, // milliseconds
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li
      key={project.id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <QueueItem project={project} />
    </li>
  )
}

export const QueueItem = forwardRef(({ project }, ref) => {
  const patternPhoto = project?.best_photo // project?.pattern?.photos?.[0]
  return (
    <div className={projectRowCss} key={`item-${project.id}`} ref={ref}>
      {patternPhoto && (
        <img className={imageCss} src={patternPhoto.small_url} alt="" />
      )}
      <div className={detailsCss}>
        <Typography variant="h2" component="h2" key={project.id}>
          {project.short_pattern_name}
        </Typography>
        <Typography variant="body2" component="p">
          by {project.pattern_author_name}
        </Typography>
        <Typography variant="body2" component="p">
          Yarn: {project.pattern.yardage_description} of{" "}
          {project.pattern.yarn_weight_description}
        </Typography>
      </div>

      <Drag sx={{ display: "flex", mr: 1, mt: 1 }} />
    </div>
  )
})
