
import HomeComponent from "~/components/Home/Home"
import Content from "./Content"
import Header from "./Header"

const Home = () => {
    return(
        <HomeComponent>
            <Header />
            <Content />
        </HomeComponent>
    )
}

export default Home