import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api, Dashboard_user, remove_notification } from '../../../Api/api';
import Loading from '../../londing/londing';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { FaStar } from 'react-icons/fa';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';



export default function Dashboard() {
  let [isLoading, setIsLoading] = useState(true);
  const [notifications, setnotifications] = useState('');
  let [ads, setads] = useState('') ;
  const [num_ads_approved, setnum_ads_approved] = useState('');
  const [num_ads_pending, setnum_ads_pending] = useState('');
  const [num_ads_sold, setnum_ads_sold] = useState('');
  const [modalId, setModalId] = useState(null);
  const [NotificationID, setNotificationId] = useState(null);


  const [rating, setRating] = useState(0);


  const handleClick = (selectedRating) => {
    setRating(selectedRating);
    // You can add additional logic here to handle submission to backend
  };

  const getData = ()=>{
      
    axios.get(`${Api}/${Dashboard_user}`,
    {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token" )}`,
          },
      })
    .then(function (response) {
      // handle success
      console.log('mydata',response.data.notifications);
      setnum_ads_approved(response.data.num_ads_approved);
      setnum_ads_pending(response.data.num_ads_pending);
      setnum_ads_sold(response.data.num_ads_sold);
      setads(response.data.ads)
      setnotifications(response.data.notifications)
   
      setIsLoading(false)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setIsLoading(false)
    })
    .finally(function () {
      // always executed
    });
}

  const delete_notification = (id)=>{
    setIsLoading(true)
    axios.get(`${Api}/${remove_notification}/${id}`,
    {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token" )}`,
          },
      })
    .then(function (response) {
      // handle success
      console.log('mydata',response.data.notifications);
    
   
      setIsLoading(false)

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setIsLoading(false)
    })
    .finally(function () {
      // always executed
    });
}

useEffect(() => {
      
  getData()
}, [isLoading]);


const [showModal, setShowModal] = useState(false);

const handleButtonClick = (id,idNotification) => {
  setModalId(id); // Set the id for the modal
  setNotificationId(idNotification); // Set the id for the modal
  setShowModal(true); // Open the modal
};

const handleCloseModal = () => {
  setShowModal(false); // Close the modal
};

const [comment, setComment] = useState(''); // State to track the comment text



const handleCommentChange = (e) => {
  setComment(e.target.value); // Update the comment text
};

const handleUnderstood = () => {


  const formData = new FormData();
  formData.append('CommentId', modalId);
  formData.append('CommentText', comment);
  formData.append('reating', rating);


  axios.post(`${Api}/AddComment`, formData, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'multipart/form-data',
    },
  }).then(function (response) {
    console.log('message',response);
    Swal.fire({
      title: "Good job!",
      text: "Comment add successfully!",
      icon: "success"
    });
    handleCloseModal()
    delete_notification(NotificationID)

  })
  .catch(function (error) {
    console.log(error);
  });

};

  return (
    <div className="col-lg-9 col-md-8 col-12">
      {isLoading ? <Loading /> : ''}
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
               {num_ads_sold}
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
              {num_ads_approved}
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
              {num_ads_pending}
                <span>Pending Ads </span>
              </h3>
            </div>
            {/* End Single List */}
          </div>
        </div>
      </div>
      {/* End Details Lists */}
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 ">
          {/* Start Activity Log */}
          <div className="activity-log dashboard-block scrollable-container">
            <h3 className="block-title">My Activity Log</h3>
            <ul>
           {notifications && notifications.map((notification) => (
             <li>
             <div className="log-icon">
               <i className="lni lni-alarm" />
             </div>
             {notification.is_read != 0 ? 

          
          

                  <button
                  type="button"
                  className="title btn text-start"
                  onClick={() => handleButtonClick(notification.is_read,notification.id)}
                  >
                  {notification.message}
                  </button>

              

                :

                <a href="javascript:void(0)" className="title">
                {notification.message}
                 </a>
          
            }
           
             <span className="time">
             {notification.formatted_created_at}
             </span>
             <span className="remove">
               <a onClick={() => {delete_notification(notification.id)}} href="javascript:void(0)">
                 <i className="lni lni-close" />
               </a>
             </span>
           </li>
           ))}

           {notifications.length == 0 && 
            <>
           <li className=' text-center '>no data</li>
           {/* <hr /> */}
           </>
           }
             
         
            </ul>
          </div>
          {/* End Activity Log */}
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          {/* Start Recent Items */}
          <div className="recent-items dashboard-block">
            <h3 className="block-title">Sold Ads</h3>
            <ul>
              {ads && ads.map((ad) => (
                <li>
                <div className="image">
                <Link to={`/SinglePage/${ad.id}`}>
                 <img src={`http://127.0.0.1:8000/${ad.images[0].ImageURL}`} alt="#" />
                 </Link>

                </div>
                <div className=' d-flex  justify-content-between '>
                <Link to={`/SinglePage/${ad.id}`} className="title">{ad.Title}</Link>

            
                {/* <a href="javascript:void(0)" className="title btn  btn-primary  text-white ">
                {ad.status}
                </a> */}
                <span class="badge rounded-pill text-bg-success">{ad.status}</span>

                </div>
                <span className="time text-success ">
                {ad.Price} MAD
                </span>
              </li>
              ))}
           {ads.length == 0 && 
            <>
           <li className=' text-center '>no data</li>
           {/* <hr /> */}
           </>
           }
             
          
            </ul>
          </div>
          {/* End Recent Items */}
        </div>
      </div>

 


    {/* React Bootstrap Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display dynamic content based on the clicked button */}
          

              {/* Rating */}
              <div>
              <h5 className="text mb-2 ms-1">Rating</h5>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    onClick={() => handleClick(ratingValue)}
                    color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                    size={24}
                    style={{ cursor: 'pointer' }}
                  />
                );
              })}
            </div>

            {/* Comment */}
            <div className="form-floating mt-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                style={{ height: 100 }}
                value={comment}
                onChange={handleCommentChange}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUnderstood}>
           submit
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  

    </div>
    
  </div>
  
  )
}
