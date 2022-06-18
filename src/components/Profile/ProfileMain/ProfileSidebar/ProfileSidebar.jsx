import classes from './ProfileSidebar.module.scss'

const ProfileSidebar = ({children}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.clone}>
                {children}
            </div>
        </div>
    )
}

export default ProfileSidebar