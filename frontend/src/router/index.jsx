import { createBrowserRouter } from "react-router-dom";
// import Not_fond_page from "../pages/not_fond_page";
import Layout from "../layout/layout";
import Login from "../components/Auth/login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../components/Home/Home";
import AddAds from "../components/profile/Add_Ads/AddAds";
import Layout_settings from "../layout/Layout_settings";
import Dashboard from "../components/profile/Dashboard/Dashboard";
import EditProfile from "../components/profile/edit_profile/EditProfile";
import MyAds from "../components/profile/MyAds/MyAds";
import Favourite from "../components/profile/Favourite/Favourite";


export const router = createBrowserRouter([
    {
       
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
          
            {
                path: "*",
                element: <h1>no data</h1>,
            },
        ]
        
            
    },
    {
        element: <Layout_settings />,
        children: [
         
            {
                path: "/AddAds",
                element: <AddAds />,
            },
            {
                path: "/MyAds",
                element: <MyAds />,
            },
            {
                path: "/Favourite",
                element: <Favourite />,
            },
            {
                path: "/EditProfile",
                element: <EditProfile />,
            },
            {
                path: "/Dashboard/user",
                element: <Dashboard />,
            },
            {
                path: "*",
                element: <h1>no data</h1>,
            },
        ]
    }
   
]);
