// import { useState } from "react"

import ProfileComponent from "~/components/Profile/Profile"

import ProfileContent from "~/components/Profile/ProfileMain/ProfileContent/ProfileContent"
import ProfileMain from "~/components/Profile/ProfileMain/ProfileMain"
import ProfileFriendSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfileFriendSidebar"
import ProfileIntroSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfileIntroSidebar"
import ProfilePhotoSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfilePhotoSidebar"
import ProfileSidebar from "~/components/Profile/ProfileMain/ProfileSidebar/ProfileSidebar"
import ProfilePost from '~/components/Profile/ProfileMain/ProfileContent/ProfilePost'
import ProfileHeader from "./ProfileHeader"

const Profile = () => {
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

export default Profile