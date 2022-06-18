import Switch from '@mui/material/Switch';
import { styled } from "@mui/material/styles";

import { IoClose } from 'react-icons/io5';
import { RiPencilFill } from 'react-icons/ri';
import classes from './DetailEdit.module.scss'

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 44,
    height: 24,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 22
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)"
      }
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff"
        }
      }
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 20,
      height: 20,
      borderRadius: 10,
      transition: theme.transitions.create(["width"], {
        duration: 200
      })
    },
    "& .MuiSwitch-track": {
      borderRadius: 24 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgb(62,64,66)"
          : "rgb(62,64,66)",
      boxSizing: "border-box"
    }
  }));

const DetailEdit = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.closeBtn} onClick={props.onClose}>
                    <div className={classes.circle}>
                        <IoClose size={24} fill='#B0B3B8'/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.description}>
                    <h4>Chỉnh sửa phần giới thiệu</h4>
                    <span>Chi tiết bạn chọn sẽ hiển thị công khai.</span>
                </div>
                <div className={classes.detail}>
                    <div className={classes.infor}>
                        <div className={classes.inforField}>Quê quán</div>
                        <div className={classes.inforDetail}>
                            <div className={classes.inforDetailLeft}>
                                <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                                <span className={classes.text}>Đến từ Hưng Yên</span>
                            </div>
                            <div className={classes.inforDetailEdit}>
                                <RiPencilFill size={24} fill='#fff'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.infor}>
                        <div className={classes.inforField}>Mối quan hệ</div>
                        <div className={classes.inforDetail}>
                            <div className={classes.inforDetailLeft}>
                                <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                                <span className={classes.text}>Độc thân</span>
                            </div>
                            <div className={classes.inforDetailEdit}>
                                <RiPencilFill size={24} fill='#fff'/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.infor}>
                        <div className={classes.inforField}>Tham gia Facebook</div>
                        <div className={classes.inforDetail}>
                            <div className={classes.inforDetailLeft}>
                                <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
                                <span className={classes.text}>Tham gia vào Tháng 3 năm 2017</span>
                            </div>
                            <div className={classes.inforDetailEdit}>
                                <RiPencilFill size={24} fill='#fff'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <button onClick={props.onClose} className={classes.cancelBtn}>Hủy</button>
                <button className={classes.saveBtn}>Lưu</button>
            </div>
        </div>
    )
}

export default DetailEdit