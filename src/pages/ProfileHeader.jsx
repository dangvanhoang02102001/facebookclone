import { useState } from "react"
import { useSelector } from "react-redux"

import Cover from "~/components/Profile/ProfileHeader/Cover"
import Option from "~/components/Profile/ProfileHeader/Option"
import ProfileHeaderComponent from "~/components/Profile/ProfileHeader/ProfileHeader"
import User from "~/components/Profile/ProfileHeader/User"

const ProfileHeader = (props) => {

    const [bioEdit, setBioEdit] = useState(false)
    const currentUser = useSelector(state => state.user.currentUser)
    // console.log(currentUser)

    const handleEditBio = () => {
        setBioEdit(true)
    }

    const handleCancelEditBio = () => {
        setBioEdit(false)
    }

    return (
        <ProfileHeaderComponent>
            <Cover 
                coverImg={currentUser.background_img}
            />
            <User 
                username={currentUser.name}
                avatar={currentUser.profile_photo_path}
                coverImg={currentUser.background_img}
                bio={currentUser.bio}
                address={currentUser.address}
                bioEdit={bioEdit}
                onEditBio={handleEditBio}
                onCancelEditBio={handleCancelEditBio}
            />
            <Option 
                
            />
        </ProfileHeaderComponent>
    )
}

export default ProfileHeader