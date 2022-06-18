import Logo from '~/assets/svg'
import classes from './LeftSide.module.scss'

const LeftSide = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <Logo />
            </div>
            <p className={classes.title}>Facebook helps you connect and share with the people in your life.</p>
        </div>
    )
}

export default LeftSide