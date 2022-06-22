
import GroupDetailContent from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailContent"
import GroupDetailFeed from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailFeed"
import GroupDetailIntro from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailIntro"
import GroupDetailMain from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailMain"
import GroupDetailNews from "~/components/GroupPostDetail/GroupDetailMain/GroupDetailNews"
import GroupPostDetailComponent from "~/components/GroupPostDetail/GroupPostDetail"
import GroupDetailCover from "~/components/GroupPostDetail/GroupPostHeader/GroupDetailCover"
import GroupDetailInfor from "~/components/GroupPostDetail/GroupPostHeader/GroupDetailInfor"
import GroupHeaderOption from "~/components/GroupPostDetail/GroupPostHeader/GroupHeaderOption"
import GroupPostHeader from "~/components/GroupPostDetail/GroupPostHeader/GroupPostHeader"

const GroupPostDetail = () => {
    return (
        <GroupPostDetailComponent>
            <GroupPostHeader>
                <GroupDetailCover />
                <GroupDetailInfor />
                <GroupHeaderOption />
            </GroupPostHeader>
            <GroupDetailMain>
                <GroupDetailFeed>
                    <GroupDetailContent>
                        <GroupDetailNews />
                    </GroupDetailContent>
                </GroupDetailFeed>
                <GroupDetailIntro />
            </GroupDetailMain>
        </GroupPostDetailComponent>
    )
}

export default GroupPostDetail