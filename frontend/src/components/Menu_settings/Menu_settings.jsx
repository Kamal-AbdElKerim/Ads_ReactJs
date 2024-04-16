import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Api, user } from '../../Api/api';

export default function MenuSettings() {
  const [Auth, setAuth] = useState([]);

  const getAuthUser = ()=>{
    axios.get(`${Api}/${user}`,
    {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token" )}`,
          },
      })
    .then(function (response) {
      // handle success
      // console.log('user',response.data );
      setAuth(response.data);
 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

useEffect(() => {
  
  getAuthUser()
}, []);
 
  return (
   
      <>
  {/* Start Breadcrumbs */}
  <div className="breadcrumbs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="breadcrumbs-content">
            <h1 className="page-title">Profile Settings</h1>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <ul className="breadcrumb-nav">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Profile Settings</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Dashboard Section */}
  <section className="dashboard section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-12">
          {/* Start Dashboard Sidebar */}
          <div className="dashboard-sidebar">
            <div className="user-image">
            <img src={`http://127.0.0.1:8000/${Auth && Auth.image}`} alt="#" />
              <h3>
              {Auth && Auth.name}
                <span>
                  <a href="javascript:void(0)">{Auth && Auth.email}</a>
                </span>
              </h3>
            </div>
            <div className="dashboard-menu">
              <ul>
                <li>
                 
                  <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to='/Dashboard/user'><i className="lni lni-dashboard" />Dashboard</NavLink>

                </li>
                <li>
                
                  <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to='/EditProfile'><i className="lni lni-pencil-alt" />Edit Profile</NavLink>

                </li>
              
                <li>
                   
                    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to='/MyAds'><i className="lni lni-bolt-alt"></i> My Ads</NavLink>

                </li>
                <li>
                 
                  <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to='/Favourite'><i className="lni lni-heart" /> Favourite ads</NavLink>

                  
                </li>
                <li>
               
                  <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } to='/AddAds'><i className="lni lni-circle-plus" /> Post An Ad</NavLink>

                </li>
                <li>
                  <a href="bookmarked-items.html">
                    <i className="lni lni-bookmark" /> Bookmarked
                  </a>
                </li>
                <li>
                  <a href="messages.html">
                    <i className="lni lni-envelope" /> Messages
                  </a>
                </li>
                <li>
                  <a href="delete-account.html">
                    <i className="lni lni-trash" /> Close account
                  </a>
                </li>
                <li>
                  <a href="invoice.html">
                    <i className="lni lni-printer" /> Invoice
                  </a>
                </li>
              </ul>
              <div className="button">
                <a className="btn" href="javascript:void(0)">
                  Logout
                </a>
              </div>
            </div>
          </div>
          {/* Start Dashboard Sidebar */}
        </div>
       
       {/* layout_menu-bar */}

       <Outlet />
       
      </div>
    </div>
  </section>
  {/* End Dashboard Section */}
</>

    
  )
}
