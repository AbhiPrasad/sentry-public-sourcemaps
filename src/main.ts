import "./style.css";
import { setupSentry } from "./buttons.ts";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://d761f5405a709d2bd1fd0380b08908f5@o447951.ingest.sentry.io/4505676947980288",
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Sentry public sourcemaps</h1>
    <div class="card">
      <button id="counter" type="button">Click here to throw an error!</button>
    </div>
  </div>
`;

setupSentry(document.querySelector<HTMLButtonElement>("#counter")!);
