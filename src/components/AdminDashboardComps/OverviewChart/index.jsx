import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Dots from "@/assets/images/dots.png";
import styles from "./OverviewChart.module.scss";
import { Box } from "@mui/material";

const data = [
  { month: "Jan", teacher: 40, student: 50 },
  { month: "Feb", teacher: 45, student: 55 },
  { month: "Mar", teacher: 50, student: 45 },
  { month: "Apr", teacher: 60, student: 50 },
  { month: "May", teacher: 70, student: 40 },
  { month: "Jun", teacher: 65, student: 55 },
  { month: "Jul", teacher: 55, student: 35 },
];

const OverviewChart = () => {
  return (
    <div className={styles.overviewChart}>
      <Box className={styles.chartHeaderBox}>
        <Box>
          <h1 className={styles.title}>Overview</h1>
        </Box>
        <Box className={styles.rightBox}>
          <Box className={styles.ids}>
            <Box className={`${styles.circle} ${styles.blueBg}`}></Box>
            <h1 className={styles.name}>Teacher</h1>
          </Box>
          <Box className={styles.ids}>
            <Box className={`${styles.circle} ${styles.greenBg}`}></Box>
            <h1 className={styles.name}>Student</h1>
          </Box>
          <Box class={styles.dotBox}>
            <img src={Dots} alt="dots" />
          </Box>
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="teacher" stroke="#3d5ee1" />
          <Line type="monotone" dataKey="student" stroke="#70c4cf" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
