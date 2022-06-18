import { Fragment } from 'react'
import ProfileHeader from '~/pages/ProfileHeader'
import ProfileMain from "~/components/Profile/ProfileMain/ProfileMain"
import Header from '~/pages/Header'

const ProfileLayout = ({children}) => {
    return(
        <Fragment>
            <Header />
            <ProfileHeader />
            <ProfileMain>
                {children}
            </ProfileMain>
        </Fragment>
    )
}

export default ProfileLayout