import defaultAvt from '~/assets/img/default.png'

import classes from './FriendAll.module.scss'

const FriendAll = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.section}>
                <div className={classes.title}>
                    <span>Lời mời kết bạn</span>
                </div>
                <div className={classes.list}>
                    {props.friendList.map(friend => 
                        <div className={classes.item}>
                            <img src={'http://localhost:8000/storage/employees/avt/' + friend.profile_photo_path || defaultAvt} alt="#" />
                            <div className={classes.itemFooter}>
                                <span>{friend.name}</span>
                                <div className={classes.emptyHeight}></div>
                                <button className={classes.confirm}>Xác nhận</button>
                                <button className={classes.remove}>Xóa</button>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.title}>
                    <span>Những người bạn có thể biết</span>
                </div>
                <div className={classes.list}>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.add}>Thêm bạn bè</button>
                            <button className={classes.remove}>Xóa, gỡ bỏ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendAll