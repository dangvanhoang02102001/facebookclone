import classes from './NewsFeed.module.scss'

const NewsFeed = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default NewsFeed