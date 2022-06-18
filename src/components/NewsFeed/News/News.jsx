import Post from '~/packages/Post/Post'
import classes from './News.module.scss'

const News = () => {
    return (
        <div className={classes.wrapper}>
            <Post display="news" />
        </div>
    )
}

export default News