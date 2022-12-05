import homecss from "~/styles/home.css";

import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your progress</p>
      <p id="cta">
        <Link to="/note">try now</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homecss }];
}
