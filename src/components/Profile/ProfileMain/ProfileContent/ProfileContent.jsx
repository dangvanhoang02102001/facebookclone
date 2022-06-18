import CreateSection from '~/packages/CreateSection/CreateSection'
import classes from './ProfileContent.module.scss'

const ProfileContent = ({children}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.creatSection}>
                <CreateSection type="default"/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ProfileContent