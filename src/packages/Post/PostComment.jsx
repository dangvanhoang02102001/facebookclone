import { useState } from 'react'
import { FaSortDown } from 'react-icons/fa'

import Comment from '~/packages/Comment/Comment'
import CreateComment from '../Comment/CreateComment'
import classes from './PostComment.module.scss'

const PostComment = (props) => {
    // console.log(props.comment)
    const [isDrop, setIsDrop] = useState(false)
    const [isExpand, setIsExpand] = useState(false)
    const [mode, setMode] = useState('all')

    const handleToggleDrop = () => {
        setIsDrop(!isDrop)
    }

    const handleSetModeAll = () => {
        setMode('all')
        setIsDrop(false)
    }


    const handleSetModeNew = () => {
        setMode('new')
        setIsDrop(false)
    }

    const handleShowComment = () => {
        setIsExpand(!isExpand)
    }

    // const haveMore = props.comment.map(comment => console.log(comment))
    // console.log(haveMore)
    // console.log(props.comment)

    console.log(props.comments)


    return (
        <div className={classes.wrapper}>
            <div className={classes.mode}>
                <div className={classes.modeSelect} onClick={handleToggleDrop}>
                    <span>{mode === 'all' ? 'Tất cả bình luận' : 'Mới nhất'}</span>
                    <div className={classes.downIcon}>
                        <FaSortDown />
                    </div>
                </div>
                {isDrop && <div className={classes.dropdown}>
                    <div className={classes.arrow}></div>
                    <div className={classes.option} onClick={handleSetModeNew}>
                        <h4>Mới nhất</h4>
                        <span>Hiển thị tất cả bình luận, theo thứ tự từ mới nhất đến cũ nhất</span>
                    </div>
                    <div className={classes.option} onClick={handleSetModeAll}>
                        <h4>Tất cả bình luận</h4>
                        <span>Hiển thị tất cả bình luận</span>
                    </div>
                </div>}
            </div>
            <div className={classes.commentSection}>
                <CreateComment />
            </div>
            <div className={isExpand ? classes.expanded : classes.commentList} >
                {props.comments.map((comment, index) => 
                    <Comment
                        key={index}
                        name={comment.user.name}
                        avatar={comment.user.profile_photo_path}
                        content={comment.content}
                        time={comment.created_at}
                    />
                )}
            </div>
            {props.comments.length > 2 && <div className={classes.more} onClick={handleShowComment}>{isExpand ? 'Thu gọn' : 'Xem thêm bình luận'}</div>}
            
        </div>
    )
}

export default PostComment