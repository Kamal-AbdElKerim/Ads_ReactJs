import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Api } from '../../Api/api';
import Rating from './Rating';
import { FaStar } from 'react-icons/fa';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Comments({ id, setsumRating, setSumcomments, Auth }) {
  const [Comment, setComment] = useState([]);
  const [UpdateComment, setUpdateComment] = useState(true);
  const [rating, setRating] = useState(0);
  const [Updatecomm, setUpdatecomm] = useState('');
  const [commentId, setcommentId] = useState('');

  const handleClick = (selectedRating) => {
    setRating(selectedRating);
    // You can add additional logic here to handle submission to backend
  };

  const handleCommentChange = (e) => {
    setUpdatecomm(e.target.value); // Update the comment text
  };

  const Comments = () => {
    axios
      .get(`${Api}/getComment/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .then(function (response) {
        // handle success
        console.log('mydata', response);
        setComment(response.data.formattedComments);
        setsumRating(response.data.sumRating);
        setSumcomments(response.data.Sumcomments);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    if (id) {
      Comments();
    }
  }, [id]);

  const editComment = (commentId, commentText, commentRating) => {
    setUpdateComment(false);
    setcommentId(commentId)
    setUpdatecomm(commentText); // Set the existing comment text in the textarea
    setRating(commentRating); // Set the existing rating
  };

  const updateComment = () => {
    const accessToken = localStorage.getItem('access_token');
    const formData = new FormData();
  
    // Append data to FormData object
    formData.append('commentText', Updatecomm);
    formData.append('rating', rating);
  
    axios
      .post(`${Api}/updateComment/${commentId}`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data', // Set Content-Type to multipart/form-data
        },
      })
      .then(function (response) {
        // Handle success
        console.log('Comment updated successfully', response);
        // Optionally, you can refresh the comments after updating
        Comments();
        setUpdateComment(true); // Switch back to display mode after updating
      })
      .catch(function (error) {
        // Handle error
        console.log('Error updating comment', error);
        // Optionally, display an error message to the user
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update comment. Please try again!',
        });
      });
  };
  
  

  return (
    <div className="single-block comments">
      <h3>Comments ({Comment ? Comment.length : 0})</h3>

      {UpdateComment ? (
        Comment.map((Commen) => (
          <div className="single-comment" key={Commen.id}>
            <img src={`http://127.0.0.1:8000/images/${Commen.users.image}`} alt="#" />
            <div className="content">
              <div className="d-flex justify-content-between align-items-center">
                <h4>{Commen.users.name}</h4>
                {Auth && Auth.id === Commen.users.id && (
                  <button
                    onClick={() => editComment(Commen.id, Commen.CommentText, Commen.reating)} // Pass commentId, commentText, and rating
                    type="button"
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> 
                  </button>
                )}
              </div>
              <span><Rating value={Commen.reating} max={5} /></span>
              <span  className="badge rounded-pill bg-warning text-dark ms-2">
                {Commen.ads.Title}
              </span>
              <p style={{ wordWrap: 'break-word' }}>{Commen.CommentText}</p>
              <span>{Commen.timeAgo}</span>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text mb-2 ms-1">Rating</h5>
            <button
              onClick={() => setUpdateComment(true)}
              type="button"
              className="btn btn-success"
            >
              Back
            </button>
          </div>
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

          {/* Comment */}
          <div className="form-floating mt-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              style={{ height: 100 }}
              value={Updatecomm}
              onChange={handleCommentChange}
            />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>

          {/* Update button */}
          <button onClick={updateComment} type="button" className="btn btn-primary mt-3">
            Update
          </button>
        </div>
      )}
    </div>
  );
}
