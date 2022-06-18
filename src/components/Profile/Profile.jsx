import classes from './Profile.module.scss'

const Profile = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default Profile