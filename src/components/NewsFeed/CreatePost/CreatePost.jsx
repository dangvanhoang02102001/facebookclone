import CreateSection from '~/packages/CreateSection/CreateSection'
import classes from './CreatePost.module.scss'

const CreatePost = () => {
    return (
        <div className={classes.wrapper}>
            <CreateSection />
        </div>
    )
}

export default CreatePost