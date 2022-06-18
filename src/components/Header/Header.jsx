import classes from './Header.module.scss'

const Header = ({children}) => {
    return(
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default Header