import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import AddItems from "../pages/AddItems/AddItems";
import AllItems from "../pages/AllItems/AllItems";
import PostDetails from "../pages/PostDetails/PostDetails";
import PrivateRoute from "./PrivetRoute";
import MyItemsPage from "../pages/MyItemsPage/MyItemsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/addItems',
        element: <PrivateRoute><AddItems /></PrivateRoute>
      },
      {
        path: '/myItems',
        element: <PrivateRoute><MyItemsPage /></PrivateRoute>
      },
      {
        path: "/items/:id",
        element: <PrivateRoute><PostDetails /></PrivateRoute>,
        loader :({params})=>fetch(`https://b10a11-server-side-noorjahan220-jq55gb3g7.vercel.app/items/${params.id}`)
        
      },
      {
        path: '/allItems',
        element: <AllItems />,
        loader : () => fetch('https://b10a11-server-side-noorjahan220-jq55gb3g7.vercel.app/items')
      },
    ]
  },
]);
export default router