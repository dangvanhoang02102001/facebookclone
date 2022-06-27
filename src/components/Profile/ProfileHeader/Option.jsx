import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { OptionIcon } from '~/assets/svg/icon'
import classes from './Option.module.scss'


const Option = (props) => {
    const currentId = useSelector(state => state.user.currentId)
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <div className={classes.optionList}>
                    <NavLink end to={`/profile/${currentId}`} className={({ isActive }) => classes.optionsItem + ' ' + (isActive ? classes.active : "")}  onClick={props.onActivePost}>
                        <span>Bài viết</span>
                    </NavLink>
                    <NavLink to={`/profile/${currentId}/about`} className={({ isActive }) => classes.optionsItem + ' ' + (isActive ? classes.active : "")} onClick={props.onActiveIntro}>
                        <span>Giới thiệu</span>
                    </NavLink>
                    <NavLink to={`/profile/${currentId}/friends`} className={({ isActive }) => classes.optionsItem + ' ' + (isActive ? classes.active : "")} onClick={props.onActiveFriend}>
                        <span>Bạn bè</span>
                    </NavLink>
                    <NavLink to={`/profile/${currentId}/photos`} className={({ isActive }) => classes.optionsItem + ' ' + (isActive ? classes.active : "")} onClick={props.onActivePhoto}>
                        <span>Ảnh</span>
                    </NavLink>
                </div>
                <div className={classes.optionMore}>
                    <OptionIcon />
                </div>
            </div>
        </div>
    )
}

export default Option