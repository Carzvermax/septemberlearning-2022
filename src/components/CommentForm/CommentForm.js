import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../services";

const CommentForm = ({setComments}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode: 'all'})

    const  submit = async (comment) => {
        const {data} = await  commentsService.create(comment)
        setComments(prev=>[...prev, data])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="number" placeholder={'postId'} {...register('postId')}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button>Create new Comment</button>

            </form>
        </div>
    );
};

export default CommentForm;