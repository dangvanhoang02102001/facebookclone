import locationImg from '~/assets/img/location.png'
import { useSelector } from 'react-redux';
import { RiPencilFill } from 'react-icons/ri';

import classes from './CountryContent.module.scss'

const CountryContent = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)
    return (
        <>
            {currentUser.address ?
                <div className={classes.item}>
                    <div className={classes.emailImg}>
                        <img src={locationImg} alt="" />
                    </div>
                    <span>{currentUser.address}</span>
                    <div className={classes.button} size={24}>
                        <RiPencilFill />
                    </div>
                </div>
                :
                <div className={classes.empty}>Hiện chưa có thông tin</div>
            }
            
        </>
    )
}

export default CountryContent