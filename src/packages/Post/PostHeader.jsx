
// import gamAvatar from '~/assets/img/gamAvt.jpg'
import Tippy from '@tippyjs/react'
import Moment from 'react-moment';

import { EarthIcon, OptionIcon } from '~/assets/svg/icon'
import Tick from '~/packages/Tick'
import ProfilePreview from '../ProfilePreview/ProfilePreview'
import defaultAvatar from '~/assets/img/default.png'
import classes from './PostHeader.module.scss'

const PostHeader = (props) => {
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
                    {props.title}
                </span>
            </div>
        </div>
    )
}

export default PostHeader