import axios from 'axios';
import React, { Children, useEffect, useRef, useState } from 'react'
import { Ads, Api, Citys } from '../../Api/api';
import './pageAds.css'
import Loading from '../londing/londing';
import Pagination from '../Pagination/Pagination'


export default function PageAds() {
  const [isLoading, setIsLoading] = useState(false);
  let [links, setLinks] = useState([]) ;
  const [Page, setPage] = useState(1);
  const [DATAPagin, setDATAPagin] = useState('');


  const [ AllAds, setAds] = useState('');
  const [ Allcategories, setCategories] = useState('');
  const [ AllCity, setAllCity] = useState([]);
  const [ keyword, setkeyword] = useState([]);
  const [ Category, setCategory] = useState([]);
  const searchQuery = useRef()
  const [ city, setcity] = useState([]);
  const [ price, setprice] = useState([]);

  const getCity = () =>{
    axios.get(`${Api}/${Citys}`)
    .then(function (response) {
      // handle success
    //   console.log(response);

      // console.log('Category',response)
      setAllCity(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }


  const getAds = ()=>{
    axios.get(`${Api}/${Ads}?page=${Page}&Category=${Category}&keyword=${keyword}&city=${city}&price=${2000}`)
    .then(function (response) {
    

      // console.log('data',response.data)
      setAds(response.data.ads.data)
    
      setCategories(response.data.Category);
      setLinks(response.data.ads.links);
      console.log(response.data.ads)
      setDATAPagin(response.data.ads)

       
       
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}


const filterCity = (event) => {
  setIsLoading(true)
  setcity(event.target.value)
  setTimeout(() => {
    setIsLoading(false)
   }, 1000);
};

const SearchParCategorie = ($id) => {
  setIsLoading(true)
 
  setCategory($id)
 setTimeout(() => {
  setIsLoading(false)
 }, 1000);
}

const SearchParTitle = (event) => {
  setIsLoading(true)
  event.preventDefault()
  setkeyword(searchQuery.current.value)
  setTimeout(() => {
    setIsLoading(false)
   }, 1000);


}



useEffect(() => {
  getCity()
  getAds()
 
}, [city,Category,keyword,Page]);
//  console.log('Allcategories',Allcategories)
  return (
    <>
    {isLoading && <Loading />}
    
    {/* Start Breadcrumbs */}
    <div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title">Category</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <ul className="breadcrumb-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>category</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* End Breadcrumbs */}
    {/* Start Category */}
    <section className="category-page section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <div className="category-sidebar">
              {/* Start Single Widget */}
              <div className="single-widget search">
                <h3>Search Ads</h3>
                <form onSubmit={SearchParTitle} >
                  <input   ref={searchQuery} type="text" placeholder="Search Here..." />
                  <button type="submit"><i class="lni lni-search-alt"></i></button>

                  
                </form>
              </div>
              {/* End Single Widget */}
              {/* Start Single Widget */}
              <div className="single-widget">
                <h3>All Categories</h3>
                <ul className="list">
                <li>
             <a  className={`Category_hover ${Category === '' ? 'Category_active' : ''} `} onClick={()=>{SearchParCategorie('')}} href="javascript:void(0)"><i class="lni lni-dinner"></i>All<span>15</span></a>
                </li>
                  {Allcategories && Allcategories.map((categorie)=>(

                  <li>
                    <a className={`Category_hover ${Category === categorie.id ? 'Category_active' : ''} `} onClick={()=>{SearchParCategorie(categorie.id)}} href="javascript:void(0)">
                    <img className="me-2" src={`http://127.0.0.1:8000/${categorie.icon}`} width="23px" height="23px"
                                            alt=""/> {categorie.Name}
                      <span>{categorie.ads_count}</span>
                    </a>
                  </li>
                  ))}
             
                </ul>
              </div>
              {/* End Single Widget */}

              {/* Start City */}
              <div className="single-widget range">
                <h3>Search par City</h3>
                <select class="form-select" aria-label="Default select example" onChange={filterCity}>
                  <option value={''} selected>All</option>
                  {AllCity && AllCity.map((city) => (

                  <option value={city}>{city}</option>
                  ))}
               
                </select>
              </div>
              {/* End City */}

              {/* Start Single Widget */}
              <div className="single-widget range">
                <h3>Price Range</h3>
                <input
                  type="range"
                  className="form-range"
                  name="range"
                  step={1}
                  min={100}
                  max={10000}
                  defaultValue={10}
                  onchange="rangePrimary.value=value"
                />
                <div className="range-inner">
                  <label>$</label>
                  <input type="text" id="rangePrimary" placeholder={100} />
                </div>
              </div>
              {/* End Single Widget */}

          
            
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <div className="category-grid-list">
              <div className="row">
                <div className="col-12">
                  <div className="category-grid-topbar">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="title">Showing {DATAPagin && DATAPagin.from}-{DATAPagin && DATAPagin.last_page} of {DATAPagin && DATAPagin.total} ads found</h3>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <nav>
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active"
                              id="nav-grid-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-grid"
                              type="button"
                              role="tab"
                              aria-controls="nav-grid"
                              aria-selected="true"
                            >
                              <i className="lni lni-grid-alt" />
                            </button>
                         
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-grid"
                      role="tabpanel"
                      aria-labelledby="nav-grid-tab"
                    >
                      <div className="row">
                        {AllAds && AllAds.map(ads => (

                        <div className="col-lg-4 col-md-6 col-12">
                          {/* Start Single Item */}
                          <div className="single-item-grid">
                            <div className="image">
                              <a href="item-details.html">
                                {/* {console.log('ads',ads)} */}
                                <img
                                  src={`http://127.0.0.1:8000/${ads.images[0].ImageURL}`}
                                  alt="#"  className='image_io'
                                />
                              </a>
                              <i className=" cross-badge lni lni-bolt" />
                              <span className="flat-badge sale">Sale</span>
                            </div>
                            <div className="content">
                              <a href="javascript:void(0)" className="tag">
                                {ads.categories.Name }
                              </a>
                              <h3 className="title">
                                <a href="item-details.html">{ads.Title }</a>
                              </h3>
                              <p className="location">
                                <a href="javascript:void(0)">
                                  <i className="lni lni-map-marker"></i>{ads.City }
                                </a>
                              </p>
                              <ul className="info">
                                <li className="price">{ads.Price } MAD</li>
                                <li className="like">
                                  <a href="javascript:void(0)">
                                    <i className="lni lni-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Single Item */}
                        </div>
                        ))}
                   
                      </div>
                      <div className="row">
                        <div className="col-12">
                          {/* Pagination */}
                          <div className=" d-flex  justify-content-center mt-5 ">
                        <Pagination links={links}  setPage={setPage} setLoading={setIsLoading}/>
                        </div>
                          {/*/ End Pagination */}
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Category */}
  </>
  
  )
}
