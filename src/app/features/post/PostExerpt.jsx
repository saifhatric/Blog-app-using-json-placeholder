import React from 'react'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { FaTrash } from "react-icons/fa";
import ReactionButton from './ReactionButton';
const PostExerpt = ({ post, removePost }) => {
    return (
        <>

            <article >
                <h1>{post.title}</h1>
                <p className='post-content'>{post.body.substring(0, 100)}</p>
                <div className='postCredit'>
                    <p className='userId'>
                        <PostAuthor userId={post.userId} />
                    </p>

                    <p>
                        Time:<TimeAgo timeStamp={post.date} />
                    </p>
                </div>
                <ReactionButton post={post} />
                <FaTrash className='trash-icon'
                    onClick={() => dispatch(removePost(post.id))}
                />

            </article>



        </>
    )
}

export default PostExerpt