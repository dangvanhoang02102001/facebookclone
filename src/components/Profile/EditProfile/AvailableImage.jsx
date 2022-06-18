import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { IoClose } from 'react-icons/io5';
import obito from '~/assets/img/obito.jpg'

import classes from './AvailableImage.module.scss'
import CoverEditModal from './CoverEditModal';
import AvatarEditModal from './AvatarEditModal';

const AvailableImage = (props) => {
    const [imageEdit, setImageEdit] = useState(false)
    const [coverEdit, setCoverEdit] = useState(false)


    const handleShowImageEdit = () => setImageEdit(true)
    const handleCloseImageEdit = () => setImageEdit(false)

    const handleShowCoverEdit = () => setCoverEdit(true)
    const handleCloseCoverEdit = () => setCoverEdit(false)

    return(
        <>
            {props.mode === 'cover'
            ?
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <div className={classes.title}>{props.title}</div>
                        <div className={classes.closeBtn} onClick={props.onClose}>
                            <div className={classes.circle}>
                                <IoClose size={24} fill='#B0B3B8'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.imageGroup}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.iamge} onClick={handleShowCoverEdit}>
                                    <img src={obito} alt="" />
                                </div>
                                <Modal
                                    open={coverEdit}
                                    onClose={handleCloseCoverEdit}
                                >
                                    <>  
                                        <CoverEditModal title='Cập nhật ảnh đại diện' onClose={handleCloseCoverEdit}/>
                                    </>
                                </Modal>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <div className={classes.title}>{props.title}</div>
                        <div className={classes.closeBtn} onClick={props.onClose}>
                            <div className={classes.circle}>
                                <IoClose size={24} fill='#B0B3B8'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.imageGroup}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.iamge} onClick={handleShowImageEdit}>
                                    <img src={obito} alt="" />
                                </div>
                                <Modal
                                    open={imageEdit}
                                    onClose={handleCloseImageEdit}
                                >
                                    <>  
                                        <AvatarEditModal title='Cập nhật ảnh đại diện' onClose={handleCloseImageEdit}/>
                                    </>
                                </Modal>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                                <div className={classes.iamge}>
                                    <img src={obito} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AvailableImage