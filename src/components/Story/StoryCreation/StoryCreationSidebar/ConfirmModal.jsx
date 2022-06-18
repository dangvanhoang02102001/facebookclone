import { IoCloseOutline } from 'react-icons/io5';


import classes from './ConfirmModal.module.scss'

const ConfirmModal = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Bỏ tin?</span>
                <div className={classes.closeBtn} onClick={props.onSetDefaultMode}>
                    <IoCloseOutline color='#B0B3B8' size={24}/>
                </div>
            </div>
            <div className={classes.content}>
                <span>
                Bạn có chắc chắn muốn bỏ tin này không? Hệ thống sẽ không lưu tin của bạn.
                </span>
                <div className={classes.buttons}>
                    <div className={classes.editButton} onClick={props.onClose}>Tiếp tục chỉnh sửa</div>
                    <div className={classes.cancelButton} onClick={props.onSetDefaultMode}>Bỏ</div>
                </div>  
            </div>
        </div>
    )
}

export default ConfirmModal