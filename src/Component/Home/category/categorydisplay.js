import React from "react";
import "./Category.css"
import { Link } from 'react-router-dom';

const CategoryType =(props)=>{
    // {console.log(props)}
    // const category =
   const categorytpe =({category})=>{
   
    if(category){
        return category.map((item)=>{
            return(
                //when u click on card 
                // 
                <Link key={item._id} to={`/listing/${item.category_id}`}>
                <div className="card card2" style={{Width: "10rem"}}>
                    
                <img src={item.img_url} className="card-img-top  img-fluid1 img-fluid" alt="..."/>
                <div className="card-body">
                    <p className="card-text text-center sapceinbetween ">{item.category}</p>
                    <span  href="#" className="text-center nav-link link-danger ">Explore </span>
               </div>
               </div>
               </Link>              
              

            )
        }
        )
    }
   }
   return(
    <div>
   {categorytpe(props)}
   </div>
       
    
   
)

}
export default CategoryType;

       

