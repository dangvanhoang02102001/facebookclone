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
                        <span>{props.grName !== '' ?  props.grName : 'Tên nhóm'}</span>
                        <h3>{props.groupMode === 0 && 'Quyền riêng tư của nhóm - 1 thành viên'}</h3>
                        <h3>{props.groupMode === 1 && 'Nhóm công khai - 1 thành viên'}</h3>
                        <h3>{props.groupMode === 2 && 'Nhóm riêng tư - 1 thành viên'}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupCreationMain