import classes from './StoryDetail.module.scss'

const StoryDetail = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default StoryDetail