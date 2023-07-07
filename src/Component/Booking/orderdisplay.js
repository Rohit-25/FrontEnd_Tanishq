import React, { useState, useEffect } from 'react';
import "./vieworder.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
const url="https://zany-pear-pike-garb.cyclic.app/deleteOrder"


const Orderdisplay =(props)=>{
    
                const [orders, setOrders] = useState([]);
                // useEffect(() => {
                //     window.location.reload();
                //   }, []);
                useEffect(() => {
                    fetchOrders();
                    
                }, []); 
               

                const fetchOrders = () => {
                    axios
                    .get('https://zany-pear-pike-garb.cyclic.app/orders')
                    // let totalPrice = 0;
                    // res.data.map((item) => {
                    //     totalPrice = totalPrice + parseFloat(item.new_price);
                    //     return 'ok'
                    // })
                  
                    // this.setState({cost:totalPrice, orders:res.data})
                    .then((response) => {
                       
                        setOrders(response.data);
                       
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                };

                const deleteOrder = async (orderId) => {
                   
                   
                    try {
                    await axios.delete(`${url}/${orderId}`);
                    
                    
                    setOrders((prevOrders) => prevOrders.filter((order) => order.item_id !== orderId));
                    window.location.reload();
                    
                    } catch (error) {
                    console.error(error);
                    }
                };
             
    if(orders.length !=0){
        return orders.map((item)=>{
            // let totalPrice=0;
            // totalPrice = totalPrice + parseFloat(item.new_price);
           
                return(
                    <>
                       <div className="imageSize">
                        <br/>
                        <br/>
                <div className="row">
                <div className="col-4">
                <img src="https://i.ibb.co/QnMfkHp/Bangle.webp" alt="Image of item" className="img-fluid " />
                </div>
                <div className="col-4">
                <h1 style ={{fontSize:"20px"}}>{item.description}</h1>
                <h3 style ={{fontSize:"15px"}}> &#8377; {item.new_price}</h3>
                <button className="btn btn-danger" style={{marginRight:"5%"}} type="button" onClick={() => deleteOrder(item.item_id)}>Delete</button>
                {/* <button>Add</button> */}
                <br/>
               {/* { console.log(totalPrice)    } */}
                
                </div>
                </div>
                </div>  

                
                    </>
                      


                )
        }
        )
    }

   
    
   
}


export default Orderdisplay;

       

