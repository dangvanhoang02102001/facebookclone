import classes from './Circle.module.scss'

const Circle = ({children, type}) => {
    let circleClass = ''
    type === 'large' ? circleClass = classes.large : circleClass = classes.wrapper
    type === 'small' ? circleClass = classes.small : circleClass = classes.wrapper
    type === 'default' ? circleClass = classes.wrapper : circleClass = classes.wrapper

    return(
        <div className={circleClass}>
            <div className={classes.icon}>
                {children}
            </div>
        </div>
    )
}

export default Circle