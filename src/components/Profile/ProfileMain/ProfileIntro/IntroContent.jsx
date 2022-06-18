
import classes from './IntroContent.module.scss'

const IntroContent = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.topic}>
                <span>{props.title}</span>
            </div>
            {props.children}
        </div>
    )
}

export default IntroContent