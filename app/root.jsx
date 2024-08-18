import React from "react";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./global-styles.css?url";

export const links = () => [{ rel: "stylesheet", href: styles }];






export default function App() {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className={styles.heading}>Welcome to my Knit Notebook</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
