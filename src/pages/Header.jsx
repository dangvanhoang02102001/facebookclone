
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import HeaderComponent from "~/components/Header/Header"
import LeftSide from "~/components/Header/LeftSide/LeftSide"
import MainSide from "~/components/Header/MainSide/MainSide"
import RightSide from "~/components/Header/RightSide/RightSide"

const Header = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    const location = useLocation()
    const [menuActive, setMenuActive] = useState(false)
    const [messActive, setMessActive] = useState(false)
    const [notifyActive, setNotifyActive] = useState(false)
    const [dropActive, setDropActive] = useState(false)
    
    const rightOption = [setMenuActive,setMessActive, setNotifyActive, setDropActive]
    

    const handleActiveRightOption = (func) => {
        for(let unActiveOption of rightOption) {
            unActiveOption(false)
        }
    }

    const handleActiveMenu = () => {
        handleActiveRightOption(setMenuActive)
        setMenuActive(!menuActive)
    }

    const handleActiveMess = () => {
        handleActiveRightOption(setMessActive)
        setMessActive(!messActive)
    }

    const handleActiveNotify = () => {
        handleActiveRightOption(setNotifyActive)
        setNotifyActive(!notifyActive)
    }

    if(location.pathname !== window.location.pathname) {
        console.log('hsass')
    }
    
    const handleShowDropContent = () => {
        handleActiveRightOption(setDropActive)
        setDropActive(!dropActive)
    }

    const handleNavigateProfile = () => {
        axios.get(`/auth/user-profile/${currentUser.id}`)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        })
        navigate(`/profile/${currentUser.id}`)
    }

    const handleLogout = () => {
        // window.localStorage.removeItem('token')
        axios.get(`/logout`)
        .then(function (response) {
            window.localStorage.clear()
            console.log(response)
            navigate('/login')
        })
        .catch(function (err) {
            console.log(err)
        })
    }

    const handleChangePassword = () => {
        navigate('/account/change_password')
    }

    return(
        <HeaderComponent>
            <LeftSide />
            <MainSide
            />
            <RightSide 
                menuActive={menuActive}
                messActive={messActive}
                notifyActive={notifyActive}
                dropActive={dropActive}
                onActiveMenu={handleActiveMenu}
                onActiveMess={handleActiveMess}
                onActiveNotify={handleActiveNotify}
                onActiveDrop={handleShowDropContent}
                onNavigateProfile={handleNavigateProfile}
                onChangePassword={handleChangePassword}
                onLogout={handleLogout}
            />
        </HeaderComponent>
    )
}

export default Header