import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'

import defaultAvatar from '~/assets/img/default.png'
import classes from './CreateComment.module.scss'
import { useSelector } from 'react-redux'

const CreateComment = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <img src={'http://localhost:8000/storage/employees/avt/' + currentUser.profile_photo_path || defaultAvatar} alt="#" />
            </div>
            <div className={classes.input}>
                <input type="text" placeholder='Viết bình luận...' />
                <div className={classes.icon}>
                    <div className={classes.emoji}>
                        <BsEmojiSmile fill='#B0B3B8' />
                    </div>
                    <div className={classes.send}>
                        <AiOutlineSend fill='#B0B3B8'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateComment