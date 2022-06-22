import { NavLink, useLocation } from 'react-router-dom'

import { HomeIcon, FriendIcon, GroupIcon, MarketPlaceIcon, GameIcon } from '~/assets/svg/icon'
import classes from './MainSide.module.scss'

const MainSide = (props) => {
    const location = useLocation()

    return(
        <div className={classes.wrapper}>
            <NavLink to='/' className={({ isActive }) => classes.iconGroup + ' ' +(isActive ? classes.active : "")} >
                <HomeIcon className={classes.icon} homeActive={location.pathname === '/' ? true : false} />
            </NavLink>
            <NavLink to='/friends' className={({ isActive }) => classes.iconGroup + ' ' + (isActive ? classes.active : "")}>
                <FriendIcon className={classes.icon} friendActive={location.pathname === '/friends' ? true : false} />
            </NavLink>
            <NavLink to='/groups' className={({ isActive }) => classes.iconGroup + ' ' + (isActive ? classes.active : "")} >
                <GroupIcon className={classes.icon} groupActive={location.pathname === '/groups' ? true : false} />
            </NavLink>
            <NavLink to='/markets' className={({ isActive }) => classes.iconGroup + ' ' + (isActive ? classes.active : "")} >
                <MarketPlaceIcon className={classes.icon} marketActive={location.pathname === '/markets' ? true : false} />
            </NavLink>
            <NavLink to='/gaming' className={({ isActive }) => classes.iconGroup + ' ' + (isActive ? classes.active : "")}>
                <GameIcon className={classes.icon} gameActive={location.pathname === '/gaming' ? true : false} />
            </NavLink>
        </div>
    )
}

export default MainSide