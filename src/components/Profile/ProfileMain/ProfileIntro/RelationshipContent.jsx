import { AiFillHeart } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';

import classes from './RelationshipContent.module.scss'

const RelationshipContent = () => {
    return (
        <>
            <div className={classes.item}>
                <div className={classes.icon}>
                    <AiFillHeart fill='#B0B3B8' size={28}/>
                </div>
                <span>Độc thân</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
        </>
    )
}

export default RelationshipContent