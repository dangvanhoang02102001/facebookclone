import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { BiNews } from 'react-icons/bi';
import { MdExplore } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';

import groupDefault from '~/assets/img/groupBg.png'
import group from '~/assets/img/201gr.jpg'

import classes from './GroupFeedSidebar.module.scss'

const GroupFeedSidebar = () => {
    const groupList = useSelector(state => state.group.groupList)
    console.log(groupList)

    return (
        <div className={classes.wrapper}>
            <div className={classes.topic}>
                <h1>Nhóm</h1>
            </div>
            <OverlayScrollbarsComponent
                className={classes.scroll}
                options={{
                    className: 'os-theme-light',
                    scrollbars: {
                        autoHide: 'leave',
                        autoHideDelay: 0,
                    }
                }}
            >
                <div className={classes.header}>
                    <NavLink to='/groups' end className={({ isActive }) => classes.button + ' ' + (isActive ? classes.active : "")}>
                        <div className={classes.circle}>
                            <BiNews size={20} fill="#fff"/>
                        </div>
                        <span>Bảng feed của bạn</span>
                    </NavLink>
                    <NavLink to='/groups/discover' className={({ isActive }) => classes.button + ' ' + (isActive ? classes.active : "")}>
                        <div className={classes.circle}>
                            <MdExplore size={20} fill="#fff"/>
                        </div>
                        <span>Khám phá</span>
                    </NavLink>
                    <NavLink to='/groups/create' className={classes.create}>
                        <BsPlus size={20} fill="#1877F2"/>
                        <span>Tạo nhóm mới</span>
                    </NavLink>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.join}>
                    <span>Nhóm đã tham gia</span>
                    {groupList.map(group => 
                        <div className={classes.group} key={group.id}>
                            {group.image_group ? <img src={'http://localhost:8000/storage/employees/BGgroup/' + group.image_group} alt="#" />
                            :
                            <img src={groupDefault} alt="#" />
                            }
                            <div className={classes.groupInfor}>
                                <span>{group.group_name}</span>
                            </div>
                        </div>
                    )}
                </div>
            </OverlayScrollbarsComponent>
            
        </div>
    )
}

export default GroupFeedSidebar