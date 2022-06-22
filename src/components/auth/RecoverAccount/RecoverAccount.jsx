import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '~/assets/svg'

import classes from './RecoverAccount.module.scss'

const RecoverAccount = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const handleTypingInput = (e) => {
        setEmail(e.target.value)
        if(email.length === 0) {
            setEmailError('')
        }
    }

    const handleSendCode = () => {
        if(email.length === 0) {
            setEmailError(true)
        }else {
            navigate('/account/verify_code')
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.login} onClick={() => navigate('/login')}>
                    <span>Đăng nhập</span>
                </div>
            </div>
            <div className={classes.form}>
                <div className={classes.title}>
                    <h3>Khôi phục tài khoản</h3>
                </div>
                {emailError && 
                <div className={classes.error}>
                    <h4>Vui lòng điền vào ít nhất một trường</h4>
                    <span>Điền vào ít nhất một mục bên dưới để tìm kiếm tài khoản của bạn</span>
                </div>
                }
                <div className={classes.description}>Vui lòng nhập email để xác nhận mã khôi phục tài khoản của bạn.</div>
                <div className={classes.input}>
                    <input type="text" placeholder='Email' value={email} onChange={handleTypingInput}/>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.cancelBtn} onClick={() => navigate('/login')}>Hủy</button>
                    <button className={classes.sendBtn} onClick={handleSendCode}>Gửi</button>
                </div>
            </div>
        </div>
    )
}

export default RecoverAccount