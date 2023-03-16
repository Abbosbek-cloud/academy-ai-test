import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Project1 from "./Project1";
import Project2 from "./Project2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project1",
    element: <Project1 />,
  },
  {
    path: "/project2",
    element: <Project2 />,
  },
]);
