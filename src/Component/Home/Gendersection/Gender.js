import React from 'react';
import "./Gender.css"

const Gender = () => {
    console.log()
    return(
      <>
       <div id="shopbygender">
              <p className="text-center fs-2 sapceinbetween">Shop by Gender</p>
              <p className="text-center fs-6 ">Explore our latest designs curated just for you!</p>
              <div className="categoryitems">
        </div>  
        <div className="categoryitems">
        <img src="https://i.ibb.co/C95k8LS/hrline.png" className="img-fluid"/>
        <div className="card card1" style={{width: "22rem"}}>
           <img src="img/Woman_5.webp" className="card-img-top img-fluid" alt="..."/>
               <div className="card-body">
                  <span className="card-text text-start sapceinbetween " style={{float:"left"}}>Women</span>
                     <div className="container ">
                     <div className="col-md-12 text-end">
                         <a  href="#" className=" nav-link link-danger" style={{marginTop:"-8px "}}>Explore </a>
                         </div>
                  </div>
                           
                 </div>
                </div>
        </div>
       

       

       </div>
      </>
    )
}

// export default Gender;