import { useSelector } from 'react-redux'
import Post from '~/packages/Post/Post'
import classes from './ProfilePost.module.scss'

const ProfilePost = (props) => {
    const posts = useSelector(state => state.user.userPost)

    return (
        <div className={classes.wrapper}>
            <Post 
                posts={posts} 
                display='post'           
            />
        </div>
    )
}

export default ProfilePost