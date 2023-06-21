import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Chời quơi!</h1>
      <p>Lũi rùi, chếc tui rùi</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
