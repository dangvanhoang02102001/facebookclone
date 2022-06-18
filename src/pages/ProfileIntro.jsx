import { useState } from "react"
import ContactContent from "~/components/Profile/ProfileMain/ProfileIntro/ContactContent"
import CountryContent from "~/components/Profile/ProfileMain/ProfileIntro/CountryContent"
import IntroContent from "~/components/Profile/ProfileMain/ProfileIntro/IntroContent"
import IntroSidebar from "~/components/Profile/ProfileMain/ProfileIntro/IntroSidebar"
import OverviewContent from "~/components/Profile/ProfileMain/ProfileIntro/OverviewContent"
import ProfileIntroComponent from "~/components/Profile/ProfileMain/ProfileIntro/ProfileIntro"
import RelationshipContent from "~/components/Profile/ProfileMain/ProfileIntro/RelationshipContent"

const ProfileIntro = () => {
    const [option, setOption] = useState('overview')

    const handleShowOverview = () => {
        setOption('overview')
    }

    const handleShowCountry = () => {
        setOption('country')
    }

    const handleShowContact = () => {
        setOption('contact')
    }

    const handleShowRelationship = () => {
        setOption('relationship')
    }

    return(
        <ProfileIntroComponent>
            <IntroSidebar
                option={option}
                onShowOverview={handleShowOverview}
                onShowCountry={handleShowCountry}
                onShowContact={handleShowContact}
                onShowRelationship={handleShowRelationship}
            />
            {option === 'overview' && <IntroContent title='Tổng quan'>
                <OverviewContent />
            </IntroContent>}
            {option === 'country' && <IntroContent title='Nơi sống'>
                <CountryContent />
            </IntroContent>}
            {option === 'contact' && <IntroContent title='Thông tin liên hệ'>
                <ContactContent />
            </IntroContent>}
            {option === 'relationship' && <IntroContent title='Các mối quan hệ'>
                <RelationshipContent />
            </IntroContent>}
        </ProfileIntroComponent> 
    )
}

export default ProfileIntro