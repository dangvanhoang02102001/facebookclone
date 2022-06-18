

import classes from './ContactUser.module.scss'

const ContactUser = (props) => {
    return (
        <div className={classes.wrapper}>
            {props.haveStory ? 
                <div className={props.isViewed ? classes.viewedStory : classes.haveStory}>
                    <div className={classes.avatarHaveStr}>
                        <img src={props.avatar} alt="" />
                    </div>
                </div>
                :
                <div className={classes.avatar}>
                    <img src={props.avatar} alt="" />
                </div>
            }
            <div className={classes.name}>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default ContactUser