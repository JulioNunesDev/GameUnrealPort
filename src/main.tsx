import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./shared/styles/GlobalStyles.ts";
import { AppProviderGameDemon } from "./context/useGameDemon.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
<AppProviderGameDemon>
      <App />
</AppProviderGameDemon>
    </BrowserRouter>

    <GlobalStyles />
  </React.StrictMode>
);
