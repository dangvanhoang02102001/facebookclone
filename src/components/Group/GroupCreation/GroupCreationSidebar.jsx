import { useState } from 'react';

import { CgClose } from 'react-icons/cg';
import { Link, useNavigate } from "react-router-dom";
import { FacebookIcon } from '~/assets/svg/icon';

import { AiFillCaretDown } from 'react-icons/ai';
import { RiEarthFill } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa';

import defaultAvt from '~/assets/img/default.png'
import classes from './GroupCreationSidebar.module.scss'

const GroupCreationSidebar = (props) => {
    const navigate = useNavigate()
    // const disable = false
    const [isDrop, setIsDrop] = useState(false)

    const handleToggleDrop = () => {
        setIsDrop(!isDrop)
    } 

    const disable = true
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.actions}>
                    <div className={classes.closeBtn} onClick={() => navigate(-1)}>
                        <CgClose color='#fff' size={24}/>
                    </div>
                    <Link to='/' className={classes.logo}>
                        <FacebookIcon />
                    </Link>
                </div>
            </div>   
            <h1>Tạo nhóm</h1>
            <div className={classes.user}>
                <div className={classes.avatar}>
                    <img src={defaultAvt} alt="" />
                </div>
                <div className={classes.infor}>
                    <h3>Đặng Hoàng</h3>
                    <span>Quản trị viên</span>
                </div>
            </div>
            <div className={classes.setting}>
                <div className={classes.input}>
                    <input type="text" placeholder='Tên nhóm'/>
                </div>
                <div className={classes.select} onClick={handleToggleDrop}>
                    <span>Chọn quyền riêng tư</span>
                    <div className={classes.dropIcon}>
                        <AiFillCaretDown />
                    </div>
                </div>
                {isDrop && <div className={classes.access}>
                    <div className={classes.item}>
                        <div className={classes.circle}>
                            <RiEarthFill size={20} fill='#B0B3B8'/>
                        </div>  
                        <div className={classes.accessInfor}>
                            <h4>Công khai</h4>
                            <span>Bất kì ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng</span>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.circle}>
                            <FaLock size={20} fill='#B0B3B8'/>
                        </div>  
                        <div className={classes.accessInfor}>
                            <h4>Riêng tư</h4>
                            <span>Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng</span>
                        </div>
                    </div>
                </div>}
            </div>

            <div className={classes.footer}>
                <div className={disable ? [classes.button,classes.disable].join(' ') : classes.button}>
                    <span>Tạo</span>
                </div>
            </div>
        </div>
    )
}

export default GroupCreationSidebar