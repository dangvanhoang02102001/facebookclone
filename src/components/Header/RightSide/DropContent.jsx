
import { RiSettings5Fill } from 'react-icons/ri';
import { IoHelpCircle,IoLogOutSharp } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { MdFeedback,MdLogout } from 'react-icons/md';
// import { IoLogOutSharp } from 'react-icons/io5';

import Card from '~/packages/Card'

import classes from './DropContent.module.scss'
import defaultAvt from '~/assets/img/default.png'
import { useNavigate } from 'react-router-dom';

const DropContent = () => {
    const navigate = useNavigate()
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

    const handleNavigateProfile = () => {
        navigate('/profile')
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.avatar}>
                    <img src={defaultAvt} alt="" />
                </div>
                <div className={classes.infor} onClick={handleNavigateProfile}>
                    <div className={classes.name}>Đặng Hoàng</div>
                    <span>Xem trang cá nhân của bạn</span>
                </div>
            </div>
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
                <div className={classes.item}>
                    <Card
                        svg
                        content='Đóng góp ý kiến'
                    >
                        <MdFeedback fill='#fff' size={24}/>
                    </Card>
                </div>
                <div className={classes.item}>
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