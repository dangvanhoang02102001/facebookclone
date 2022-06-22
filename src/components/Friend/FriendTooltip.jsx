import { FaUserTimes } from 'react-icons/fa';

import classes from './FriendTooltip.module.scss'

const FriendTooltip = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <FaUserTimes fill='#fff' size={20}/>
                <span>Hủy kết bạn</span>
            </div>
        </div>
    )
}

export default FriendTooltip