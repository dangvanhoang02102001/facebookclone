import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { groupActions } from '~/store/group-slice'

import GroupDetailContent from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailContent"
import GroupDetailFeed from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailFeed"
import GroupDetailIntro from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailIntro"
import GroupDetailMain from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailMain"
import GroupDetailNews from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailNews"
import GroupPostDetailComponent from "~/components/GroupPostDetail/GroupPostDetail"
import GroupDetailCover from "~/components/GroupPostDetail/GroupPostHeader/GroupDetailCover"
import GroupDetailInfor from "~/components/GroupPostDetail/GroupPostHeader/GroupDetailInfor"
import GroupHeaderOption from "~/components/GroupPostDetail/GroupPostHeader/GroupHeaderOption"
import GroupPostHeader from "~/components/GroupPostDetail/GroupPostHeader/GroupPostHeader"

const GroupPostDetail = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        axios.get(`/postsgroup/${id}`)
        .then(function (response) {
            console.log(response)
            dispatch(groupActions.setCurrentGroup(response.data.groupInfo[0]))
            dispatch(groupActions.setGroupPost(response.data.posts))
        })
        .catch(function (err) {
            console.log(err)
        });
    }, [dispatch, id])


    return (
        <GroupPostDetailComponent>
            <GroupPostHeader>
                <GroupDetailCover />
                <GroupDetailInfor />
                <GroupHeaderOption />
            </GroupPostHeader>
            <GroupDetailMain>
                <GroupDetailFeed>
                    <GroupDetailContent>
                        <GroupDetailNews />
                    </GroupDetailContent>
                </GroupDetailFeed>
                <GroupDetailIntro />
            </GroupDetailMain>
        </GroupPostDetailComponent>
    )
}

export default GroupPostDetail