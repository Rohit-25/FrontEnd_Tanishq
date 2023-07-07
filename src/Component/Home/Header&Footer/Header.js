import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import "./Header.css"



const Header = () => {
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar-light " id ="navcustom">
            
            <Link to={"/"} className="navbar-brand " href="#"><img src="https://i.ibb.co/Ch54fHw/tanishq-logo.jpg" alt="Logo" className="logoimg rounded-pill"/></Link>
            <form className="form-inline d-flex col-lg-6 mx-auto">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ms-auto">
             
              <li className="nav-item dropdown me-5">
              {/* <Link to={"/account"}  className="nav-link" > */}
                
                <div className="img-text-container nav-link dropdown-toggle " data-bs-toggle="dropdown"role="button" >
                  <img src="https://i.ibb.co/kJ43Qwx/account.png" alt="Stores" className="logoimg1 rounded-pill"/>
                  <span >Account</span>
                </div>
              
                <ul className="dropdown-menu dropdown-menu-end">
                    <div className="Signin">
                      <h5>MY ACCOUNT</h5>
                      <p className="fsize">LOGIN TO ACCESS YOUR ACCOUNT</p>
                      <Link to={"/login"}  className="nav-link" >
                      <button type="button" className="btn btn-outline-danger">LOGIN</button>
                      </Link>
                      <Link to={"/signup"}  className="nav-link" >
                      <button type="button" className="btn btn-outline-danger"><a >SIGN UP</a></button>
                      </Link>
                    </div>
                  </ul>
                
                
              
              {/* </Link> */}
            </li>


            <li className="nav-item  me-5">
              <Link to={"/vieworder"}  className="nav-link" href="#">
              <div className="img-text-container">
                <img src="https://i.ibb.co/98jPSfn/cart.png" alt="Stores" className="logoimg1 rounded-pill"/>
                <span>Cart</span>
              </div>
            </Link>
          </li>
              
            </ul>
          </nav>
       </>
    )
}

export default Header;