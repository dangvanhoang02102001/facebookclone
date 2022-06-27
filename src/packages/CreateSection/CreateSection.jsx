import { useState } from 'react';
import Modal from '@mui/material/Modal';

import { EmojiIcon, ImageIcon, LiveIcon } from '~/assets/svg/icon'
import defaultAvatar from '~/assets/img/default.png'
import NewPostModal from './NewPosModal';
import classes from './CreateSection.module.scss'
import { useSelector } from 'react-redux';


const CreateSection = (props) => {
    const [type, setType] = useState('text')
    const [createModal, setCreateModal] = useState(false)
    const [imageModal, setImageModal] = useState(false)
    const handleOpenCreateModal = () => setCreateModal(true)
    const handleOpenImageModal = () => {
        setImageModal(true)
        setType('image')
    }
    const handleCloseCreateModal = () => setCreateModal(false)
    const handleCloseImageModal = () => setImageModal(false)

    const handleCloseAll = () => {
        handleCloseCreateModal()
        handleCloseImageModal()
    }

    const handleSetTextType = () => {
        setType('text')
    }

    const handleSetImageType = () => {
        setType('image')
    }

    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <img src={defaultAvatar} alt="" />
                <span onClick={handleOpenCreateModal}>{currentUser.name} ơi, bạn đang nghĩ gì thế?</span>
                <Modal
                    open={createModal}
                    onClose={handleCloseCreateModal}
                >
                    <>
                        <NewPostModal 
                            type={type} 
                            onClose={handleCloseAll}
                            onSetTextType={handleSetTextType}
                            onSetImageType={handleSetImageType}
                        />
                    </>
                </Modal>
            </div>
            <div className={classes.footer}>
                <div className={classes.type}>
                    <LiveIcon />
                    <span>Video trực tiếp</span>
                </div>
                <div className={classes.type} onClick={handleOpenImageModal}>
                    <ImageIcon />
                    <span >Ảnh/Video</span>
                </div>
                <Modal
                    open={imageModal}
                    onClose={handleCloseImageModal}
                >
                    <>
                        <NewPostModal 
                            type={type} 
                            onClose={handleCloseAll}
                            onSetTextType={handleSetTextType}
                            onSetImageType={handleSetImageType}
                         />
                    </>
                </Modal>
                {props.type === 'default'
                ?
                    <></>
                :
                    <div className={classes.type}>
                        <EmojiIcon />
                        <span>Cảm xúc/Hoạt động</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default CreateSection