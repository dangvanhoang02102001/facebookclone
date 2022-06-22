import classes from './ProfileFriendHeader.module.scss'

const ProfileFriendHeader = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h4>Bạn bè</h4>
                <div className={classes.buttons}>
                    <div className={classes.button}>
                        <span>Lời mời kết bạn</span>
                    </div>
                    <div className={classes.button}>
                        <span>Tìm bạn bè</span>
                    </div>
                </div>
            </div>
            <div className={classes.options}>
                
            </div>
        </div>
    )
}

export default ProfileFriendHeader