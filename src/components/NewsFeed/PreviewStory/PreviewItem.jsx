import { useNavigate } from 'react-router-dom'

import classes from './PreviewItem.module.scss'


const PreviewItem = (props) => {
    const navigate = useNavigate()

    const preImage = props.story.map(str => {
        const isViewedAll = props.story.every(str => str.isViewed === true)
        if(isViewedAll) {
            const isViewedAllStr = props.story[props.story.length - 1]
            return isViewedAllStr
        }else {
            const previewtr = props.story.find(str => str.isViewed === false)
            return previewtr
        }
    })

    const handleShowStr = () => {
        navigate(`/stories/${props.uid}`)
    }


    return (
        <div className={classes.wrapper} onClick={handleShowStr}>
            <div className={classes.background}>
                {preImage.map((img, index) => 
                    <img key={index} className={classes.storyImg} src={img.content} alt="" />
                )}
                <div className={classes.name}>
                    <span>{props.name}</span>
                </div>
                <div className={classes.circle}>
                    <img className={classes.avatar} src={props.avatar} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PreviewItem