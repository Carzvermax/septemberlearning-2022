import React from 'react';
import Post from "../../Post/Post";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const {postId} = useParams();


    return (
        <div>
            <Post postId={postId}/>
        </div>
    );
};

export default PostPage;