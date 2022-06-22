
import Tippy from '@tippyjs/react'

import { BsThreeDots } from 'react-icons/bs';
import defaultAvatar from '~/assets/img/default.png'

import classes from './FriendList.module.scss'
import FriendTooltip from './FriendTooltip';

const FriendList = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.section}>
                <div className={classes.title}>
                    <span>Danh sách bạn bè</span>
                </div>
                <div className={classes.scroll}>
                    <div className={classes.list}>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                        <div className={classes.item}>
                            <img src={defaultAvatar} alt="" />
                            <span>Đặng Hoàng</span>
                            <Tippy
                                content={
                                    <FriendTooltip />
                                }
                                placement="top"
                                interactive={true}
                                trigger='click'
                                offset={[70,5]}
                                arrow={true}
                                appendTo={() => document.body}
                            >
                                <div className={classes.circle}>
                                    <BsThreeDots fill='#fff' size={20}/>
                                </div>
                            </Tippy>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendList