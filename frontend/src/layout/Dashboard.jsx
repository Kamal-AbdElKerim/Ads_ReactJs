import React, { useState } from "react";
import Navbar from '../components/navbar/Navbar';

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/Dashboard_Admin/NavBar/NavBar";
import Aside from "../components/Dashboard_Admin/NavBar/aside";

export default function LayoutDashboard() {
  

    return (
        <>
                <Aside />
           <main class="main-wrapper">
                <NavBar />
           
          
               
                <Outlet />

            </main>
            
          
          
        </>
    );
}
