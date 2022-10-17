import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNewPost } from './postsSlice';
import { useState } from 'react';
import { selectAllUsers } from '../users/userSlice';
const AddPost = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setuserId] = useState("");
    const [exist, setExict] = useState(false)

    const savedPost = () => {

        if (canPost) {
            try {
                dispatch(addNewPost({
                    title,
                    body: content,
                    userId,
                })).unwrap()
                setTitle("");
                setContent("");
                setuserId("")

            } catch (err) {
                console.error("failed to save the post", err)
            }

        }

    };

    const canPost = [title, content, userId].every(Boolean);

    return (
        <section>

            <div className="addpost-form">
                <button className={exist ? "remove-post" : "add-post"}
                    onClick={() => setExict(!exist)}>
                    {exist ? "Remove Form" : "add Post"}
                </button>
            </div>
            {exist ?
                <form onSubmit={(e) => {
                    e.preventDefault();
                    savedPost();
                }}>
                    <div className="add-new-post">
                        <label htmlFor="postTitle">Post Title:</label>
                        <input type="text"
                            placeholder='The Title'
                            id="postTitle"
                            name='postTitle'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="postAuthor">Auther:</label>
                        <input id="postAuthor"
                            placeholder='The Author'
                            value={userId}
                            onChange={(e) => setuserId(e.target.value)} />

                        <label htmlFor="postContent">Content:</label>
                        <textarea type="text"
                            id="postContent"
                            name='postContent'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type='button'
                            className='add-post-btn'
                            disabled={!canPost}
                            onClick={savedPost}>
                            Save Post
                        </button>
                    </div>
                </form>
                : ""}
        </section>
    )
}

export default AddPost;