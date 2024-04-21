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
import PageAds from '../components/pageAds/pageAds';
import Favourite from "../components/profile/Favourite/Favourite";
import SinglePage from "../components/Singlepage/SinglePage";
import Messages from "../components/profile/Messages/Messages";
import LayoutDashboard from "../layout/Dashboard";
import Categorie from "../components/Dashboard_Admin/Categorie/Categorie";
import DashboardAdmin from "../components/Dashboard_Admin/Dashboard/Dashboard";
import Users from "../components/Dashboard_Admin/Users/Users";
import ListAds from "../components/Dashboard_Admin/ListAds/ListAds";


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
                path: "/pageAds",
                element: <PageAds />,
            },
            {
                path: "/SinglePage/:id",
                element: <SinglePage />,
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
                path: "/Messages",
                element: <Messages />,
            },
            {
                path: "*",
                element: <h1>no data</h1>,
            },
        ]
    },
    {
        element: <LayoutDashboard />,
        children: [
         
            {
                path: "/Categorie",
                element: <Categorie />,
            },
            {
                path: "/Dashboard/Admin",
                element: <DashboardAdmin />,
            },
            {
                path: "/Users",
                element: <Users />,
            },
            {
                path: "/ListAds",
                element: <ListAds />,
            },
         
         
            {
                path: "*",
                element: <h1>no data</h1>,
            },
        ]
    }
   
]);
