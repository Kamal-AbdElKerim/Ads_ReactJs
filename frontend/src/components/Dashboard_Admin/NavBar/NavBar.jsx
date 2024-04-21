import React from 'react'
import './NavBar.css'

export default function NavBar(hiddenAside) {
  return (
    <header className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-6">
          <div className="header-left d-flex align-items-center">
            <div className="menu-toggle-btn mr-15">
              <button onClick={() => {hiddenAside}} id="menu-toggle" className="main-btn primary-btn btn-hover">
                <i className="lni lni-chevron-left me-2" /> Menu
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-6">
          <div className="header-right">
            <div className="profile-box ml-15">
              <button
                className="dropdown-toggle bg-transparent border-0"
                type="button"
                id="profile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="profile-info">
                  <div className="info">
                    <div className="image">
                      <img
                        src="{{ URL::asset('Dashboard/assets/images/profile/profile-image.png') }}"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="fw-500">
                       name
                      </h6>
                      <p>Admin</p>
                    </div>
                  </div>
                </div>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profile"
              >
                <li>
                  <div className="author-info flex items-center !p-1">
                    <div className="image">
                      <img
                        src="{{ URL::asset('Dashboard/assets/images/profile/profile-image.png') }}"
                        alt="image"
                      />
                    </div>
                    <div className="content">
                      <h4 className="text-sm">
                       name
                      </h4>
                      <a
                        className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xs"
                        href="#"
                      >
                       email
                      </a>
                    </div>
                  </div>
                </li>
                <li className="divider" />
             
                <li>
                  <form
                    id="logoutForm"
                    action="{{ route('logout') }}"
                    method="post"
                  >
                  
                    <a
                      href="javascript:void(0)"
                      onclick="document.getElementById('logoutForm').submit();"
                      className="{{ Route::currentRouteName() == 'logout' ? 'active_auth' : '' }}"
                    >
                      <i className="lni lni-enter" /> Logout
                    </a>
                  </form>
                </li>
              
                <li className="divider" />
              </ul>
            </div>
            {/* profile end */}
          </div>
        </div>
      </div>
    </div>
  </header>
  
  )
}
