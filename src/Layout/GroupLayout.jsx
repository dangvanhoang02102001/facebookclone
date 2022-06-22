import { Fragment } from 'react'
import Group from '~/components/Group/Group'
import GroupFeedSidebar from '~/components/Group/GroupFeed/GroupFeedSidebar'
import GroupMain from '~/components/Group/GroupFeed/GroupMain'
import Header from '~/pages/Header'

const GroupLayout = (props) => {
    return (
        <Fragment>
            <Header />
            <Group>
                <GroupFeedSidebar />
                <GroupMain>
                    {props.children}
                </GroupMain>
            </Group>
        </Fragment>
    )
}

export default GroupLayout