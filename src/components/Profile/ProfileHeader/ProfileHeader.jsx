
import classes from './ProfileHeader.module.scss'

const ProfileHeader = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default ProfileHeader