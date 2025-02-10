import { createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Store from "./store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({
  store,
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Context.Provider
      value={{
        store,
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>
);
