import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FacebookIcon } from '~/assets/svg/icon';

import classes from './LeftSide.module.scss'



const LeftSide = () => {
    return(
        <div className={classes.wrapper}>
            <Link to='/' className={classes.logo}>
                <FacebookIcon />
            </Link>
            <div className={classes.searchBar}>
                <div className={classes.searchIconWrapper}>
                    <div className={classes.hidenSearch}>
                        <HiOutlineSearch className={classes.searchIcon}/>
                    </div>
                </div>
                <input type="text" className={classes.searchInput} placeholder="Tìm kiếm trên Facebook"/>
            </div>
        </div>
    )
}

export default LeftSide