import classes from './Button.module.scss'

const Button = (props) => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.content}>
                {props.content}
            </span>
        </div>
    )
}

export default Button