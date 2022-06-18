import Post from '~/packages/Post/Post'
import classes from './ProfilePost.module.scss'

const ProfilePost = () => {
    return (
        <div className={classes.wrapper}>
            <Post />
        </div>
    )
}

export default ProfilePost