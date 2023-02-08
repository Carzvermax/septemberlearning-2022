import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";

const PostById = ({postId, state}) => {
    const [post, setPost] = useState(null)

    useEffect(()=> {
        postsService.getById(postId).then(({data})=> {setPost(data)})
    }, [postId])
    return (
        <div>
            <div>
                {post &&
                    <>
                        <div>id: {post.id}</div>
                        <div>userId: {post.userId}</div>
                        <div>title: {post.title}</div>
                        <div>body: {post.body}</div>
                    </>
                }
            </div>
        </div>
    );
};

export default PostById;