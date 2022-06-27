import Tippy from '@tippyjs/react'
import { useSelector } from "react-redux"
import { RiEarthFill } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';


import classes from './GroupDetailInfor.module.scss'
import GroupTooltip from '../GroupTooltip/GroupTooltip';

const GroupDetailInfor = (props) => {
    const currentGroup = useSelector(state => state.group.currentGroup)
    console.log(currentGroup)
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <div className={classes.inforWrapper}>
                    <div className={classes.infor}>
                        <div className={classes.leftInfo}>
                            <div className={classes.name}>{currentGroup.group_name}</div>
                            <div className={classes.group}>
                                {currentGroup.modifier === 1 &&
                                    <div className={classes.groupMode}> 
                                        <RiEarthFill fill='#B0B3B8'/>
                                        <span>Nhóm công khai</span>
                                    </div>
                                }
                                {currentGroup.modifier === 2 &&
                                    <div className={classes.groupMode}> 
                                        <FaLock fill='#B0B3B8'/>
                                        <span>Nhóm riêng tư</span>
                                    </div>
                                }
                                <BsDot fill='#B0B3B8'/>
                                <div className={classes.member}>{currentGroup.members.length} thành viên</div>
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