import classes from './IntroSidebar.module.scss'

const IntroSidebar = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <span>Giới thiệu</span>
            </div>
            <div className={classes.list}>
                <div className={props.option === 'overview' ? [classes.item, classes.active].join(' ') : classes.item} onClick={props.onShowOverview}>
                    <span className={classes.option}>Tổng quan</span>
                </div>
                <div className={props.option === 'country' ? [classes.item, classes.active].join(' ') : classes.item} onClick={props.onShowCountry}>
                    <span className={classes.option}>Nơi sống</span>
                </div>
                <div className={props.option === 'contact' ? [classes.item, classes.active].join(' ') : classes.item} onClick={props.onShowContact}>
                    <span className={classes.option}>Thông tin liên hệ</span>
                </div>
            </div>
        </div>
    )
}

export default IntroSidebar