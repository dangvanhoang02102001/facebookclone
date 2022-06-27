import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import classes from './ProfilePhotoSidebar.module.scss'

const ProfilePhotoSidebar = (props) => {

    const posts = useSelector(state => state.user.userPost)
    console.log(posts)
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Ảnh</span>
                <div className={classes.button}>
                    Xem tất cả ảnh
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.imageGroup}>
                    {posts.map(post => 
                        <div key={post.id} style={{display: post.image === null && 'none'}} className={classes.imageItem}>
                            {post.image !== null ? 
                                <img src={'http://localhost:8000/storage/employees/Post_home/' + post.image} alt="" />
                            :
                            <Fragment></Fragment>
                        }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoSidebar