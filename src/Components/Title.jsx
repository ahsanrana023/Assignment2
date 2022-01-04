import React, { Component } from 'react';
import './styling/stylesheet.scss'
// import ReactDOM from 'react-dom';



function Title(props)
{
  const title=props.title;
  return (
    <div className="title header__text-box ">
      <h1 className="heading-primary">
       
      {title}
   
      </h1>
    </div>
  )
}


// class Title extends Component
// {
//   render()
//   {
//     const title=this.props.title;
//     return (
//       <div className="title header__text-box ">
//         <h1 className="heading-primary">
         
//         {title}
     
//         </h1>
//       </div>
//     )
//   }
// }
export default Title;