import { ImCamera } from 'react-icons/im';
import bg from '~/assets/img/bgProfile.jpg'
import classes from './Cover.module.scss'

const Cover = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.blank}></div>
            <div className={classes.cover}>
                <img src={bg} alt="" />
                <div className={classes.edit}>
                    <ImCamera />
                    <span>Chỉnh sửa ảnh bìa</span>
                </div>
            </div>
            
        </div>
    )
}

export default Cover