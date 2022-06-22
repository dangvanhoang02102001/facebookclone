import GroupComponent from "~/components/Group/Group"
import GroupFeed from "~/components/Group/GroupFeed/GroupFeed"
import GroupFeedSidebar from "~/components/Group/GroupFeed/GroupFeedSidebar"
import GroupSuggestion from "~/components/Group/GroupFeed/GroupSuggestion"

const Group = () => {
    return (
        <GroupComponent>
            <GroupFeedSidebar />
            <GroupFeed />
            <GroupSuggestion />
        </GroupComponent>
    )
}

export default Group