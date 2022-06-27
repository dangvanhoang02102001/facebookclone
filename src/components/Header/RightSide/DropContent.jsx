
import { RiSettings5Fill, RiLockPasswordFill } from 'react-icons/ri';
import { IoHelpCircle } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

import Card from '~/packages/Card'

import classes from './DropContent.module.scss'
import defaultAvt from '~/assets/img/default.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DropContent = (props) => {
    const currentUser = useSelector(state => state.user.currentUser)
    const footer = [
        {
            id: 0,
            content: 'Quyền riêng tư'
        },
        {
            id: 1,
            content: 'Điều khoản'
        },
        {
            id: 2,
            content: 'Quảng cáo'
        },
        {
            id: 3,
            content: 'Lựa chọn quảng cáo'
        },
        {
            id: 4,
            content: 'Cookie'
        },
        {
            id: 5,
            content: 'Xem thêm'
        },
        {
            id: 6,
            content: 'Meta'
        },
        {
            id: 7,
            content: '2022'
        },
    ]

    return (
        <div className={classes.wrapper}>
            <NavLink to='/profile' className={classes.header}>
                <div className={classes.avatar}>
                    <img src={'http://localhost:8000/storage/employees/avt/' + currentUser.profile_photo_path || defaultAvt} alt="" />
                </div>
                <div className={classes.infor} onClick={props.onNavigateProfile}>
                    <div className={classes.name}>{currentUser?.name}</div>
                    <span>Xem trang cá nhân của bạn</span>
                </div>
            </NavLink>
            <div className={classes.divider}></div>
            <div className={classes.options}>
                <div className={classes.item}>
                    <Card
                        svg
                        content='Cài đặt & quyền riêng tư'
                    >
                        <RiSettings5Fill fill='#fff' size={24}/>
                    </Card>
                </div>
                <div className={classes.item}>
                    <Card
                        svg
                        content='Trợ giúp & hỗ trợ'
                    >
                        <IoHelpCircle fill='#fff' size={24}/>
                    </Card>
                </div>
                <div className={classes.item}>
                    <Card
                        svg
                        content='Màn hình và trợ năng'
                    >
                        <FaMoon fill='#fff' size={24}/>
                    </Card>
                </div>
                <div className={classes.item} onClick={props.onChangePassword}>
                    <Card
                        svg
                        content='Đổi mật khẩu'
                    >
                        <RiLockPasswordFill fill='#fff' size={24}/>
                    </Card>
                </div>
                <div className={classes.item} onClick={props.onLogout}>
                    <Card
                        svg
                        content='Đăng xuất'
                    >
                        <MdLogout fill='#fff' size={24}/>
                    </Card>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.list}>
                    {footer.map(item => 
                        <span className={classes.text} key={item.id}>{item.content}</span>    
                    )}
                </div>
            </div>
        </div>
    )
}

export default DropContent