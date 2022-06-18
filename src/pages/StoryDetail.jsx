import { useState, useEffect } from 'react';

import { useParams, useLocation } from 'react-router-dom';

import StoryDetailComponent from "~/components/StoryDetail/StoryDetail"
import StoryDetailContent from "~/components/StoryDetail/StoryDetailContent"
import StorySidebar from "~/components/StoryDetail/StorySidebar"

import defaultAvatar from '~/assets/img/default.png'
import tuyen from '~/assets/img/tuyen.jpg'
import tuan from '~/assets/img/tuan.jpg'
import linh from '~/assets/img/linh.jpg'
import hoadoan from '~/assets/img/hoadoan.jpg'
import hmtStr from '~/assets/img/hmtStr.jpg'
import hoaStr from '~/assets/img/hoaStr.jpg'
import linhStr from '~/assets/img/linhStr.jpg'
import tuanStr from '~/assets/img/tuanStr.jpg'
import tuyenStr from '~/assets/img/tuyenStr.jpg'
import StoryEmpty from '~/components/StoryDetail/StoryEmpty';
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
                    id: 'hmtstr01',
                    content: hmtStr,
                    time: '7 giờ',
                    isViewed: true
                },
                {
                    id: 'hmtstr02',
                    content: defaultAvatar,
                    time: '5 giờ',
                    isViewed: false
                }
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
                    id: 'ndtstr01',
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
                    id: 'ntqstr01',
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
                    id: 'hdstr01',
                    content: hoaStr,
                    time: '7 giờ',
                    isViewed: true
                },
                {
                    id: 'hdstr02',
                    content: defaultAvatar,
                    time: '3 giờ',
                    isViewed: true
                },
                {
                    id: 'hdstr03',
                    content: defaultAvatar,
                    time: '1 giờ',
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
                    id: 'linhstr01',
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
                    id: 'thostr01',
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
                    id: 'lucstr01',
                    content: defaultAvatar,
                    time: '4 giờ',
                    isViewed: true
                },
            ]
        }
    },
]
const StoryDetail = () => {
    let { uid } = useParams()
    let location = useLocation()

    const [userId, setUserId] = useState(uid || null)
    const [isPause, setIsPause] = useState(false)
    const [progress, setProgress] = useState(0);
    


    let storyDetailContent = ''

    const handleToggleStr = () => {
        setIsPause(!isPause)
    }

    const handleResetProgress = () => {
        setProgress(0);
    }

    if(location.pathname === `/stories` || location.pathname === `/stories/`) {
        storyDetailContent = <StoryEmpty />
    }else {
        storyDetailContent = <StoryDetailContent 
            stories={stories} 
            userId={userId}
            progress={progress}
            isPause={isPause}
            onToggleStr={handleToggleStr}
        />
    }

    const handleSetUserId = (id) => {
        setUserId(id)
    }

    useEffect(() => {
        if(userId !== null) {
            if (!isPause) {
                const timer = setInterval(() => {
                  if (progress >= 100) {
                    setProgress(0);
                  } else {
                    setProgress((prev) => {
                      return (prev += 1);
                    });
                  }
                }, 100);
          
                return () => {
                  clearInterval(timer);
                };
            }
        }
      }, [progress, isPause, userId]);

    return (
        <StoryDetailComponent>
            <StorySidebar 
                stories={stories} 
                onSetUserId={handleSetUserId}
                onResetprogress={handleResetProgress}
                
            />
            {/* <StoryDetailContent 
                stories={stories} 
                userId={userId}
                progress={progress}
                isPause={isPause}
                onToggleStr={handleToggleStr}
            /> */}
            {storyDetailContent}
        </StoryDetailComponent>
    )
}

export default StoryDetail