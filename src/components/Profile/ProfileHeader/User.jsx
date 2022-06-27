import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';

import { AiOutlinePlus } from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi';
import { ImCamera } from 'react-icons/im';

import defaultAvatar from '~/assets/img/default.png'

import classes from './User.module.scss'
import EditProfile from '../EditProfile/EditProfile';

const User = (props) => {
    const navigate = useNavigate()
    const [editMode, setEditMode] = useState(false)

    const handleOpenEditMode = () => setEditMode(true)
    const handleCloseEditMode = () => setEditMode(false)

    const friendList = useSelector(state => state.friend.userFriend)
    const currentUser = useSelector(state => state.user.currentUser)

    console.log(currentUser)
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <div className={classes.inforWrapper}>
                    <div className={classes.circle}>
                        <img src={'http://localhost:8000/storage/employees/avt/' + currentUser.profile_photo_path || defaultAvatar} alt="" />
                        <div className={classes.camera}>
                            <ImCamera size={18} color='#fff'/>
                        </div>
                    </div>
                    <div className={classes.infor}>
                        <div className={classes.leftInfo}>
                            <div className={classes.name}>{currentUser.name}</div>
                            <div className={classes.friendNumber}>{friendList.length} bạn bè</div>
                            <div className={classes.previewFriend}>
                                {friendList.map((friend, index) => 
                                    <div key={index} className={classes.item}>
                                        <img src={'http://localhost:8000/storage/employees/avt/' + friend.profile_photo_path || defaultAvatar} alt="" />
                                    </div>
                                )}
                                
                            </div>
                        </div>
                        <div className={classes.actions}>
                            <div className={classes.add} onClick={() => navigate('/stories/create')}>
                                <div>
                                    <AiOutlinePlus color='#1877F2' />
                                </div>
                                <span>Tạo tin</span>
                            </div>
                            
                            <div className={classes.edit} onClick={handleOpenEditMode}>
                                <HiPencil size={20} color='#E4E6EB'/>
                                <span>Chỉnh sửa trang cá nhân</span>
                            </div>
                            <Modal
                                open={editMode}
                                onClose={handleCloseEditMode}
                            >
                                <>  
                                    <EditProfile 
                                        avatar={currentUser.profile_photo_path}
                                        coverImg={currentUser.background_img}
                                        bio={currentUser.bio}
                                        address={currentUser.address}
                                        timeJoin={currentUser.created_at}
                                        onClose={handleCloseEditMode}
                                        bioEdit={props.bioEdit}
                                        onEditBio={props.onEditBio}
                                        onCancelEditBio={props.onCancelEditBio}
                                    />
                                </>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}

export default User