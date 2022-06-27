import axios from 'axios'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import { IoTime, IoClose, IoLocationSharp } from 'react-icons/io5';

import defaultAvt from '~/assets/img/default.png'
import bg from '~/assets/img/bgProfile.jpg'

import classes from './EditProfile.module.scss'
import HeaderTitle from './HeaderTitle'
import ImageSelectModal from './ImageSelectModal';
import DetailEdit from './DetailEdit';
import moment from 'moment';
import { useSelector } from 'react-redux';

const EditProfile = (props) => {
    const [avatarEdit, setAvatarEdit] = useState(false)
    const [coverEdit, setCoverEdit] = useState(false)
    const [detailEdit, setDetailEdit] = useState(false)

    const currentId = useSelector(state => state.user.currentId)

    const handleShowAvatarEdit = () => setAvatarEdit(true)
    const handleCloseAvatarEdit = () => setAvatarEdit(false)

    const handleShowCoverEdit = () => setCoverEdit(true)
    const handleCloseCoverEdit = () => setCoverEdit(false)

    const handleShowDetailEdit = () => setDetailEdit(true)
    const handleCloseDetailEdit = () => setDetailEdit(false)

    const handleOpenBioMode = () => {
        props.onEditBio()
    }

    const handleEditBio = (e) => {
        console.log(e.target.value)
    }

    const handleUpdateProfile = () => {
        console.log('update')
        axios.post(`/auth/user/${currentId}`, {
            profile_photo_path: defaultAvt,
            background_img: bg,
            bio: 'test',
            address: 'Ninh Binh 2'
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        });
    }

    console.log(props)

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Chỉnh sửa trang cá nhân</span>
                <div className={classes.closeBtn} onClick={props.onClose}>
                    <div className={classes.circle}>
                        <IoClose size={24} fill='#B0B3B8'/>
                    </div>
                </div>
            </div>
            <OverlayScrollbarsComponent
                className={classes.main}
                options={{
                    className: 'os-theme-light',
                    scrollbars: {
                        autoHide: 'leave',
                        autoHideDelay: 0,
                    }
                }}
            >
                <div className={classes.section}>
                    <HeaderTitle title='Ảnh đại diện' button='Chỉnh sửa' onEdit={handleShowAvatarEdit}/>
                    <Modal
                        open={avatarEdit}
                        onClose={handleCloseAvatarEdit}
                    >
                        <>  
                            <ImageSelectModal 
                                avatar={props.avatar}
                                coverImg={props.coverImg}
                                bio={props.bio}
                                address={props.address}
                                title='Cập nhật ảnh đại diện' 
                                onCloseAvatar={handleCloseAvatarEdit} 
                                mode='avatar'
                            />
                        </>
                    </Modal>
                    <div className={classes.content}>
                        <img className={classes.avatar} src={'http://localhost:8000/storage/employees/avt/' + props.avatar || defaultAvt} alt="" />
                    </div>
                </div>
                <div className={classes.section}>
                    <HeaderTitle title='Ảnh bìa' button='Chỉnh sửa' onEdit={handleShowCoverEdit}/>
                    <Modal
                        open={coverEdit}
                        onClose={handleCloseCoverEdit}
                    >
                        <>  
                            <ImageSelectModal 
                                avatar={props.avatar}
                                coverImg={props.coverImg}
                                bio={props.bio}
                                address={props.address}
                                title='Cập nhật ảnh bìa'
                                onCloseCover={handleCloseCoverEdit} 
                                mode='cover'
                             />
                        </>
                    </Modal>
                    <div className={classes.content}>
                        <img className={classes.cover} src={'http://localhost:8000/storage/employees/BGprofile/' + props.coverImg || bg} alt="" />
                    </div>
                </div>
                <div className={classes.section}>
                    <HeaderTitle title='Tiểu sử' button={props.bio ? 'Chỉnh sửa' : 'Thêm'} onEdit={handleOpenBioMode}/>
                    <div className={classes.content}>
                        {props.bioEdit ? 
                            <div className={classes.bioEditMode}>
                                <div className={classes.bioEdit}>
                                    <textarea name="" id="editTexarea" cols="30" rows="3" onChange={handleEditBio} value={props.bio}></textarea>
                                </div>
                                <div className={classes.bioButton}>
                                    <button className={classes.cancelBtn} onClick={props.onCancelEditBio}>Hủy</button>
                                    <button className={classes.saveBtn}>Lưu</button>
                                </div>
                            </div>
                            :
                            <span className={classes.bio}>{props.bio || 'Bạn chưa có tiểu sử'}</span>
                        }
                    </div>
                </div>
                <div className={classes.section}>
                    <HeaderTitle title='Chỉnh sửa phần giới thiệu' button='Chỉnh sửa' onEdit={handleShowDetailEdit}/>
                    <Modal
                        open={detailEdit}
                        onClose={handleCloseDetailEdit}
                    >
                        <>  
                            <DetailEdit
                                title='Chỉnh sửa thông tin chi tiết' 
                                onClose={handleCloseDetailEdit}
                                address={props.address}
                                timeJoin={props.timeJoin}
                            />
                        </>
                    </Modal>
                    <div className={classes.content}>
                        <div className={classes.infor}>
                            {props.address && <div className={classes.item}>
                                <div className={classes.icon}>
                                    <IoLocationSharp fill='#B0B3B8' size={20}/>
                                </div>
                                <span>{props.address}</span>
                            </div>}
                            
                            <div className={classes.item}>
                                <div className={classes.icon}>
                                    <IoTime fill='#B0B3B8' size={20}/>
                                </div>
                                <span>Tham gia vào năm {moment(props.timeJoin).format('YYYY')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.update} onClick={handleUpdateProfile}>
                        <span>Cập nhật</span>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    )
}

export default EditProfile