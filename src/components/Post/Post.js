import React from 'react';

const Post = ({post, setPostdetails}) => {
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>setPostdetails(post)}>PostDetails</button>
        </div>
    );
};

export default Post;