import React, { Component } from 'react';
import Title from './Components/Title';
import AddPhoto from "./Components/addPhoto"
import Single from "./Components/single"
import posts from './Data/DB';
import Cards from './Components/Cards';
import {Route} from "react-router-dom"
import {removePost} from "./Redux/actions"
class Main extends Component
{
  componentDidMount() {
    this.props.startLoadingPost().then( () =>{
      this.setState({loading:false})
    });
    this.props.startLoadingComments();
  }

  constructor(){
    super();
    this.state={
      loading : true
     
      // screen:"Home"//addPhoto
    }
   // this.removePhoto = this.removePhoto.bind(this);
  }

  render()
  {
    // console.log(this.props.comments)
    return(
      <div>
    <Title title={"Photowall"}/>
      <Route  exact path="/"  render={
        ()=>{
        return(  <div>
       
        <Cards {...this.props} />
      </div>
        )
      }
      }
      />
    
        <Route path="/AddPhoto" render={({history})=>{
          return <AddPhoto onHistory={history} {...this.props} />}
        }/>

        <Route path="/single/:id" render={(params)=>{
          return <Single {...this.props} loading = {this.state.loading} {...params}/>
        }
        }/>
      </div>
    );
  }
}

export default Main;