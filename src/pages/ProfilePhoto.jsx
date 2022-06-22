import ProfilePhotoComponent from "~/components/Profile/ProfileMain/ProfilePhoto/ProfilePhoto"
import ProfilePhotoContent from "~/components/Profile/ProfileMain/ProfilePhoto/ProfilePhotoContent"
import ProfilePhotoHeader from "~/components/Profile/ProfileMain/ProfilePhoto/ProfilePhotoHeader"

const ProfilePhoto = () => {
    return (
        <ProfilePhotoComponent>
            <ProfilePhotoHeader />
            <ProfilePhotoContent />
        </ProfilePhotoComponent>
    )
}

export default ProfilePhoto