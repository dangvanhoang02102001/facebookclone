import { CreateZoomIcon, OptionIcon, SearchIcon } from '~/assets/svg/icon'
import classes from './Contact.module.scss'
import ContactUser from './ContactUser'
import lndAvatar from '~/assets/img/lndAvatar.jpg'
import linh from '~/assets/img/linh.jpg'
import tuyen from '~/assets/img/tuyen.jpg'
import hoadoan from '~/assets/img/hoadoan.jpg'
import tuan from '~/assets/img/tuan.jpg'
import rhyAvatar from '~/assets/img/rhyAvatar.jpg'
import cr7Avatar from '~/assets/img/cr7Avatar.jpg'
import gamAvatar from '~/assets/img/gamAvt.jpg'
import defaultAvatar from '~/assets/img/default.png'

const Contact = () => {
    const data = [
        {
            name: 'Linh',
            avatar: linh,
            haveStory: true,
            isViewed: false
        },
        {
            name: 'Linh Ngọc Đàm',
            avatar: lndAvatar,
            haveStory: true,
            isViewed: true
        },
        {
            name: 'Hoàng Minh Tuyến',
            avatar: defaultAvatar,
            haveStory: true,
            isViewed: false
        },
        {
            name: 'Hòa Đoàn',
            avatar: hoadoan,
            haveStory: true,
            isViewed: false
        },
        {
            name: 'Nguyễn Dụng Tuyên',
            avatar: tuyen,
            haveStory: true,
            isViewed: false
        },
        {
            name: 'Nguyễn Quốc Tuấn',
            avatar: tuan,
            haveStory: true,
            isViewed: false
        },
        {
            name: 'Minh Nguyễn',
            avatar: cr7Avatar,
            haveStory: false,
            isViewed: false
        },
        {
            name: 'Hoàng Nguyễn',
            avatar: defaultAvatar,
            haveStory: false,
            isViewed: false
        },
        {
            name: 'Vũ Đức Thiện',
            avatar: rhyAvatar,
            haveStory: true,
            isViewed: true
        },
        {
            name: 'Đỗ Duy Khánh',
            avatar: gamAvatar,
            haveStory: true,
            isViewed: true
        },
        {
            name: 'Hoàng Nguyễn',
            avatar: defaultAvatar,
            haveStory: false,
            isViewed: false
        },
        {
            name: 'Hoàng Nguyễn',
            avatar: defaultAvatar,
            haveStory: false,
            isViewed: false
        },
        {
            name: 'Linh Ngọc Đàm',
            avatar: lndAvatar,
            haveStory: false,
            isViewed: false
        },
    ]

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.title}>Người liên hệ</div>
                <div className={classes.actions}>
                    <div className={classes.action}>
                        <CreateZoomIcon />
                    </div>
                    <div className={classes.action}>
                        <SearchIcon />
                    </div>
                    <div className={classes.action}>
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className={classes.listContact}>
                {data.map((contact, index) => 
                    <ContactUser
                        key={index}
                        name={contact.name}
                        avatar={contact.avatar}
                        haveStory={contact.haveStory}
                        isViewed={contact.isViewed}
                    />
                )}
            </div>
        </div>
    )
}

export default Contact