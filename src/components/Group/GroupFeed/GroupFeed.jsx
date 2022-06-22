import Post from '~/packages/Post/Post'
import classes from './GroupFeed.module.scss'

const GroupFeed = (props) => {
    return (
        <div className={classes.wrapper}>
            <Post display='news'/>
        </div>
    )
}

export default GroupFeed