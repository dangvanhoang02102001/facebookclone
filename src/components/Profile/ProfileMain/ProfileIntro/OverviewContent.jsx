import { AiFillHeart } from 'react-icons/ai';
import { IoTime } from 'react-icons/io5';
import { ImHome3 } from 'react-icons/im';
import { RiPencilFill } from 'react-icons/ri';

import classes from './OverviewContent.module.scss'

const OverviewContent = () => {
    return (
        <div>
            <div className={classes.item}>
                <div className={classes.icon}>
                    <AiFillHeart fill='#B0B3B8' size={28}/>
                </div>
                <span>Độc thân</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.icon}>
                    <ImHome3 fill='#B0B3B8' size={28}/>
                </div>
                <span>Sống tại Hưng Yên</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
            <div className={classes.item}>
                <div className={classes.icon}>
                    <IoTime fill='#B0B3B8' size={28}/>
                </div>
                <span>Tham gia vào năm 2017</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
        </div>
    )
}

export default OverviewContent