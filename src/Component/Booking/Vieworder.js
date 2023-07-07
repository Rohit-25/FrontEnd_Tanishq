import React ,{ Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Orderdisplay from "./orderdisplay"
// import TotalPrice from "./totalprice"

// import "./Details.css"
const url = "https://zany-pear-pike-garb.cyclic.app/orders";
const pUrl = "http://localhost:2500/placeOrder"


class Vieworder extends Component {
    constructor(){
        super()
        this.state={
            orders:'',
            cost:0  ,
            id:Math.floor(Math.random()*10000),
          
            name:'',
            email:'',
          
            phone:'',
            address:'',
            menuItem:''
        }
       
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    checkout = () => {
        let obj = this.state
        obj.menuItem = sessionStorage.getItem('menu')
        fetch(pUrl,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('Order Added'))
    }
    componentDidMount(){

        axios.get(`${url}`,{method:'GET'} )
        .then((res) =>{
            // console.log("data is here")
            // console.log(res)
            let totalPrice = 0;
            res.data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.new_price);
                return 'ok'
            })
          
            this.setState({cost:totalPrice, orders:res.data})
            
        })
        .catch(error => {
            this.setState({ error: error });
          })
    }
    
 
    render(){

          if(this.state.orders!=0){
            return (
                <>
                  
                    <div className="panel panel-primary">
                    <div className="panel-heading">
                            <h3>Please fill the details!</h3>
                 </div>
                 <div className="panel-body">
                       <form action="https://silly-sweatsuit-elk.cyclic.app/paynow" method='POST'>
                            <div className="row">
                            
                                <div className="form-group col-md-6">
                                    <label for="fname" className="control-label">FirstName</label>
                                    <input className="form-control" name="name" value={this.state.name}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email" className="control-label">Email</label>
                                    <input className="form-control" name="email" value={this.state.email}
                                    onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone" className="control-label">Phone</label>
                                    <input className="form-control" name="phone" value={this.state.phone}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address" className="control-label">Amount</label>
                                    <input className="form-control" name="address" value={this.state.count}
                                    onChange={this.handleChange}/>
                                </div>
                                </div>
                                <Orderdisplay orders ={this.state.orders} />
                                <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                <div className="d-flex justify-content-between p-3 bg-light">
               <h3 className="font-weight-bold m-0">Total Price: {this.state.cost}</h3>
                    
              <button className="btn btn-danger" onClick={this.checkout} type="submit">Place order</button>
                                     
                </div>
                </div>
                        </form>
                 </div>
                    
                    </div>
              
                </>
             )
          }
              else{
        return(
            <>
             <div className="text-center mt-5">
        <img src="https://i.ibb.co/hDQwTb9/cart-empty.png" alt="Empty cart" className="mb-3" />
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart to get started</p>
        <Link to={"/"}> <button className="btn btn-danger mt-3">Continue Shopping</button></Link>
           </div></>
    )
    }
         
        
    }

}
export default Vieworder;