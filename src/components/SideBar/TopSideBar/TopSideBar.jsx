
import findFriend from '~/assets/img/findFriend.png'
import group from '~/assets/img/group.png'
import marketPlace from '~/assets/img/marketPlace.png'
import memories from '~/assets/img/memories.png'
import page from '~/assets/img/page.png'
import saved from '~/assets/img/saved.png'
import defaultAvt from '~/assets/img/default.png'
import watch from '~/assets/img/watch.png'
import event from '~/assets/img/event.png'


import Card from '~/packages/Card'
import classes from './TopSideBar.module.scss'

const cards = [
    {
        img: findFriend,
        content: "Tìm kiếm bạn bè"
    },
    {
        img: group,
        content: "Nhóm"
    },
    {
        img: marketPlace,
        content: "Marletplace"
    },
    {
        img: memories,
        content: "Kỷ niệm"
    },
    {
        img: page,
        content: "Trang"
    },
    {
        img: saved,
        content: "Đã lưu"
    },
    {
        img: watch,
        content: "Watch"
    },
    {
        img: event,
        content: "Sự kiện"
    },
]


const TopSideBar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.link}>
                <img src={defaultAvt} alt="" />
                <div>Đặng Hoàng</div>
            </div>
            {cards.map((card, index) => 
                <div key={index} className={classes.item}>
                    <Card img={card.img} content={card.content} />
                </div>
            )}
            <div className={classes.separator}></div>
        </div>
    )
}

export default TopSideBar