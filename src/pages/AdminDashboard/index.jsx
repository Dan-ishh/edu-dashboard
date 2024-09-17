import React from "react";
import { Grid, Box, Typography, Breadcrumbs, Link } from "@mui/material";
import StatBox from "@/components/AdminDashboardComps/StatBox";
import OverviewChart from "@/components/AdminDashboardComps/OverviewChart";
import StudentCountChart from "@/components/AdminDashboardComps/StudentCountChart";
import StarStudentsTable from "@/components/AdminDashboardComps/StarStudentsTable";
import StudentActivityList from "@/components/AdminDashboardComps/StudentActivity";
import SocialMediaCard from "@/components/AdminDashboardComps/SocialMedia";

import styles from "./AdminDashboard.module.scss";

const AdminDashboard = () => {
  return (
    <Box className={styles.dashboardContainer}>
      {/* Welcome and Breadcrumb Section */}
      <Grid container spacing={3} className={styles.welcomeContainer}>
        <Grid item xs={6} md={6}>
          <h1 variant="h4" className={styles.welcomeText}>
            Welcome Admin!
          </h1>
        </Grid>
        <Grid item xs={6} md={6} className={styles.breadcrumbContainer}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Admin</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Stat Boxes */}
        <Grid item xs={12} sm={6} md={3}>
          <StatBox title="Students" value="50,055" icon="graduationCap" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox title="Awards" value="50+" icon="trophy" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox title="Department" value="30+" icon="department" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatBox title="Revenue" value="$505" icon="revenue" />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={6}>
          <OverviewChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <StudentCountChart />
        </Grid>

        {/* Star Students Table */}
        <Grid item xs={12} md={6} className="hahahahah">
          <StarStudentsTable />
        </Grid>

        {/* Student Activity */}
        <Grid item xs={12} md={6}>
          <StudentActivityList />
        </Grid>

        {/* Social Media Cards */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <SocialMediaCard platform="facebook" followers="50,095" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SocialMediaCard platform="twitter" followers="48,596" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SocialMediaCard platform="instagram" followers="52,085" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SocialMediaCard platform="linkedin" followers="69,050" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
