import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import classes from './FormLogin.module.scss'
import Register from '../register/Register';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registerModal, setRegisterModal] = useState(false);
    const handleOpenRegisterModal = () => setRegisterModal(true);
    const handleCloseRegisterModal = () => setRegisterModal(false);

    const handleTypingEmail = (e) => {
        setEmail(e.target.value)
        setEmailError('')
        if(email.length === 0) 
        {
            setEmailError('')
        }
    }

    const handleTypingPass = (e) => {
        setPassword(e.target.value)
        setPassError('')

        if(password.length === 0) {
            setPassError('')
        }
    }   

    const handleLogin = () => {
        console.log('Login')
        if(email.length === 0) 
        {
            setEmailError('Email không thể bỏ trống')
        }
        if(password.length === 0) {
            setPassError('Password không thể bỏ trống')
        }
        if(email.length !== 0 && password.length !== 0) {
            navigate('/')
        }
    }
    

    return(
        <div className={classes.wrapper}>
            <div className={classes.form}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        '& .MuiInputLabel-root': { fontSize: '1.6rem', lineHeight: '1.6rem' },
                        '& .css-1ftyaf0>span': { padding: '0 24px', textAlign: 'center' },
                        '& .css-1in441m ': {fontSize: '1.2rem'}
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className={classes.formGroup}>
                        <TextField 
                            className={classes.input}
                            id="email-search" 
                            label="Email" 
                            type="search" 
                            inputProps={{style: {fontSize: '1.6rem', height: '1.6rem'}}}
                            onChange={handleTypingEmail}
                            value={email}
                            // InputLabelProps={{style: {fontSize: '1.6rem'}}}
                        />
                        {emailError !== '' && <div className={classes.error}>
                            <div className={classes.arrow}></div>
                            <span>{emailError}</span>
                        </div>
                        }
                        <TextField
                            className={classes.input}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            inputProps={{style: {fontSize: '1.6rem', height: '1.6rem'}}}
                            autoComplete="current-password"
                            onChange={handleTypingPass}
                            value={password}
                        />
                        {passError !== '' && <div className={classes.error}>
                            <div className={classes.arrow}></div>
                            <span>{passError}</span>
                        </div>
                        }
                    </div>
                </Box>
                <div className={classes.button} onClick={handleLogin}>
                    <Button variant="contained" disableElevation className={classes.loginBtn}>
                        Đăng nhập
                    </Button>
                </div>
                <div className={classes.recoverPass}>
                    <span onClick={() => navigate('/account/recover')}>Quên tài khoản?</span>
                </div>
                <div className={classes.seperate}></div>
                <div className={classes.button}>
                    <Button variant="contained" disableElevation className={classes.createBtn} onClick={handleOpenRegisterModal}>
                        Tạo tài khoản mới
                    </Button>
                    <Modal
                        open={registerModal}
                        onClose={handleCloseRegisterModal}
                    >
                        <>
                            <Register handleClose={handleCloseRegisterModal}/>
                        </>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default FormLogin