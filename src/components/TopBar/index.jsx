// src/components/topbar/Topbar.jsx
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
// import { Search as SearchIcon } from "@mui/icons-material";
import MenuIcon from "@/assets/images/menu.png";
import DownIcon from "@/assets/images/down.png";
import SearchIcon from "@/assets/images/search.png";
import ResizeIcon from "@/assets/images/resize.png";
import BellIcon from "@/assets/images/bell.png";
import UsIcon from "@/assets/images/us.png";
import User from "@/assets/images/avatar1.png";
import styles from "./Topbar.module.scss";

const Topbar = ({ onSidebarToggle, isSidebarOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorFlagEl, setAnchorFlagEl] = useState(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleFlagClick = (event) => {
    setAnchorFlagEl(event.currentTarget);
  };

  const handleFlagClose = () => {
    setAnchorFlagEl(null);
  };

  const TextFieldWithIcon = () => {
    return (
      <TextField
        placeholder="Search here"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={SearchIcon}
                alt="search"
                className={styles.searchIcon}
              />
            </InputAdornment>
          ),
          classes: {
            root: styles.textFieldRoot, // Root class for customization
            input: styles.textFieldInput, // Input class for the inner text
          },
        }}
        className={styles.textField}
      />
    );
  };

  return (
    <AppBar
      position="fixed"
      className={`${styles.appBar} ${styles.wunset} ${
        isSidebarOpen ? styles.appBarOpen : styles.appBarClosed
      }`}
      color="default"
    >
      <Toolbar className={styles.toolbar}>
        {/* Menu Button to Toggle Sidebar */}
        <div className={styles.menuSearchDiv}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onSidebarToggle}
            className={styles.menuButton}
          >
            <img src={MenuIcon} alt="menu" className={styles.menuLogo} />
            {/* <MenuIcon /> */}
          </IconButton>
          {screenWidth > 660 && <TextFieldWithIcon />}

          {/* Search Bar */}
        </div>
        <div className={styles.profileBtnDiv}>
          <IconButton
            aria-label="flag"
            className={styles.iconBtnBg}
            onClick={handleFlagClick}
          >
            <img src={UsIcon} alt="flag" />
          </IconButton>
          <Menu
            anchorEl={anchorFlagEl}
            open={Boolean(anchorFlagEl)}
            onClose={handleFlagClose}
            className={styles.profileMenu}
          >
            <MenuItem onClick={handleFlagClose}>India</MenuItem>
            <MenuItem onClick={handleFlagClose}>USA</MenuItem>
          </Menu>
          <IconButton aria-label="bell" className={styles.iconBtnBg}>
            <img src={BellIcon} alt="bell" />
          </IconButton>
          <IconButton aria-label="resize" className={styles.iconBtnBg}>
            <img src={ResizeIcon} alt="resize" />
          </IconButton>
          <div className={styles.profileSection}>
            <div onClick={handleProfileClick} className={styles.profileDiv}>
              <div>
                <Avatar
                  alt="User Profile"
                  src={User}
                  className={styles.avatar}
                />
              </div>
              <div>
                <Typography className={styles.userName}>Ryan Taylor</Typography>
                <Typography className={styles.role}>Administrator</Typography>
              </div>
              <div>
                <img src={DownIcon} alt="down" />
              </div>
            </div>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
              className={styles.profileMenu}
            >
              <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
      {screenWidth < 660 && <TextFieldWithIcon />}
    </AppBar>
  );
};

export default Topbar;
