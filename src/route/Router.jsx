import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/alltoys/AllToys";
import Registration from "../pages/Users/Registration";
import Login from "../pages/Users/Login";
import Profile from "../pages/pdata/Profile";
import ToyForm from "../pages/pdata/ToyForm";
import DeleteDataForm from "../pages/pdata/DeleteDataForm";
import Blogs from "../pages/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/Delete",
        element: <DeleteDataForm></DeleteDataForm>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/toy-data",
        element: <ToyForm></ToyForm>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
