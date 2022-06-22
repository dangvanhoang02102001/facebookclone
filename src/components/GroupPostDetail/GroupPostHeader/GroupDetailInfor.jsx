import Tippy from '@tippyjs/react'
import { RiEarthFill } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { BsFillCaretDownFill } from 'react-icons/bs';


import classes from './GroupDetailInfor.module.scss'
import GroupTooltip from '../GroupTooltip/GroupTooltip';

const GroupDetailInfor = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <div className={classes.inforWrapper}>
                    <div className={classes.infor}>
                        <div className={classes.leftInfo}>
                            <div className={classes.name}>Reactjs Việt Nam</div>
                            <div className={classes.group}>
                                <div className={classes.groupMode}> 
                                    <RiEarthFill fill='#B0B3B8'/>
                                    <span>Nhóm công khai</span>
                                </div>
                                <BsDot fill='#B0B3B8'/>
                                <div className={classes.member}>30.145 thành viên</div>
                            </div>
                        </div>
                        <Tippy
                            content={
                                <GroupTooltip />
                            }
                            placement="bottom"
                            interactive={true}
                            trigger='click'
                            offset={[20,5]}
                            arrow={true}
                            appendTo={() => document.body}
                        >
                            <div className={classes.button}>
                                <div className={classes.state} >
                                    <MdGroups size={20} color='#E4E6EB'/>
                                    <span>Đã tham gia</span>
                                    <BsFillCaretDownFill color='#E4E6EB'/>
                                </div>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}

export default GroupDetailInfor