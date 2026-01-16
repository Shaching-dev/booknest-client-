import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Books from "../pages/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/books",
        Component: Books,
      },
    ],
  },
]);
