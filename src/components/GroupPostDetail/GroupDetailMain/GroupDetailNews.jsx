import { useSelector } from 'react-redux'
import Post from '~/packages/Post/Post'
import classes from './GroupDetailNews.module.scss'

const GroupDetailNews = () => {
    const posts = useSelector(state => state.group.groupPost)
    console.log(posts)

    return (
        <div className={classes.wrapper}>
            <Post posts={posts} display='group'/>
        </div>
    )
}

export default GroupDetailNews