import { useNavigate } from "react-router-dom";

import Circle from '~/packages/Circle'
import avtDefault from '~/assets/img/default.png'
import { DropIcon, MenuIcon, MessIcon, NotiIcon } from '~/assets/svg/icon'
import classes from './RightSide.module.scss'
import DropContent from "./DropContent";

const RightSide = (props) => {
    console.log(props.profileActive)
    return(
        <div className={classes.wrapper}>
            <div className={props.profileActive ? [classes.profile, classes.active].join(' ') : classes.profile} onClick={props.onActiveProfile}>
                <img src={avtDefault} alt="" />
                <span>Đặng Hoàng</span>
            </div>
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
                    {props.dropActive && <DropContent />}
                </div>
            </div>
        </div>
    )
}

export default RightSide
