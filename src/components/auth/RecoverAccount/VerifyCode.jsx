
import Logo from '~/assets/svg'
import classes from './VerifyCode.module.scss'

const VerifyCode = (props) => {

    return (
        <div className={classes.wrapper}>
             <div className={classes.header}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.login} onClick={props.onBackLogin}>
                    <span>Đăng nhập</span>
                </div>
            </div>
            <div className={classes.form}>
                <div className={classes.title}>
                    <h3>Xác thực và đặt lại mật khẩu</h3>
                </div>
                {props.error && 
                    <div className={classes.error}>
                        <h4>Vui lòng điền đầy đủ các mục bên dưới</h4>
                        <span>Điền vào các mục bên dưới để cập nhật mật khẩu tài khoản của bạn</span>
                    </div>
                }
                <div className={classes.description}>Vui lòng nhập mã chúng tôi vừa gửi về email của bạn và mật khẩu mới để đổi mật khẩu.</div>
                <div className={classes.input}>
                    <input type="text" placeholder='Mã xác nhận' value={props.code} onChange={props.onTypingCode}/>
                </div>
                <div className={classes.input}>
                    <input type="password" placeholder='Mật khẩu mới' value={props.password} onChange={props.onTypingPass}/>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.cancelBtn} onClick={props.onBack}>Hủy</button>
                    <button className={classes.sendBtn} onClick={props.onChangePass}>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default VerifyCode