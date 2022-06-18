import { RiEarthFill } from 'react-icons/ri';
import { BsCircle } from 'react-icons/bs';
import { FaUserFriends, FaUserEdit } from 'react-icons/fa';



import classes from './AccessModal.module.scss'

const AccessModal = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>{props.title}</span>
            </div>
            <div className={classes.content}>
                <div className={classes.note}>
                    <h4>Ai có thể xem tin của bạn?</h4>
                    <span>Tin của bạn sẽ hiển thị trên Facebook và Messenger trong 24 giờ.</span>
                </div>
                <div className={classes.list}>
                    <div className={classes.item}>
                        <div className={classes.circle}>
                            <RiEarthFill color='#B0B3B8' size={28} />
                        </div>
                        <div className={classes.mode}>
                            <h3>Công khai</h3>
                            <span>Bất kỳ ai trên Facebook hoặc Messenger</span>
                        </div>
                        <div className={classes.checkbox}>
                            <BsCircle color='#B0B3B8' size={20}/>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.circle}>
                            <FaUserFriends color='#B0B3B8' size={28} />
                        </div>
                        <div className={classes.mode}>
                            <h3>Bạn bè</h3>
                            <span>Chỉ bạn bè của bạn trên Facebook</span>
                        </div>
                        <div className={classes.checkbox}>
                            <BsCircle color='#B0B3B8' size={20}/>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.circle}>
                            <FaUserEdit color='#B0B3B8' size={28} />
                        </div>
                        <div className={classes.mode}>
                            <h3>Tùy chỉnh</h3>
                            <span>Chọn người để hiển thị tin của bạn</span>
                        </div>
                        <div className={classes.checkbox}>
                            <BsCircle color='#B0B3B8' size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={classes.footer}>
                <div className={classes.cancelBtn} onClick={props.onClose}>Hủy</div>
                <div className={classes.saveBtn}>Lưu</div>
            </div>
        </div>
    )
}

export default AccessModal