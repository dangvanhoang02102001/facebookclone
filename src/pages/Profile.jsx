// import { useState } from "react"
import React from 'react'
import axios from 'axios'
import ProfileComponent from "~/components/Profile/Profile"

import ProfileContent from "~/components/Profile/ProfileMain/ProfileContent/ProfileContent"
import ProfileMain from "~/components/Profile/ProfileMain/ProfileMain"
import ProfileFriendSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfileFriendSidebar"
import ProfileIntroSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfileIntroSidebar"
import ProfilePhotoSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfilePhotoSidebar"
import ProfileSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfileSidebar"
import ProfilePost from '~/components/Profile/ProfileMain/ProfileContent/ProfilePost'
import ProfileHeader from "./ProfileHeader"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '~/store/user-slice'

const Profile = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const id = params.id

    useEffect(() => {
        axios.get(`/auth/user-profile/${id}`)
        .then(function (response) {
            console.log(response.data)
            dispatch(userActions.setCurrentId(id))
            dispatch(userActions.setCurrentUser(response.data.userInfo))
            dispatch(userActions.setUserPost(response.data.posts))
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [id,dispatch])

    return (
        <ProfileComponent>
            <ProfileHeader />
            <ProfileMain>
                <ProfileSidebar>
                    <ProfileIntroSidebar />
                    <ProfilePhotoSidebar />
                    <ProfileFriendSidebar />
                </ProfileSidebar>
                <ProfileContent>
                    <ProfilePost />
                </ProfileContent>
            </ProfileMain>
        </ProfileComponent>
    )
}

export default React.memo(Profile)