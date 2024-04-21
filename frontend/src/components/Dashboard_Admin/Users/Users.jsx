import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/api';
import Pagination from '../../Pagination/Pagination';
import Loading from '../../londing/londing';

export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState('');
  const [Page, setPage] = useState(1);
  const [Users, setUsers] = useState('');

  

  const getUsers = () => {
    setIsLoading(true);
    axios.get(`${Api}/Dashboard/Users?page=${Page}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    })
    .then(function (response) {
        console.log(response.data.data)
        setLinks(response.data.links)
        setUsers(response.data.data);
        setIsLoading(false);
    })
    .catch(function (error) {
        console.log(error);
    });
};

useEffect(() => {
  
  getUsers()
}, [Page]);



    const hiddeUser = (id) => {
      setIsLoading(true);
      axios.get(`${Api}/Dashboard/block_user/${id}?page=${Page}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
      })
      .then(function (response) {
          console.log(response)
        
          getUsers()
          setIsLoading(false);
      })
      .catch(function (error) {
          console.log(error);
      });



    }
  return (

    
  <section className="tab-components ">
                {isLoading && <Loading />}

            {/* {isLoading && <Loading />} */}
            <div className="container-fluid">
                <div className="title-wrapper pt-30 ">
                    <h2>Form Elements</h2>
                </div>
                <div className="row mt-5">
                        <div className="col-lg-12">
        <div className="card-style mb-30">
          <h6 className="mb-10">List Users</h6>
          <div className="table-wrapper table-responsive">
          
            <table className="table text-center ">
              <thead>
                <tr>
                  <th>
                    <h6>Name</h6>
                  </th>
                  <th>
                    <h6>Email</h6>
                  </th>
                  <th>
                    <h6>phone</h6>
                  </th>
                  <th>
                    <h6>Status</h6>
                  </th>
                  <th>
                    <h6>Action</h6>
                  </th>
                </tr>
                {/* end table row*/}
              </thead>
              <tbody>
                {Users && Users.map((user) => (

                <tr>
                  <td className="min-width">
                    <p>
                   {user.name}
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                      <a href="#0">
                       {user.email}
                      </a>
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                     {user.phone}
                    </p>
                  </td>
                  <td className="min-width">
                    {user.deleted_at	 === null ? 
                    
                    <span className="status-btn active-btn">Active</span>
                    :
                    <span className="status-btn success-btn">Inactive</span>
                  }
                   
                  </td>
                  <td>
                    <div className="action mx-auto d-block ">
                    {user.deleted_at	 === null ? 
                      <a onClick={() => {hiddeUser(user.id)}}
                      className="text-danger"
                      href="#"
                    >
                      <i className="fa-solid fa-user-slash" />
                    </a>
                    :
                    <a onClick={() => {hiddeUser(user.id)}}
                    className="text-primary"
                    href="#"
                  >
                    <i className="fa-solid fa-user-slash" />
                  </a>
                  }
                    
                    
                    </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            {/* end table */}
          </div>
        </div>
        {/* end card */}
      </div>
      {/* end col */}
      <Pagination links={links}  setPage={setPage} setLoading={setIsLoading}/>

    </div>
  </div>
 
  </section>
  



  )
}
