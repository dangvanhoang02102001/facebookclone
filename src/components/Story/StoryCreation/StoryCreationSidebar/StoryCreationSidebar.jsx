import { Link, useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import { useState, useRef } from "react";


import { RiSettings5Fill } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoTextOutline } from 'react-icons/io5';

import textBG1 from '~/assets/img/textBG1.jpg'
import textBG2 from '~/assets/img/textBG2.jpg'
import textBG3 from '~/assets/img/textBG3.jpg'
import textBG4 from '~/assets/img/textBG4.jpg'
import textBG5 from '~/assets/img/textBG5.jpg'
import textBG6 from '~/assets/img/textBG6.jpg'
import textBG7 from '~/assets/img/textBG7.jpg'
import textBG8 from '~/assets/img/textBG8.jpg'
import textBG9 from '~/assets/img/textBG9.jpg'
import textBG10 from '~/assets/img/textBG10.jpg'
import textBG11 from '~/assets/img/textBG11.jpg'
import textBG12 from '~/assets/img/textBG12.jpg'
import textBG13 from '~/assets/img/textBG13.jpg'
import textBG14 from '~/assets/img/textBG14.jpg'

import defaultAvatar from '~/assets/img/default.png'
import { FacebookIcon } from '~/assets/svg/icon';
import classes from './StoryCreationSidebar.module.scss'
import ConfirmModal from "./ConfirmModal";
import AccessModal from "~/packages/AccessModal/AccesModal";

const StoryCreationSidebar = (props) => {
    const inputElement = useRef();
    const navigate = useNavigate()

    const [drop, setDrop] = useState(false)

    
    const [confirmModal, setConfirmModal] = useState(false)
    const [settingModal, setSettingModal] = useState(false)

    const [activeBackground, setActiveBackground] = useState(0)
    const [textStyle, setTextStyle] = useState('Gọn gàng')


    const handleToggleDrop = () => {
        setDrop(!drop)
    }
    
    const handleCloseSettingModal = () => setSettingModal(false)
    const handleOpenSettingModal = () => setSettingModal(true)
    
    console.log(props.mode)

    const textStyles = [
        {
            type: 'Gọn Gàng',
            id: 0,
        },
        {
            type: 'Đơn giản',
            id: 1,
        },
        {
            type: 'Bình thường',
            id: 2,
        },
        {
            type: 'Kiểu cách',
            id: 3,
        },
        {
            type: 'Gọn Gàng',
            id: 4,
        }
    ]

    const backgroundArr = [
        {
            bg: textBG1,
            id: 0
        },
        {
            bg: textBG2,
            id: 1
        },
        {
            bg: textBG3,
            id: 2
        },
        {
            bg: textBG4,
            id: 3
        },
        {
            bg: textBG5,
            id: 4
        },
        {
            bg: textBG6,
            id: 5
        },
        {
            bg: textBG7,
            id: 6
        },
        {
            bg: textBG8,
            id: 7
        },
        {
            bg: textBG9,
            id: 8
        },
        {
            bg: textBG10,
            id: 9
        },
        {
            bg: textBG11,
            id: 10
        },
        {
            bg: textBG12,
            id: 11
        },
        {
            bg: textBG13,
            id: 12
        },
        {
            bg: textBG14,
            id: 13
        }
    ]



    const handleCloseModal = () => setConfirmModal(false)


    const handleOpenModalConfirm = () => {
        setConfirmModal(true)
    }

    const handleSetDefaultMode = () => {
        props.onSetDefaultMode()
        setConfirmModal(false)
    }


    const handleActiveBg = (id) => {
        setActiveBackground(id)
        const currentBackground = (backgroundArr[id].bg)
        props.onSetBackground(currentBackground)
    }

    const handleSelectType = (type) => {
        setTextStyle(type)
    }

    const handleTyping = (e) => {
        props.onSetText(e.target.value)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.actions}>
                    <div className={classes.circle} onClick={() => navigate(-1)}>
                        <CgClose color='#fff' size={24}/>
                    </div>
                    <Link to='/' className={classes.logo}>
                        <FacebookIcon />
                    </Link>
                </div>
            </div>   
            <div className={classes.content}>
                <div className={classes.infor}>
                    <h3>Tin của bạn</h3>
                    <div className={classes.user}>
                        <img src={defaultAvatar} alt="" />
                        <span>Đặng Hoàng</span>
                    </div>
                    <div className={classes.settingIcon} onClick={handleOpenSettingModal}>
                        <RiSettings5Fill  color="#E4E6EB" size={24}/>
                    </div>
                    <Modal
                        open={settingModal}
                        onClose={handleCloseSettingModal}
                    >
                        <>  
                            <AccessModal title="Quyền riêng tư của tin" onClose={handleCloseSettingModal}/>
                        </>
                    </Modal>
                </div>
                {props.mode === 'text'
                    ?
                    <>
                        <div className={classes.setup}>
                            <div className={classes.textInput}>
                                <textarea name="" id="" rows="10" ref={inputElement} placeholder="Bắt đầu nhập" onChange={handleTyping}></textarea>
                            </div>
                        </div>
                        {/*  */}
                        <div className={classes.textStyleWrapper} onClick={handleToggleDrop}>
                            <div className={classes.textIcon}>
                                <IoTextOutline />
                            </div>
                            <div className={classes.textStyle}>{textStyle}</div>
                            <div className={classes.dropIcon}>
                                <AiFillCaretDown />
                            </div>
                            {drop && <div className={classes.textSelection} >
                                {textStyles.map((text, index) => 
                                    <div className={classes.textStyle} key={index} onClick={() => handleSelectType(text.type)} >
                                        {text.type}
                                    </div> 
                                )}
                            </div>}
                        </div>
                        
                        <div className={classes.backgroundOptioon}>
                            <span>Phông nền</span>
                            <div className={classes.bgGroup}>
                                {backgroundArr.map((background, index) => 
                                    // <div key={index} }>
                                    <div key={index} className={background.id === activeBackground ? [classes.backgroundOption, classes.active].join(' ') : classes.backgroundOption} onClick={() => {handleActiveBg(background.id)}}>
                                        <img src={background.bg} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                    :
                    <></>
                }
            </div>
            {(props.mode === 'unset') ? 
                <></>
            :
                <div className={classes.buttons}>
                    <div className={classes.cancel} onClick={handleOpenModalConfirm}>Bỏ</div>
                    <Modal
                        open={confirmModal}
                        onClose={handleCloseModal}
                    >
                        <>
                            <ConfirmModal onClose={handleCloseModal} onSetDefaultMode={handleSetDefaultMode} />
                        </>
                    </Modal>
                    <div className={classes.share}>Chia sẻ lên tin</div>
                </div>
            }
        </div>
    )
}

export default StoryCreationSidebar