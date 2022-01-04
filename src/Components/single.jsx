import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import './styling/stylesheet.scss'
import Card from "./card"
import Comments from "./comments"
class Single extends Component
{

  render()
  {
    const {match,posts}=this.props; 
    const id = Number(match.params.id);
    const post = posts.find((post) =>post.id===id);
    const comments = this.props.comments
    const index = this.props.posts.findIndex((post)=> post.id===id)
   
   if(this.props.loading === true){
    return  <div className = "loader">
      ...loading
     </div>
   }
   else if(post){
    return (
      <div className='single-photo'>
          <Card post={post} index= {index}  {...this.props}/>
          <Comments comments={comments[id]||[]} startAddingComments={this.props.startAddingComments} id = {id } />
      </div>
    )
   }
   else {
     return <div className = 'loader'>
       Not found
     </div>
   }
  }
}
export default Single;