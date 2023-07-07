import React from 'react';
import Photoslider from"./Home/photoslider/photoslider";
import Category from "./Home/category/Category"
import Discount from "./Home/Discount/Discounting"
import Gender from "./Home/Gendersection/Gender"


//these are components inside components see on category.js
const Home = () => {
    return(

        <React.Fragment>
          
        <Photoslider/>
        
        <Category/>
        <Discount/>
        {/* <Gender/> */}
       
       

      </React.Fragment>
    )
}

export default Home;