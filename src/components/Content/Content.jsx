import classes from './Content.module.scss'

const Content = ({children}) => {
    return(
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default Content