import {database} from "../Database/config"
export const startAddingPost = (post)=>{
    return (dispatch) =>{
        return database.ref('posts').update({[post.id]:post}).then(() =>{
            dispatch(addPost(post))
        }).catch((error) =>{
            ////console.log(error);

        })
    }
}


export const startLoadingPost = () =>{
    return (dispatch) =>{
        return database.ref('posts').once('value').then((snapshot) =>{
            let posts = []
            snapshot.forEach((childSnapshot) =>{
                ////console.log(childSnapshot.val());
                posts.push(childSnapshot.val());
               
            })
            dispatch(loadPosts(posts));
        })
    }
}
export const startRemovingPost = (index,id)=>{
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() =>{
            dispatch(removePost(index))
        }).catch((error) =>{
            console.log(error);

        })
    }
}
export const removePost = (index)=>{
    return {
        type: "REMOVE_POST",
        index
    }

}
export const addPost = (post) =>{
    return {
        type:'ADD_POST',
        post
    }
}
export const login = () =>{
    return {
        type:'LOGIN'


    }
}

export const startAddingComments = (comment,postId)=>{
    return (dispatch) => {
        return database.ref(`comment/${postId}`).push(comment).then(() =>{
            dispatch(addComment(comment,postId))
        }).catch((error) =>{
            //console.log(error);

        })
    }
}

export const addComment = (comment,postId) =>{
    return {
        type:'ADD_COMMENT',
        comment,
        postId

    }
}

export const startLoadingComments = () =>{
    return (dispatch) =>{
        return database.ref('comment').once('value').then((snapshot) =>{
            let comments = {}
            snapshot.forEach((childSnapshot) =>{
                ////console.log(childSnapshot.val());
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
               
            })
            //console.log(comments)
            dispatch(loadComments(comments));
        })
    }
}

export const loadPosts = (posts) =>{
    return {
        type: "LOAD_POSTS",
        posts
    }
}
export const loadComments = (comments) =>{
    return {
        type: "LOAD_COMMENTS",
        comments
    }
}