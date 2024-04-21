import React from 'react'

export default function Header() {
  return (
    <>
  {/* Start Footer Area */}
  <footer className="footer">
    {/* Start Footer Top */}
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer mobile-app">
              <h3>Mobile Apps</h3>
              <div className="app-button">
                <a href="javascript:void(0)" className="btn">
                  <i className="lni lni-play-store" />
                  <span className="text">
                    <span className="small-text">Get It On</span>
                    Google Play
                  </span>
                </a>
                <a href="javascript:void(0)" className="btn">
                  <i className="lni lni-apple" />
                  <span className="text">
                    <span className="small-text">Get It On</span>
                    App Store
                  </span>
                </a>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer f-link">
              <h3>Locations</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Chicago</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">New York City</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">San Francisco</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Washington</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Boston</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Los Angeles</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Seattle</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Las Vegas</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">San Diego</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer f-link">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="javascript:void(0)">About Us</a>
                </li>
                <li>
                  <a href="javascript:void(0)">How It's Works</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Login</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Signup</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Help &amp; Support</a>
                </li>
              </ul>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer f-contact">
              <h3>Contact</h3>
              <ul>
                <li>
                  <br /> SAFI, MAR
                </li>
                <li>
                </li>
              </ul>
            </div>
            {/* End Single Widget */}
          </div>
        </div>
      </div>
    </div>
    {/*/ End Footer Middle */}
  
  </footer>
  {/*/ End Footer Area */}
</>

  )
}
