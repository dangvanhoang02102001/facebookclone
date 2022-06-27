import axios from 'axios'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActions } from '~/store/post-slice'

import Post from '~/packages/Post/Post'
import classes from './News.module.scss'

const News = () => {
    const postPersist = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()

    const [posts, setPosts] = useState(postPersist)

    useEffect(() => {
        axios.get('/posts')
        .then(function (response) {
            const myPost = response.data.mypost
            const urPost = response.data.posts
            const posts = myPost.concat(urPost)
            dispatch(postActions.setPost(posts))
            setPosts(posts)
        })
        .catch(function (err) {
            console.log(err)
        });
    }, [dispatch])

    return (
        <div className={classes.wrapper}>
            <Post display="post" posts={posts}/>
        </div>
    )
}

export default News