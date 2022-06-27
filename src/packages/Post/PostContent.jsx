import Tippy from '@tippyjs/react'
import ReactionEmoji from '../ReactionEmoji/ReactionEmoji';

import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

import { HahaIcon, LikeIcon, SadIcon } from '~/assets/svg/icon'
import classes from './PostContent.module.scss'


const PostContent = (props) => {
    // console.log(props)
    return (
        <div className={classes.wrapper}>
            {props.content && 
                <div className={classes.postContent}>
                    {props.display === 'post' && <img src={'http://localhost:8000/storage/employees/Post_home/' + props.content} alt="#" onClick={() => props.onShowPostDetail(props.id)}/> }
                    {props.display === 'group' && <img src={'http://localhost:8000/storage/employees/Post_group/' + props.content} alt="#"  onClick={props.onShowPostGroupDetail}/> }
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