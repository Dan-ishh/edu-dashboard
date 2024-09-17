import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Dots from "@/assets/images/dots.png";
import { Box } from "@mui/material";
import styles from "./StudentCountChart.module.scss";

const data = [
  { name: "Jan", teachers: 300, students: 200 },
  { name: "Feb", teachers: 400, students: 300 },
  { name: "Mar", teachers: 500, students: 250 },
  { name: "Apr", teachers: 600, students: 400 },
  { name: "May", teachers: 700, students: 500 },
  { name: "Jun", teachers: 650, students: 450 },
  { name: "Jul", teachers: 550, students: 350 },
];

const StudentCountChart = () => {
  return (
    <div className={styles.studentCountChart}>
      <Box className={styles.chartHeaderBox}>
        <Box>
          <h1 className={styles.title}>Number of students</h1>
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
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="teachers" fill="#3d5ee1" />
          <Bar dataKey="students" fill="#70c4cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentCountChart;
