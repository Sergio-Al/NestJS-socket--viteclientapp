import { connectToServer } from './socket-client';
import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket -  Client</h1>
    <span id="server-status">offline</span>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
connectToServer()