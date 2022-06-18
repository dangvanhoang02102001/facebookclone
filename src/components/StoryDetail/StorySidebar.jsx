import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { Link, useNavigate } from "react-router-dom";

import { CgClose } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

import { FacebookIcon } from '~/assets/svg/icon';

import classes from './StorySidebar.module.scss'
import StoryDetailList from "./StoryDetailList";

const StorySidebar = (props) => {
    const navigate = useNavigate()
    return (
        <div className={classes.wrapper}>
             <div className={classes.header}>
                <div className={classes.actions}>
                    <div className={classes.circle} onClick={() => navigate(-1)}>
                        <CgClose color='#fff' size={24}/>
                    </div>
                    <Link to='/' className={classes.logo}>
                        <FacebookIcon />
                    </Link>
                </div>
            </div> 
            <OverlayScrollbarsComponent
                className={classes.sidebar}
                options={{
                    className: 'os-theme-light',
                    scrollbars: {
                        autoHide: 'leave',
                        autoHideDelay: 0,
                    }
                }}
            > 
                <div className={classes.optionHeader}>
                    <span className={classes.topic}>Tin</span>
                    <div className={classes.createStory}>
                        <div className={classes.topicTitle}>Tin của bạn</div>
                        <Link className={classes.createSection} to='/stories/create'>
                            <div className={classes.icon}>
                                <AiOutlinePlus size={24} color='#1877F2'/>
                            </div>
                            <div className={classes.createContent}>
                                <h4>Tạo tin</h4>
                                <span>Bạn có thể chia sẻ ảnh hoặc viết thứ gì đó.</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={classes.listStory}>
                    <div className={classes.topicTitle}>Tất cả tin</div>
                    <div className={classes.storyItem}>
                        {props.stories.map((story) => 
                            <StoryDetailList
                                key={story.id}
                                name={story.user.name}
                                avatar={story.user.avatar}
                                storyCount={story.user.storyCount}
                                storyList={story.user.storyList}
                                uid={story.user.uid}
                                onSetUserId={props.onSetUserId}
                                onResetprogress={props.onResetprogress}
                            />
                        )}
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        </div>
    )
}

export default StorySidebar