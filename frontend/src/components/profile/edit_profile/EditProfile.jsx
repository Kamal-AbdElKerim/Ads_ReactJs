import React from 'react'

export default function EditProfile() {
  return (
    <div className="col-lg-9 col-md-8 col-12">
    <div className="main-content">
      {/* Start Profile Settings Area */}
      <div className="dashboard-block mt-0 profile-settings-block">
        <h3 className="block-title">Profile Settings</h3>
        <div className="inner-block">
          <div className="image">
            <img src="assets/images/dashboard/user-image.jpg" alt="#" />
          </div>
          <form className="profile-setting-form" method="post" action="#">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>First Name*</label>
                  <input
                    name="first-name"
                    type="text"
                    placeholder="Steve"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Last Name*</label>
                  <input
                    name="last-name"
                    type="text"
                    placeholder="Aldridge"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Username*</label>
                  <input
                    name="usernames"
                    type="text"
                    placeholder="@username"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="form-group">
                  <label>Email Address*</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="username@gmail.com"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group upload-image">
                  <label>Profile Image*</label>
                  <input
                    name="profile-image"
                    type="file"
                    placeholder="Upload Image"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group message">
                  <label>About You*</label>
                  <textarea
                    name="message"
                    placeholder="Enter about yourself"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group button mb-0">
                  <button type="submit" className="btn ">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Profile Settings Area */}
      {/* Start Password Change Area */}
      <div className="dashboard-block password-change-block">
        <h3 className="block-title">Change Password</h3>
        <div className="inner-block">
          <form className="default-form-style" method="post" action="#">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Current Password*</label>
                  <input
                    name="current-password"
                    type="password"
                    placeholder="Enter old password"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>New Password*</label>
                  <input
                    name="new-password"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Retype Password*</label>
                  <input
                    name="retype-password"
                    type="password"
                    placeholder="Retype password"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group button mb-0">
                  <button type="submit" className="btn ">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Password Change Area */}
    </div>
  </div>
  )
}
