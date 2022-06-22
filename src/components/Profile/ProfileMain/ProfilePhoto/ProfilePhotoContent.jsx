import { RiPencilFill } from 'react-icons/ri';
import obito from '~/assets/img/obito.jpg'

import classes from './ProfilePhotoContent.module.scss'

const ProfilePhotoContent = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.list}>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={obito} alt="" />
                    <div className={classes.button}>
                        <RiPencilFill fill='#fff' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoContent