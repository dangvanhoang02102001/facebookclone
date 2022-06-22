import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdAddToPhotos, MdLocationOn } from 'react-icons/md';
import { FaUserTag } from 'react-icons/fa';

import defaultAvatar from '~/assets/img/default.png'
import bgText from '~/assets/img/bgText.png'
import { CloseIcon, EarthIcon, EmojiIcon, ImageIcon } from '~/assets/svg/icon';
import Circle from '~/packages/Circle';
import classes from './NewPostModal.module.scss'

const NewPostModal = (props) => {
   
    const [selectedImage, setSelectedImage] = useState();
    
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            props.onSetImageMode()
        }
    };

    const handleDiscardImagePreview = () => {
        props.onSetTextType()
        setSelectedImage()
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.title}>Tạo bài viết</div>

                <div className={classes.circle} onClick={props.onClose}>
                    <div className={classes.closeIcon}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.userInfo}>
                    <div className={classes.avatar}>
                        <img src={defaultAvatar} alt="" />
                    </div>
                    <div className={classes.inforWrapper}>
                        <div className={classes.name}>Đặng Hoàng</div>
                        <div className={classes.mode}>
                            <EarthIcon />
                            <span>Công khai</span>
                            <AiFillCaretDown />
                        </div>
                    </div>
                </div>
                <>
                    {props.type === 'text' ?
                        <div className={classes.defaultTypeWrapper}>
                            <div className={classes.inputCaptionDefault}>
                                <input type="text" placeholder='Hoàng ơi, bạn đang nghĩ gì thế?'/>
                            </div>
                            <div className={classes.defaultOptions}>
                                <div className={classes.defaultOption}>
                                    <img src={bgText} alt="" />
                                </div>
                                <div className={classes.emoji}>
                                    <EmojiIcon dfColor/>
                                </div>
                            </div>
                        </div>
                    :
                    <div className={classes.uploadContent}>
                        <div className={classes.inputCaption}>
                            <input type="text" placeholder='Hoàng ơi, bạn đang nghĩ gì thế?'/>
                            <div className={classes.emoji}>
                                <EmojiIcon dfColor/>
                            </div>
                        </div>
                        {selectedImage ? 
                            <div className={classes.previewPost}>
                                <div className={classes.cancelPost} onClick={handleDiscardImagePreview}>
                                    <CloseIcon size={16}/>
                                </div>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Thumb"
                                />
                            </div>
                            :
                            <label className={classes.uploadSection} htmlFor="chosen-video" onClick={() => console.log('Test')}>
                                <div className={classes.upload}>
                                    <div className={classes.inner}>
                                        <Circle>
                                            <MdAddToPhotos size={20} />
                                        </Circle>
                                        <span>Thêm ảnh</span>
                                    </div>
                                    <div className={classes.cancelImage} onClick={() => props.onSetTextType()}>
                                        <Circle small>
                                            <CloseIcon />
                                        </Circle>
                                    </div>
                                </div>
                                <input
                                    id="chosen-video"
                                    accept="image/*"
                                    type="file"
                                    onChange={imageChange}
                                    hidden
                                />
                            </label>
                        }

                        
                    </div>
                }
                </>
                <div className={classes.uploadMode}>
                    <div className={classes.optionsWrapper}>
                        <span>Thêm vào bài viết</span>
                        <div className={classes.options}>
                            <div className={classes.option} onClick={() => props.onSetImageType()}>
                                <ImageIcon />
                            </div>
                            <div className={classes.option}>
                                <FaUserTag size={24} color="#1877F2"/>
                            </div>
                            <div className={classes.option}>
                                <EmojiIcon />
                            </div>
                            <div className={classes.option}>
                                <MdLocationOn size={24} color="#F5533D"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.button}>
                    <span>Đăng</span>
                </div>
            </div>
        </div>
    )
}

export default NewPostModal