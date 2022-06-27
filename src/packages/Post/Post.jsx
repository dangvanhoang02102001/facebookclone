import axios from 'axios'
import { useState } from "react";

import PostDetailComponent from "~/components/PostDetail/PostDetail"
import PostDetailContent from "~/components/PostDetail/PostDetailContent"
import PostDetailSidebar from "~/components/PostDetail/PostDetailSidebar/PostDetailSidebar"

import PostContent from "./PostContent"
import PostHeader from "./PostHeader"
import classes from "./Post.module.scss"
import PostComment from './PostComment'


const Post = ({display, posts}) => {
    const [isExpand, setIsExpand] = useState(false)
    const [currentPost, setCurrentPost] = useState(null)
    const [comments, setComments] = useState([])
    const [text, setText] = useState('')

    const handleTyping = (e) => {
        setText(e.target.value)
    }

    const handleExpand = () => {
        setIsExpand(true)
    }

    const handleMinimize = () => {
        setIsExpand(false)
    }


    const handleShowPostDetail = (id) => {
        const currentUrl = `post/${id}`
        axios.get(`/post/${id}`)
        .then(function (response) {
            console.log(response)
            setCurrentPost(response.data.posts[0])
            setComments(response.data.posts[0].comments)
        })
        .catch(function (err) {
            console.log(err)
        })

        window.history.pushState(null, document.title, currentUrl)
    }

    const handleComment = () => {
        axios.post(`/comment/${currentPost.id}`, {
            content: text,
        })
        .then(function (response) {
            console.log(response)
            setText('')
            setComments(prev => [response.data.comment[0],...prev])
        })
        .catch(function (err) {
            console.log(err)
        });
    }

    console.log(currentPost)
    console.log(comments)

    const handleShowPostGroupDetail = () => {
        console.log('post group')
    }

    const handleCloseDetailPost = () => {
        setCurrentPost(null)
        window.history.back()
    }
    

    console.log(posts)
    return (
        <>
            {posts.map((post, index) => 
                <div className={classes.wrapper} key={index}>
                    <PostHeader
                        name={post.user.name}
                        avatar={post.user.profile_photo_path}
                        time={post.created_at}
                        title={post.content}
                    />
                    <PostContent
                        // totalReact={post.create_postdetail[0].total}
                        // shareCount={post.shareCount}
                        id={post.id}
                        content={post.image}
                        commentCount={post.comments.length}
                        display={display}
                        onShowPostDetail={handleShowPostDetail}
                        onShowPostGroupDetail={handleShowPostGroupDetail}
                    />
                    <PostComment 
                        comments={post.comments}
                    />
                </div>    
            )}
            {currentPost && 
                <PostDetailComponent>
                    <PostDetailContent
                        isExpand={isExpand}
                        handleExpand={handleExpand}
                        handleMinimize={handleMinimize}
                        onCloseDetailPost={handleCloseDetailPost}
                        image={currentPost.image}
                    />
                    <PostDetailSidebar
                        isExpand={isExpand}
                        name={currentPost.user.name}
                        avatar={currentPost.user.profile_photo_path}
                        content={currentPost.content}
                        time={currentPost.created_at}
                        comments={comments}
                        reaction={currentPost.reaction}
                        create_postdetail={currentPost.create_postdetail}
                        onTypingComment={handleTyping}
                        text={text}
                        onComment={handleComment}
                    />
                </PostDetailComponent>
            }
        </>
    )
}

export default Post