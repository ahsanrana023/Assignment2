import React, {Component} from "react"
import './styling/stylesheet.scss'
class Comments extends Component{
    handleSubmit = (event)=>{
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        this.props.startAddingComments(comment,this.props.id)
        event.target.elements.comment.value= "";
    }
    render(){
        console.log(this.props.comments)
        return(
            <div className="comment">
                {
                    this.props.comments.map((comment,index) =>{
                        return (
                            <p key={index}>
                                {comment}
                            </p>
                        )
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}
export default Comments;