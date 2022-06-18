import { useState } from 'react';
import Modal from '@mui/material/Modal';

import { EmojiIcon, ImageIcon, LiveIcon } from '~/assets/svg/icon'
import defaultAvatar from '~/assets/img/default.png'
import NewPostModal from './NewPosModal';
import classes from './CreateSection.module.scss'


const CreateSection = (props) => {
    const [createModal, setCreateModal] = useState(false)
    const [imageModal, setImageModal] = useState(false)
    const handleOpenCreateModal = () => setCreateModal(true)
    const handleOpenImageModal = () => setImageModal(true)
    const handleCloseCreateModal = () => setCreateModal(false)
    const handleCloseImageModal = () => setImageModal(false)

    const handleCloseAll = () => {
        handleCloseCreateModal()
        handleCloseImageModal()
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <img src={defaultAvatar} alt="" />
                <span onClick={handleOpenCreateModal}>Hoàng ơi, bạn đang nghĩ gì thế?</span>
                <Modal
                    open={createModal}
                    onClose={handleCloseCreateModal}
                >
                    <>
                        <NewPostModal type="default" onClose={handleCloseAll}/>
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
                        <NewPostModal type="image" onClose={handleCloseAll} />
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