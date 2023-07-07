
import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Details.css"
const url = "https://zany-pear-pike-garb.cyclic.app/proddetail";
const purl ="https://zany-pear-pike-garb.cyclic.app/cart"
///rings?item_id=1

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            message: '',  
        }
    }
    handleClick = () => {

      const { details ,error} = this.state;

      axios
        .post(`${purl}`, details)
        
        .then((response) => {
          this.setState({ message: 'Item added to cart!' });
        })
        .catch((error) => {
          console.error(error);
        });
    };
    
    render(){
        const { details,error} = this.state;
        const { message} = this.state;
        if(details){
        return details.map((item)=>{
           return (
            <>
                       <div className="home">
                      <nav aria-label="breadcrumb ">
                          <ol className="breadcrumb ">
                            <li className="breadcrumb-item"><Link  to={"/"}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"> <Link 
                          to= {`/listing/${item.category_id}`}>{
                            item.category_id === 1 ? "Earrings" :
                            item.category_id === 2 ? "Rings" :
                            item.category_id === 3 ? "Pendents" :
                            item.category_id === 4 ? "Coins" :
                             item.description}</Link></li>
                             <li className="breadcrumb-item active" aria-current="page"> {item.description}
                          </li>
                          </ol>
                      </nav>
                  </div>
    
                  <br/>
                  <br/>
                  <br/>
                    <div className="imageSize3 ">
                    <div className="row">
                    <div className="col-6">
                    <img src="https://i.ibb.co/QnMfkHp/Bangle.webp" alt="Image of item" className="img-fluid imageSize mb-5" />
                    </div>
                    <div className="col-6">
                    <h1 style ={{justifyContent:"center"}}>{item.description}</h1>
                    <img src="https://i.ibb.co/C95k8LS/hrline.png" className="img-fluid rounded mx-auto d-block"/>
                    <p>Never go out of the spotlight with this pair of drop {item.description} crafted in 18 Karat Yellow Gold and studded with diamonds. </p>
                    <p>{item.purity}</p>
                    <h3> &#8377; {item.new_price}</h3>
                    <br/>
                    {/* < AddToCartButton item={item}/> */}
                    <button className="btn btn-danger" style={{marginRight:"5%"}} type="button" onClick={this.handleClick} >Add to Cart</button>
                    {/* the && operator will only render the element on the right side of the operator if the operand on the left side is true. */}
                    {message && <p>{message}</p>}
                  
                    </div>
                    </div>
                    </div>    
                         
                </>

           )
        }
        )
           
        }

        
    }

     componentDidMount(){

        let Category_name = this.props.match.params.Category_name;
        let item_id = this.props.match.params.item_id;
       
      // console.log(`${url}/${Category_name}?item_id=${item_id}`)
        // sessionStorage.setItem('Category_name',Category_name);
        axios.get(`${url}/${Category_name}?item_id=${item_id}`,{method:'GET'} )
    
        .then((res) => {this.setState({details:res.data})})
        .catch(error => {
            this.setState({ error: error });
          })
        // console.log("hey")
      
        // console.log(item_id)
        
    
    }

//
}   
export default Details;
