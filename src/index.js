import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TaskList from "./components/TaskList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" index element={<Home />} />
          <Route path="/tasks" index element={<TaskList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
