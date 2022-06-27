import axios from 'axios'
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

import { friendActions } from '~/store/friends-slice'

import defaultAvatar from '~/assets/img/default.png'
import classes from './ProfileFriendSidebar.module.scss'

const ProfileFriendSidebar = () => {
    const currentId = useSelector(state => state.user.currentId)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`/friendList/${currentId}`)
        .then(function (response) {
            console.log(response)
            dispatch(friendActions.setUserFriend(response.data.user))
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [currentId,dispatch])

    const friendList = useSelector(state => state.friend.userFriend)
    console.log(friendList)
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Bạn bè</span>
                <div className={classes.button}>
                    Xem tất cả bạn bè
                </div>
            </div>
            <div className={classes.friendNumber}>{friendList.length} người bạn</div>
            <div className={classes.content}>
                <div className={classes.friendGroup}>
                    {friendList.map(friend => 
                        <div className={classes.item} key={friend.id}>
                            <img src={'http://localhost:8000/storage/employees/avt/' + friend.profile_photo_path || defaultAvatar} alt="" />
                            <div className={classes.name}>{friend.name}</div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileFriendSidebar