import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Home/Header&Footer/Header';
import Footer from './Home/Header&Footer/Footer';
import Home from './Home';
import Listing from "./Listing/Listing"
import Details from "./Details/Details"
import Login from './Account/login';
import Signup from './Account/signup';

import Vieworder from './Booking/Vieworder';

//Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
//home is one component see on home.js
const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <div >
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:category_id" component={Listing}/>
                    <Route path="/detail/:Category_name/:item_id" component={Details}/>
                    <Route path="/placeorder" action="https://developerpayment.herokuapp.com/paynow"/>
                    <Route path="/vieworder" component={Vieworder}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                
                </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;