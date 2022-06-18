import classes from './Login.module.scss'
import LeftSide from './LeftSide'
import FormLogin from './FormLogin'

const Login = () => {
    return (    
        <div className={classes.background}>
            <div className={classes.wrapper}>
                <LeftSide />
                <FormLogin />
            </div>
        </div>
    )
}

export default Login