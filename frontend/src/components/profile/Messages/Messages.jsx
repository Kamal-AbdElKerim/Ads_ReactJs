import React from 'react'

export default function Messages() {
  return (
    <>
      <div className="col-lg-9 col-md-8 col-12">
  <div className="main-content">
    <div className="dashboard-block mt-0 pb-0">
      <h3 className="block-title mb-0">Messages</h3>
      {/* Start Messages Body */}
      <div className="messages-body">
        <div className="form-head">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <form className="chat-search-form">
                <input
                  type="text"
                  placeholder="Search username"
                  name="search"
                />
                <button value="search" type="submit">
                  <i className="lni lni-search-alt" />
                </button>
              </form>
            </div>
            <div className="col-lg-7 col-12 align-right">
              <h3 className="username-title">Carlos Dobson</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-12">
            {/* Start User List */}
            <div className="user-list">
              <ul>
                {/* Start Single List */}
                <li>
                  <a href="javascript:void(0)">
                    <div className="image">
                      <img src="assets/images/messages/image1.jpg" alt="#" />
                    </div>
                    <span className="username">Laura Cormier</span>
                    <span className="short-message">Hi, how are ...</span>
                    <span className="unseen-message">02</span>
                  </a>
                </li>
                {/* End Single List */}
                {/* Start Single List */}
                <li>
                  <a href="javascript:void(0)">
                    <div className="image">
                      <img src="assets/images/messages/image2.jpg" alt="#" />
                    </div>
                    <span className="username">Paul Cox</span>
                    <span className="short-message">I love your design...</span>
                    <span className="time">NOW</span>
                  </a>
                </li>
                {/* End Single List */}
                {/* Start Single List */}
                <li>
                  <a href="javascript:void(0)">
                    <div className="image">
                      <img src="assets/images/messages/image3.jpg" alt="#" />
                    </div>
                    <span className="username">Carlos Dobson</span>
                    <span className="short-message">Hi, how are ...</span>
                    <span className="time">2 mins</span>
                  </a>
                </li>
                {/* End Single List */}
                {/* Start Single List */}
                <li>
                  <a href="javascript:void(0)">
                    <div className="image busy">
                      <img src="assets/images/messages/image4.jpg" alt="#" />
                    </div>
                    <span className="username">Dahia Divers</span>
                    <span className="short-message">Nice to meet u ...</span>
                    <span className="time">5 mins</span>
                  </a>
                </li>
                {/* End Single List */}
                {/* Start Single List */}
                <li>
                  <a href="javascript:void(0)">
                    <div className="image">
                      <img src="assets/images/messages/image5.jpg" alt="#" />
                    </div>
                    <span className="username">Jenifer Lofes</span>
                    <span className="short-message">Hello, I need so...</span>
                    <span className="time">NOW</span>
                  </a>
                </li>
                {/* End Single List */}
                {/* Start Single List */}
                <li>
                  <a href="javascript:void(0)">
                    <div className="image">
                      <img src="assets/images/messages/image6.jpg" alt="#" />
                    </div>
                    <span className="username">jebs Kristin</span>
                    <span className="short-message">Hi, I have...</span>
                    <span className="time">20 mins</span>
                  </a>
                </li>
                {/* End Single List */}
              </ul>
            </div>
            {/* End User List */}
          </div>
          <div className="col-lg-7 col-12">
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

    </>
  )
}
