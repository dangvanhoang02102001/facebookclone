import Auth from "~/pages/Auth"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import PostDetail from "~/pages/PostDetail"
import StoryCreation from "~/pages/StoryCreation"
import StoryDetail from "~/pages/StoryDetail"
import ProfileIntro from "~/pages/ProfileIntro"
import ProfileFriend from "~/pages/ProfileFriend"
import ProfilePhoto from "~/pages/ProfilePhoto"
import Friend from "~/pages/Friend"
import FriendRequest from "~/pages/FriendRequest"
import FriendSuggestion from "~/pages/FriendSuggestion"
import FriendList from "~/pages/FriendList"
import Group from "~/pages/Group"
import GroupDiscover from "~/pages/GroupDiscover"
import GroupCreation from "~/pages/GroupCreation"
import GroupPostDetail from "~/pages/GroupPostDetail"
import RecoverAccount from "~/pages/RecoverAccount"
import VerifyCode from "~/pages/VerifyCode"
import ChangePassword from "~/pages/ChangePassword"

export const publicRoutes = [
    { path: '/', component: Home, layout: 'default' },
    { path: '/login', component: Auth, layout: null },
    { path: '/account/change_password', component: ChangePassword, layout: null },
    { path: '/account/recover', component: RecoverAccount, layout: null },
    { path: '/account/verify_code', component: VerifyCode, layout: null },
    { path: '/profile', component: Profile, layout: 'default' },
    { path: '/profile/about', component: ProfileIntro, layout: 'profile' },
    { path: '/profile/friends', component: ProfileFriend, layout: 'profile' },
    { path: '/profile/photos', component: ProfilePhoto, layout: 'profile' },
    { path: '/postDetail', component: PostDetail, layout: null },
    { path: '/stories/create', component: StoryCreation, layout: null},
    { path: '/stories/:uid', component: StoryDetail, layout: null},
    { path: '/stories', component: StoryDetail, layout: null},
    { path: '/friends', component: Friend, layout: 'default' },
    { path: '/friends/request', component: FriendRequest, layout: 'friend' },
    { path: '/friends/suggestion', component: FriendSuggestion, layout: 'friend' },
    { path: '/friends/list', component: FriendList, layout: 'friend' },
    { path: '/groups', component: Group, layout: 'default' },
    { path: '/groups/detail', component: GroupPostDetail, layout: 'default' },
    { path: '/groups/create', component: GroupCreation, layout: null },
    { path: '/groups/discover', component: GroupDiscover, layout: 'group' },
    { path: '/markets', component: Home, layout: 'default' },
    { path: '/gaming', component: Home, layout: 'default' },

]

export const privateRoutes = [
    
]