import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import Comment from '~/packages/Comment/Comment'

import cmtAvatar1 from '~/assets/img/commentAvt1.jpg'
import classes from './DetailContent.module.scss'
import PostComment from '~/packages/Comment/PostComment'

const DetailContent = (props) => {
    console.log(props)
    return (
        <div className={classes.wrapper}>
            <div className={classes.divider}></div>
            <OverlayScrollbarsComponent
                className={classes.listComment}
                options={{
                    className: 'os-theme-light',
                    scrollbars: {
                        autoHide: 'leave',
                        autoHideDelay: 0,
                    }
                }}
            >
                {props.comments.map((comment, index) => 
                    <Comment
                        key={index}
                        name={comment.user.name}
                        avatar={comment.user.profile_photo_path}
                        content={comment.content}
                        time={comment.created_at}
                        state={comment.state}
                        // totalReacts={comment.reacts.total}

                    />
                )}
            </OverlayScrollbarsComponent>
            <div className={classes.commentSection}>
                <PostComment
                    text={props.text}
                    onTypingComment={props.onTypingComment}
                    onComment={props.onComment}
                />
            </div>
        </div>
    )
}

export default DetailContent