import { useState } from "react"

import Cover from "~/components/Profile/ProfileHeader/Cover"
import Option from "~/components/Profile/ProfileHeader/Option"
import ProfileHeaderComponent from "~/components/Profile/ProfileHeader/ProfileHeader"
import User from "~/components/Profile/ProfileHeader/User"

const ProfileHeader = () => {

    const [bioEdit, setBioEdit] = useState(false)


    const handleEditBio = () => {
        setBioEdit(true)
    }

    const handleCancelEditBio = () => {
        setBioEdit(false)
    }


    return (
        <ProfileHeaderComponent>
            <Cover />
            <User 
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