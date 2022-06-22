import classes from './GroupPostDetail.module.scss'

const GroupPostDetail = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}

export default GroupPostDetail