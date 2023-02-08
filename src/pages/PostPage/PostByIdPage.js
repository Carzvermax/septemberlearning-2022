import React from 'react';
import {useLocation} from "react-router-dom";
import PostById from "../../components/PostById/PostById";

const PostByIdPage = () => {
    const {state} = useLocation()
    const postId = state.postId
    return (
        <div>
<PostById key={postId} postId={postId}/>
        </div>
    );
};

export default PostByIdPage;