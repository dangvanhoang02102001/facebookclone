import { useState } from "react";

import PostDetailComponent from "~/components/PostDetail/PostDetail"
import PostDetailContent from "~/components/PostDetail/PostDetailContent"
import PostDetailSidebar from "~/components/PostDetail/PostDetailSidebar/PostDetailSidebar"


const PostDetail = () => {
    const [isExpand, setIsExpand] = useState(false)

    const handleExpand = () => {
        setIsExpand(true)
    }

    const handleMinimize = () => {
        setIsExpand(false)
    }

    return (
        <PostDetailComponent>
            <PostDetailContent
                isExpand={isExpand}
                handleExpand={handleExpand}
                handleMinimize={handleMinimize}
            />
            <PostDetailSidebar
                isExpand={isExpand}
            />
        </PostDetailComponent>
    )
}

export default PostDetail