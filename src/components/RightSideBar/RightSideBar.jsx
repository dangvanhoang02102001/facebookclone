import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import classes from './RightSideBar.module.scss'

const RightSideBar = ({children}) => {
    return (
        <div className={classes.wrapper}>
            <OverlayScrollbarsComponent
                className={classes.test}
                options={{
                    className: 'os-theme-light',
                    scrollbars: {
                        autoHide: 'leave',
                        autoHideDelay: 0,
                    }
                }}
            >
                {children}
            </OverlayScrollbarsComponent>
        </div>
    )
}

export default RightSideBar