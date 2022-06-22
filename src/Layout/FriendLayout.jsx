import { Fragment } from 'react'
import Friend from '~/components/Friend/Friend'
import FriendMain from '~/components/Friend/FriendMain'
import FriendSidebar from '~/components/Friend/FriendSidebar'
import Header from '~/pages/Header'

const FriendLayout = ({children}) => {
    return(
        <Fragment>
            <Header />
            <Friend>
                <FriendSidebar />
                <FriendMain>
                    {children}
                </FriendMain>
            </Friend>
        </Fragment>
    )
}

export default FriendLayout