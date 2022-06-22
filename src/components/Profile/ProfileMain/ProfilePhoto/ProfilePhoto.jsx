import classes from './ProfilePhoto.module.scss'

const ProfilePhoto = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default  ProfilePhoto