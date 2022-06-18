import { IoClose } from 'react-icons/io5';

import linh from '~/assets/img/linh.jpg'
import classes from './AvatarEditModal.module.scss'

const AvatarEditModal = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.closeBtn} onClick={props.onClose}>
                    <div className={classes.circle}>
                        <IoClose size={24} fill='#B0B3B8'/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.description}>
                    <textarea name="" id="" cols="30" rows="2" placeholder='Mô tả'></textarea>
                </div>
                <div className={classes.imageSection}>
                    <div className={classes.imageSelect}>
                        {props.selectedAvatar ? 
                            <img src={URL.createObjectURL(props.selectedAvatar)} alt="avatar" />
                        :
                            <img src={linh} alt="avatar" />
                        }
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <button onClick={props.onClose} className={classes.cancelBtn}>Hủy</button>
                <button className={classes.saveBtn}>Lưu</button>
            </div>
        </div>
    )
}

export default AvatarEditModal