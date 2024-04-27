import "./App.css";
import React from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/root";
import MainPage from "./pages/mainpage";
import SuccessPage from "./pages/successpage";

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          path=""
          element={
            <MainPage/>
          }
        />
        <Route
          path="/success"
          element={<SuccessPage/>}
        />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
