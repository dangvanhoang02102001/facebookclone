import rmaAvatar from '~/assets/img/rmaAvatar.jpg'


import PostContent from '~/packages/Post/PostContent'
import PostHeader from '~/packages/Post/PostHeader'
import classes from './DetailHeader.module.scss'

const DetailHeader = () => {
    const data =  {
        poster: {
            name: 'Hòa Đoàn',
            avatar: rmaAvatar,
            tick: false
        },
        time: '8 giờ trước',
        title: '👊 #APorLa14 👊',
        reactCount: {
            totalReact: 1678,
            likeNumber: 1000,
            hahaNumber: 600,
            sadNumber: 78,
        },
        commentCount: 546,
        shareCount: 129,
        mode: 'public',
    }

    return (
        <div className={classes.wrapper}>
            <PostHeader 
                name={data.poster.name}
                avatar={data.poster.avatar}
                time={data.time}
                title={data.title}
                tick={data.poster.tick}
            />
            <PostContent 
                display="detail"
                totalReact={data.reactCount.totalReact}
                commentCount={data.commentCount}
                shareCount={data.shareCount}
            />
        </div>
    )
}

export default DetailHeader