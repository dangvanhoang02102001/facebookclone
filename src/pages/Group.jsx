import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { groupActions } from '~/store/group-slice';

import GroupComponent from "~/components/Group/Group"
import GroupFeed from "~/components/Group/GroupFeed/GroupFeed"
import GroupFeedSidebar from "~/components/Group/GroupFeed/GroupFeedSidebar"
import GroupSuggestion from "~/components/Group/GroupFeed/GroupSuggestion"

const Group = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`/listgroups`)
        .then(function (response) {
            console.log(response.data.group)
            dispatch(groupActions.setGroup(response.data.group))
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [dispatch])

    // useEffect(() => {
    //     axios.get(`/postsgroup/25`)
    //     .then(function (response) {
    //         console.log(response.data.group)
            
    //     })
    //     .catch(function (err) {
    //         console.log(err)
    //     })
    // }, [dispatch])

    return (
        <GroupComponent>
            <GroupFeedSidebar />
            <GroupFeed />
            <GroupSuggestion />
        </GroupComponent>
    )
}

export default Group