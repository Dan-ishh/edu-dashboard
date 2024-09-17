import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Dots from "@/assets/images/dots.png";
import Carrom from "@/assets/images/carrom.png";
import School from "@/assets/images/school.png";
import Chess from "@/assets/images/chess.png";
import First from "@/assets/images/first.png";
import styles from "./StudentActivity.module.scss";

// Sample data for student activities
const activities = [
  {
    title: '1st place in "Chess"',
    description: 'John Doe won 1st place in "Chess"',
    time: "1 Day ago",
    img: First,
  },
  {
    title: 'Participated in "Carrom"',
    description: 'Justin Lee participated in "Carrom"',
    time: "2 hours ago",
    img: Carrom,
  },
  {
    title: 'International conference in "St.John School"',
    description: "Justin Leattended international conference",
    time: "2 Week ago",
    img: School,
  },
  {
    title: 'Won 1st place in "Chess"',
    description: 'John Doe won 1st place in "Chess"',
    time: "3 Day ago",
    img: Chess,
  },
];

const StudentActivityList = () => {
  return (
    <Box className={styles.studentActivityList}>
      <Box className={styles.chartHeaderBox}>
        <Box>
          <h1 className={styles.title}>Student Activity</h1>
        </Box>
        <Box className={styles.rightBox}>
          <Box class={styles.dotBox}>
            <img src={Dots} alt="dots" />
          </Box>
        </Box>
      </Box>
      <List>
        {activities?.map((item, index) => (
          <Box className={styles.activityBox} key={index}>
            <Box className={styles.leftBox}>
              <Box>
                <img src={item?.img} alt="activity" />
              </Box>
              <Box>
                <h1 className={styles.title}>{item?.title}</h1>
                <h1 className={styles.des}>{item?.description}</h1>
              </Box>
            </Box>
            <Box className={styles.rightBox}>
              <h1 className={styles.timeStamp}>{item?.time}</h1>
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default StudentActivityList;
