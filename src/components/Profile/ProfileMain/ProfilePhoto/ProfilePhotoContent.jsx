import { RiPencilFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import obito from '~/assets/img/obito.jpg'

import classes from './ProfilePhotoContent.module.scss'

const ProfilePhotoContent = () => {
    const posts = useSelector(state => state.user.userPost)

    return(
        <div className={classes.wrapper}>
            <div className={classes.list}>
                {posts.map(post => 
                    <div className={classes.item} key={post.id}>
                        <img src={'http://localhost:8000/storage/employees/Post_home/' + post.image} alt="" />
                        <div className={classes.button}>
                            <RiPencilFill fill='#fff' size={20}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfilePhotoContent