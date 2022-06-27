import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { FiArrowRight } from 'react-icons/fi';
import { AddIcon } from '~/assets/svg/icon'
import classes from './PreviewStory.module.scss'

import defaultAvatar from '~/assets/img/default.png'
import PreviewItem from './PreviewItem'
import linh from '~/assets/img/linh.jpg'
import linhStr from '~/assets/img/linhStr.jpg'
import hoadoan from '~/assets/img/hoadoan.jpg'
import tuyen from '~/assets/img/tuyen.jpg'
import tuan from '~/assets/img/tuan.jpg'
import tuanStr from '~/assets/img/tuanStr.jpg'
import hoaStr from '~/assets/img/hoaStr.jpg'
import tuyenStr from '~/assets/img/tuyenStr.jpg'
import hmtStr from '~/assets/img/hmtStr.jpg'
import { storiesActions } from '~/store/stories-slice';
import { useEffect } from 'react';



const PreviewStory = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)

    useEffect(() => {
        axios.get('/listStories')
        .then(function (response) {
            console.log(response)
            const myStories = response.data.mystories
            const stories = response.data.stories
            const storiesList = myStories.concat(stories)
            console.log(storiesList)
            dispatch(storiesActions.setStories(storiesList))
        })
        .catch(function (err) {
            console.log(err)
        });
    }, [dispatch])

    const stories = useSelector(state => state.stories.stories)
    console.log(stories)

    const handleCreateStory = () => {
        navigate('/stories/create')
    }

    const handleShowDetailStoryPage = () => {
        navigate('/stories')
    }

    const isHaveArr = stories.filter(story => story.stories_created.length !== 0)

    return (
        <div className={classes.wrapper}>
            <div className={classes.story}>
                <div className={classes.create} onClick={handleCreateStory}>
                    <div className={classes.avatar}>
                        <img src={'http://localhost:8000/storage/employees/avt/' + currentUser.profile_photo_path || defaultAvatar} alt="" />
                    </div>
                    <div className={classes.footer} >
                        <div className={classes.circleWrapper}>
                            <div className={classes.circle}>
                                <AddIcon />
                            </div>
                        </div>
                        <span>Tạo tin</span>
                    </div>
                </div>
                {stories.map(story => 
                    <PreviewItem
                        key={story.id}
                        id={story.id}
                        createdAt={story.created_at}
                        name={story.name}
                        avatar={story.profile_photo_path}
                        storyList={story.stories_created}
                    />    
                )}
            </div>
            {isHaveArr.length >= 4 && 
             <div className={classes.arrow} onClick={handleShowDetailStoryPage}>
             <FiArrowRight size={20} color='#B0B3B8'/>
            </div>}
           
        </div>
    )
}

export default PreviewStory