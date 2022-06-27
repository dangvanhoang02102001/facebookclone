import { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';
import { useSelector } from 'react-redux';

import defaultAvatar from '~/assets/img/default.png'

import classes from './PostComment.module.scss'

const PostComment = (props) => {
    const currentUser = useSelector(state => state.user.currentUser)
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                {currentUser.profile_photo_path ?
                    <img src={'http://localhost:8000/storage/employees/avt/' + currentUser.profile_photo_path} alt="" />
                    :
                    <img src={defaultAvatar} alt="" />
                }
            </div>
            <div className={classes.commentSection}>
                <input type="text" placeholder='Viết bình luận ...' onChange={props.onTypingComment} value={props.text}/>
                <div className={classes.options}>
                    <div className={classes.option}>
                        <BsEmojiSmile color='#B0B3B8'/>
                    </div>
                    <div className={classes.option} onClick={() => props.onComment()}>
                        <MdSend color='#B0B3B8'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComment