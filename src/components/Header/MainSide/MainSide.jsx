
import { HomeIcon, FriendIcon, WatchIcon, MarketPlaceIcon, GameIcon } from '~/assets/svg/icon'
import classes from './MainSide.module.scss'

const MainSide = (props) => {
    

    return(
        <div className={classes.wrapper}>
            <div className={props.homeActive ? [classes.iconGroup, classes.active].join(' ') : classes.iconGroup} onClick={props.onActiveHome}>
                <HomeIcon className={classes.icon} homeActive={props.homeActive } />
            </div>
            <div className={props.friendActive ? [classes.iconGroup, classes.active].join(' ') : classes.iconGroup} onClick={props.onActiveFriend}>
                <FriendIcon className={classes.icon} friendActive={props.friendActive} />
            </div>
            <div className={props.watchActive ? [classes.iconGroup, classes.active].join(' ') : classes.iconGroup} onClick={props.onActiveWatch}>
                <WatchIcon className={classes.icon} watchActive={props.watchActive} />
            </div>
            <div className={props.marketActive ? [classes.iconGroup, classes.active].join(' ') : classes.iconGroup} onClick={props.onActiveMarket}>
                <MarketPlaceIcon className={classes.icon} marketActive={props.marketActive} />
            </div>
            <div className={props.gameActive ? [classes.iconGroup, classes.active].join(' ') : classes.iconGroup} onClick={props.onActiveGame}>
                <GameIcon className={classes.icon} gameActive={props.gameActive} />
            </div>
        </div>
    )
}

export default MainSide