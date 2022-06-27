import { useSelector } from "react-redux";

import FriendComponent from "~/components/Friend/Friend";
import FriendAll from "~/components/Friend/FriendAll";
import FriendMain from "~/components/Friend/FriendMain";
import FriendSidebar from "~/components/Friend/FriendSidebar";

const Friend = () => {
    const friendList = useSelector(state => state.friend.userFriend)



    return (
        <FriendComponent>
            <FriendSidebar />
            <FriendMain>
                <FriendAll 
                    friendList={friendList}
                />
            </FriendMain>
        </FriendComponent>
    )
}

export default Friend