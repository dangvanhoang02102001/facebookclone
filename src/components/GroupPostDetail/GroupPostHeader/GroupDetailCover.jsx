// import { ImCamera } from 'react-icons/im';
import { useSelector } from "react-redux"
import groupBg from '~/assets/img/groupBg.png'

import classes from './GroupDetailCover.module.scss'

const GroupDetailCover = () => {
    const currentGroup = useSelector(state => state.group.currentGroup)
    return (
        <div className={classes.wrapper}>
            <div className={classes.blank}></div>
            <div className={classes.cover}>
                {
                    currentGroup.background_image_group ? 
                    <img src={'http://localhost:8000/storage/employees/BGgroup/' + currentGroup.background_image_group} alt="" />
                    :
                    <img src={groupBg} alt="" />
                }
                
                {/* <div className={classes.edit}>
                    <ImCamera />
                    <span>Chỉnh sửa ảnh bìa</span>
                </div> */}
            </div>
            
        </div>
    )
}

export default GroupDetailCover