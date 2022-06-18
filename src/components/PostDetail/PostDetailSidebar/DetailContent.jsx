import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import Comment from '~/packages/Comment/Comment'

import cmtAvatar1 from '~/assets/img/commentAvt1.jpg'
import classes from './DetailContent.module.scss'
import PostComment from '~/packages/Comment/PostComment'

const DetailContent = () => {
    const comments = [
        {
            user: {
                name: 'John Cena',
                avatar: cmtAvatar1
            },
            content: 'Hala Madrid !!',
            time: '1 ngày',
            state: null,
            reacts: {
                total: 233,
                like: 200,
                heart: 30,
                love: 3,
                wow: 0,
                smile: 0,
                sad: 0,
                angry: 0
            }
        },
        {
            user: {
                name: 'John Cena',
                avatar: cmtAvatar1
            },
            content: 'Hala Madrid !!',
            time: '1 ngày',
            state: null,
            reacts: {
                total: 233,
                like: 200,
                heart: 30,
                love: 3,
                wow: 0,
                smile: 0,
                sad: 0,
                angry: 0
            }
        },
        {
            user: {
                name: 'John Cena',
                avatar: cmtAvatar1
            },
            content: 'Hala Madrid !!',
            time: '1 ngày',
            state: null,
            reacts: {
                total: 233,
                like: 200,
                heart: 30,
                love: 3,
                wow: 0,
                smile: 0,
                sad: 0,
                angry: 0
            }
        },
        {
            user: {
                name: 'John Cena',
                avatar: cmtAvatar1
            },
            content: 'Hala Madrid !!',
            time: '1 ngày',
            state: null,
            reacts: {
                total: 233,
                like: 200,
                heart: 30,
                love: 3,
                wow: 0,
                smile: 0,
                sad: 0,
                angry: 0
            }
        },
        {
            user: {
                name: 'John Cena',
                avatar: cmtAvatar1
            },
            content: 'Hala Madrid !!',
            time: '1 ngày',
            state: null,
            reacts: {
                total: 233,
                like: 200,
                heart: 30,
                love: 3,
                wow: 0,
                smile: 0,
                sad: 0,
                angry: 0
            }
        },
        {
            user: {
                name: 'John Cena',
                avatar: cmtAvatar1
            },
            content: 'Hala Madrid !!',
            time: '1 ngày',
            state: null,
            reacts: {
                total: 233,
                like: 200,
                heart: 30,
                love: 3,
                wow: 0,
                smile: 0,
                sad: 0,
                angry: 0
            }
        },
        
    ]
    return (
        <div className={classes.wrapper}>
            <div className={classes.divider}></div>
            {/* <div className={classes.listComment}>
                
            </div> */}
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
                {comments.map((comment, index) => 
                    <Comment
                        key={index}
                        name={comment.user.name}
                        avatar={comment.user.avatar}
                        content={comment.content}
                        time={comment.time}
                        state={comment.state}
                        totalReacts={comment.reacts.total}

                    />
                )}
            </OverlayScrollbarsComponent>
            <div className={classes.commentSection}>
                <PostComment />
            </div>
        </div>
    )
}

export default DetailContent