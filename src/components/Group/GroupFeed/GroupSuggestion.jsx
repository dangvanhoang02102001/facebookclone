import { useNavigate } from 'react-router-dom'
import lienquanbg from '~/assets/img/lienquanbg.jpg'

import classes from './GroupSuggestion.module.scss'

const GroupSuggestion = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.topic}>
                    <h3>Gợi ý cho bạn</h3>
                    <span onClick={() => navigate('/groups/discover')}>Xem thêm</span>
                </div>
                <span>Nhóm mà bạn có thể quan tâm.</span>
            </div>
            <div className={classes.group}>
                <div className={classes.image}>
                    <img src={lienquanbg} alt="#" />
                </div>
                <div className={classes.infor}>
                    <h4>Liên quân mobile</h4>
                    <span className={classes.member}>30K thành viên</span>
                    <div className={classes.button}>Tham gia nhóm</div>
                </div>
            </div>
        </div>
    )
}

export default GroupSuggestion