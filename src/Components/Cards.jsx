import React, { Component } from 'react';
import Card from './card'
import PropTypes from 'prop-types'
import './styling/stylesheet.scss'
import {FaPlusCircle} from 'react-icons/fa'
import {Link} from "react-router-dom"


function Cards(props){
  return (
    <div>
      {/* <button className="addIcon" onClick={
         ()=>{props.onRouteChange("addPhoto")}
        }>
        <FaPlusCircle className="Icon" />
      </button> */}
       <Link className="AddLink " to="/AddPhoto">
      <button className="addIcon" >
       
        {/* <FaPlusCircle className="Icon" /> */}
          </button>
          </Link>
    <div className="photoGrid">
     
     {
         props.posts.sort(function(x,y){return y.id-x.id}).map((post,index)=>{
             return <Card key={index} index={index} {...props} post={post}/>
         })
     }  
     
   
      
    </div>
    </div>
  )
}
Cards.propTypes = {
  posts:PropTypes.array.isRequired,
  // onRemovePhoto:PropTypes.func.isRequired,
  // onRouteChange:PropTypes.func.isRequired
}
//Class component
// class Cards extends Component
// {

//   render()
//   {
//     const posts=this.props.posts;
//     return (
//       <div className="photoGrid">
       
//        {
//            posts.map((post,index)=>{
//                return <Card key={index} post={post}/>
//            })
//        }  
       
     
        
//       </div>
//     )
//   }
// }
export default Cards;