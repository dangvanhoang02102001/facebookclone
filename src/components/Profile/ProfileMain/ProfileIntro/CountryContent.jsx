import locationImg from '~/assets/img/location.png'

import { RiPencilFill } from 'react-icons/ri';

import classes from './CountryContent.module.scss'

const CountryContent = () => {
    return (
        <>
            <div className={classes.item}>
                <div className={classes.emailImg}>
                    <img src={locationImg} alt="" />
                </div>
                <span>Hưng Yên</span>
                <div className={classes.button} size={24}>
                    <RiPencilFill />
                </div>
            </div>
        </>
    )
}

export default CountryContent