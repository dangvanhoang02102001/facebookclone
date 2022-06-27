import rmaAvatar from '~/assets/img/rmaAvatar.jpg'
import Tippy from '@tippyjs/react'
import Moment from 'react-moment';
import ReactionEmoji from '~/packages/ReactionEmoji/ReactionEmoji';

import { HahaIcon, LikeIcon, SadIcon } from '~/assets/svg/icon'
import { EarthIcon, OptionIcon } from '~/assets/svg/icon'
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

import Tick from '~/packages/Tick'
import ProfilePreview from '~/packages/ProfilePreview/ProfilePreview';
import defaultAvatar from '~/assets/img/default.png'
import classes from './DetailHeader.module.scss'

const DetailHeader = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.poster}>
                    <Tippy
                        content={
                            <ProfilePreview
                                avatar={props.avatar || defaultAvatar}
                                name={props.name}
                                tick={props.tick}
                            />
                        }
                        placement="bottom"
                        interactive={true}
                        trigger='mouseenter'
                        offset={[0,5]}
                        delay={[600,500]}
                        appendTo={() => document.body}
                    >
                        <img src={'http://localhost:8000/storage/employees/avt/' + props.avatar || defaultAvatar} alt="#" />
                    </Tippy>
                    <div className={classes.info}>
                        <Tippy
                            content={
                                <ProfilePreview
                                    avatar={props.avatar || defaultAvatar}
                                    name={props.name}
                                    tick={props.tick}
                                />
                            }
                            placement="bottom"
                            interactive={true}
                            trigger='mouseenter'
                            offset={[0,5]}
                            appendTo={() => document.body}
                        >
                            <div className={classes.name}>
                                <span>{props.name}</span>
                                {props.tick && <Tick />}
                            </div>
                        </Tippy>
                        <Moment className={classes.time} fromNow>{props.time}</Moment>
                    </div>
                </div>
                <div className={classes.action}>
                    <OptionIcon />
                </div>  
            </div>
            <div className={classes.caption}>
                <span>
                    {props.content}
                </span>
            </div>
            <div className={classes.statistical}>
                <div className={classes.react}>
                    <div className={classes.emoji}>
                        <LikeIcon size={18}/>
                    </div>
                    <div className={classes.emoji}>
                        <HahaIcon size={18}/>
                    </div>
                    <div className={classes.emoji}>
                        <SadIcon size={18}/>
                    </div>
                    <span>{props.create_postdetail[0].total.length > 0 && props.create_postdetail[0].total}</span>
                </div>
                <div className={classes.commentWrapper}>
                    <div className={classes.comment}>
                        {props.comments.length === 0 ?
                            ''
                        :
                            <span>{props.comments.length} bình luận</span>
                        }
                    </div>
                </div>
            </div>
            <div className={classes.actions}>
                <Tippy
                    content={
                        <ReactionEmoji backgroundColor='#242526'/>
                    }
                    placement="top"
                    interactive={true}
                    trigger='mouseenter'
                    offset={[100,6]}
                    appendTo={() => document.body}
                    zIndex={111111111111111}
                >
                    <div className={classes.reactAction}>
                        <AiOutlineLike size={20} color='#B0B3B8' />
                        <span>Thích</span>
                    </div>
                </Tippy>
                
                <div className={classes.reactAction}>
                    <FaRegCommentAlt color='#B0B3B8' />
                    <span>Bình luận</span>
                </div>
                <div className={classes.reactAction}>
                    <RiShareForwardLine size={20} color='#B0B3B8' />
                    <span>Chia sẻ</span>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader