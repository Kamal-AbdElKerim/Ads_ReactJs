import React from 'react'

export default function Dashboard() {
  return (
    <div className="col-lg-9 col-md-8 col-12">
    <div className="main-content">
      {/* Start Details Lists */}
      <div className="details-lists">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            {/* Start Single List */}
            <div className="single-list">
              <div className="list-icon">
                <i className="lni lni-checkmark-circle" />
              </div>
              <h3>
               22
                <span>Ad Sold</span>
              </h3>
            </div>
            {/* End Single List */}
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            {/* Start Single List */}
            <div className="single-list two">
              <div className="list-icon">
                <i className="lni lni-bolt" />
              </div>
              <h3>
              11
                <span>Approved Ads </span>
              </h3>
            </div>
            {/* End Single List */}
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            {/* Start Single List */}
            <div className="single-list three">
              <div className="list-icon">
                <i className="lni lni-emoji-sad" />
              </div>
              <h3>
              44
                <span>Pending Ads </span>
              </h3>
            </div>
            {/* End Single List */}
          </div>
        </div>
      </div>
      {/* End Details Lists */}
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          {/* Start Activity Log */}
          <div className="activity-log dashboard-block">
            <h3 className="block-title">My Activity Log</h3>
            <ul>
           
              <li>
                <div className="log-icon">
                  <i className="lni lni-alarm" />
                </div>
                <a href="javascript:void(0)" className="title">
               22
                </a>
                <span className="time">
                44
                </span>
                <span className="remove">
                  <a href="{{ route('remove_notification',$notification->id) }}">
                    <i className="lni lni-close" />
                  </a>
                </span>
              </li>
         
            </ul>
          </div>
          {/* End Activity Log */}
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          {/* Start Recent Items */}
          <div className="recent-items dashboard-block">
            <h3 className="block-title">Recent Ads</h3>
            <ul>
              <li>
                <div className="image">
                  <a href="javascript:void(0)">
                    <img src="{{ asset($ad->images[0]->ImageURL) }}" alt="#" />
                  </a>
                </div>
                <a href="javascript:void(0)" className="title">
                hh
                </a>
                <span className="time">
                m
                </span>
              </li>
             
          
            </ul>
          </div>
          {/* End Recent Items */}
        </div>
      </div>
    </div>
  </div>
  
  )
}
