
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { CgClose } from 'react-icons/cg';
import { HiOutlineZoomIn, HiOutlineZoomOut } from 'react-icons/hi';
import { CgArrowsExpandRight, CgMinimizeAlt } from 'react-icons/cg';

import rma14 from '~/assets/img/rma14.jpg'
import { FacebookIcon } from '~/assets/svg/icon';
import classes from './PostDetailContent.module.scss'

const PostDetailContent = (props) => {
    const [disableZoomIn, setDisableZoomIn] = useState(false)
    const [disableZoomOut, setDisableZoomOut] = useState(true)
    const [scalePercent, setScalePercent] = useState(100)

    console.log(scalePercent)

    useEffect(() => {
        switch(scalePercent) {
            case 100: {
                setDisableZoomIn(false)
                setDisableZoomOut(true)
                break
            }
            case 180: {
                setDisableZoomIn(true)
                setDisableZoomOut(false)
                break
            }
            case 100 < scalePercent < 180: {
                setDisableZoomIn(false)
                setDisableZoomOut(false)
                break
            }
            default: {
                break
            }
        }
    },[scalePercent])

    const handleZoomIn = () => {
        setScalePercent(scalePercent + 20)
    }

    const handleZoomOut = () => {
        setScalePercent(scalePercent - 20)
    }

    return (
        <div className={props.isExpand ? [classes.wrapper, classes.expand].join(' ') : classes.wrapper}>
            <div className={classes.content}>
                <img src={rma14} alt="" style={{transform: `scale(${scalePercent}%)`}} />
                <div className={classes.inner}>
                    <div className={classes.left}>
                        <div className={classes.circle}>
                            <CgClose color='#fff' size={24}/>
                        </div>
                        <Link to='/' className={classes.logo}>
                            <FacebookIcon />
                        </Link>
                    </div>
                    <div className={classes.right}>
                        {
                            disableZoomIn ? 
                                <div className={[classes.circle, classes.disable].join(' ')}>
                                    <HiOutlineZoomIn color='#4C4C4C' size={24}/>
                                </div>
                            :
                                <div className={classes.circle} onClick={handleZoomIn}>
                                    <HiOutlineZoomIn color='#fff' size={24}/>
                                </div>
                        }
                        {
                            disableZoomOut ? 
                                <div className={[classes.circle, classes.disable].join(' ')}>
                                    <HiOutlineZoomOut color='#4C4C4C' size={24}/>
                                </div>
                            :
                                <div className={classes.circle} onClick={handleZoomOut}>
                                    <HiOutlineZoomOut color='#fff' size={24}/>
                                </div>
                        }
                        {
                            props.isExpand ? 
                                <div className={classes.circle} onClick={props.handleMinimize}>
                                    <CgMinimizeAlt color='#fff' size={24}/>
                                </div>
                            :
                                <div className={classes.circle} onClick={props.handleExpand}>
                                    <CgArrowsExpandRight color='#fff' size={24}/>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PostDetailContent)