// import Logo from '~/assets/svg'
import logo from '~/assets/img/faceme.png'
import classes from './LeftSide.module.scss'

const LeftSide = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
            </div>
            <p className={classes.title}>Faceme giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
        </div>
    )
}

export default LeftSide