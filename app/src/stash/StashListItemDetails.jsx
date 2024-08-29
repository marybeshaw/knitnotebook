import { Typography } from "@mui/material"
import { Fragment } from "react"

/**
 * Shows extra details about a stash item.
 * Called from both the list and thumbnail views.
 *
 * @param {array} stash - the stash item to return details about
 * @returns {jsx}
 */
export default function StashDetails({ stash, type = "list" }) {
  const totalYardage = getTotalYardage(stash?.packs)
  return (
    <Fragment>
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
      {stash.notes && type === "list" && (
        <Typography variant="body2" component="div">
          Notes: {stash.notes}
        </Typography>
      )}
    </Fragment>
  )
}

/**
 * Count up all the yardage in all the packs
 *
 * @param {[{total_yards}]} packs - yards come in "packs"
 * @returns {number} total yardage
 */
function getTotalYardage(packs) {
  if (!packs) {
    return 0
  }
  return packs.reduce(function (acc, pack) {
    return acc + pack.total_yards
  }, 0)
}
