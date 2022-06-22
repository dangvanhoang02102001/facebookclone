import defaultAvt from '~/assets/img/default.png'

import classes from './FriendRequest.module.scss'

const FriendRequest = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.section}>
                <div className={classes.title}>
                    <span>Bạn có 13 lời mời kết bạn</span>
                </div>
                <div className={classes.list}>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.confirm}>Xác nhận</button>
                            <button className={classes.remove}>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendRequest