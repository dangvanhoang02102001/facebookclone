import classes from './Group.module.scss'

const Group = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}

export default Group