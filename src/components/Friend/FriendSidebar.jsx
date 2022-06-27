
import { NavLink } from 'react-router-dom';

import { FaUserFriends, FaUserPlus, FaUserAlt, FaHouseUser } from 'react-icons/fa';
import classes from './FriendSidebar.module.scss'

const FriendSidebar = () => {

    

    return (
        <div className={classes.wrapper}> 
            <div className={classes.header}>
                <span>Bạn bè</span>
            </div>
            <div className={classes.options}>
                <NavLink to='/friends' end className={({ isActive }) => classes.option + ' ' + (isActive ? classes.active : "")}>
                    <div className={classes.circle}>
                        <FaHouseUser size={20} fill='#fff'/>
                    </div>
                    <span>Trang chủ</span>
                </NavLink>
                <NavLink to='/friends/request' className={({ isActive }) => classes.option + ' ' + (isActive ? classes.active : "")}>
                    <div className={classes.circle}>
                        <FaUserPlus size={20} fill='#fff'/>
                    </div>
                    <span>Lời mời kết bạn</span>
                </NavLink>
                <NavLink to='/friends/suggestion' className={({ isActive }) => classes.option + ' ' + (isActive ? classes.active : "")}>
                    <div className={classes.circle}>
                        <FaUserAlt size={20} fill='#fff'/>
                    </div>
                    <span>Gợi ý</span>
                </NavLink>
                <NavLink to='/friends/list' className={({ isActive }) => classes.option + ' ' + (isActive ? classes.active : "")}>
                    <div className={classes.circle}>
                        <FaUserFriends size={20} fill='#fff'/>
                    </div>
                    <span>Tất cả bạn bè</span>
                </NavLink>
            </div>
        </div>
    )
}

export default FriendSidebar