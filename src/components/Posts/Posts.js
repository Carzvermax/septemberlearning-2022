import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {postActions, userActions} from "../../redux";
import User from "../User/User";
import Post from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();

    const {posts, errors, loading} = useSelector(state => state.posts);

    useEffect(()=> {
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(postActions.getAll())
    }, [])




    return (
        <div>
            {loading && <h1>LOADING</h1>}
            {errors && JSON.stringify(errors)}
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;