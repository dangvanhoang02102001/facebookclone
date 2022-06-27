import axios from 'axios'
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import classes from './FriendRequest.module.scss'
import { friendActions } from '~/store/friends-slice';

const FriendRequest = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`/friendRequests`)
        .then(function (response) {
            console.log(response.data)
            dispatch(friendActions.setFriendRequest(response.data))
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [dispatch])

    const requestList = useSelector(state => state.friend.requestList)
    console.log(requestList.userRequest)
    return(
        <div className={classes.wrapper}>
            <div className={classes.section}>
                {requestList.userRequest.length === 0 ?
                    <div>Bạn chưa có lời mời kết bạn nào</div>
                :
                <>
                    <div className={classes.title}>
                        <span>Bạn có 13 lời mời kết bạn</span>
                    </div>
                    <div className={classes.list}>
                        {requestList.userRequest.map(request =>     
                            <div className={classes.item}>
                                <img src={'http://localhost:8000/storage/employees/avt/' + request.profile_photo_path} alt="#" />
                                <div className={classes.itemFooter}>
                                    <span>{request.name}</span>
                                    <div className={classes.emptyHeight}></div>
                                    <button className={classes.confirm}>Xác nhận</button>
                                    <button className={classes.remove}>Xóa</button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
                }
                
            </div>
        </div>
    )
}

export default FriendRequest