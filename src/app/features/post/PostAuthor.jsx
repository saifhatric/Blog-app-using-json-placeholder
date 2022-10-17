import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/userSlice';


const postAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)
    const author = users.find((user) => user.id === userId);
    return <span>By:  {author ? author.name : "unknown Author"}</span>
}

export default postAuthor;