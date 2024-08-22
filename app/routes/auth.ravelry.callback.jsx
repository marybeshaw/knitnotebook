import { useLoaderData } from "@remix-run/react"

// after auth.ravelry.callback, remix sends the user back to this page, which doesn't do anything.
// look in auth.ravelry.jsx
export const loader = async ({ request }) => {
  return { loader: true }
}

// We can't not have this component that never loads?
export default function Callback() {
  const data = useLoaderData()
  console.log("we should never get here", data)
  return <p>Page</p>
}
