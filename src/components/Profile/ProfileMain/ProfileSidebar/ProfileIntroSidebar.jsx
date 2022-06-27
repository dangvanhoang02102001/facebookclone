import moment from 'moment';
import { useSelector } from 'react-redux';

import { IoLocationSharp } from 'react-icons/io5';
import { AiFillClockCircle } from 'react-icons/ai';

import Button from '~/packages/Button'
import classes from './ProfileIntroSidebar.module.scss'

const ProfileIntroSidebar = (props) => {
    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>Giới thiệu</div>
            <div className={classes.bio}>
                <div className={classes.bioContent}>{currentUser.bio || 'Bạn chưa có tiểu sử'}</div>
                <Button content="Chỉnh sửa tiểu sử" />
            </div>
            <div className={classes.infor}>
                {currentUser.address && <div className={classes.item}>
                    <div className={classes.icon}>
                        <IoLocationSharp fill='#B0B3B8' size={24}/>
                    </div>
                    <span>{currentUser.address}</span>
                </div>}
                <div className={classes.item}>
                    <AiFillClockCircle size={24} color='#B0B3B8'/>
                    <span>Đã tham gia vào năm {moment(currentUser.created_at).format('YYYY')}</span>
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