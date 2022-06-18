import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import classes from './FormLogin.module.scss'
import Register from '../register/Register';
import ChangePassword from '../changePassword/ChangePassword';

const FormLogin = () => {
    const [registerModal, setRegisterModal] = useState(false);
    const [changePass, setChangePassword] = useState(false);
    const handleOpenRegisterModal = () => setRegisterModal(true);
    const handleOpenChangePass = () => setChangePassword(true);
    const handleCloseRegisterModal = () => setRegisterModal(false);
    const handleCloseChangePass = () => setChangePassword(false);

    return(
        <div className={classes.wrapper}>
            <div className={classes.form}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        '& .MuiInputLabel-root': { fontSize: '1.6rem', lineHeight: '1.6rem' },
                        '& .css-1ftyaf0>span': { padding: '0 16px', textAlign: 'center' }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className={classes.formGroup}>
                        <TextField 
                            className={classes.input}
                            id="outlined-search" 
                            label="Email" 
                            type="search" 
                            inputProps={{style: {fontSize: '1.6rem', height: '1.6rem'}}}
                            InputLabelProps={{style: {fontSize: '1.6rem'}}}
                        />
                        <TextField
                            className={classes.input}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                </Box>
                <div className={classes.button}>
                    <Button variant="contained" disableElevation className={classes.loginBtn}>
                        Log In
                    </Button>
                </div>
                <div className={classes.recoverPass}>
                    <span onClick={handleOpenChangePass}>Forgotten password?</span>
                    <Modal
                        open={changePass}
                        onClose={handleCloseChangePass}
                    >
                        <>
                            <ChangePassword handleClose={handleCloseChangePass} />
                        </>
                    </Modal>
                </div>
                <div className={classes.seperate}></div>
                <div className={classes.button}>
                    <Button variant="contained" disableElevation className={classes.createBtn} onClick={handleOpenRegisterModal}>
                        Create New Account
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