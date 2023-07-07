import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import SpecificCategory from "./SpecificCategory"
import "./SpecificCategory.css"



               
const url ="https://zany-pear-pike-garb.cyclic.app/shop/jewllery?category_id="
const purl="https://zany-pear-pike-garb.cyclic.app/filtercategory="
const surl ="?sort=-1"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            specificCategory:''
        }
    }
    setDataPerFilter = (data) => {
        this.setState({specificCategory:data})
    }
    render(){

        return(
            <>
                 <div className="home">
                  <nav aria-label="breadcrumb ">
                      <ol className="breadcrumb ">
                        <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>

                        <li className="breadcrumb-item active" aria-current="page">Category</li>
                      </ol>
                  </nav>
                  </div>
                 
                  <div className="sortby">
                   <div className="dropdown">
                            <button className="btn btn  dropdown-toggle btnsize" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SORT PRICE
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark " style={{alignItems:"center"}}>
                            <li><a className="dropdown-item btnsize1 " href="#" style={{color:"black"}}>HIGH TO LOW</a></li>
                            <li><a className="dropdown-item btnsize1" href="#"style={{color:"black"}}>LOW TO HIGH</a></li>
                            </ul>
                    
                    </div>
                    
                </div>
                  <br/>
                 <div className="jwelldesign">
                 <h3>Jewellery | 9072 Designs </h3>
                 </div>
            
                 <SpecificCategory category={this.state.specificCategory}/>
            </>
        )
    }




    componentDidMount(){
        let category_id = this.props.match.params.category_id;
        // console.log(category_id);
        // console.log("adad");
      
        sessionStorage.setItem('category_id',category_id);
        axios.get(`${url}${category_id}`,{method:'GET'}
        // axios.get(`${url}${category_id}`,{method:'GET'}
        )
        
        .then((res) => {this.setState({ specificCategory:res.data})})
        // console.log(category_id);
        // console.log("adad");
    }

}
 export default Listing;
    