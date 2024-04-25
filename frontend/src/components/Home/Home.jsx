import {React,useEffect,useState} from 'react'

import './Home.css';
import axios from 'axios';
import { Ads, Api, favorite, getAllAds, remove_favorite, user } from '../../Api/api';
import { Link , useNavigate } from 'react-router-dom';
import Loading from '../londing/londing';

export default function Home() {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCity, setIsCity] = useState([]);
  const [num_ADS, setnum_ADS] = useState([]);
  const [num_categories, setnum_categories] = useState([]);
  const [num_users, setnum_users] = useState([]);
  const [LastAds, setLastAds] = useState('');
  const [Auth, setAuth] = useState(''); 
  const [Page, setPage] = useState(1);
  const [SerachAds, setSerachAds] = useState('');
  let [links, setLinks] = useState([]) ;




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


const [formData, setFormData] = useState({
  keyword: '',

  location: ''
});

const { keyword, location } = formData;

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (e) => {
  setIsLoading(true);
  e.preventDefault();
  console.log(formData)
   axios.get(`${Api}/${Ads}?page=${Page}&keyword=${formData.keyword}&city=${formData.location}`)
  .then(function (response) {
  

    console.log('data',response)
    setSerachAds(response.data.ads.data)

     setLinks(response.data.ads.links);

     
     window.scrollTo({
       top: 1800,
       behavior: 'smooth' // Optional: Scroll behavior ('smooth' for smooth scrolling)
      });
      setIsLoading(false);

     
     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

 
};

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
      get_LastAds()
      getAds()
      getAuthUser()
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
      get_LastAds()
      getAds()
      getAuthUser()
    })
    .catch(function (error) {

      console.log('Error favoriting ad:', error);
    });
  };

  useEffect(() => {
    get_LastAds()
    getAds()
    getAuthUser()
  }, []);

  const handleKeyUp = (event) => {
    // if (event.key === 'Enter') {
      console.log(formData.keyword)
      handleSearch(formData.keyword);
    // }
  };

  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async (keyword) => {

    if (keyword !== '') {
      
   

    axios.get(`${Api}/titleAds/${keyword}`)
    .then(function (response) {
      // setIsLoading(true);
      // setTimeout(() => {
      //   setIsLoading(false)
   
      // }, 1000);
      setSearchResults(response.data);
      console.log(response.data)
    })
    .catch(function (error) {

      console.log('Error favoriting ad:', error);
    });
  }else {
    setSearchResults([])
  }
 
  };

  const handleItemClick = (title) => {
    setFormData({
      ...formData,
      keyword: title // Update the keyword field with the selected item's title
    });
    setSearchResults([])
  };

  const filterParCategorie = (id) => {
    setIsLoading(true);
     axios.get(`${Api}/${Ads}?page=${Page}&Category=${id}`)
    .then(function (response) {
    
  
      console.log('data',response)
      setSerachAds(response.data.ads.data)
  
       setLinks(response.data.ads.links);
  
       
       window.scrollTo({
         top: 1800,
         behavior: 'smooth' 
        });
        setIsLoading(false);
  
       
       
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });


  }

  return (
    <div>
     
      {isLoading && <Loading />}
      
  {/* Start Hero Area */}
  <section className="hero-area style2  "   style={{
        // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/hero/hero-bg2.jpg)`,
        backgroundColor: 'rgb(17 39 60)',
      }}>
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-lg-12  col-md-12 col-12">
          <div className="hero-text wow  fadeInLeft" data-wow-delay=".3s">
            {/* Start Hero Text */}
            <div className="section-heading  ">
              <h2>Welcome to Ads</h2>
              <p>
                Buy And Sell Everything From Used Cars To Mobile Phones And
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
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-md-4 col-12 p-0">
            <div className="search-input">
              <label htmlFor="keyword">
                {/* <i className="lni lni-search-alt theme-color" /> */}
              </label>
              <input
                className="input_icone"
                type="text"
                name="keyword"
                id="keyword"
                placeholder="Ads keyword"
                value={keyword}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                autocomplete="off" 
              />
 
            <ul className='resultShow'>
        {searchResults && searchResults.map((result) => (
          <li  className="dropdown_1" key={result.id} onClick={() => handleItemClick(result.Title)} ><i class="fa-solid fa-magnifying-glass me-2"></i> {result.Title}</li>
        ))}
      </ul>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-3 col-12 p-0">
            <div className="search-input">
              <label htmlFor="category">
                <i className="lni lni-grid-alt theme-color" />
              </label>
              <select
                className="input_icone"
                name="category"
                id="category"
                value={category}
                onChange={handleInputChange}
              >
                <option value="">Select Categories</option>
                {num_categories && num_categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.Name}
                    </option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-3 col-12 p-0">
            <div className="search-input">
              <label htmlFor="location">
                <i className="lni lni-map-marker theme-color" />
              </label>
              <select
                className="input_icone"
                name="location"
                id="location"
                value={location}
                onChange={handleInputChange}
              >
                <option value="" >Locations</option>
                {isCity && isCity.map((city) => (
                      <option value={city}>{city}</option>
                    ))} 
              </select>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-12 p-0">
            <div className="search-btn button">
              <button className="btn" type="submit">
                <i className="lni lni-search-alt" /> Search
              </button>
            </div>
          </div>
        </div>
      </form>
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
        <a onClick={() => filterParCategorie(categorie.id)} href="javascript:void(0)" className="single-cat wow fadeInUp" data-wow-delay=".1s">
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
  <section className="items-grid section fixF">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
         
            {SerachAds && SerachAds.length > 0 ? (
            <>
               <h2 className="wow fadeInUp" data-wow-delay=".4s">
               Search Results
               </h2>
           
              </>
              ) :
              <>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Last Ads
              </h2>
                 <h4 className="wow fadeInUp" data-wow-delay=".4s">
                 No data found
                 <h5 className='mt-3'>see Recommend Ads </h5>
                 </h4>
                  </>
            }
       
          </div>
        </div>
      </div>
      <div className="single-head">
      <div className="row">
      {SerachAds && SerachAds.length > 0 ? (
        
  SerachAds.map((ads) => (
    <div key={ads.id} className="col-lg-4 col-md-6 col-12">
      {/* Start Single Item */}
      <div className="single-item-grid">
        
        <div className="image">
          <Link to={`/SinglePage/${ads.id}`}>
            <img
              src={`http://127.0.0.1:8000/${ads.images[0].ImageURL}`}
              alt="#"
              className="image_io"
            />
          </Link>
          <i className="cross-badge lni lni-bolt" />
          <span className="flat-badge sale">Sale</span>
        </div>
        <div className="content">
          <a href="javascript:void(0)" className="tag">
            {ads.categories.Name}
          </a>
          <h3 className="title">
            <Link to={`/SinglePage/${ads.id}`}>{ads.Title}</Link>
          </h3>
          <p className="location">
            <a href="javascript:void(0)">
              <i className="lni lni-map-marker"></i>
              {ads.City}
            </a>
          </p>
          <ul className="info d-flex justify-content-between">
            <li className="price">{ads.Price} MAD</li>
            {ads.favorites.some(
              (favorite) =>
                favorite.UserID === Auth.id && favorite.AdID === ads.id
            ) ? (
              <li>
                <a onClick={() =>  DisiblefavouriteAds(ads.id)} href="javascript:void(0)">
                  <i className="fa-solid fa-heart-circle-check fa-2xl" style={{ color: '#c90d0d' }}></i>
                </a>
              </li>
            ) : (
              <li>
                <a onClick={() => favouriteAds(ads.id)} href="javascript:void(0)">
                  <i className="fa-regular fa-heart fa-2xl" style={{ color: '#c90d0d' }}></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className=" d-flex  justify-content-center mt-5 ">
                        </div>
      {/* End Single Item */}
    </div>
  ))
) : LastAds && LastAds.length > 0 ? (
  
  LastAds.map((ads) => (
    <div key={ads.id} className="col-lg-4 col-md-6 col-12">
      {/* Start Single Item */}
      <div className="single-item-grid">
        <div className="image">
          <Link to={`/SinglePage/${ads.id}`}>
            <img
              src={`http://127.0.0.1:8000/${ads.images[0].ImageURL}`}
              alt="#"
              className="image_io"
            />
          </Link>
          <i className="cross-badge lni lni-bolt" />
          <span className="flat-badge sale">Sale</span>
        </div>
        <div className="content">
          <a href="javascript:void(0)" className="tag">
            {ads.categories.Name}
          </a>
          <h3 className="title">
            <Link to={`/SinglePage/${ads.id}`}>{ads.Title}</Link>
          </h3>
          <p className="location">
            <a href="javascript:void(0)">
              <i className="lni lni-map-marker"></i>
              {ads.City}
            </a>
          </p>
          <ul className="info d-flex justify-content-between">
            <li className="price">{ads.Price} MAD</li>
            {ads.favorites.some(
              (favorite) =>
                favorite.UserID === Auth.id && favorite.AdID === ads.id
            ) ? (
              <li>
                <a onClick={() => DisiblefavouriteAds(ads.id)} href="javascript:void(0)">
                  <i className="fa-solid fa-heart-circle-check fa-2xl" style={{ color: '#c90d0d' }}></i>
                </a>
              </li>
            ) : (
              <li>
                <a onClick={() => favouriteAds(ads.id)} href="javascript:void(0)">
                  <i className="fa-regular fa-heart fa-2xl" style={{ color: '#c90d0d' }}></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* End Single Item */}
    </div>
  ))
  
) : (
  <div className="col-lg-12 col-md-12 col-12">
    {/* Start Single Item */}
    <div className="single-item-grid text-center">
      <img src="page_not_found/notFound.png" alt="" />
    </div>
    {/* End Single Item */}
  </div>
)}

                 

  
 

 </div>
      </div>
    </div>
 
  </section>
  <div className=' d-flex  justify-content-center mb-3'>
    <Link className="btn btn-outline-success px-5 py-2" to={'/pageAds'}>More Ads</Link>
  </div>
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
