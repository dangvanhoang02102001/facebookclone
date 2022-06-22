import classes from './FriendMain.module.scss'

const FriendMain = ({children}) => {
    return (
        <div className={classes.wrapper}> 
            {children}
        </div>
    )
}

export default FriendMain