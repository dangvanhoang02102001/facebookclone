import { FaUserCheck } from 'react-icons/fa';
import { BsMessenger } from 'react-icons/bs';


import classes from './ProfilePreview.module.scss'
const ProfilePreview = (props) => {
    return(
        <div className={classes.wrapper}> 
            <div className={classes.header}>
                <div className={classes.sidebar}>
                    <img src={'http://localhost:8000/storage/employees/avt/' + props.avatar} alt="#" />
                </div>
                <div className={classes.content}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.infor}>
                        
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.friendBtn}>
                    <div className={classes.icon}>
                        <FaUserCheck />
                    </div>
                    <span>Bạn bè</span>
                </div>
                <div className={classes.messBtn}>
                    <div className={classes.icon}>
                        <BsMessenger />
                    </div>
                    <span>Nhắn tin</span>
                </div>
            </div>
        </div>
    )
}

export default ProfilePreview