import { BsCheck2 } from 'react-icons/bs';

import classes from './Tick.module.scss'

const Tick = () => {
    return (
        <div className={classes.wrapper}>
            <BsCheck2 color='#fff'/>
        </div>
    )
}

export default Tick