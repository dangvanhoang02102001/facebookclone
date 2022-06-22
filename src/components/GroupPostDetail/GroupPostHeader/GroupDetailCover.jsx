// import { ImCamera } from 'react-icons/im';
import reactBg from '~/assets/img/reactbg.jpg'
import classes from './GroupDetailCover.module.scss'

const GroupDetailCover = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.blank}></div>
            <div className={classes.cover}>
                <img src={reactBg} alt="" />
                {/* <div className={classes.edit}>
                    <ImCamera />
                    <span>Chỉnh sửa ảnh bìa</span>
                </div> */}
            </div>
            
        </div>
    )
}

export default GroupDetailCover