import FriendComponent from "~/components/Friend/Friend";
import FriendAll from "~/components/Friend/FriendAll";
import FriendMain from "~/components/Friend/FriendMain";
import FriendSidebar from "~/components/Friend/FriendSidebar";

const Friend = () => {
    return (
        <FriendComponent>
            <FriendSidebar />
            <FriendMain>
                <FriendAll />
            </FriendMain>
        </FriendComponent>
    )
}

export default Friend