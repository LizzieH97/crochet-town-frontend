import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Categories from "./pages/Categories";
import HookSize from "./pages/HookSize";
import Colours from "./pages/Colours";
import Item from "./pages/Item";
import SingleCategory from "./pages/SingleCategory";
import Difficulty from "./pages/Difficulty";
import SingleDifficulty from "./pages/SingleDifficulty";
import SingleHookSize from "./pages/SingleHookSize";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UpdateProfile from "./pages/UpdateProfile";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/difficulty" element={<Difficulty />}></Route>
        <Route path="/hooksize" element={<HookSize />}></Route>
        <Route path="/colours" element={<Colours />}></Route>
        <Route path="/update" element={<UpdateProfile />}></Route>
        <Route path="/item/:id" element={<Item />}></Route>
        <Route
          path="/categories/:category"
          element={<SingleCategory />}
        ></Route>
        <Route
          path="/difficulty/:difficulty"
          element={<SingleDifficulty />}
        ></Route>
        <Route path="/hooksize/:hooksize" element={<SingleHookSize />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
