

import classes from './Comment.module.scss'

const Comment = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.infor}>
                <div className={classes.avatar}>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={classes.content}>
                    <span className={classes.name}>{props.name}</span>
                    <div className={classes.comment}>
                        <span>{props.content}</span>
                    </div>
                </div>
            </div>
            <div className={classes.actions}>
                <span className={classes.like}>Thích</span>
                <span className={classes.reply}>Phản hồi</span>
                <span className={classes.time}>{props.time}</span>
            </div>
        </div>
    )
}   

export default Comment