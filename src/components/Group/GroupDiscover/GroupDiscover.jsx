import lienquanbg from '~/assets/img/lienquanbg.jpg'

import classes from './GroupDiscover.module.scss'

const GroupDiscover = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h3>Gợi ý cho bạn</h3>
                <span>Nhóm mà bạn có thể quan tâm.</span>
            </div>
            <div className={classes.list}>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={lienquanbg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <>
                            <h4>Liên quân mobile</h4>
                            <span className={classes.member}>30K thành viên</span>
                        </>
                        <div className={classes.button}>Tham gia nhóm</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={lienquanbg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <>
                            <h4>Liên quân mobile</h4>
                            <span className={classes.member}>30K thành viên</span>
                        </>
                        <div className={classes.button}>Tham gia nhóm</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={lienquanbg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <>
                            <h4>Liên quân mobile</h4>
                            <span className={classes.member}>30K thành viên</span>
                        </>
                        <div className={classes.button}>Tham gia nhóm</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={lienquanbg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <>
                            <h4>Liên quân mobile</h4>
                            <span className={classes.member}>30K thành viên</span>
                        </>
                        <div className={classes.button}>Tham gia nhóm</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={lienquanbg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <>
                            <h4>Liên quân mobile</h4>
                            <span className={classes.member}>30K thành viên</span>
                        </>
                        <div className={classes.button}>Tham gia nhóm</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <img src={lienquanbg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <>
                            <h4>Liên quân mobile</h4>
                            <span className={classes.member}>30K thành viên</span>
                        </>
                        <div className={classes.button}>Tham gia nhóm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupDiscover