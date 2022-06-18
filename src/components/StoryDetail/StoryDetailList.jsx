
import { useNavigate } from 'react-router-dom'
import classes from './StoryDetailList.module.scss'

const StoryDetailList = (props) => {
    const navigate = useNavigate()

    const handleShowStory = () => {
        navigate(`/stories/${props.uid}`)
        props.onSetUserId(props.uid)
        props.onResetprogress()
    }
    
    return (
        <div className={classes.wrapper} onClick={handleShowStory}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt="#" />
            </div>
            <div className={classes.infor}>
                <div className={classes.name}>{props.name}</div>
                <span>{props.storyCount} thẻ mới</span>
            </div>
        </div>
    )
}

export default StoryDetailList