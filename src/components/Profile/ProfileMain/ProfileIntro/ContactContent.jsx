import { RiPencilFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import emailImg from '~/assets/img/email.png'
import classes from './ContactContent.module.scss'

const ContactContent = () => {
    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <>
            <div className={classes.item}>
                <div className={classes.image}>
                    <img src={emailImg} alt="" />
                </div>
                <span>{currentUser.email}</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
        </>
    )
}

export default ContactContent