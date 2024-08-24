import { forwardRef } from "react"

import { Link as MLink } from "@mui/material"
import { useHref, useLinkClickHandler } from "react-router-dom"

const Link = forwardRef(
  ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
    let href = useHref(to)
    let handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    })

    return (
      <MLink
        {...rest}
        href={href}
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            handleClick(event)
          }
        }}
        ref={ref}
        target={target}
      />
    )
  },
)
export default Link
