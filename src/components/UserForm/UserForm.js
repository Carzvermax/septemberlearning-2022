import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: 'all'})

    const submit = async (user) => {
        const {data} = await usersService.create(user)
        setUsers(prev=>[...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>Create new User</button>
        </form>
    );
};

export default UserForm;