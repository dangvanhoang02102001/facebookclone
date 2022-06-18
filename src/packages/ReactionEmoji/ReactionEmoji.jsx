import { AngryIcon, CareIcon, HahaIcon, LikeIcon, LoveIcon, SadIcon, WowIcon } from '~/assets/svg/icon';
import classes from './ReactionEmoji.module.scss'

const ReactionEmoji = (props) => {
    return (
        <div className={classes.wrapper} style={{backgroundColor: props.backgroundColor}}>
            <div className={classes.reactList}>
                <div className={classes.reactIcon}>
                    <LikeIcon size={40} />
                </div>
                <div className={classes.reactIcon}>
                    <LoveIcon size={40} />
                </div>
                <div className={classes.reactIcon}>
                    <CareIcon size={40} />
                </div>
                <div className={classes.reactIcon}>
                    <HahaIcon size={40} />
                </div>
                <div className={classes.reactIcon}>
                    <WowIcon size={40} />
                </div>
                <div className={classes.reactIcon}>
                    <SadIcon size={40} />
                </div>
                <div className={classes.reactIcon}>
                    <AngryIcon size={40} />
                </div>
            </div>
        </div>
    )
}

export default ReactionEmoji