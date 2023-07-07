import React from 'react';
import "./Footer.css"

const Footer = () => {
    return(
        <footer clasName="text-center text-lg-start bg-light text-muted">
        <div className="footer1 ">
          <div className="text-center text-lg-start bg-light text-muted">
          <div className="row mt-3">
      
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
              <h4 className="text-uppercase fw-bold mb-4">
                Useful Links
              </h4>
              <p>
                <a href="#!" className="text-reset">Delivery Information</a>
              </p>
              <p>
                <a href="#!" className="text-reset">International Shipping</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Payment Option</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Track your  Order</a>
              </p>
           </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h4 className="text-uppercase fw-bold mb-4">
                Information
              </h4>
              <p>
                <a href="#!" className="text-reset">Careers</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Blog</a>
              </p>
              <p>
                <a href="#!" className="text-reset">About Tanishq</a>
              </p>
              <p>
                <a href="#!" className="text-reset">FAQ</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                <h4 className="text-uppercase fw-bold mb-4">Contact Us</h4>
                <p><i className="fas fa-envelope me-3"></i>info@example.com</p>
                <p><i className="fas fa-phone me-3"></i> + 1800-266-512</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
                  <h4 className="text-uppercase fw-bold mb-4">Download the Tanishq App</h4>
                  <p><i className="fa-brands fa-google-play"></i> &nbsp;Play Store</p>
                  <p><i className="fa-brands fa-apple"></i>&nbsp; App Store</p>
                      <div>
                        <span> Follow Us On &nbsp;</span>
                        <a href="" className="me-4 text-reset">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                          <i className="fab fa-twitter"></i>
                        </a>
                        
                        <a href="" className="me-4 text-reset">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <i className="fa-solid fa-house"></i>
                      
                      </div>
              </div>
      
          </div>

        </div>
       
  
    </div>
    <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © 2022 Copyright:
          <a className="text-reset fw-bold"> Lostrg</a>
          </div>
          
        </footer>
       
    )
}

export default Footer;