import "./components/Main.js";
import { app, analytics } from "./tools/firebase.js";

import { html, component } from "haunted";

const App = () => {
  return html`<main-component></main-component>`;
};
customElements.define("app-page", component(App, { useShadowDOM: false }));
