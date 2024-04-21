import React, { useState } from "react";
import Navbar from '../components/navbar/Navbar';

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Layout() {

    const hiddenAside =() => {
       console.log('object')
    }
  

    return (
        <>
          
                <Navbar hiddenAside={hiddenAside} />
           
          
                <Outlet />

                <Header />
          
        </>
    );
}
