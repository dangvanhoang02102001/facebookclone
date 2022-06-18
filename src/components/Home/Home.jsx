import classes from './Home.module.scss'

const Home = ({children}) => {
    return(
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default Home