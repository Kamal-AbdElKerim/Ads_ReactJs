import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom';

export default function NavBar({Active,hiddenAside}) {

  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('userRole');

      navigate('/login');
  };


  return (
    <header className="header mb-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-6">
          <div className="header-left d-flex align-items-center">
            <div className="menu-toggle-btn mr-15">
              <button onClick={() => {hiddenAside()}} id="menu-toggle" className={`main-btn primary-btn btn-hover  `}>
                <i className="lni lni-chevron-right me-2" /> Menu
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-6">
          <div className="header-right">
            <div className="profile-box ml-15">
            
              <ul>
                  {localStorage.getItem('access_token') ? (
                            <li >
                                
                                <a className='btn btn-primary  p-2' href='javascript:void(0)' onClick={handleLogout}><i className="lni lni-enter"></i> Logout</a>

                            </li>
                        ) : ''}
                 
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
