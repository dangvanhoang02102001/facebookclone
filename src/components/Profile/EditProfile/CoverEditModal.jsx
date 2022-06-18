import { IoClose } from 'react-icons/io5';
import bgProfile from '~/assets/img/bgProfile.jpg'

import classes from './CoverEditModal.module.scss'

const CoverEditModal = (props) => {
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
                <div className={classes.cover}>
                    {props.selectedImage ?
                        <img src={URL.createObjectURL(props.selectedImage)} alt="cover" />
                    :
                        <img src={bgProfile} alt="cover" />
                    }
                </div>
            </div>
            <div className={classes.footer}>
                <button onClick={props.onClose} className={classes.cancelBtn}>Hủy</button>
                <button className={classes.saveBtn}>Lưu</button>
            </div>
        </div>
    )
}

export default CoverEditModal