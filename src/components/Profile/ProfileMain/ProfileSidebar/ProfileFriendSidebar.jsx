
import defaultAvatar from '~/assets/img/default.png'

import classes from './ProfileFriendSidebar.module.scss'

const ProfileFriendSidebar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Bạn bè</span>
                <div className={classes.button}>
                    Xem tất cả bạn bè
                </div>
            </div>
            <div className={classes.friendNumber}>324 người bạn</div>
            <div className={classes.content}>
                <div className={classes.friendGroup}>
                    <div className={classes.item}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.name}>Đoàn Duy Hòa</div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.name}>Đoàn Duy Hòa</div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.name}>Đoàn Duy Hòa</div>
                    </div>
                </div>
                <div className={classes.friendGroup}>
                    <div className={classes.item}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.name}>Đoàn Duy Hòa</div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.name}>Đoàn Duy Hòa</div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.name}>Đoàn Duy Hòa</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileFriendSidebar