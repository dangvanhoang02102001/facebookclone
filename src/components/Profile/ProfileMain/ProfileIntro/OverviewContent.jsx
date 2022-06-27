
import moment from 'moment';
import { useSelector } from 'react-redux';

import { IoTime } from 'react-icons/io5';
import { ImHome3 } from 'react-icons/im';
import { RiPencilFill } from 'react-icons/ri';

import classes from './OverviewContent.module.scss'

const OverviewContent = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)

    return (
        <div>
            {currentUser.address && <div className={classes.item}>
                <div className={classes.icon}>
                    <ImHome3 fill='#B0B3B8' size={28}/>
                </div>
                <span>Sống tại {currentUser.address}</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div> }
            
            <div className={classes.item}>
                <div className={classes.icon}>
                    <IoTime fill='#B0B3B8' size={28}/>
                </div>
                <span>Tham gia vào năm {moment(currentUser.created_at).format('YYYY')}</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
        </div>
    )
}

export default OverviewContent