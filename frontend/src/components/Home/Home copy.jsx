import {React,useEffect,useState} from 'react'

import './Home.css';
import axios from 'axios';
import { Api, favorite, getAllAds, remove_favorite, user } from '../../Api/api';
import { Link , useNavigate } from 'react-router-dom';
import Loading from '../londing/londing';

export default function Hodme() {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCity, setIsCity] = useState([]);
  const [num_ADS, setnum_ADS] = useState([]);
  const [num_categories, setnum_categories] = useState([]);
  const [num_users, setnum_users] = useState([]);
  const [LastAds, setLastAds] = useState('');
  const [Auth, setAuth] = useState(''); 

  const navigate = useNavigate();
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

  const getAds = ()=>{
        axios.get(`${Api}/${getAllAds}`)
        .then(function (response) {
          // handle success
          console.log(response);
          setCards(response.data.ads)
          setIsCity(response.data.citys)
          setnum_ADS(response.data.num_ADS)
          setnum_categories(response.data.num_categories)
          setnum_users(response.data.num_users)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }

  const get_LastAds = ()=>{

        axios.get(`${Api}/Latest_Products`)
        .then(function (response) {
          // handle success
          console.log(response);
          setLastAds(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }

  const favouriteAds = (id) => {
    console.log(id)
    axios.get(`${Api}/${favorite}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(function (response) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false)
   
      }, 1000);
      console.log('Ad favorited successfully!', response);
    })
    .catch(function (error) {
      navigate('/login')
      console.log('Error favoriting ad:', error);
    });
  };

  const DisiblefavouriteAds = (id) => {
    console.log(id)
    axios.get(`${Api}/${remove_favorite}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(function (response) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false)
   
      }, 1000);
      console.log('Ad favorited successfully!', response);
    })
    .catch(function (error) {

      console.log('Error favoriting ad:', error);
    });
  };

  useEffect(() => {
    get_LastAds()
    getAds()
    getAuthUser()
  }, [isLoading]);

  return (
    <div>
     
      {isLoading && <Loading />}
      
  {/* Start Hero Area */}
  <section className="hero-area style2 overlay">
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-lg-12  col-md-12 col-12">
          <div className="hero-text wow  fadeInLeft" data-wow-delay=".3s">
            {/* Start Hero Text */}
            <div className="section-heading  ">
              <h2>Welcome to ClassiGrids</h2>
              <p>
                Buy And Sell Everything From Used Cars To Mobile Phones And{" "}
                <br />
                Computers, Or Search For Property, Jobs And More.
              </p>
            </div>
            {/* End Hero Text */}
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-12">
          {/* Start Search Form */}
          <div className="search-form wow fadeInUp" data-wow-delay=".7s">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 p-0">
                <div className="search-input">
                  <label htmlFor="keyword">
                    <i className="lni lni-search-alt theme-color" />
                  </label>
                  <input
                    className="input_icone"
                    type="text"
                    name="keyword"
                    id="keyword"
                    placeholder="Product keyword"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 p-0">
                <div className="search-input">
                  <label htmlFor="category">
                    <i className="lni lni-grid-alt theme-color" />
                  </label>
                  <select className="input_icone" name="category" id="category">
                    <option value="none" selected="" disabled="">
                      Categories
                    </option>
                    <option value="none">Vehicle</option>
                    <option value="none">Electronics</option>
                    <option value="none">Mobiles</option>
                    <option value="none">Furniture</option>
                    <option value="none">Fashion</option>
                    <option value="none">Jobs</option>
                    <option value="none">Real Estate</option>
                    <option value="none">Animals</option>
                    <option value="none">Education</option>
                    <option value="none">Matrimony</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 p-0">
                <div className="search-input">
                  <label htmlFor="location">
                    <i className="lni lni-map-marker theme-color" />
                  </label>
                  <select className="input_icone" name="location" id="location">
                    <option value="none" selected="" disabled="">
                      Locations
                    </option>
                    <option value="none">New York</option>
                    <option value="none">California</option>
                    <option value="none">Washington</option>
                    <option value="none">Birmingham</option>
                    <option value="none">Chicago</option>
                    <option value="none">Phoenix</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12 p-0">
                <div className="search-btn button">
                  <button className="btn">
                    <i className="lni lni-search-alt" /> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Search Form */}
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Area */}


  {/* Start Achievement Area */}
  <section className="our-achievement section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
            <h3 className="counter">
              <span id="secondo1" className="countup" cup-end={1250}>
              {num_ADS && num_ADS.length}
              </span>
              +
            </h3>
            <p>Regular Ads</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
            <h3 className="counter">
              <span id="secondo2" className="countup" cup-end={350}>
              {isCity && isCity.length}
              </span>
              +
            </h3>
            <p>Locations</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 className="counter">
              <span id="secondo3" className="countup" cup-end={2500}>
              {num_users && num_users.length}
              </span>
              +
            </h3>
            <p>Reguler Members</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 className="counter">
              <span id="secondo3" className="countup" cup-end={250}>
              {num_categories && num_categories.length}
              </span>
              +
            </h3>
            <p>Categories</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Achievement Area */}
  {/* Start Categories Area */}
  <section className="categories style2">
    <div className="container">
      <div className="cat-inner">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 className="wow " data-wow-delay=".4s">
                Explore by Category
              </h2>
              <p className="wow " data-wow-delay=".6s">
                Dive into our curated selection organized by category. Whether
                you're searching for tech essentials, stylish accessories, or
                home comforts, we've categorized our offerings to streamline
                your exploration.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
        {num_categories && num_categories.map((categorie, index) => (
    <div className="col-lg-2 col-md-3 col-12" key={index}>
        <a href="category.html" className="single-cat wow fadeInUp" data-wow-delay=".1s">
            <div className="icon">
            <img src={'http://127.0.0.1:8000/' + categorie.icon} alt="#" />
            </div>
            <h3>{categorie.Name}</h3>
            <h5 className="total"></h5>
        </a>
    </div>
))}

      

        </div>
      </div>
    </div>
  </section>
  {/* /End Categories Area */}
  {/* Start Items Grid Area */}
  <section className="items-grid section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Latest Products
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              Welcome to the cutting edge of innovation! Discover our newest
              arrivals, meticulously crafted to elevate your experience. From
              sleek gadgets to sophisticated designs.
            </p>
          </div>
        </div>
      </div>
      <div className="single-head">
      <div className="row">
                        {LastAds.length > 0 ? LastAds.map(ads => (

                        <div className="col-lg-4 col-md-6 col-12">
                          {/* Start Single Item */}
                          <div className="single-item-grid">
                            <div className="image">
                             
                              <Link to={`/SinglePage/${ads.id}`}>
                              <img
                                  src={`http://127.0.0.1:8000/${ads.images[0].ImageURL}`}
                                  alt="#"  className='image_io'
                                />
                              </Link>
                              <i className=" cross-badge lni lni-bolt" />
                              <span className="flat-badge sale">Sale</span>
                            </div>
                            <div className="content">
                              <a href="javascript:void(0)" className="tag">
                                {ads.categories.Name }
                              </a>
                              <h3 className="title">
                              <Link to={`/SinglePage/${ads.id}`}>
                              {ads.Title }
                              </Link>
                                
                              </h3>
                              <p className="location">
                                <a href="javascript:void(0)">
                                  <i className="lni lni-map-marker"></i>{ads.City }
                                </a>
                              </p>
                              <ul className="info d-flex  justify-content-between ">
                                <li className="price">{ads.Price } MAD</li>
                                {ads.favorites.some(
                                 (favorite) => favorite.UserID === Auth.id && favorite.AdID === ads.id
                                     ) ? 
                                
                                <li  className="">
                                <a  onClick={() =>  DisiblefavouriteAds(ads.id)} href="javascript:void(0)">
                                <i class="fa-solid fa-heart-circle-check fa-2xl" style={{ color: '#c90d0d' }}></i>
                                </a>
                                

                                </li>
                                
                                
                                :
                                
                                <li  className="">
                                <a   onClick={() => favouriteAds(ads.id)} href="javascript:void(0)">
                                <i class="fa-regular fa-heart fa-2xl" style={{ color: '#c90d0d' }}></i>
                                </a>
                                

                                </li>
                                
                                
                                
                                }
                              
                              </ul>
                            </div>
                          </div>
                          {/* End Single Item */}
                        </div>
                        )) : 
                        <div className="col-lg-12 col-md-12 col-12">
                        {/* Start Single Item */}
                        <div className="single-item-grid text-center ">
                            <img src="page_not_found/notFound.png" alt="" />
                          </div>
                          </div>
                        
                        
                        
                        }
                   
                      </div>
      </div>
    </div>
  </section>
  {/* /End Items Grid Area */}
  {/* Start How Works Area */}
  <section className="how-works section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              How it Works
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          {/* Start Single Work */}
          <div className="single-work wow fadeInUp" data-wow-delay=".2s">
            <span className="serial">01</span>
            <h3>Create Account</h3>
            <p>
              Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod
              tempor incididunt labore.
            </p>
          </div>
          {/* End Single Work */}
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          {/* Start Single Work */}
          <div className="single-work wow fadeInUp" data-wow-delay=".4s">
            <span className="serial">02</span>
            <h3>Post Your Ads</h3>
            <p>
              Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod
              tempor incididunt labore.
            </p>
          </div>
          {/* End Single Work */}
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          {/* Start Single Work */}
          <div className="single-work wow fadeInUp" data-wow-delay=".6s">
            <span className="serial">03</span>
            <h3>Sell Your Item</h3>
            <p>
              Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod
              tempor incididunt labore.
            </p>
          </div>
          {/* End Single Work */}
        </div>
      </div>
    </div>
  </section>
  {/* End How Works Area */}



    </div>
  )
}
