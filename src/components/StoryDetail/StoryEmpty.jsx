import classes from './StoryEmpty.module.scss'

const StoryEmpty = () => {
    return (
        <div className={classes.wrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width='112' height='112'>
                <defs>
                    <clipPath id="a">
                    <rect width="81.38" height="68.11" x="12.34" y="18.4" fill="none" rx="6.69"/>
                    </clipPath>
                </defs>
                <rect width="81.38" height="68.11" x="20.91" y="27.89" fill="#7a7d81" rx="6.69"/>
                <g clipPath="url(#a)">
                    <rect width="81.38" height="68.11" x="12.34" y="18.4" fill="#bcc0c4" rx="6.69"/>
                    <path fill="#fff" d="M7.44 89.57l32.5-42.76 13.09 13.04 27.89-31.9 21.42 27.71 1.06 37.49H8.5l-1.06-3.58z"/>
                </g>
                <circle cx="27.57" cy="35.69" r="6.65" fill="#1876f2"/>
            </svg>
            <span>Chọn tin để mở.</span>
        </div>
    )
}

export default StoryEmpty