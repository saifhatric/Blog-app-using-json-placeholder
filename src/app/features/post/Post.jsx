import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    addPost,
    removePost,
    selectAllPosts,
    getPostsStatus,
    getPostsError,
    fetchPosts,


} from "./postsSlice";
import PostExerpt from './PostExerpt';

const Post = () => {

    const status = useSelector(getPostsStatus);
    const { posts } = useSelector(selectAllPosts);
    const error = useSelector(getPostsError);
    const dispatch = useDispatch();



    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts())
        }
    }, [status])



    if (posts.length === 0) {
        return <h2 style={{ textAlign: "center", margin: "2rem 0" }}>No Post exist</h2>
    }

    let content;
    if (status === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (status === 'succeeded') {
        //const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = posts.map((post, index) => <PostExerpt
            key={index}
            removePost={removePost}
            post={post} />)
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <>
            <h2>Posts :</h2>
            {content}
        </>
    )
}

export default Post;