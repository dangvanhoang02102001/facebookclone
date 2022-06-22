

import Circle from '~/packages/Circle'
import avtDefault from '~/assets/img/default.png'
import { DropIcon, MenuIcon, MessIcon, NotiIcon } from '~/assets/svg/icon'
import classes from './RightSide.module.scss'
import DropContent from "./DropContent";
import { NavLink } from 'react-router-dom';

const RightSide = (props) => {

    return(
        <div className={classes.wrapper}>
            <NavLink to='/profile' className={({ isActive }) => classes.profile + ' ' + (isActive ? classes.active: "")} >
                <img src={avtDefault} alt="" />
                <span>Đặng Hoàng</span>
            </NavLink>
            <div className={classes.options}>
                <div className={classes.option} onClick={props.onActiveMenu}>
                    <div className={classes.circle}>
                        <Circle>
                            <MenuIcon menuActive={props.menuActive}/>
                        </Circle>
                    </div>
                </div>
                <div className={classes.option} onClick={props.onActiveMess}>
                    <div className={classes.circle}>
                        <Circle>
                            <MessIcon messActive={props.messActive}/>
                        </Circle>
                    </div>
                </div>
                <div className={classes.option} onClick={props.onActiveNotify}>
                    <div className={classes.circle}>
                        <Circle>
                            <NotiIcon notifyActive={props.notifyActive}/>
                        </Circle>
                    </div>
                </div>
                <div className={classes.option} onClick={props.onActiveDrop}>
                    <div className={classes.circle}>
                        <Circle>
                            <DropIcon dropActive={props.dropActive}/>
                        </Circle>
                    </div>
                </div>
                {props.dropActive && <DropContent
                    onNavigateProfile={props.onNavigateProfile}
                    onChangePassword={props.onChangePassword}
                    onLogout={props.onLogout}
                />}
            </div>
        </div>
    )
}

export default RightSide
