import React from 'react'
import { AddReaction } from './postsSlice'
import { useDispatch } from 'react-redux';

const reactionEmoji = {
    heart: '❤️',
    thumbsUp: '👍',
    wow: '😮',

}

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(AddReaction({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}

export default ReactionButton