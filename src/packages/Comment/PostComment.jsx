import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';

import defaultAvatar from '~/assets/img/default.png'

import classes from './PostComment.module.scss'

const PostComment = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <img src={defaultAvatar} alt="" />
            </div>
            <div className={classes.commentSection}>
                <input type="text" placeholder='Viết bình luận ...' />
                <div className={classes.options}>
                    <div className={classes.option}>
                        <BsEmojiSmile color='#B0B3B8'/>
                    </div>
                    <div className={classes.option}>
                        <AiOutlineFileGif color='#B0B3B8'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PostComment