import Logo from '~/assets/svg'
import classes from './ChangePassword.module.scss'

const ChangePassword = (props) => {
    return (
        <div className={classes.wrapper}>
             <div className={classes.header} onClick={props.onBackToHome}>
                <div className={classes.logo}>
                    <Logo />
                </div>
            </div>
            <div className={classes.form}>
                <div className={classes.title}>
                    <h3>Đặt lại mật khẩu</h3>
                </div>
                
                <div className={classes.description}>Nhập mật khẩu mói để cập nhật lại mật khẩu.</div>
                <div className={classes.input}>
                    <input type="password" placeholder='Mật khẩu hiện tại' value={props.currentPassword} onChange={props.onTypingCurrentPassword}/>
                </div>
                <div className={classes.input}>
                    <input type="password" placeholder='Mật khẩu mới' value={props.newPassword} onChange={props.onTypingNewPassword}/>
                </div>
                <div className={classes.input}>
                    <input type="password" placeholder='Xác thực mật khẩu mới' value={props.confirmPassword} onChange={props.onTypingConfirmPassword}/>
                </div>
                {props.error !== '' && 
                    <div className={classes.error}>
                        <h4>{props.error}</h4>
                    </div>
                }
                <div className={classes.buttons}>
                    <button className={classes.cancelBtn} onClick={props.onBack}>Hủy</button>
                    <button className={classes.sendBtn} onClick={props.onChangePass}>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword