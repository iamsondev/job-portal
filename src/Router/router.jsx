import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Components/Register";
import SignIn from "../Components/SignIn/SignIn";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/Home/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/jobDetails/:id',
        loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
        Component:JobDetails
      },
      {
        path:'jobApply/:id',
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path:'myApplications',
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/signin',
        Component:SignIn
      }
    ]
  },
]);

export default router;