import { RiEarthFill } from 'react-icons/ri';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';

import classes from './GroupDetailIntro.module.scss'

const GroupDetailIntro = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.test}>
                <h4 className={classes.topic}>Giới thiệu</h4>
                <div className={classes.description}>
                    <span>Nhóm này để học Reactjs nha mấy má</span>
                    <span>Nhóm này để học Reactjs nha mấy má</span>
                    <span>Nhóm này để học Reactjs nha mấy má</span>
                </div>
                <div className={classes.mode}>
                    <div className={classes.icon}>
                        <RiEarthFill size={20} fill='#B0B3B8'/>
                    </div>
                    <div className={classes.modeInfor}>
                        <h4>Công khai</h4>
                        <span>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</span>
                    </div>
                </div>
                <div className={classes.mode}>
                    <div className={classes.icon}>
                        <BsFillEyeFill size={20} fill='#B0B3B8'/>
                    </div>
                    
                    <div className={classes.modeInfor}>
                        <h4>Hiển thị</h4>
                        <span>Bất kỳ ai cũng có thể nhìn thấy</span>
                    </div>
                </div>
                <div className={classes.mode}>
                    <div className={classes.icon}>
                        <FaUserFriends size={20} fill='#B0B3B8'/>
                    </div>
                    
                    <div className={classes.modeInfor}>
                        <h4>Tổng cộng có 30,5K thành viên</h4>
                    </div>
                </div>
                <div className={classes.mode}>
                    <div className={classes.icon}>
                        <MdGroups size={20} fill='#B0B3B8'/>
                    </div>
                    
                    <div className={classes.modeInfor}>
                        <h4>Ngày tạo: 3 năm trước</h4>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default GroupDetailIntro