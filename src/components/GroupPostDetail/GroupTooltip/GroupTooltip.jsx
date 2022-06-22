import { FaUserTimes } from 'react-icons/fa';

import classes from './GroupTooltip.module.scss'

const GroupTooltip = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <FaUserTimes fill='#fff' size={20}/>
                <span>Rời khỏi nhóm</span>
            </div>
        </div>
    )
}

export default GroupTooltip