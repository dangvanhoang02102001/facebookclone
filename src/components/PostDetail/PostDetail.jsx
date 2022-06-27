import classes from './PostDetail.module.scss'

const PostDetail = ({children}) => {

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default PostDetail