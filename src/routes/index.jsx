import Home from "~/pages/Home"
import Login from "~/components/auth/login/Login"
import Profile from "~/pages/Profile"
import PostDetail from "~/pages/PostDetail"
import StoryCreation from "~/pages/StoryCreation"
import StoryDetail from "~/pages/StoryDetail"
import ProfileIntro from "~/pages/ProfileIntro"
import ProfileFriend from "~/pages/ProfileFriend"
import ProfilePhoto from "~/pages/ProfilePhoto"

export const publicRoutes = [
    { path: '/', component: Home, layout: 'default' },
    { path: '/login', component: Login, layout: null },
    { path: '/profile', component: Profile, layout: 'default' },
    { path: '/profile/about', component: ProfileIntro, layout: 'profile' },
    { path: '/profile/friends', component: ProfileFriend, layout: 'profile' },
    { path: '/profile/photos', component: ProfilePhoto, layout: 'profile' },
    { path: '/postDetail', component: PostDetail, layout: null },
    { path: '/stories/create', component: StoryCreation, layout: null},
    { path: '/stories/:uid', component: StoryDetail, layout: null},
    { path: '/stories', component: StoryDetail, layout: null}
]

export const privateRoutes = [
    
]