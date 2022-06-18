


import hoadoan from '~/assets/img/hoadoan.jpg'
import hoadoanPost from '~/assets/img/hoadoanPost.jpg'
import tuyen from '~/assets/img/tuyen.jpg'
import tuyenStr from '~/assets/img/tuyenStr.jpg'
import tuan from '~/assets/img/tuan.jpg'
import tuanPost from '~/assets/img/tuanPost.jpg'
import tuyenPost from '~/assets/img/tuyenPost.jpg'
import defaultAvatar from '~/assets/img/default.png'

import PostContent from "./PostContent"
import PostHeader from "./PostHeader"
import classes from "./Post.module.scss"

const Post = ({display}) => {
    const data = [
        {
            poster: {
                name: 'Hòa Đoàn',
                avatar: hoadoan,
                tick: false
            },
            time: '8 giờ trước',
            title: 'Cấp 3 ngầu dữ',
            reactCount: {
                totalReact: 1678,
                likeNumber: 1000,
                hahaNumber: 600,
                sadNumber: 78,
            },
            commentCount: 546,
            shareCount: 129,
            mode: 'public',
            content: hoadoanPost
        },
        {
            poster: {
                name: 'Nguyễn Dụng Tuyên',
                avatar: tuyen,
                tick: false
            },
            time: '5 giờ trước',
            title: 'Mới làm quả đầu con sâu xong !!',
            reactCount: {
                totalReact: 678,
                likeNumber: 600,
                hahaNumber: 70,
                sadNumber: 8,
            },
            commentCount: 146,
            shareCount: 0,
            mode: 'public',
            content: tuyenStr
        },
        {
            poster: {
                name: 'Nguyễn Quốc Tuấn',
                avatar: tuan,
                tick: false
            },
            time: '2 giờ trước',
            title: 'Lai cho mọi người cái rùi đi ngủ nè !!',
            reactCount: {
                totalReact: 778,
                likeNumber: 700,
                hahaNumber: 60,
                sadNumber: 18,
            },
            commentCount: 246,
            shareCount: 0,
            mode: 'public',
            content: tuanPost
        },
        {
            poster: {
                name: 'Hoàng Minh Tuyến',
                avatar: defaultAvatar,
                tick: false
            },
            time: '3 giờ trước',
            title: 'Quả tóc nhìn ngu thế nhờ :(((',
            reactCount: {
                totalReact: 598,
                likeNumber: 500,
                hahaNumber: 90,
                sadNumber: 8,
            },
            commentCount: 166,
            shareCount: 0,
            mode: 'public',
            content: tuyenPost
        },
    ]

    return (
        <>
            {data.map((post, index) => 
                <div className={classes.wrapper} key={index}>
                    <PostHeader
                        name={post.poster.name}
                        avatar={post.poster.avatar}
                        time={post.time}
                        title={post.title}
                        tick={post.poster.tick}
                    />
                    <PostContent
                        content={post.content}
                        totalReact={post.reactCount.totalReact}
                        commentCount={post.commentCount}
                        shareCount={post.shareCount}
                        display={display}
                    />
                </div>    
            )}
        </>
    )
}

export default Post