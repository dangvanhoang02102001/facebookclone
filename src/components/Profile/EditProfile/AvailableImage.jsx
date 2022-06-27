import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5';

import classes from './AvailableImage.module.scss'
import CoverEditModal from './CoverEditModal';
import AvatarEditModal from './AvatarEditModal';

const AvailableImage = (props) => {
    const [imageEdit, setImageEdit] = useState(false)
    const [coverEdit, setCoverEdit] = useState(false)
    const [imageSelected, setImageSelected] = useState(null)
    const [coverSelected, setCoverSelected] = useState(null)

    const handleCloseImageEdit = () => setImageEdit(false)

    const handleCloseCoverEdit = () => setCoverEdit(false)
    const posts = useSelector(state => state.user.userPost)

    const handleShowImageEdit = (img) => {
        setImageSelected(img)
        setImageEdit(true)
    }

    const handleShowCoverEdit = (img) => {
        setCoverSelected(img)
        setCoverEdit(true)
    }

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
                                <Modal
                                    open={coverEdit}
                                    onClose={handleCloseCoverEdit}
                                >
                                    <>  
                                        <CoverEditModal title='Cập nhật ảnh bìa' onClose={handleCloseCoverEdit} img={coverSelected}/>
                                    </>
                                </Modal>
                                {posts.map(post => 
                                    <div key={post.id} style={{display: post.image === null && 'none'}} className={classes.iamge} onClick={() => handleShowCoverEdit(post.image)}>
                                        {post.image !== null ? 
                                            <img src={'http://localhost:8000/storage/employees/Post_home/' + post.image} alt="@" />
                                        :
                                        <></>
                                    }
                                    </div>
                                )}
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
                                <Modal
                                    open={imageEdit}
                                    onClose={handleCloseImageEdit}
                                >
                                    <>  
                                        <AvatarEditModal 
                                            title='Cập nhật ảnh đại diện' 
                                            onClose={handleCloseImageEdit}
                                            img={imageSelected}
                                        />
                                    </>
                                </Modal>
                                {posts.map(post => 
                                    <div key={post.id} style={{display: post.image === null && 'none'}} className={classes.iamge}  onClick={() => handleShowImageEdit(post.image)}>
                                        {post.image !== null ? 
                                            <img src={'http://localhost:8000/storage/employees/Post_home/' + post.image} alt="@" />
                                        :
                                        <></>
                                    }
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AvailableImage