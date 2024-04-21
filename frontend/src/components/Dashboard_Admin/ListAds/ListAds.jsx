import React, { useEffect, useState } from 'react'
import Loading from '../../londing/londing'
import axios from 'axios';
import { Api } from '../../../Api/api';
import Pagination from '../../Pagination/Pagination';

export default function ListAds() {
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState('');
  const [Page, setPage] = useState(1);
  const [Ads, setAds] = useState('');

  
  const getUsers = () => {
    setIsLoading(true);
    axios.get(`${Api}/Dashboard/Ads?page=${Page}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    })
    .then(function (response) {
        console.log(response.data.data)
        setLinks(response.data.links)
        setAds(response.data.data);
        setIsLoading(false);
    })
    .catch(function (error) {
        console.log(error);
    });
};

useEffect(() => {
  
  getUsers()
}, [Page]);


  const ApproveAds = (id) => {
      setIsLoading(true);
      axios.get(`${Api}/Dashboard/approve/${id}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
      })
      .then(function (response) {
          console.log(response)
      
          setIsLoading(false);
          getUsers()
      })
      .catch(function (error) {
          console.log(error);
      });

  }

  const RejectAds = (id) => {

    setIsLoading(true);
      axios.get(`${Api}/Dashboard/reject/${id}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
      })
      .then(function (response) {
          console.log(response)
      
          setIsLoading(false);
          getUsers()
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
                    <h6>Title</h6>
                  </th>
                  <th>
                    <h6>Description</h6>
                  </th>
                  <th>
                    <h6>catgaory</h6>
                  </th>
                  <th>
                    <h6>user</h6>
                  </th>
                  <th>
                    <h6>Price</h6>
                  </th>
                  <th>
                    <h6>city</h6>
                  </th>
                  <th>
                    <h6>Location</h6>
                  </th>
                  <th>
                    <h6>status</h6>
                  </th>
                  <th>
                    <h6>option</h6>
                  </th>
                </tr>
                {/* end table row*/}
              </thead>
              <tbody>
                {Ads && Ads.map(Ad =>(

                <tr>
                  <td className="min-width">
                    <p>
                     {Ad.Title}
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                      <a href="#0">
                       {Ad.Description}
                      </a>
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                      {Ad.categories.Name}
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                     {Ad.users.name}
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                     {Ad.Price}
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                      {Ad.City}
                    </p>
                  </td>
                  <td className="min-width">
                    <p>
                      {Ad.Location}
                    </p>
                  </td>
                  <td className="min-width">
                  {Ad.status === 'pending' && <span className="badge rounded-pill text-bg-warning ">pending</span>}
                  {Ad.status === 'approved' && <span className="badge rounded-pill text-bg-primary">approved</span>}
                  {Ad.status === 'rejected' && <span className="badge rounded-pill text-bg-danger">rejected</span>}
                  {Ad.status === 'sold' && <span className="badge rounded-pill text-bg-success">sold</span>}
                
                  </td>
                  <td>
                    <div className="action mx-auto d-block">
                    {Ad.status === 'pending' && 
                    
                   <>
                      <a onClick={() => {ApproveAds(Ad.id)}}
                        className="text-primary me-3"
                        href="#"
                      >
                        Approve
                      </a>
                    
                     <a onClick={() => {RejectAds(Ad.id)}}
                        className="text-danger"
                        href="#"
                      >
                        Reject
                      </a>
                      </>
                    }
                    {Ad.status === 'approved' && 
                    
                   <>
                     <a onClick={() => {RejectAds(Ad.id)}}
                        className="text-danger"
                        href="#"
                      >
                        Reject
                      </a>
                      </>
                    }
                    {Ad.status === 'rejected' && 
                    
                   <>
                     <a onClick={() => {ApproveAds(Ad.id)}}
                        className="text-primary me-3"
                        href="#"
                      >
                        Approve
                      </a>
                      </>
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
