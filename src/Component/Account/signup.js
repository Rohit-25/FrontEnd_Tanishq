import React from 'react'



export default function signup() {
  return (
    <>
    <div className="bottom m-5"></div>
    <div className="container">
     
      <div className="Formcontent">
        <div className="row">
          <div className="col-3 col-md-3 container-fluid">
            <img src="img/signup.webp" className="singupimg img-fluid" />
          </div>
          <div className="col-6 col-md-6 container-fluid">
            <div className="container-fluid">
              <h3 className="text-center fs-5">Sign Up Now</h3>
  
              <form>
                <div className="mb-3">
                  <label className="fw-light">Gender &nbsp;</label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
  
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Female
                  </label>
                </div>
  
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Enter Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-3 col-md-3 container-fluid">
            <img src="img/signup1.webp" className="singupimg img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div className="bottom"></div>
  </>
  
  )
}
