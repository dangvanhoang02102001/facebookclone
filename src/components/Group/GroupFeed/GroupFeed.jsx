import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupActions } from '~/store/group-slice'

import Post from '~/packages/Post/Post'
import classes from './GroupFeed.module.scss'

const GroupFeed = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`/feedGroups`)
        .then(function (response) {
            console.log(response)
            dispatch(groupActions.setGroupFeed(response.data.posts))
        })
        .catch(function (err) {
            console.log(err)
        });
    }, [dispatch])

    const posts = useSelector(state => state.group.groupFeed)
    console.log(posts)

    return (
        <div className={classes.wrapper}>
            <Post display='group' posts={posts}/>
        </div>
    )
}

export default GroupFeed