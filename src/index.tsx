import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Categories from "./pages/Categories";
import HookSize from "./pages/HookSize";
import Colours from "./pages/Colours";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/hooksize" element={<HookSize />}></Route>
        <Route path="/colours" element={<Colours />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
