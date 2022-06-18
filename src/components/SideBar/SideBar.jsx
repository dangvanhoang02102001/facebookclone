import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import ShortCut from './ShortCut/ShortCut'
import classes from './SideBar.module.scss'
import TopSideBar from './TopSideBar/TopSideBar'

const SideBar = () => {
    return(
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
                {/* <div className={classes.test}> */}
                    <TopSideBar />
                    <ShortCut />
                {/* </div> */}
            </OverlayScrollbarsComponent>
            
        </div>
    )
}

export default SideBar