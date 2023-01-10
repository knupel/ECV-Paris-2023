import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Truc from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Truc />
  </StrictMode>
);
