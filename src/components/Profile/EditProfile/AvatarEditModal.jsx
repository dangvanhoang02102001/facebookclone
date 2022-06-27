import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '~/store/user-slice';

import { IoClose } from 'react-icons/io5';
import classes from './AvatarEditModal.module.scss'

const AvatarEditModal = (props) => {
    const currentId = useSelector(state => state.user.currentId)
    const dispatch = useDispatch()

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('profile_photo_path', props.selectedAvatar || 'http://localhost:8000/storage/employees/Post_home/' + props.img);

        axios.post(`/auth/user/${currentId}`,formData)
        .then(function (response) {
            console.log(response)
            dispatch(userActions.setCurrentUser(response.data.user))
            props.onClose()
        })
        .catch(function (err) {
            console.log(err)
        });
    }

    return (
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
                <div className={classes.description}>
                    <textarea name="" id="" cols="30" rows="2" placeholder='Mô tả'></textarea>
                </div>
                <div className={classes.imageSection}>
                    <div className={classes.imageSelect}>
                        {props.selectedAvatar ? 
                            <img src={URL.createObjectURL(props.selectedAvatar)} alt="avatar" />
                        :
                            <img src={'http://localhost:8000/storage/employees/Post_home/' + props.img} alt="avatar" />
                        }
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <button onClick={props.onClose} className={classes.cancelBtn}>Hủy</button>
                <button className={classes.saveBtn} onClick={handleUpdate}>Lưu</button>
            </div>
        </div>
    )
}

export default AvatarEditModal