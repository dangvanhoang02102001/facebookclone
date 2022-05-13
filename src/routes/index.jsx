import Home from "~/components/Home/Home"
import Login from "~/components/auth/login/Login"

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
]

export const privateRoutes = [
    
]