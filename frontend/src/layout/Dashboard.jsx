import React, { useState } from "react";
import Navbar from '../components/navbar/Navbar';

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/Dashboard_Admin/NavBar/NavBar";
import Aside from "../components/Dashboard_Admin/NavBar/aside";

export default function LayoutDashboard() {
    const [Active, setActive] = useState(false);
  const hiddenAside = () => {
    setActive(!Active)
  

  }

    return (
        <>
                <Aside Active={Active} hiddenAside={hiddenAside}  />
                <div className={`overlay ${Active ? 'active' : ''}`} ></div>
           <main className={`main-wrapper  ${Active ? 'active' : ''}`}>
               <NavBar Active={Active} hiddenAside={hiddenAside} />
           
          
               
                <Outlet />

            </main>
            
          
          
        </>
    );
}
