import Card from '~/packages/Card'
import levi from '~/assets/img/levi.jpg'
import vantung from '~/assets/img/vantung.jpg'
import real from '~/assets/img/real.jpg'

import classes from './ShortCut.module.scss'

const shortcuts = [
    {
        img: levi,
        content: "Trinh sát đoàn"
    },
    {
        img: vantung,
        content: "Hạm đội Văn Tùng"
    },
    {
        img: real,
        content: "Real community"
    },
    {
        img: real,
        content: "Real community"
    },
]

const ShortCut = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span>Lối tắt của bạn</span>
            </div>
            {shortcuts.map((card, index) => 
                <div key={index} className={classes.item}>
                    <Card img={card.img} content={card.content} />
                </div>
            )}
        </div>
    )
}

export default ShortCut