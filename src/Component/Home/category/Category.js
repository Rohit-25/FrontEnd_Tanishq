import React,{Component } from 'react';

import Categorydisplay from "./categorydisplay"
import "./Category.css"


const lurl ="https://zany-pear-pike-garb.cyclic.app/category";


//In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.whenever the Category  is rendered to the DOM for the first time. This is called “mounting” in React. whenever the DOM produced by the categoryis removed. This is called “unmounting” in React.
class Category extends Component {
    constructor(){
        super()
       //State is similar to props, but it is private and fully controlled by the component.
        this.state={
           categorytype:''
        }
    }
    render(){
       
                return(
                    
                    <div id="shopbyCategory">
                         <p className="text-center fs-2 sapceinbetween">Shop By Category</p>
                         <p className="text-center fs-6 ">Browse through your favourite categories. We've got them all!</p>
                         
                         <img src="https://i.ibb.co/C95k8LS/hrline.png" className="img-fluid rounded mx-auto d-block"/>
                        {/* {console.log(this.state.categorytype)}  */}
                       {/* 
                        //When React sees an element representing a user-defined component, it passes JSX ///attributes and children to this component as a single object. We call this object “props”. */}
                        {/* so here categorydisplay is a component with category ={...} as aprops and this compbine 
                        is called as element as we want to see it on screen */}
                       <Categorydisplay category={this.state.categorytype}/>
                       
                    </div>
                    
                 )

                
        }
        //We can declare special methods on the component class to run some code when a component mounts and unmounts:These methods are called “lifecycle methods”. The componentDidMount() method runs after the component output has been rendered to the DOM --
       // https://reactjs.org/docs/state-and-lifecycle.html -see Adding Lifecycle Methods to a Class
    
    componentDidMount() {
        fetch(lurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            //this.setState() to schedule updates to the component local state: 
            this.setState({categorytype:data})
           
        })
    }
   
}

export default Category;