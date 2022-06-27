import { useState } from "react";
import Modal from '@mui/material/Modal';

import { IoClose ,IoImagesSharp} from 'react-icons/io5';
import { AiOutlineUpload} from 'react-icons/ai';
import CoverEditModal from './CoverEditModal';
import AvatarEditModal from './AvatarEditModal';
import AvailableImage from './AvailableImage';
import classes from './ImageSelectModal.module.scss'

const ImageSelectModal = (props) => {
    const [imageAvailable, setImageAvailable] = useState(false)
    const [avatarEdit, setAvatarEdit] = useState(false)
    const [coverEdit, setCoverEdit] = useState(false)

    const handleShowAvatarEdit = () => setAvatarEdit(true)
    const handleCloseAvatarEdit = () => setAvatarEdit(false)

    const handleShowCoverEdit = () => setCoverEdit(true)
    const handleCloseCoverEdit = () => setCoverEdit(false)

    const [selectedCover, setSelectedCover] = useState();
    const [selectedAvatar, setSelectedAvatar] = useState();

    const handleChangeCover = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedCover(e.target.files[0]);
          handleShowCoverEdit()
        }
    };

    const handleChangeAvatar = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedAvatar(e.target.files[0]);
          handleShowAvatarEdit()
        }
    };

    const handleShowAvailableImage = () => setImageAvailable(true)
    const handleCloseAvailableImage = () => setImageAvailable(false)
    return (
        <>
            {props.mode === 'avatar'
                ?
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <div className={classes.title}>{props.title}</div>
                        <div className={classes.closeBtn} onClick={props.onCloseAvatar}>
                            <div className={classes.circle}>
                                <IoClose size={24} fill='#B0B3B8'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.option} onClick={handleShowAvailableImage}>
                            <div className={classes.background}>
                                <IoImagesSharp size={24} fill='#fff'/>
                            </div>
                            <span>Chọn ảnh</span>
                        </div>
                        <Modal
                            open={imageAvailable}
                            onClose={handleCloseAvailableImage}
                        >
                            <>  
                                <AvailableImage title='Chọn ảnh' onClose={handleCloseAvailableImage} mode='avatar'/>
                            </>
                        </Modal>
                        <div className={classes.option}>
                            <label htmlFor="image">
                                <div className={classes.background}>
                                    <AiOutlineUpload size={24} fill='#fff'/>
                                </div>
                                <span>Tải ảnh lên</span>
                                <input 
                                    id='image' 
                                    accept="image/*"
                                    type="file"
                                    onChange={handleChangeAvatar} 
                                    hidden
                                />
                            </label>
                            <Modal
                                open={avatarEdit}
                                onClose={handleCloseAvatarEdit}
                            >
                                <>  
                                    <AvatarEditModal 
                                        avatar={props.avatar}
                                        coverImg={props.coverImg}
                                        bio={props.bio}
                                        address={props.address}
                                        title='Cập nhật ảnh đại diện' 
                                        onClose={handleCloseAvatarEdit} 
                                        selectedAvatar={selectedAvatar}
                                    />
                                </>
                            </Modal>
                        </div>
                    </div>
                </div>
                :
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <div className={classes.title}>{props.title}</div>
                        <div className={classes.closeBtn} onClick={props.onCloseCover}>
                            <div className={classes.circle}>
                                <IoClose size={24} fill='#B0B3B8'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.option} onClick={handleShowAvailableImage}>
                            <div className={classes.background}>
                                <IoImagesSharp size={24} fill='#fff'/>
                            </div>
                            <span>Chọn ảnh</span>
                        </div>
                        <Modal
                            open={imageAvailable}
                            onClose={handleCloseAvailableImage}
                        >
                            <>  
                                <AvailableImage title='Chọn ảnh' onClose={handleCloseAvailableImage} mode='cover'/>
                            </>
                        </Modal>
                        <div className={classes.option}>
                            <label htmlFor="image">
                                <div className={classes.background}>
                                    <AiOutlineUpload size={24} fill='#fff'/>
                                </div>
                                <span>Tải ảnh lên</span>
                                <input 
                                    id='image' 
                                    accept="image/*"
                                    type="file"
                                    onChange={handleChangeCover} 
                                    hidden
                                />
                            </label>
                            <Modal
                                open={coverEdit}
                                onClose={handleCloseCoverEdit}
                            >
                                <>  
                                    <CoverEditModal 
                                        avatar={props.avatar}
                                        coverImg={props.coverImg}
                                        bio={props.bio}
                                        address={props.address}
                                        title='Cập nhật ảnh bìa' 
                                        onClose={handleCloseCoverEdit} 
                                        selectedCover={selectedCover}
                                    />
                                </>
                            </Modal>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ImageSelectModal