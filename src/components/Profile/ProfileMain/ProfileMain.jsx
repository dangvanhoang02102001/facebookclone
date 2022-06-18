import classes from './ProfileMain.module.scss'

const ProfileMain = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default ProfileMain