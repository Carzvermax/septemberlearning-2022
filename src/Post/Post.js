import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../services";

const Post = ({postId}) => {

    const [post, setPost] = useState(null)

    useEffect(() => {
        if (postId) {
            postService.getById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])
    if (!post) return null;
    return (
        <div>
            {post&&
                <>
            <div>id: {post.id}</div>
            <div>userId: {post.userId}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
                    </>
            }
        </div>
    );
};

export default Post;