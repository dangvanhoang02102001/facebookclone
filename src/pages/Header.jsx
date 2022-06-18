import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import HeaderComponent from "~/components/Header/Header"
import LeftSide from "~/components/Header/LeftSide/LeftSide"
import MainSide from "~/components/Header/MainSide/MainSide"
import RightSide from "~/components/Header/RightSide/RightSide"

const Header = () => {
    const location = useLocation()
    const currentPath = location.pathname
    const navigate = useNavigate()
    const [menuActive, setMenuActive] = useState(false)
    const [messActive, setMessActive] = useState(false)
    const [notifyActive, setNotifyActive] = useState(false)
    const [dropActive, setDropActive] = useState(false)

    

    const [homeActive, setHomeActive] = useState(currentPath === '/' ? true : false)
    const [friendActive, setFriendActive] = useState(false)
    const [watchActive, setWatchActive] = useState(false)
    const [marketActive, setMarketActive] = useState(false)
    const [gameActive, setGameActive] = useState(false)
    const [profileActive, setProfileActive] = useState(false)
    

    const mainOption = [setHomeActive,setFriendActive, setWatchActive, setMarketActive, setGameActive, setProfileActive]
    const rightOption = [setMenuActive,setMessActive, setNotifyActive, setDropActive]
    
    console.log(location)
    
    const handleActiveOption = (func) => {
        for(let unActiveOption of mainOption) {
            unActiveOption(false)
        }
        func(true)
    }

    const handleActiveRightOption = (func) => {
        for(let unActiveOption of rightOption) {
            unActiveOption(false)
        }
    }

    const hanldeActiveHome = () => {
        handleActiveOption(setHomeActive)
        navigate('/')
    }

    const hanldeActiveFriend = () => {
        handleActiveOption(setFriendActive)
    }

    const hanldeActiveWatch = () => {
        handleActiveOption(setWatchActive)
    }

    const hanldeActiveMarket = () => {
        handleActiveOption(setMarketActive)
    }

    const hanldeActiveGame = () => {
        handleActiveOption(setGameActive)
    }

    const handleActiveProfile = () => {
        handleActiveOption(setProfileActive)
        navigate('/profile')
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

    const handleShowDropContent = () => {
        handleActiveRightOption(setDropActive)
        setDropActive(!dropActive)
    }

    return(
        <HeaderComponent>
            <LeftSide />
            <MainSide
                homeActive={homeActive}
                friendActive={friendActive}
                watchActive={watchActive}
                marketActive={marketActive}
                gameActive={gameActive}
                onActiveHome={hanldeActiveHome}
                onActiveFriend={hanldeActiveFriend}
                onActiveWatch={hanldeActiveWatch}
                onActiveMarket={hanldeActiveMarket}
                onActiveGame={hanldeActiveGame}
            />
            <RightSide 
                profileActive={profileActive}
                menuActive={menuActive}
                messActive={messActive}
                notifyActive={notifyActive}
                dropActive={dropActive}
                onActiveProfile={handleActiveProfile}
                onActiveMenu={handleActiveMenu}
                onActiveMess={handleActiveMess}
                onActiveNotify={handleActiveNotify}
                onActiveDrop={handleShowDropContent}
            />
        </HeaderComponent>
    )
}

export default Header