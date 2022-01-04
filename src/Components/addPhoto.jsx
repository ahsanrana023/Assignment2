import React, { Component } from 'react';
import title from "./Title"
import './styling/stylesheet.scss'
import Title from './Title';
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from "react-router-dom"
import PropTypes  from "prop-types"
// import ReactDOM from 'react-dom';




class AddPhoto extends Component
{
  constructor(){
    super();
    this.state = {
      
    }

  }
  handleSubmit=(event)=>{
    event.preventDefault();
    let form = event.target.elements;
    const link = form.link.value;
    const description = form.description.value;
    const post = {
      id:Number(new Date()),
      description:description,
      imageLink:link
    }
    if(link&&description){
      this.props.startAddingPost(post)
      this.props.history.push('/')
    }

  }
  render()
  {
    const title=this.props.title;
    const props= this.props
    return (
      <div>
         <button className="PreviousIcon" >
         
      </button>
       
        
     
     <div className="form">    
      <form onSubmit={this.handleSubmit}>
            <input type="text" name="link" placeholder="Link"/>
            <input type="text" name="description" placeholder="Description"/>
            <button className="remove-button">
              Post
            </button>
          </form>
          </div>

      </div>    )
  }
}
// AddPhoto.propTypes = {
//   onRouteChange:PropTypes.func.isRequired
// }
export default AddPhoto;