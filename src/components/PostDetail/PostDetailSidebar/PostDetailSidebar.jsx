import { Fragment } from 'react'
import DetailContent from './DetailContent'
import DetailHeader from './DetailHeader'
import classes from './PostDetailSidebar.module.scss'

const PostDetailSidebar = (props) => {
    return (
        <Fragment>
            {props.isExpand ? 
                <></>
                :
                <div className={classes.wrapper}>
                    <DetailHeader 
                        name={props.name}
                        avatar={props.avatar}
                        content={props.content}
                        time={props.time}
                        image={props.image}
                        comments={props.comments}
                        reaction={props.reaction}
                        create_postdetail={props.create_postdetail}
                    />
                    <DetailContent 
                        text={props.text}
                        comments={props.comments}
                        onTypingComment={props.onTypingComment}
                        onComment={props.onComment}
                    />
                </div>
            }
        </Fragment>
    )
}

export default PostDetailSidebar