import classes from './ProfileIntro.module.scss'

const ProfileIntro = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default ProfileIntro