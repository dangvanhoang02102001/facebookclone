import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';

import Button from '~/packages/Button'
import classes from './ProfileIntroSidebar.module.scss'

const ProfileIntroSidebar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Giới thiệu</div>
            <div className={classes.bio}>
                <div className={classes.bioContent}>Not need to say :?</div>
                <Button content="Chỉnh sửa tiểu sử" />
            </div>
            <div className={classes.infor}>
                <div className={classes.item}>
                    <AiFillHeart size={24} color='#B0B3B8' />
                    <span>Độc thân</span>
                </div>
                <div className={classes.item}>
                    <AiFillClockCircle  size={24} color='#B0B3B8'/>
                    <span>Đã tham gia vào năm 2017</span>
                </div>
                
            </div>
            <div className={classes.actions}>
                <div className={classes.button}>
                    <Button content="Chỉnh sửa chi tiết" />
                </div>
                <div className={classes.button}>
                    <Button content="Thêm sở thích" />
                </div>

            </div>
        </div>
    )
}

export default ProfileIntroSidebar