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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://ass113-nhdred1-gmailcom.vercel.app/data"),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://ass113-nhdred1-gmailcom.vercel.app/data"),
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
        element: (
          <PrivateRoute>
            <DeleteDataForm></DeleteDataForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
