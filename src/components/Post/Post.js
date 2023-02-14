import React from 'react';
import {useDispatch} from "react-redux";
import {postActions, userActions} from "../../redux";

const Post = ({post}) => {
    const {userId, id, title} = post;
    const dispatch = useDispatch()
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {title}</div>
            <button onClick={()=>dispatch(postActions.setSelectedPost(post))}>select</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export default Post;