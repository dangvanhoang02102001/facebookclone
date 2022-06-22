

import { NavLink } from 'react-router-dom'
import { OptionIcon } from '~/assets/svg/icon'
import classes from './GroupHeaderOption.module.scss'

const GroupHeaderOption = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <div className={classes.optionList}>
                    <NavLink end to="/groups/detail" className={({ isActive }) => classes.optionsItem + ' ' + (isActive ? classes.active : "")}  onClick={props.onActivePost}>
                        <span>Thảo luận</span>
                    </NavLink>
                    <NavLink to="/groups/member" className={({ isActive }) => classes.optionsItem + ' ' + (isActive ? classes.active : "")} onClick={props.onActiveIntro}>
                        <span>Mọi người</span>
                    </NavLink>
                </div>
                <div className={classes.optionMore}>
                    <OptionIcon />
                </div>
            </div>
        </div>
    )
}

export default GroupHeaderOption