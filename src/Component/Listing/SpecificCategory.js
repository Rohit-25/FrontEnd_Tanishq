import React from "react";
import "./SpecificCategory.css"
import { Link } from 'react-router-dom';

const SpecificCategory =(props)=>{
    {console.log(props)}
    // const category =
   const categoryjwell =({category})=>{
   
    if(category){
        return category.map((item)=>{
            return(
                //when u click on card 
                  
                  <div  key={item.item_id}  className="card card1" id="caedsne" style={{width: "18rem"}}>
                    <img src={item.image} className="card-img-top ring" alt="ring"/>
                    <div className="card-body">
                      <h5 className="card-title des">{item.description.slice(0,25)}.. </h5>
                      <p >	&#8377; {item.new_price}</p>
                      <p >Women | {item.Category_name}</p>
                      <div  className="d-grid gap-2">
                        <Link key={item.item_id} to={`/detail/${item.Category_name}/${item.item_id}`} className="btn btn-outline-danger">Explore Now</Link>
                      </div>
                    </div>
                
                    
                 
                </div>            
              

            )
        }
        )
    }
   }
   return(
    <div className="cardblock">
   {categoryjwell(props)}
   </div>
       
    
   
)

}
export default SpecificCategory;
