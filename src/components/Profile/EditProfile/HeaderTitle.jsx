import classes from './HeaderTitle.module.scss'

const HeaderTitle = (props) => {
    return (
        <div className={classes.wrapper} >
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.button} onClick={props.onEdit}>
                <span>{props.button}</span>
            </div>
        </div>
    )
}

export default HeaderTitle