import Moment from 'react-moment';

import classes from './Comment.module.scss'

const Comment = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.infor}>
                <div className={classes.avatar}>
                    <img src={'http://localhost:8000/storage/employees/avt/' + props.avatar} alt="" />
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
                <Moment className={classes.time} fromNow>{props.time}</Moment>
            </div>
        </div>
    )
}   

export default Comment