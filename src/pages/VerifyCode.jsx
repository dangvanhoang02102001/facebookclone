import VerifyCodeComponent from "~/components/auth/RecoverAccount/VerifyCode";
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const VerifyCode = () => {
    const navigate = useNavigate()
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleBack = () => {
        navigate(-1)
    }

    const handleTypingCode = (e) => {
        setCode(e.target.value)
    }

    const handleTypingPass = (e) => {
        setPassword(e.target.value)
    }

    const handleBackLogin = () => {
        navigate('/login')

    }

    const handleChangePass = () => {
        if(code.length === 0 || password.length === 0) {
            setError(true)
            console.log('error')
        }else {
            handleBackLogin()
        }
    }

    return (
        <VerifyCodeComponent 
            code={code}
            password={password}
            error={error}
            onTypingCode={handleTypingCode}
            onTypingPass={handleTypingPass}
            onChangePass={handleChangePass}
            onBack={handleBack}
            onBackLogin={handleBackLogin}
        />
    )
}

export default VerifyCode