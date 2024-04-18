import React from 'react'

export default function Chat() {
  return (
    <div
    className=" style_sms offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        Chat
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
    <div className="col-lg-12 col-md-12 col-12">
  <div className="main-content">
    <div className="dashboard-block mt-0 pb-0">
      <h3 className="block-title mb-0">Messages</h3>
      {/* Start Messages Body */}
      <div className="messages-body">
        <div className="form-head">
          <div className="row align-items-center text-center ">
         
            <div className="col-lg-12 col-12  p-4">
              <h3 className="username-title">Carlos Dobson</h3>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-lg-12 col-12">
            {/* Start Chat List */}
            <div className="chat-list">
              <ul className="single-chat-head">
                <li className="left">
                  <img src="assets/images/messages/image1.jpg" alt="#" />
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <span className="time">9:51 AM</span>
                  </p>
                </li>
                <li className="right">
                  <img src="assets/images/messages/image2.jpg" alt="#" />
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <span className="time">11:00 AM</span>
                  </p>
                </li>
                <li className="left">
                  <img src="assets/images/messages/image1.jpg" alt="#" />
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <span className="time">12:00 AM</span>
                  </p>
                </li>
                <li className="right">
                  <img src="assets/images/messages/image2.jpg" alt="#" />
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <span className="time">12:25 AM</span>
                  </p>
                </li>
              </ul>
              <div className="reply-block">
                <ul className="add-media-list">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-link" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-image" />
                    </a>
                  </li>
                </ul>
                <input
                  name="reply"
                  type="text"
                  placeholder="Type your message here..."
                />
                <button className="reply-btn">
                  <img src="assets/images/messages/send.svg" alt="#" />
                </button>
              </div>
            </div>
            {/* End Chat List */}
          </div>
        </div>
      </div>
      {/* End Messages Body */}
    </div>
  </div>
</div>
    </div>
  </div>
  
  )
}
