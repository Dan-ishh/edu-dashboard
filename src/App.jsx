import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/TopBar";
import Account from "./pages/Accounts";
import AdminDashboard from "@/pages/AdminDashboard";
import Authentication from "./pages/Authentication";
import Blogs from "./pages/Blogs";
import DepartmentOverview from "./pages/DepartmentOverview";
import Events from "./pages/Events";
import ExamList from "./pages/ExamList";
import Fees from "./pages/Fees";
import Holiday from "./pages/Holiday";
import Invoices from "./pages/Invoices";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import StudentDashboard from "./pages/StudentDashboard";
import StudentOverview from "./pages/StudentOverview";
import Subjects from "./pages/Subjects";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeachersOverview from "./pages/TeacherOverview";
import TimeTable from "./pages/TimeTable";
import "./assets/styles/global.scss";
import Footer from "./components/Footer";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
        <div
          className={
            isSidebarOpen
              ? "main-content sidebar-open"
              : "main-content sidebar-closed"
          }
        >
          {/* Topbar */}
          <Topbar
            onSidebarToggle={handleSidebarToggle}
            isSidebarOpen={isSidebarOpen}
          />
          {/* Main Content */}
          <main className="content-area">
            <Routes>
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/dashboard/student" element={<StudentDashboard />} />
              <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
              <Route path="/students/overview" element={<StudentOverview />} />
              <Route path="/teachers/overview" element={<TeachersOverview />} />
              <Route
                path="/departments/overview"
                element={<DepartmentOverview />}
              />
              <Route path="/subjects/overview" element={<Subjects />} />
              <Route path="/invoices/overview" element={<Invoices />} />
              <Route path="/accounts/overview" element={<Account />} />
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/examlist" element={<ExamList />} />
              <Route path="/events" element={<Events />} />
              <Route path="/timetable" element={<TimeTable />} />
              <Route path="/library" element={<Library />} />
              <Route path="/blogs/overview" element={<Blogs />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/authentication/overview"
                element={<Authentication />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
