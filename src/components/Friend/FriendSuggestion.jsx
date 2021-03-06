import defaultAvt from '~/assets/img/default.png'

import classes from './FriendSuggestion.module.scss'

const FriendSuggestion = () => {
    return(
        <div className={classes.wrapper}>
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
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.add}>Thêm bạn bè</button>
                            <button className={classes.remove}>Xóa, gỡ bỏ</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.add}>Thêm bạn bè</button>
                            <button className={classes.remove}>Xóa, gỡ bỏ</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.add}>Thêm bạn bè</button>
                            <button className={classes.remove}>Xóa, gỡ bỏ</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.add}>Thêm bạn bè</button>
                            <button className={classes.remove}>Xóa, gỡ bỏ</button>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={defaultAvt} alt="#" />
                        <div className={classes.itemFooter}>
                            <span>Dặng Hoàng</span>
                            <div className={classes.emptyHeight}></div>
                            <button className={classes.add}>Thêm bạn bè</button>
                            <button className={classes.remove}>Xóa, gỡ bỏ</button>
                        </div>
                    </div>

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

export default FriendSuggestion