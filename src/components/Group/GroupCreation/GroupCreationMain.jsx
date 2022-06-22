import groupBg from '~/assets/img/groupBg.png'
import classes from './GroupCreationMain.module.scss'

const GroupCreationMain = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.coverWrapper}>
                    <div className={classes.cover}>
                        <img src={groupBg} alt="#" />
                    </div>
                    <div className={classes.infor}>
                        <span>Tên nhóm</span>
                        <h3>Quyền riêng tư của nhóm - 1 thành viên</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupCreationMain