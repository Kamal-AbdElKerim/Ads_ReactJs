import React from 'react'

export default function MyAds() {
  return (
    <div className="col-lg-9 col-md-12 col-12">
    <div className="main-content">
      <div className="dashboard-block mt-0">
        <h3 className="block-title">My Ads</h3>
        <nav className="list-nav">
          <ul>
            <li
              className="{{ $status === 'all' ? 'active' : '' }}"
              style={{ cursor: "pointer" }}
            >
              <a>All Ads </a>
            </li>
            <li
              className="{{ $status === 'pending' ? 'active' : '' }}"
              style={{ cursor: "pointer" }}
            >
              <a>Pending </a>
            </li>
            <li
              className="{{ $status === 'approved' ? 'active' : '' }}"
              style={{ cursor: "pointer" }}
            >
              <a>Approved </a>
            </li>
            <li
              className="{{ $status === 'rejected' ? 'active' : '' }}"
              style={{ cursor: "pointer" }}
            >
              <a>Rejected </a>
            </li>
            <li
              className="{{ $status === 'sold' ? 'active' : '' }}"
              style={{ cursor: "pointer" }}
            >
              <a>Sold </a>
            </li>
          </ul>
        </nav>
        {/* Start Items Area */}
        <div className="my-items">
          {/* Start Item List Title */}
          <div className="item-list-title">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12">
                <p>Ads </p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Category</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>Status</p>
              </div>
              <div className="col-lg-3 col-md-3 col-12 align-right">
                <p>Action</p>
              </div>
            </div>
          </div>
          {/* End List Title */}
          {/* Start Single List */}
          <div className="single-item-list">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="item-image">
                  <img src="{{ url($ad->images[0]->ImageURL)}}" alt="no img" />
                  <div className="content">
                    <h3 className="title">
                      <a href="javascript:void(0)">
                      Title
                      </a>
                    </h3>
                    <span className="price">
                    
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>
                categories
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p className=" text-warning ">
                status
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-12 align-right">
                <ul className="action-btn">
                  <li style={{ cursor: "pointer" }}>
                    <a>
                      <i className="lni lni-pencil" />
                    </a>
                  </li>
                
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-eye" />
                    </a>
                  </li>
                
                  <li style={{ cursor: "pointer" }}>
                    <a >
                      <i className="lni lni-trash" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*/ End Pagination */}
        </div>
        {/* End Items Area */}
      </div>
    </div>
  </div>
  
  )
}
