import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth
import Login from "./components/auth/Login";

// Student
import StudentLayout from "./components/students/studentLayout";
import StudentDashboardScreen from "./components/students/studentDashboard";
import StudentAlerts from "./components/students/alertScreens";
import ScanScreen from "./components/students/scanScreen";
import MapScreen from "./components/students/mapView";

// Parent
import ParentLayout from "./components/parents/parentLayout";
import ParentDashboard from "./components/parents/parentDashboard";
import ParentChildDetailsScreen from "./components/parents/parentChildDetails";

// Driver
import DriverLayout from "./components/drivers/driverLayout";
import DriverDashboard from "./components/drivers/driverDashboard";
import DriverProfileScreen from "./components/drivers/driverProfile";
import DriverQRScreen from "./components/drivers/driverQRScreen";
import DriverTripSummaryScreen from "./components/drivers/driverTripSummary";
import SendAlertScreen from "./components/drivers/sendAlerts";

// Teacher
import TeacherLayout from "./components/teachers/teacherLayout";
import StudentTransportStatusScreen from "./components/teachers/teacherStudentStatus";
import EmergencyAlertScreen from "./components/teachers/reportIssue";

// Admin
import AdminLayout from "./components/admin/adminLayout";
import AdminDashboard from "./components/admin/Dashboard";
import AddRouteScreen from "./components/admin/addRoute";
import EditUser from "./components/admin/editUsers";
import ManageUsers from "./components/admin/manageUsers";
import ManageRoutes from "./components/admin/manageRoutes";
import ManageTravels from "./components/admin/manageTravels";
import TravelLogs from "./components/admin/travelLogs";
import ManageStudentPassScreen from "./components/admin/manageStudentPass";
import AddStopScreen from "./components/admin/addStops";
import AddCourseScreen from "./components/admin/addCourse";
import AddTeacherScreen from "./components/admin/addTeacher";
import AddDriverScreen from "./components/admin/addDriver";
import AddStudentScreen from "./components/admin/addNewStudent";
import AddNewRecord from "./components/admin/quickAddScreens";
import AddNotificationScreen from "./components/admin/addNotification";
import AddPassScreen from "./components/admin/addPass";
import ManageNotificationsScreen from "./components/admin/manageNotifications";
import AssignDriverScreen from "./components/admin/assignDriver";
import ManageInfo from "./components/admin/manageInfo";
import HistoryScreen from "./components/admin/historyScreen";
import AddBusScreen from "./components/admin/addBus";

// Courses
import EnrollCourse from "./components/admin/EnrollCourseDashBoard";
import AssignTeacher from "./components/admin/assignTeacher";
import StudentEnrollment from "./components/admin/enrollStudent";

// Super Admin
import SuperAdminLayout from "./components/superadmin/superAdminLayout";
import SuperDashboard from "./components/superadmin/Dashboard";
import AddAdminScreen from "./components/superadmin/addAdmins";
import EditAdmin from "./components/superadmin/EditAdmin";
import RechargePassScreen from "./components/admin/rechargePass";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTH ================= */}
        <Route path="/" element={<Login />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          {/* User Management */}
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="edit-user/:id" element={<EditUser />} />

          {/* Add User Flow */}
          <Route path="add-user" element={<AddNewRecord />} />
          <Route path="add-user/add-student" element={<AddStudentScreen />} />
          <Route path="add-user/add-faculty" element={<AddTeacherScreen />} />
          <Route path="add-user/add-driver" element={<AddDriverScreen />} />
          <Route path="add-user/add-stop" element={<AddStopScreen />} />
          <Route path="add-user/add-route" element={<AddRouteScreen />} />
          <Route path="add-user/add-course" element={<AddCourseScreen />} />
          <Route path="add-user/asg-enroll-course" element={<EnrollCourse />} />
          <Route path="add-user/asg-enroll-course/assign-teacher" element={<AssignTeacher />} />
          <Route path="add-user/asg-enroll-course/enroll-course" element={<StudentEnrollment />} />

          {/* Bus Management */}
          <Route path="manage-info" element={<ManageInfo />} />
          <Route path="manage-info/add-bus" element={<AddBusScreen />} />
          <Route path="manage-info/assign-driver/:busId/:busNumber" element={<AssignDriverScreen />} />
          <Route path="manage-info/show-history/:busId" element={<HistoryScreen />} />

          {/* Routes */}
          <Route path="manage-routes" element={<ManageRoutes />} />

          {/* Other */}
          <Route path="student-pass" element={<ManageStudentPassScreen />} />
          <Route path="alerts" element={<ManageNotificationsScreen />} />
          <Route path="add-notification" element={<AddNotificationScreen />} />
          <Route path="student-pass/recharge-pass/:Reg_No" element={<RechargePassScreen />} />
          <Route path="travel-logs" element={<TravelLogs />} />
          <Route path="manage-travels" element={<ManageTravels />} />
        </Route>

        {/* ================= SUPER ADMIN ================= */}
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route path="dashboard" element={<SuperDashboard />} />
          <Route path="add-admin" element={<AddAdminScreen />} />
          <Route path="edit-admins/:id/:name" element={<EditAdmin />} />
        </Route>

        {/* ================= STUDENT ================= */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboardScreen />} />
          <Route path="alerts" element={<StudentAlerts />} />
          <Route path="map-view" element={<MapScreen />} />
          <Route path="scan-qr" element={<ScanScreen />} />
        </Route>

        {/* ================= PARENT ================= */}
        <Route path="/parent" element={<ParentLayout />}>
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="child-detail" element={<ParentChildDetailsScreen />} />
        </Route>

        {/* ================= DRIVER ================= */}
        <Route path="/driver" element={<DriverLayout />}>
          <Route path="dashboard" element={<DriverDashboard />} />
          <Route path="profile" element={<DriverProfileScreen />} />
          <Route path="trip-summary" element={<DriverTripSummaryScreen />} />
          <Route path="qr-screen" element={<DriverQRScreen />} />
          <Route path="alert-screen" element={<SendAlertScreen />} />
        </Route>

        {/* ================= TEACHER ================= */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="emergency-alert" element={<EmergencyAlertScreen />} />
          <Route path="send-alerts" element={<SendAlertScreen />} />
          <Route path="student-status" element={<StudentTransportStatusScreen />} />
        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<div style={{ padding: "20px", color: "white" }}>Page Not Found</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
