import React from "react";
import "./Discount.css"

const Discount =()=>{
    return(
        <div className="Container">
        <div className="discountimg">
        <div className="card mb-3" style={{width: "100%" , height: "250px"}}>
          <div className="row g-0">
            <div className="col-md-6 col-sm-6 col-xs-6 ">
              <img src="https://i.ibb.co/Kh5wJ7B/discountimg.jpg" className="img-fluid rounded-start discount" alt="..."/>
             
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="card-body">
                
                <p className="text-center fs-1 sapceinbetween">Upto 20% Off</p>
                <p className="text-center fs-5 ">On Diamond Jewellery Value</p>
        
                <div className="container ">
                  <div className="col-md-12 text-center">
                    <button type="button" className="btn btn-outline-secondary col-4 text-center">Explore All Category</button>
                  </div>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
export default Discount;