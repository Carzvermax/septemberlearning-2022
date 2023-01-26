import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostdetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, null)

    return (
        <div>
            <h1> PostDetails: </h1>
            {postDetails && <div>User id: {postDetails.userId} Post id: {postDetails.id}  Title: {postDetails.title} Body: {postDetails.body} </div> }
            <h1> Posts: </h1>
            {posts.map(post => <Post key={post.id} post={post} setPostdetails={setPostdetails}/>)}
        </div>
    );
}

export {Posts};