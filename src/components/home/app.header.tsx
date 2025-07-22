"use client";

/* MUI import */
import {
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import style from "./header.module.scss";
import SearchBar from "./searchBar";
import { useState } from "react";

type Category = {
  imagePath: string;
  typeProductName: string;
  products:string[]
};

const categories: Category[] = [
  {
    imagePath: "",
    typeProductName: "Bộ Lọc Dầu",
    products:[
        'a','b'
    ]

  },
  {
    imagePath: "",
    typeProductName: "Bộ Không Khí",
     products:[
        'c','d'
    ]
  },
  {
    imagePath: "",
    typeProductName: "Bộ Nhiên Liệu",
     products:[
        'e','f'
    ]
  },
];

const AppHeader = () => {
    const [open,setOpen]=useState<boolean>(false)
  
  
    const handleClick = () => {};
    const handleMainEnter=()=>{
        setOpen(!open)
    }

 
  return (
    <div className={style["container"]}>
      <div className={style["head-discount"]}>
        <span className={style["left-part"]}>
          <Typography>
            Nhập ngay mã <strong className={style["newbie"]}>NEWBIE</strong>{" "}
            giảm ngay 10% cho lần đầu mua hàng
          </Typography>
        </span>
        <span className={style["right-part"]}>
          <span>
            <LocalPhoneIcon />
            <Typography>
              HotLine:<strong className="phone-number">0906354526</strong>
            </Typography>
          </span>
          <span>
            <SecurityUpdateIcon />
            <Typography>Tải Ứng Dụng</Typography>
          </span>
        </span>
      </div>
      <div className={style["banner-middle"]}>
        <span className={style["search-bar"]}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/logo.svg.png"
              alt="Logo"
              style={{ height: "100px" }}
            />
          </Box>
          <SearchBar />
          <Box
            sx={{
              display: "flex",
              paddingLeft: "20px",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ height: "10px" }}>
              <img
                src="/images/vietnam_flag.svg.png"
                alt="VN Flag"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
            </IconButton>
            <Typography>VI</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <IconButton>
              <ShoppingCartIcon color="info" />
            </IconButton>
            <Typography>Giỏ Hàng</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <IconButton>
              <AccountCircleIcon color="info" />
            </IconButton>
            <Typography>Tài Khoản</Typography>
          </Box>
        </span>
      </div>
      <div className="catagory-menu">
        <Box>
      <Button
        variant="contained"
        onMouseEnter={handleMainEnter}
        sx={{
          backgroundColor: '#007cf0',
          color: 'white',
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 'bold',
          padding: '6px 16px',
          '&:hover': { backgroundColor: '#0063c7' },
        }}
        startIcon={<MenuIcon />}
        endIcon={<ExpandMoreIcon />}
      >
        Danh Mục Sản Phẩm
      </Button>
    </Box>
      </div>
    </div>
  );
};

export default AppHeader;
