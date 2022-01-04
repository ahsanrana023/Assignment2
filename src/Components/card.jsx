import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import './styling/stylesheet.scss'


function Card(props){
  
  
    const post=props.post;
    return (
      <figure className="figure" >
        <Link to={`single/${post.id}`}>
        <img src={post.imageLink} className="photo" alt={post.description}/>
        </Link>
        <figcaption> <p>{post.description}</p></figcaption>
        <div className="button-container">
        <button  onClick={
          ()=>{
           props.startRemovingPost(props.index,props.id)
           props.history.push('/')
          }
        }><div className="deleteIcon"></div>
          remove
          </button>
        <Link  className="button "  to={`single/${post.id}`}>
          <div className="comment-count"> 
          <div className="speech-bubble"></div>
            {props.comments[post.id]? props.comments[post.id].length:0}
          </div>
        </Link>
        </div>
      </figure>
    )
  }
  Card.propTypes = {
    post:PropTypes.object.isRequired,
    // onRemovePhoto:PropTypes.func.isRequired
  }
// class Card extends Component
// {

//   render()
//   {
//     const post=this.props.post;
//     return (
//       <figure className="figure" >
//         <img src={post.imageLink} className="photo" alt={post.description}/>
//         <figcaption> <p>{post.description}</p></figcaption>
//         <div className="button-container">
//         <button className="remove-button">remove</button>
//         </div>
//       </figure>
//     )
//   }
// }
export default Card;