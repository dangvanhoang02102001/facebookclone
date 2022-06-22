
import GroupCreationComponent from "~/components/Group/GroupCreation/GroupCreation"
import GroupCreationMain from "~/components/Group/GroupCreation/GroupCreationMain"
import GroupCreationSidebar from "~/components/Group/GroupCreation/GroupCreationSidebar"

const GroupCreation = (props) => {
    return (
        <GroupCreationComponent>
            <GroupCreationSidebar />
            <GroupCreationMain />
        </GroupCreationComponent>
    )
}

export default GroupCreation