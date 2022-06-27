import axios from 'axios'
import { useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from '~/assets/img/default.png'
import { friendActions } from '~/store/friends-slice';
import classes from './ProfileFriendContent.module.scss'

const ProfileFriendContent = () => {
    const dispatch = useDispatch()
    const currentId = useSelector(state => state.user.currentId)
    
    useEffect(() => {
        axios.get(`/friendList/${currentId}`)
        .then(function (response) {
            dispatch(friendActions.setUserFriend(response.data.user))
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [currentId, dispatch])

    const friendList = useSelector(state => state.friend.userFriend)
    console.log(friendList)
    return (
        <div className={classes.wrapper}>
            <div className={classes.list}>
                {friendList.map(friend => 
                    <div className={classes.item} key={friend.id}>
                        <img src={'http://localhost:8000/storage/employees/avt/' + friend.profile_photo_path || defaultAvatar} alt="" />
                        <span>{friend.name}</span>
                        <div className={classes.circle}>
                            <BsThreeDots fill='#fff' size={20}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileFriendContent