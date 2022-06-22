import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangePasswordComponent from "~/components/auth/ChangePassword/ChangePassword";


const ChangePassword = () => {
    const navigate = useNavigate()
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleTypingCurrentPassword = (e) => {
        setCurrentPassword(e.target.value)
    }

    const handleTypingNewPassword = (e) => {
        setNewPassword(e.target.value)
    }

    const handleTypingConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleBackToHome = () => {
        navigate('/')
    }

    const handleBackPrevious = () => {
        navigate(-1)
    }

    const handleChangePass = () => {
        if(currentPassword.length === 0 || newPassword.length === 0 || confirmPassword.length === 0) {
            setError('Vui lòng điền đầy đủ các mục phía trên.')
        }else {
            handleBackToHome()
        }
    }

    return (
        <ChangePasswordComponent
            currentPassword={currentPassword}
            newPassword={newPassword}
            confirmPassword={confirmPassword}
            error={error}
            onTypingCurrentPassword={handleTypingCurrentPassword}
            onTypingNewPassword={handleTypingNewPassword}
            onTypingConfirmPassword={handleTypingConfirmPassword}
            onBackToHome={handleBackToHome}
            onBack={handleBackPrevious}
            onChangePass={handleChangePass}
        />
    )
}

export default ChangePassword