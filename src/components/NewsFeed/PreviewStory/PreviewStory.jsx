import { useNavigate } from 'react-router-dom'

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


const stories = [
    {
        id: 0,
        user: {
            uid: 'hmt1202',
            name: 'Hoàng Minh Tuyến',
            avatar: defaultAvatar,
            storyCount: 2,
            storyList: [
                {
                    id: 'str02',
                    content: defaultAvatar,
                    time: '5 giờ',
                    isViewed: true
                },
                {
                    id: 'str01',
                    content: hmtStr,
                    time: '7 giờ',
                    isViewed: false
                },
            ]
        }
    },
    {
        id: 1,
        user: {
            uid: 'ndt1609',
            name: 'Nguyễn Dụng Tuyên',
            avatar: tuyen,
            storyCount: 1,
            storyList: [
                {
                    id: 'str01',
                    content: tuyenStr,
                    time: '7 giờ',
                    isViewed: true
                },
            ]
        }
    },
    {
        id: 2,
        user: {
            uid: 'ntq2010',
            name: 'Nguyễn Quốc Tuấn',
            avatar: tuan,
            storyCount: 1,
            storyList: [
                {
                    id: 'str01',
                    content: tuanStr,
                    time: '4 giờ',
                    isViewed: true
                },
            ]
        }
    },
    {
        id: 3,
        user: {
            uid: 'hd0610',
            name: 'Đoàn Duy Hòa',
            avatar: hoadoan,
            storyCount: 3,
            storyList: [
                {
                    id: 'str01',
                    content: defaultAvatar,
                    time: '3 giờ',
                    isViewed: true
                },
                {
                    id: 'str01',
                    content: defaultAvatar,
                    time: '1 giờ',
                    isViewed: true
                },
                {
                    id: 'str01',
                    content: hoaStr,
                    time: '7 giờ',
                    isViewed: true
                },
            ]
        }
    },
    {
        id: 4,
        user: {
            uid: 'linhlinhcute1310',
            name: 'Linh',
            avatar: linh,
            storyCount: 1,
            storyList: [
                {
                    id: 'str01',
                    content: linhStr,
                    time: '4 giờ',
                    isViewed: true
                },
            ]
        }
    },
    {
        id: 5,
        user: {
            uid: 'thotho',
            name: 'Thọ',
            avatar: defaultAvatar,
            storyCount: 1,
            storyList: [
                {
                    id: 'str01',
                    content: defaultAvatar,
                    time: '4 giờ',
                    isViewed: true
                },
            ]
        }
    },
    {
        id: 6,
        user: {
            uid: 'luclu',
            name: 'Hoàng Lực',
            avatar: defaultAvatar,
            storyCount: 1,
            storyList: [
                {
                    id: 'str01',
                    content: defaultAvatar,
                    time: '4 giờ',
                    isViewed: true
                },
            ]
        }
    },
]

const PreviewStory = () => {
    const navigate = useNavigate()
    const handleCreateStory = () => {
        navigate('/stories/create')
    }

    const handleShowDetailStoryPage = () => {
        navigate('/stories')
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.story}>
                <div className={classes.create} onClick={handleCreateStory}>
                    <div className={classes.avatar}>
                        <img src={defaultAvatar} alt="" />
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
                {stories.map((story, index) => 
                    <PreviewItem
                        key={index}
                        uid={story.user.uid}
                        story={story.user.storyList}
                        name={story.user.name}
                        avatar={story.user.avatar}
                    />
                )}
            </div>
            <div className={classes.arrow} onClick={handleShowDetailStoryPage}>
                <FiArrowRight size={20} color='#B0B3B8'/>
            </div>
        </div>
    )
}

export default PreviewStory