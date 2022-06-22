import classes from './Friend.module.scss'

const Friend = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default Friend 