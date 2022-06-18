import emailImg from '~/assets/img/email.png'

import { RiPencilFill } from 'react-icons/ri';

import classes from './ContactContent.module.scss'

const ContactContent = () => {
    return (
        <>
            <div className={classes.item}>
                <div className={classes.image}>
                    <img src={emailImg} alt="" />
                </div>
                <span>dvhoang1608hy@gmail.com</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
        </>
    )
}

export default ContactContent