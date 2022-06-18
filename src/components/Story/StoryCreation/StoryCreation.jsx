
import classes from './StoryCreation.module.scss'

const StoryCreation = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default StoryCreation