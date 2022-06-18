import { useState, useRef } from "react";

import { BsImage } from 'react-icons/bs';
import { IoTextOutline } from 'react-icons/io5';


import classes from './StoryCreationContent.module.scss'

const StoryCreationContent = (props) => {
    const [selectedImage, setSelectedImage] = useState();
    const previewRef = useRef()

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
          props.onSetImageMode()
        }
      };


    // Set text mode
    const handleSetTextMode = () => {
        props.onSetTextMode()
    }


    return (
        <div className={classes.wrapper}>
            {props.mode === 'unset' && <div className={classes.modes}>
                <div className={classes.imageMode} >
                    
                    <label className={classes.imageChosen} htmlFor="chosen-video" onClick={() => console.log('Test')}>
                        <div className={classes.inner} >
                            <div className={classes.circle}>
                                <BsImage color='#fff' size={20}/>
                            </div>
                            
                            <span>Tạo tin ảnh</span>
                        </div>
                    </label>
                    <input
                        id="chosen-video"
                        accept="image/*"
                        type="file"
                        onChange={imageChange}
                        hidden
                    />
                </div>
                <div className={classes.textMode} onClick={handleSetTextMode}>
                    <div className={classes.inner} >
                        <div className={classes.circle}>
                            <IoTextOutline color='#fff' size={20}/>
                        </div>
                        <span>Tạo tin văn bản</span>
                    </div>
                </div>
            </div>  }
            {props.mode === 'text' && <div className={classes.previewWrapper}>
                <div className={classes.preview}>
                    <div className={classes.title}>Xem trước</div>
                    <div className={classes.contentWrapper}>
                        <div className={classes.content}>
                            <div className={classes.textBg}>
                                <img src={props.background} alt="" />
                                <div className={classes.previewPost} ref={previewRef}>
                                    {props.text === '' ? 'Bắt đầu nhập' : props.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {props.mode === 'image' && <div className={classes.previewWrapper}>
                {selectedImage && (
                    <div className={classes.preview}>
                        <div className={classes.title}>Xem trước</div>
                        <div className={classes.contentWrapper}>
                            <div className={classes.content}>
                                <div className={classes.textBg}>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Thumb"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>}
        </div>
    )
}

export default StoryCreationContent