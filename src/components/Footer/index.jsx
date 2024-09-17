import { Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.fiiterBox}>
      <h1 className={styles.footerText}>Copyright © 2022</h1>
    </div>
  );
};

export default Footer;
