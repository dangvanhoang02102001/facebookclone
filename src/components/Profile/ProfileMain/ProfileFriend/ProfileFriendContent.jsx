import { BsThreeDots } from 'react-icons/bs';
import defaultAvatar from '~/assets/img/default.png'
import classes from './ProfileFriendContent.module.scss'

const ProfileFriendContent = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.list}>
                <div className={classes.item}>
                    <img src={defaultAvatar} alt="" />
                    <span>Đặng Hoàng</span>
                    <div className={classes.circle}>
                        <BsThreeDots fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={defaultAvatar} alt="" />
                    <span>Đặng Hoàng</span>
                    <div className={classes.circle}>
                        <BsThreeDots fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={defaultAvatar} alt="" />
                    <span>Đặng Hoàng</span>
                    <div className={classes.circle}>
                        <BsThreeDots fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={defaultAvatar} alt="" />
                    <span>Đặng Hoàng</span>
                    <div className={classes.circle}>
                        <BsThreeDots fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={defaultAvatar} alt="" />
                    <span>Đặng Hoàng</span>
                    <div className={classes.circle}>
                        <BsThreeDots fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={defaultAvatar} alt="" />
                    <span>Đặng Hoàng</span>
                    <div className={classes.circle}>
                        <BsThreeDots fill='#fff' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileFriendContent