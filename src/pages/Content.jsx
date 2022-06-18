import SideBar from "~/components/SideBar/SideBar"
import ContentComponent from "~/components/Content/Content"
import NewsFeed from "~/components/NewsFeed/NewsFeed"
import PreviewStory from "~/components/NewsFeed/PreviewStory/PreviewStory"
import CreatePost from "~/components/NewsFeed/CreatePost/CreatePost"
import News from "~/components/NewsFeed/News/News"
import RightSideBar from "~/components/RightSideBar/RightSideBar"
import Contact from "~/components/RightSideBar/Contact"


const Content = () => {
    return (
        <ContentComponent>
            <SideBar />
            <NewsFeed>
                <PreviewStory />
                <CreatePost />
                <News />
            </NewsFeed>
            <RightSideBar>
                <Contact />
            </RightSideBar>
        </ContentComponent>
    )
}

export default Content