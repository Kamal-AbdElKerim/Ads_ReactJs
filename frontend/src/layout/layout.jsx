import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar/Navbar';

import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Layout() {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

 
  

    return (
        <>
          
                <Navbar  />
           
          
                <Outlet />

                <Header />
          
        </>
    );
}
