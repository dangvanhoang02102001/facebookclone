import axios from 'axios'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { Fragment } from "react"
import HomeComponent from "~/components/Home/Home"
import Content from "./Content"
import Header from "./Header"
import { friendActions } from '~/store/friends-slice'

const Home = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const currentId = currentUser.id
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`/friendList/${currentId}`)
        .then(function (response) {
            console.log(response)
            dispatch(friendActions.setUserFriend(response.data.user))
        })
        .catch(function (err) {
            console.log(err)
        })
    }, [currentId,dispatch])

    return(
        <Fragment>
            <HomeComponent>
                <Header />
                <Content />
            </HomeComponent>
        </Fragment>
        
    )
}

export default Home