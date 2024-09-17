// src/components/sidebar/Sidebar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import styles from "./Sidebar.module.scss";
import BlueRight from "@/assets/images/blue-right.png";
import GrayRight from "@/assets/images/gray-right.png";
import StudentImg from "@/assets/images/students.png";
import TeacherImg from "@/assets/images/teachers.png";
import DepartmentImg from "@/assets/images/department.png";
import SubjectImg from "@/assets/images/subjects.png";
import InvoicesImg from "@/assets/images/invoices.png";
import AccountsImg from "@/assets/images/accounts.png";
import HolidayImg from "@/assets/images/holiday.png";
import FeesImg from "@/assets/images/fees.png";
import ExamListImg from "@/assets/images/exam.png";
import EventsImg from "@/assets/images/events.png";
import TableImg from "@/assets/images/table.png";
import LibraryImg from "@/assets/images/library.png";
import BlogsImg from "@/assets/images/blogs.png";
import SettingsImg from "@/assets/images/settings.png";
import AuthImg from "@/assets/images/auth.png";
import MenuIcon from "@/assets/images/menu.png";

const Sidebar = ({ isSidebarOpen }) => {
  const [openStudents, setOpenStudents] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);
  const [openDepartments, setOpenDepartments] = useState(false);
  const [openSubjects, setOpenSubjects] = useState(false);
  const [openInvoices, setOpenInvoices] = useState(false);
  const [openAccounts, setOpenAccounts] = useState(false);
  const [openHoliday, setOpenHoliday] = useState(false);
  const [openFees, setOpenFees] = useState(false);
  const [openExamList, setOpenExamList] = useState(false);
  const [openEvents, setOpenEvents] = useState(false);
  const [openTimetable, setOpenTimetable] = useState(false);
  const [openLibrary, setOpenLibrary] = useState(false);
  const [openBlogs, setOpenBlogs] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openAuthentication, setOpenAuthentication] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 799);
  // Toggle Drawer visibility
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 799); // Check if the screen is smaller than 799px
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();

  // Toggle submenu functions
  const handleDashboardClick = () => setOpenDashboard(!openDashboard);
  const handleStudentsClick = () => setOpenStudents(!openStudents);
  const handleTeachersClick = () => setOpenTeachers(!openTeachers);
  const handleDepartmentsClick = () => setOpenDepartments(!openDepartments);
  const handleSubjectsClick = () => setOpenSubjects(!openSubjects);
  const handleInvoicesClick = () => setOpenInvoices(!openInvoices);
  const handleAccountsClick = () => setOpenAccounts(!openAccounts);
  const handleHolidayClick = () => setOpenHoliday(!openHoliday);
  const handleFeesClick = () => setOpenFees(!openFees);
  const handleExamListClick = () => setOpenExamList(!openExamList);
  const handleEventClick = () => setOpenEvents(!openEvents);
  const handleTimeTableClick = () => setOpenTimetable(!openTimetable);
  const handleLibraryClick = () => setOpenLibrary(!openLibrary);
  const handleBlogsClick = () => setOpenBlogs(!openBlogs);
  const handleSettingsClick = () => setOpenSettings(!openSettings);
  const handleAuthenticationClick = () =>
    setOpenAuthentication(!openAuthentication);

  const drawerContent = (
    <div className={styles.mainContainer}>
      <h1 className={styles.logoName}>Edu Dashboard</h1>
      {/* Main Menu Section */}
      <Typography
        variant="h6"
        className={`${styles.menuTitle} ${styles.pleft30}`}
      >
        Main Menu
      </Typography>
      <List>
        <ListItem
          button
          onClick={handleDashboardClick}
          //   to="/admin-dashboard"
          className={
            location.pathname.includes("/dashboard")
              ? `${styles.activeMenu} ${styles.menuTitle} ${styles.pleft}`
              : styles.pleft
          }
        >
          {/* <ListItemIcon className={styles.icon}>
            <FaHome />
          </ListItemIcon> */}
          <ListItemText
            primary="Dashboard"
            className={
              location.pathname.includes("/dashboard")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openDashboard ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              to="/dashboard/admin"
              //   className={
              //     location.pathname === "/dashboard/admin"
              //       ? styles.activeSubMenu
              //       : styles.menuItem
              //   }
              className={styles.listItem}
            >
              <ListItemText
                primary="Admin Dashboard"
                disableTypography
                className={
                  location.pathname === "/dashboard/admin"
                    ? styles.activeSubMenu
                    : styles.menuItem
                }
              />
            </ListItem>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/dashboard/teacher"
            >
              <ListItemText
                primary="Teacher Dashboard"
                className={
                  location.pathname === "/dashboard/teacher"
                    ? styles.activeSubMenu
                    : styles.menuItem
                }
              />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/dashboard/student"
              className={styles.listItem}
            >
              <ListItemText
                primary="Student Dashboard"
                className={
                  location.pathname === "/dashboard/student"
                    ? styles.activeSubMenu
                    : styles.menuItem
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Students Menu */}
        <ListItem
          button
          onClick={handleStudentsClick}
          className={
            location.pathname.includes("/students")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={StudentImg} alt="student" />
          </ListItemIcon>
          <ListItemText
            primary="Students"
            className={
              location.pathname.includes("/students")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openStudents ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openStudents} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/students/overview"
            >
              <ListItemText
                primary="Student"
                className={
                  location.pathname.includes("/students")
                    ? styles.activeSubMenu
                    : styles.menuItem
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Teachers Menu */}
        <ListItem
          button
          onClick={handleTeachersClick}
          className={
            location.pathname.includes("/teachers")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={TeacherImg} alt="teachers" />
          </ListItemIcon>
          <ListItemText
            primary="Teachers"
            className={
              location.pathname.includes("/teachers")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openTeachers ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openTeachers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              to="/teachers/overview"
              className={styles.listItem}
            >
              <ListItemText
                primary="Teacher"
                className={
                  location.pathname === "/teachers/overview"
                    ? styles.activeSubMenu
                    : styles.menuTitle
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Departments Menu */}
        <ListItem
          button
          onClick={handleDepartmentsClick}
          className={
            location.pathname.includes("/departments")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={DepartmentImg} alt="department" />
          </ListItemIcon>
          <ListItemText
            primary="Departments"
            className={
              location.pathname.includes("/departments")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openDepartments ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openDepartments} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/departments/overview"
            >
              <ListItemText
                primary="Department"
                className={
                  location.pathname === "/departments/overview"
                    ? styles.activeSubMenu
                    : styles.menuTitle
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Subjects Menu */}
        <ListItem
          button
          onClick={handleSubjectsClick}
          className={
            location.pathname.includes("/subjects")
              ? `${styles.activeMenu} ${styles.menuTitle} ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={SubjectImg} alt="subject" />
          </ListItemIcon>
          <ListItemText
            primary="Subjects"
            className={
              location.pathname.includes("/subjects")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openSubjects ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openSubjects} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/subjects/overview"
            >
              <ListItemText
                primary="Subject"
                className={
                  location.pathname === "/subjects/overview"
                    ? styles.activeSubMenu
                    : styles.menuTitle
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Invoices Menu */}
        <ListItem
          button
          onClick={handleInvoicesClick}
          className={
            location.pathname.includes("/invoices")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={InvoicesImg} alt="invoice" />
          </ListItemIcon>
          <ListItemText
            primary="Invoices"
            className={
              location.pathname.includes("/invoices")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openInvoices ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openInvoices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/invoices/overview"
            >
              <ListItemText
                primary="Invoice"
                className={
                  location.pathname === "/invoices/overview"
                    ? styles.activeSubMenu
                    : styles.menuTitle
                }
              />
            </ListItem>
          </List>
        </Collapse>
      </List>

      {/* Management Section */}
      <Typography
        variant="h6"
        className={`${styles.menuTitle} ${styles.pleft30}`}
      >
        Management
      </Typography>
      <List>
        {/* Accounts Menu */}
        <ListItem
          button
          onClick={handleAccountsClick}
          className={
            location.pathname.includes("/accounts")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={AccountsImg} alt="account" />
          </ListItemIcon>
          <ListItemText
            primary="Accounts"
            className={
              location.pathname.includes("/accounts")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openAccounts ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openAccounts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/accounts/overview"
            >
              <ListItemText
                primary="Acccount"
                className={
                  location.pathname === "/accounts/overview"
                    ? `${styles.activeSubMenu}`
                    : `${styles.menuTitle}`
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Holiday Menu */}
        <ListItem
          button
          component={Link}
          to="/holiday"
          onClick={handleHolidayClick}
          className={
            location.pathname.includes("/holiday")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={HolidayImg} alt="holiday" />
          </ListItemIcon>
          <ListItemText
            primary="Holiday"
            className={
              location.pathname.includes("/holiday")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>

        {/* Fees Menu */}
        <ListItem
          button
          component={Link}
          to="/fees"
          onClick={handleFeesClick}
          className={
            location.pathname.includes("/fees")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={FeesImg} alt="fees" />
          </ListItemIcon>
          <ListItemText
            primary="Fees"
            className={
              location.pathname.includes("/fees")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>

        {/* Exam List Menu */}
        <ListItem
          button
          component={Link}
          to="/examlist"
          onClick={handleExamListClick}
          className={
            location.pathname.includes("/examlist")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={ExamListImg} alt="exam" />
          </ListItemIcon>
          <ListItemText
            primary="Exam List"
            className={
              location.pathname.includes("/examlist")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>

        {/* Event Menu */}
        <ListItem
          button
          component={Link}
          to="/events"
          onClick={handleEventClick}
          className={
            location.pathname.includes("/events")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={EventsImg} alt="event" />
          </ListItemIcon>
          <ListItemText
            primary="Events"
            className={
              location.pathname.includes("/events")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>

        {/* Time Table Menu */}
        <ListItem
          button
          component={Link}
          to="/timetable"
          onClick={handleTimeTableClick}
          className={
            location.pathname.includes("/timetable")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={TableImg} alt="table" />
          </ListItemIcon>
          <ListItemText
            primary="Time Table"
            className={
              location.pathname.includes("/timetable")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>

        {/* Library Menu */}
        <ListItem
          button
          component={Link}
          to="/library"
          onClick={handleLibraryClick}
          className={
            location.pathname.includes("/library")
              ? `${styles.activeMenu} ${styles.menuTitle} ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={LibraryImg} alt="library" />
          </ListItemIcon>
          <ListItemText
            primary="Library"
            className={
              location.pathname.includes("/library")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>

        {/* Blogs Menu */}
        <ListItem
          button
          onClick={handleBlogsClick}
          className={
            location.pathname.includes("/blogs")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={BlogsImg} alt="blog" />
          </ListItemIcon>
          <ListItemText
            primary="Blogs"
            className={
              location.pathname.includes("/blogs")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openBlogs ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openBlogs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/blogs/overview"
            >
              <ListItemText
                primary="Blog"
                className={
                  location.pathname === "/blogs/overview"
                    ? styles.activeSubMenu
                    : styles.menuTitle
                }
              />
            </ListItem>
          </List>
        </Collapse>

        {/* Setting Menu */}
        <ListItem
          button
          component={Link}
          to="/settings"
          onClick={handleSettingsClick}
          className={
            location.pathname.includes("/settings")
              ? `${styles.activeMenu} ${styles.menuTitle} ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={SettingsImg} alt="settings" />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            className={
              location.pathname.includes("/settings")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
        </ListItem>
      </List>

      {/* Pages Section */}
      <Typography
        variant="h6"
        className={`${styles.menuTitle} ${styles.pleft30}`}
      >
        Pages
      </Typography>
      <List>
        {/* Authentication Menu */}
        <ListItem
          button
          onClick={handleAuthenticationClick}
          className={
            location.pathname.includes("/authentication")
              ? `${styles.activeMenu} ${styles.menuTitle}  ${styles.pleft}`
              : styles.pleft
          }
        >
          <ListItemIcon className={styles.icon}>
            <img src={AuthImg} alt="auth" />
          </ListItemIcon>
          <ListItemText
            primary="Authentication"
            className={
              location.pathname.includes("/authentication")
                ? styles.activeMenuTitle
                : styles.menuTitle
            }
          />
          {openAuthentication ? (
            <img src={BlueRight} alt="arrow" />
          ) : (
            <img src={GrayRight} alt="arrow" />
          )}
        </ListItem>
        <Collapse in={openAuthentication} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={styles.subMenuPill}>
            <ListItem
              button
              component={Link}
              className={styles.listItem}
              to="/authentication/overview"
            >
              <ListItemText
                primary="Authentication 0"
                className={
                  location.pathname === "/authentication/overview"
                    ? styles.activeSubMenu
                    : styles.menuTitle
                }
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <>
      {/* Menu button to open the drawer */}
      {/* <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        className={styles.menuButton}
      >
        <MenuIcon />
        <img src={MenuIcon} alt="menu" />
      </IconButton> */}
      <Drawer
        variant="permanent"
        responsiveness
        anchor="left"
        open={isSidebarOpen}
        //   onClose={onClose}
        className={styles.sidebar}
        //   ModalProps={{ keepMounted: true }} // Better open performance on mobile
        sx={{
          // display: { xs: "block", sm: "none" }, // Hide sidebar on smaller screens
          "& .MuiDrawer-paper": {
            width: 259,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
