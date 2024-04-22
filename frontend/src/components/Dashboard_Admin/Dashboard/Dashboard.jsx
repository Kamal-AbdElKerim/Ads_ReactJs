import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/api';
import Loading from '../../londing/londing';

export default function DashboardAdmin() {
  const [isLoading, setIsLoading] = useState(false);
  const [Ads, setAds] = useState('');
  const [AdsSold, setAdsSold] = useState('');
  const [categories, setcategories] = useState('');
  const [Users, setUsers] = useState('');

  const getData = () => {
    setIsLoading(true);
    axios.get(`${Api}/Dashboard/Admin`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    })
    .then(function (response) {
        console.log(response.data.data)
        setAds(response.data.data.ads)
        setAdsSold(response.data.data.ads_sold)
        setcategories(response.data.data.categories)
        setUsers(response.data.data.users)
      
        setIsLoading(false);
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  useEffect(() => {
    
    getData()
  }, []);
  return (
    <section className="section">
                      {isLoading && <Loading />}

    <div className="container-fluid">
      {/* ========== title-wrapper start ========== */}
      <div className="title-wrapper pt-30">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="title">
              <h2>Ads Dashboard</h2>
            </div>
          </div>
          {/* end col */}
          <div className="col-md-6">
            <div className="breadcrumb-wrapper">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#0">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Ads
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* ========== title-wrapper end ========== */}
      <div className="row">
        <div className="col-xl-6 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon purple">
              <i className="lni lni-cart-full" />
            </div>
            <div className="content">
              <h6 className="mb-10">New Ads</h6>
              <h3 className="text-bold mb-10">
              {Ads}
              </h3>
            </div>
          </div>
          {/* End Icon Cart */}
        </div>
        {/* End Col */}
        <div className="col-xl-6 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon success">
              <i className="lni lni-dollar" />
            </div>
            <div className="content">
              <h6 className="mb-10">Ads Sold</h6>
              <h3 className="text-bold mb-10">
              {AdsSold}
              </h3>
            </div>
          </div>
          {/* End Icon Cart */}
        </div>
        {/* End Col */}
        <div className="col-xl-6 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon primary">
              <i className="lni lni-credit-cards" />
            </div>
            <div className="content">
              <h6 className="mb-10">Categories</h6>
              <h3 className="text-bold mb-10">
              {categories}
              </h3>
            </div>
          </div>
          {/* End Icon Cart */}
        </div>
        {/* End Col */}
        <div className="col-xl-6 col-lg-4 col-sm-6">
          <div className="icon-card mb-30">
            <div className="icon orange">
              <i className="lni lni-user" />
            </div>
            <div className="content">
              <h6 className="mb-10">New User</h6>
              <h3 className="text-bold mb-10">
             {Users}
              </h3>
            </div>
          </div>
          {/* End Icon Cart */}
        </div>
        {/* End Col */}
      </div>
    </div>
    {/* end container */}
  </section>
  
  )
}
