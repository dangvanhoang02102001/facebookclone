import classes from './GroupPostHeader.module.scss'

const GroupPostHeader = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}

export default GroupPostHeader