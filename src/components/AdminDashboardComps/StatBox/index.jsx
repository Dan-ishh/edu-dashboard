import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./StatBox.module.scss";
import Award from "@/assets/images/award.png";
import Department from "@/assets/images/department1.png";
import Revenue from "@/assets/images/revenue.png";
import Student from "@/assets/images/student.png";

const iconMap = {
  graduationCap: Student,
  trophy: Award,
  department: Department,
  revenue: Revenue,
};

const StatBox = ({ title, value, icon }) => {
  return (
    <Box className={styles.statBox}>
      <Box>
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="h4" className={styles.value}>
          {value}
        </Typography>
      </Box>

      <Box className={styles.content}>
        <img className={styles.icon} src={iconMap[icon]} alt="icons" />
      </Box>
    </Box>
  );
};

export default StatBox;
