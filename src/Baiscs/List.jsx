import React, { Component } from 'react';
// import ReactDOM from 'react-dom';


class Lists extends Component
{
  render()
  {
    const tasks=this.props.tasks;
    return(
    <ol>
      {
      tasks.map(
        (tasks,index) =>  <li key={index}>{tasks}</li>
      )
      }
    </ol>)
  }
}
export default Lists;