import Tippy from '@tippyjs/react'

import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

import { HahaIcon, LikeIcon, SadIcon } from '~/assets/svg/icon'
import ReactionEmoji from '../ReactionEmoji/ReactionEmoji';
import classes from './PostContent.module.scss'


const PostContent = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.display === 'news' && 
                <div className={classes.postContent}>
                    <img src={props.content} alt="#" />
                </div>
            }
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
                    <span>{props.totalReact}</span>
                </div>
                <div className={classes.commentWrapper}>
                    <div className={classes.comment}>
                        {props.commentCount === 0 ?
                            ''
                        :
                            <span>{props.commentCount} bình luận</span>
                        }
                    </div>
                    <div className={classes.share}>
                        {props.shareCount === 0 ?
                            ''
                        :
                            <span>{props.shareCount} chia sẻ</span>
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
                    offset={[68,5]}
                    appendTo={() => document.body}
                >
                    <div className={classes.action}>
                        <AiOutlineLike size={20} color='#B0B3B8' />
                        <span>Thích</span>
                    </div>
                </Tippy>
                
                <div className={classes.action}>
                    <FaRegCommentAlt color='#B0B3B8' />
                    <span>Bình luận</span>
                </div>
                <div className={classes.action}>
                    <RiShareForwardLine size={20} color='#B0B3B8' />
                    <span>Chia sẻ</span>
                </div>
            </div>
        </div>
    )
}

export default PostContent