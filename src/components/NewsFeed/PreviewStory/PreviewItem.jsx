import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

import classes from './PreviewItem.module.scss'


const PreviewItem = (props) => {
    const navigate = useNavigate()

    // const preImage = props.story.map(str => {
    //     const isViewedAll = props.story.every(str => str.isViewed === true)
    //     if(isViewedAll) {
    //         const isViewedAllStr = props.story[props.story.length - 1]
    //         return isViewedAllStr
    //     }else {
    //         const previewtr = props.story.find(str => str.isViewed === false)
    //         return previewtr
    //     }
    // })

    const handleShowStr = () => {
        navigate(`/stories/${props.uid}`)
    }

    const storyList = props.storyList


    return (
        <Fragment>
            {storyList.length !== 0 && <div className={classes.wrapper} onClick={handleShowStr}>
                <div className={classes.background}>
                    {storyList.map((story, index) => 
                        <div key={story.id} className={classes.storyItem}>
                            {story.image ?
                                <img key={index} className={classes.storyImg} src={'http://localhost:8000/storage/employees/stories/' + story.image} alt="" />
                            :
                                <div className={classes.storyText}>{story.content}</div>
                            }
                        </div>
                    )}
                    <div className={classes.name}>
                        <span>{props.name}</span>
                    </div>
                    <div className={classes.circle}>
                        <img className={classes.avatar} src={'http://localhost:8000/storage/employees/avt/' + props.avatar} alt="" />
                    </div>
                </div>
            </div>}
        </Fragment>
    )
}

export default PreviewItem