import React from 'react'

export default function Favourite() {
  return (
    <div className="col-lg-9 col-md-12 col-12">
    <div className="main-content">
      <div className="dashboard-block mt-0">
        <h3 className="block-title">My Favorites</h3>
        <nav className="list-nav">
          <ul>
            <li className="active">
              <a href="javascript:void(0)">
               
                <span>
                 55
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Start Items Area */}
        <div className="my-items">
          {/* Start List Title */}
          <div className="item-list-title">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12">
                <p>Job Title</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Category</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Condition</p>
              </div>
              <div className="col-lg-3 col-md-3 col-12 align-right">
                <p>Action</p>
              </div>
            </div>
          </div>
          {/* Start Single List */}
          <div className="single-item-list">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="item-image">
                  <img
                    src="{{ asset($favorite->ads->images[0]->ImageURL) }}"
                    alt="#"
                  />
                  <div className="content">
                    <h3 className="title">
                      <a href="javascript:void(0)">
                      title
                      </a>
                    </h3>
                    <span className="price  ">
                    Price
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>
                Name
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>
                Condition
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-12 align-right">
                <ul className="action-btn">
                  <li>
                    <a href="{{ route('SinglPage',$favorite->ads->id) }}">
                      <i className="lni lni-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="{{ route('remove_favorite', $favorite->ads->id) }}">
                      <i
                        className="fa-solid fa-heart-circle-xmark"
                        style={{ color: "#ff004c" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Items Area */}
      </div>
    </div>
  </div>
  
  )
}
