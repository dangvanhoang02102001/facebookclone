import { Fragment } from 'react'
import DetailContent from './DetailContent'
import DetailHeader from './DetailHeader'
import classes from './PostDetailSidebar.module.scss'

const PostDetailSidebar = (props) => {
    return (
        <Fragment>
            {props.isExpand ? 
                <></>
                :
                <div className={classes.wrapper}>
                    <DetailHeader />
                    <DetailContent />
                </div>
            }
        </Fragment>
    )
}

export default PostDetailSidebar