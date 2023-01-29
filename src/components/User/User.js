import React from 'react';

const User = ({user}) => {
    const {id, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>username: {username}</div>
        </div>
    );
};

export default User;