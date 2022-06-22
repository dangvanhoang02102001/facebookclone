import classes from './GroupCreation.module.scss'

const GroupCreation = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}

export default GroupCreation