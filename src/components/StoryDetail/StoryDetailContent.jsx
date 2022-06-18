import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { BsThreeDots, BsPauseFill, BsFillPlayFill } from 'react-icons/bs';

import classes from './StoryDetailContent.module.scss'
import ReactionEmoji from '~/packages/ReactionEmoji/ReactionEmoji';

const StoryDetailContent = (props) => {
    const [storyState, setStoryState] = useState('stop')

    let { uid } = useParams()

    const userSelected = props.stories.find(story => story.user.uid === uid)
    const currentListStory = userSelected.user.storyList
    
    useEffect(() => {
        const runningStr = currentListStory.find(story => story.isViewed === false) || currentListStory[0]
        runningStr.isActive = true
        currentListStory.forEach((str => {
            if(str.isActive) {
                console.log('running')
                // setStoryState('running')
                // console.log(storyState)
                // console.log(runningStr)
                console.log(currentListStory)
            }else {
                // setStoryState('stop')
                console.log('stop')
                console.log(currentListStory)

                // console.log(storyState)
            }
            // console.log(str)
        }))
        
    },[currentListStory,storyState])
    console.log(currentListStory)

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.storyImage}>
                    {userSelected.user.storyList.map((story, index) => 
                        <img key={index} src={story.content} alt="#" />
                    )}
                </div>
                <div className={classes.inner}>
                    <div className={classes.timeBar}>
                        {currentListStory.map(story => 
                            <div key={story.id} className={classes.barWrapper}>
                                <div className={classes.bar} style={{ width: story.isActive ? props.progress + "%" : 0 }}></div>
                                {/* <div className={classes.bar} style={{ width: props.progress + "%" }}></div> */}
                            </div> 
                        )} 
                    </div>
                    <div className={classes.header}>
                        <div className={classes.infor}>
                            <img src={userSelected.user.avatar} alt="#" />
                            <span className={classes.name}>{userSelected.user.name}</span>
                            <span className={classes.time}>6 giờ</span>
                        </div>
                        <div className={classes.headerOption}>
                            <div className={classes.icon} onClick={props.onToggleStr}>
                                {props.isPause ?
                                    <BsFillPlayFill color='#fff' size={28}/>
                                    :
                                    <BsPauseFill color='#fff' size={28}/>
                                }
                            </div>
                            <div className={classes.icon}>
                                <BsThreeDots color='#fff' size={28}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.preButton}>
                    <MdNavigateBefore size={24} color='#B0B3B8'/>
                </div>
                <div className={classes.nextButton}>
                    <MdNavigateNext size={24} color='#B0B3B8'/>
                </div>
            </div>
            
            <div className={classes.actions}>
                <div className={classes.replySection}>
                    <input type="text" placeholder='Tra loi...'/>
                </div>
                <ReactionEmoji />
            </div>
        </div>
    )
}

export default StoryDetailContent