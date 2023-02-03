import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment
    const navigate = useNavigate()
    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate(postId.toString())}>Get Post</button>
        </div>
    );
};

export default Comment;