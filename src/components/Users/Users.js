import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {userActions} from "../../redux";
import User from "../User/User";

const Users = () => {

    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(()=> {
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])




    return (
        <div>
            {loading && <h1>LOADING</h1>}
            {errors && JSON.stringify(errors)}
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;