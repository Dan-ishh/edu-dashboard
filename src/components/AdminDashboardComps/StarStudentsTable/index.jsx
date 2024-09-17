import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Dots from "@/assets/images/dots.png";
import a1 from "@/assets/images/a1.png";
import a2 from "@/assets/images/a2.png";
import a3 from "@/assets/images/a3.png";
import a4 from "@/assets/images/a4.png";
import a5 from "@/assets/images/a5.png";

import styles from "./StarStudentsTable.module.scss";

const StyledTableCellBox = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8F9FA",
    color: "#495057",
    padding: "11px 12px 13px 12px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "none",
    color: "#666666",
    padding: "12px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FAFAFA",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    id: "PRE2209",
    name: "John Smith",
    marks: 1185,
    percentage: "98%",
    year: 2019,
    img: a1,
  },
  {
    id: "PRE1245",
    name: "Jolie Hoskins",
    marks: 1195,
    percentage: "99.5%",
    year: 2018,
    img: a2,
  },
  {
    id: "PRE1625",
    name: "Pennington Joy",
    marks: 1196,
    percentage: "99.6%",
    year: 2017,
    img: a3,
  },
  {
    id: "PRE2516",
    name: "Millie Marsden",
    marks: 1187,
    percentage: "98.2%",
    year: 2016,
    img: a4,
  },
  {
    id: "PRE2209",
    name: "John Smith",
    marks: 1185,
    percentage: "98%",
    year: 2015,
    img: a5,
  },
];

const StarStudentsTable = () => {
  return (
    <Box className={styles.starStudentsTable}>
      <Box className={styles.chartHeaderBox}>
        <Box>
          <h1 className={styles.title}>Star Students</h1>
        </Box>
        <Box className={styles.rightBox}>
          <Box class={styles.dotBox}>
            <img src={Dots} alt="dots" />
          </Box>
        </Box>
      </Box>
      <TableContainer>
        <Table aria-label="star students table">
          <TableHead>
            <TableRow>
              <StyledTableCellBox>ID</StyledTableCellBox>
              <StyledTableCellBox>Name</StyledTableCellBox>
              <StyledTableCellBox>Marks</StyledTableCellBox>
              <StyledTableCellBox>Percentage</StyledTableCellBox>
              <StyledTableCellBox>Year</StyledTableCellBox>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row?.id}>
                <StyledTableCellBox>{row?.id}</StyledTableCellBox>
                <StyledTableCellBox>
                  <Box className={styles.username}>
                    <img src={row?.img} alt="user" />
                    {row?.name}
                  </Box>
                </StyledTableCellBox>
                <StyledTableCellBox>{row?.marks}</StyledTableCellBox>
                <StyledTableCellBox>{row?.percentage}</StyledTableCellBox>
                <StyledTableCellBox>{row?.year}</StyledTableCellBox>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StarStudentsTable;
