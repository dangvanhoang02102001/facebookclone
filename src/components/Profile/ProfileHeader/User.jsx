import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';

import { AiOutlinePlus } from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi';
import { ImCamera } from 'react-icons/im';

import defaultAvatar from '~/assets/img/default.png'
import linh from '~/assets/img/linh.jpg'
import tuyen from '~/assets/img/tuyen.jpg'
import hoadoan from '~/assets/img/hoadoan.jpg'
import tuan from '~/assets/img/tuan.jpg'

import classes from './User.module.scss'
import EditProfile from '../EditProfile/EditProfile';

const User = (props) => {
    const navigate = useNavigate()
    const [editMode, setEditMode] = useState(false)

    const handleOpenEditMode = () => setEditMode(true)
    const handleCloseEditMode = () => setEditMode(false)

    const frImage = [
        {
            img: linh,
        },
        {
            img: tuyen,
        },
        {
            img: hoadoan,
        },
        {
            img: defaultAvatar,
        },
        {
            img: tuan,
        },
        {
            img: tuyen,
        },
        {
            img: hoadoan,
        },
        {
            img: defaultAvatar,
        },
    ]

    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <div className={classes.inforWrapper}>
                    <div className={classes.circle}>
                        <img src={defaultAvatar} alt="" />
                        <div className={classes.camera}>
                            <ImCamera size={18} color='#fff'/>
                        </div>
                    </div>
                    <div className={classes.infor}>
                        <div className={classes.leftInfo}>
                            <div className={classes.name}>Đặng Hoàng</div>
                            <div className={classes.friendNumber}>30 bạn bè</div>
                            <div className={classes.previewFriend}>
                                {frImage.map((image, index) => 
                                    <div key={index} className={classes.item}>
                                        <img src={image.img} alt="" />
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