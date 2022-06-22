
import classes from './GroupDetailMain.module.scss'

const GroupDetailMain = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default GroupDetailMain