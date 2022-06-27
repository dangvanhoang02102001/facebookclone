import { useState } from 'react';

import { CgClose } from 'react-icons/cg';
import { Link, useNavigate } from "react-router-dom";
import { FacebookIcon } from '~/assets/svg/icon';

import { AiFillCaretDown } from 'react-icons/ai';
import { RiEarthFill } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa';

import classes from './GroupCreationSidebar.module.scss'
import { useSelector } from 'react-redux';

const GroupCreationSidebar = (props) => {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
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
                    <img src={'http://localhost:8000/storage/employees/avt/' + currentUser.profile_photo_path} alt="" />
                </div>
                <div className={classes.infor}>
                    <h3>{currentUser.name}</h3>
                    <span>Quản trị viên</span>
                </div>
            </div>
            <div className={classes.setting}>
                <div className={classes.input}>
                    <input type="text" placeholder='Tên nhóm' onChange={props.onTypingNameGroup}/>
                </div>
                <div className={classes.select} onClick={props.onToggleDrop}>
                    {props.groupMode === 1 && <div className={classes.groupMode}>
                        <RiEarthFill size={20} fill='#B0B3B8'/>
                        <span>Công khai</span>
                    </div>}
                    {props.groupMode === 2 && <div className={classes.groupMode}>
                        <FaLock size={20} fill='#B0B3B8'/>
                        <span>Riêng tư</span>
                    </div>}
                    {props.groupMode === 0 && <span>Chọn quyền riêng tư</span>}
                    
                    <div className={classes.dropIcon}>
                        <AiFillCaretDown />
                    </div>
                </div>
                {props.isDrop && <div className={classes.access}>
                    <div className={classes.item} onClick={props.onSetPublicMode}>
                        <div className={classes.circle}>
                            <RiEarthFill size={20} fill='#B0B3B8'/>
                        </div>  
                        <div className={classes.accessInfor}>
                            <h4>Công khai</h4>
                            <span>Bất kì ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng</span>
                        </div>
                    </div>
                    <div className={classes.item} onClick={props.onSetPrivateMode}>
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
                <div className={(props.grName !== '' && props.groupMode !== 0) ? classes.button : [classes.button,classes.disable].join(' ')} onClick={props.onCreateGroup}>
                    <span>Tạo</span>
                </div>
            </div>
        </div>
    )
}

export default GroupCreationSidebar