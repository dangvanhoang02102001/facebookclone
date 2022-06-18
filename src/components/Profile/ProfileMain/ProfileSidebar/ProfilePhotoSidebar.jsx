import obitoImg from '~/assets/img/obito.jpg'

import classes from './ProfilePhotoSidebar.module.scss'

const ProfilePhotoSidebar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Ảnh</span>
                <div className={classes.button}>
                    Xem tất cả ảnh
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.imageGroup}>
                    <div className={classes.imageItem}>
                        <img src={obitoImg} alt="" />
                    </div>
                    <div className={classes.imageItem}>
                        <img src={obitoImg} alt="" />
                    </div>
                    <div className={classes.imageItem}>
                        <img src={obitoImg} alt="" />
                    </div>
                </div>
                <div className={classes.imageGroup}>
                    <div className={classes.imageItem}>
                        <img src={obitoImg} alt="" />
                    </div>
                    <div className={classes.imageItem}>
                        <img src={obitoImg} alt="" />
                    </div>
                    <div className={classes.imageItem}>
                        <img src={obitoImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoSidebar