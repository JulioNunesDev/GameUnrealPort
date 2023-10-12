import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./shared/styles/GlobalStyles.ts";
import { AppPlayerGameDemon } from "./context/usePlayMusic.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppPlayerGameDemon>
      <App />
    </AppPlayerGameDemon>
    <GlobalStyles />
  </React.StrictMode>
);
