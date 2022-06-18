import classes from './ProfileFriend.module.scss'

const ProfileFriend = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default ProfileFriend