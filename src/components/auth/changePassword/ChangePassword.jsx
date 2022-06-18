import { GrClose } from 'react-icons/gr';
import classes from './ChangePassword.module.scss'

const ChangePassword = ({ handleClose = () => {} }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h3>Change your password</h3>
                </div>
                <div className={classes.closeBtn} onClick={handleClose}>
                    <GrClose />
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.formGroup}>
                    <input className={classes.input} type="text" placeholder='Email Address' />
                </div>  
                <div className={classes.formGroup}>
                    <input className={classes.input} type="password" placeholder='Current Password' />
                </div>  
                <div className={classes.formGroup}>
                    <input className={classes.input} type="password" placeholder='New Password' />
                </div> 
                <div className={classes.signupBtn}>
                    <button>Change</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword