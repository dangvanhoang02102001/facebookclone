import classes from './Card.module.scss'

const Card = (props) => {

    const type = props.type
    const wrapperClass = type ? [classes.wrapper, classes.type].join(' ') : classes.wrapper

    return (
        <div className={wrapperClass}>
            {props.img &&
                <div className={classes.icon}>
                    <img src={props.img} alt="#"/>
                </div>
            }
            
            {props.svg && 
                <div className={classes.svg}>
                    {props.children}
                </div>
            }
            <div className={classes.content}>
                {props.content}
            </div>
        </div>
    )
}

export default Card