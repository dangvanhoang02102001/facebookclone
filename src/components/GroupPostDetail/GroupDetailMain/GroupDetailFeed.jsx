import classes from './GroupDetailFeed.module.scss'

const GroupDetailFeed = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}

export default GroupDetailFeed