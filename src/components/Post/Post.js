import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <div>id: {id}</div>
            <div>userid: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>

        </div>
    );
};

export default Post;