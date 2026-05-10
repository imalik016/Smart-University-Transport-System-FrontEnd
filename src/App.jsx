import React from "react";
//import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// SCREEN IMPORTS (Ensure these are the converted web versions)
// import Login from "./components/auth/Login";
// import ManageUsers from "./src/screens/AdminScreens/ManageUsers";
// import AddStopScreen from "./src/screens/AdminScreens/AddStopScreen";
// import TripGeneratorScreen from "./src/screens/AdminScreens/TripGeneratorScreen";
// import AddBusScreen from "./src/screens/AdminScreens/AddBusScreen";
// import ManageBusesScreen from "./src/screens/AdminScreens/ManageBusesScreen";
// import AssignDriverScreen from "./src/screens/AdminScreens/AssignDriverScreen";
// import HistoryScreen from "./src/screens/AdminScreens/HistoryScreen";
// import AddAdminScreen from "./src/screens/SuperAdmin/AddAdminScreen";
// import EditAdminDetailsScreen from "./src/screens/SuperAdmin/EditAdminDetailsScreen";
// import SuperAdminAdminsScreen from "./src/screens/SuperAdmin/SuperAdminAdminsScreen";
// import AddStudentScreen from "./src/screens/AdminScreens/AddStudentScreen";
// import AddDriverScreen from "./src/screens/AdminScreens/AddDriverScreen";
// import AddTeacherScreen from "./src/screens/AdminScreens/AddTeacherScreen";
// import ManagePassesScreen from "./src/screens/AdminScreens/ManagePassesScreen";
// import RechargePassScreen from "./src/screens/AdminScreens/RechargePassScreen";
// import EditUserScreen from "./src/screens/AdminScreens/EditUserScreen";
// import DriverTripSummary from "./src/screens/DriverScreens/DriverTripSummary";
// import DriverDashboardScreen from "./components/drivers/driverDashboard";
//import DriverProfileScreen from "./components/drivers/driverProfile";
// import DriverQRScreen from "./components/drivers/driverQRScreen";
// export default function App() {
//   return (
//     // <Login/>
//     <DriverQRScreen/>
//       );
// }
      

// // import Login from "./components/auth/Login"; // Ensure this path is correct
// //import DriverDashboardScreen from "./components/drivers/driverDashboard";


// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* Define your routes here */}
// //         {/* <Route path="/" element={<Login />} /> */}
// //         {/* <Route path="/driver-dashboard" element={<DriverDashboardScreen />} /> */}
        
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <DriverProfileScreen/>
// //   );
// // }
  
// //         <div>
// //           <Login/>
// //           <DriverDashboardScreen/>
// //         </div>
// //       




// export default function App(){
//   return(
//     <BrowserRouter>
//       <Routes>
//          Auth Route 
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />

//          Admin Routes 
//         <Route path="/manage-users" element={<ManageUsers />} />
//         <Route path="/manage-buses" element={<ManageBusesScreen />} />
//         <Route path="/manage-passes" element={<ManagePassesScreen />} />
//         <Route path="/trip-generator" element={<TripGeneratorScreen />} />
        
//          Shared / Action Routes 
//         <Route path="/add-stop" element={<AddStopScreen />} />
//         <Route path="/add-bus" element={<AddBusScreen />} />
//         <Route path="/assign-driver" element={<AssignDriverScreen />} />
//         <Route path="/bus-history" element={<HistoryScreen />} />
//         <Route path="/edit-user" element={<EditUserScreen />} />
//         <Route path="/recharge-pass" element={<RechargePassScreen />} />
        
//          Driver Routes 
//         <Route path="/driver-dashboard" element={<DriverDashboardScreen />} />

//          <Route path="/my-trips" element={<DriverTripSummary />} />

//         Super Admin Routes
//         <Route path="/super-admin-admins" element={<SuperAdminAdminsScreen />} />
//         <Route path="/add-admin" element={<AddAdminScreen />} />
//         <Route path="/edit-admin" element={<EditAdminDetailsScreen />} />

//         Registration Routes
//         <Route path="/add-student" element={<AddStudentScreen />} />
//         <Route path="/add-teacher" element={<AddTeacherScreen />} />
//         <Route path="/add-driver" element={<AddDriverScreen />} />  
//       </Routes>
//     </BrowserRouter>
//   );
// }

{/*

    <BrowserRouter>
      <Routes>
         Auth Route 
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

         Admin Routes 
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-buses" element={<ManageBusesScreen />} />
        <Route path="/manage-passes" element={<ManagePassesScreen />} />
        <Route path="/trip-generator" element={<TripGeneratorScreen />} />
        
         Shared / Action Routes 
        <Route path="/add-stop" element={<AddStopScreen />} />
        <Route path="/add-bus" element={<AddBusScreen />} />
        <Route path="/assign-driver" element={<AssignDriverScreen />} />
        <Route path="/bus-history" element={<HistoryScreen />} />
        <Route path="/edit-user" element={<EditUserScreen />} />
        <Route path="/recharge-pass" element={<RechargePassScreen />} />
        
         Driver Routes 
        <Route path="/driver-dashboard" element={<DriverDashboardScreen />} />

         <Route path="/my-trips" element={<DriverTripSummary />} />

        Super Admin Routes
        <Route path="/super-admin-admins" element={<SuperAdminAdminsScreen />} />
        <Route path="/add-admin" element={<AddAdminScreen />} />
        <Route path="/edit-admin" element={<EditAdminDetailsScreen />} />

        Registration Routes
        <Route path="/add-student" element={<AddStudentScreen />} />
        <Route path="/add-teacher" element={<AddTeacherScreen />} />
        <Route path="/add-driver" element={<AddDriverScreen />} />  
      </Routes>
    </BrowserRouter>*/}
    

























import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth
import Login from "./components/auth/Login";

import ManageAdmins from "./components/superadmin/ManageAdmins";

// Student
import StudentLayout from "./components/students/studentLayout";
import StudentDashboardScreen from "./components/students/studentDashboard";
import StudentAlerts from "./components/students/alertScreens";
// import StudentPass from "./components/students/studentPass";
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
import StudentTransportStatusScreen from "./components/teachers/teacherStudentStatus";
import TeacherLayout from "./components/teachers/teacherLayout";
//import ReportIssue from "./components/teachers/reportIssue";
import ManageAlerts from "./components/teachers/teacherAlerts";
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
// import AddStopScreen from "./components/admin/addStops";
import AddCourseScreen from "./components/admin/addCourse";
import AddTeacherScreen from "./components/admin/addTeacher";
import AddDriverScreen from "./components/admin/addDriver";
import AddStudentScreen from "./components/admin/addNewStudent";
import AddNewUser from "./components/admin/addNewUser";
import AddNewRecord from "./components/admin/quickAddScreens";
import AddNotificationScreen from "./components/admin/addNotification";
import AddPassScreen from "./components/admin/addPass";
import ManageNotificationsScreen from "./components/admin/manageNotifications";

import AssignDriverScreen from "./components/admin/assignDriver";
import ManageInfo from "./components/admin/manageInfo";
import HistoryScreen from "./components/admin/historyScreen";
import AddBusScreen from './components/admin/addBus';
// import QuickAddScreen from "./components/admin/quickAddScreens";

// Courses
import EnrollCourse from "./components/admin/EnrollCourseDashBoard";
import AssignTeacher from "./components/admin/assignTeacher";
import StudentEnrollment from "./components/admin/enrollStudent";

import AddStopScreen from "./components/admin/addStops";

// import AddBus from "./components/admin/addBus";
// import AssignmentHistory from "./components/admin/historyScreen";

// Super Admin
import SuperAdminLayout from "./components/superadmin/superAdminLayout";
import SuperDashboard from "./components/superadmin/Dashboard";
import AddAdminScreen from "./components/superadmin/addAdmins";
import EditAdmin from "./components/superadmin/EditAdmin";

// import AddBusScreen from './components/admin/addBus';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<Login />} />

        {/*================= ADMIN ================= */}
        {/* Fixed: Added AdminLayout and nested the dashboard routes correctly 
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route path="/dashboard" element={<AdminDashboard />} /> 
          <Route index element={<AdminDashboard />} /> 
          <Route path="dashboard" element={<AdminDashboard />} />
          
          <Route path="dashboard/add-bus" element={<AddBusScreen />} />
          <Route path="dashboard/add-route" element={<AddRouteScreen />} /> 
          {/* <Route path="dashboard/add-stop" element={<AddStopScreen />} />  
          {/* Add section 
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="add-user" element={<AddNewRecord />} />
          <Route path="add-user/add-student" element={<AddStudentScreen />} />
          <Route path="add-user/add-faculty" element={<AddTeacherScreen />} />
          <Route path="add-user/add-driver" element={<AddDriverScreen />} />
          <Route path="edit-users" element={<EditUser />} />
           <Route path="edit-user/:id" element={<EditUser />} /> 
          <Route path="dashboard/manage-routes" element={<ManageRoutes />} />
          <Route path="dashboard/manage-travels" element={<ManageTravels />} />
          <Route path="dashboard/manage-pass" element={<ManageStudentPassScreen />} />
          <Route path="travel-logs" element={<TravelLogs />} />
          <Route path="add-course" element={<AddCourseScreen />} />
          <Route path="add-notification" element={<AddNotificationScreen />} /> 
          <Route path="add-pass" element={<AddPassScreen />} />          
          <Route path="manage-notification" element={<ManageNotificationsScreen />} /> 
          <Route path="show-history" element={<HistoryScreen />} />
          <Route path="assign-driver" element={<AssignDriverScreen />} /> 
           <Route path="quick-add" element={<QuickAddScreen/>} />            
        
        </Route> */}
        <Route path="/" element={<Login />} />

        {/*================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* 1. The Welcome Screen (Shown by default at /admin) */}
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          {/* 2. User Management Flow */}
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          
          {/* 3. Add User Flow (Starts at the 3-button screen) */}
          <Route path="add-user" element={<AddNewRecord />} /> 
          <Route path="add-user/add-student" element={<AddStudentScreen />} />
          <Route path="add-user/add-faculty" element={<AddTeacherScreen />} />
          <Route path="add-user/add-driver" element={<AddDriverScreen />} />
          
          {/* Buses */}
          <Route path="manage-info" element={<ManageInfo />} /> 
          {/* <Route path="manage-info/assign-driver" element={<AssignDriverScreen />} /> */}
          <Route path="manage-info/add-bus" element={<AddBusScreen />} />
          {/* // Inside your <Routes> component */}
          <Route path="/admin/manage-info/assign-driver/:busId/:busNumber" element={<AssignDriverScreen />} />
          <Route path="/admin/manage-info/show-history/:busId" element={<HistoryScreen />} />
          {/* <Route path="manage-info/show-history" element={<HistoryScreen />} /> */}

          {/* 4. Routes & Stops Flow */}
          <Route path="manage-routes" element={<ManageRoutes />} />
          <Route path="/admin/add-user/add-stop" element={<AddStopScreen/>} />
          <Route path="/admin/add-user/add-route" element={<AddRouteScreen />} />

          {/* Courses  */}
          <Route path="/admin/add-user/add-course" element={<AddCourseScreen/>} />
          <Route path="/admin/add-user/asg-enroll-course" element={<EnrollCourse/>} />
          <Route path="/admin/add-user/asg-enroll-course/assign-teacher" element={<AssignTeacher/>} />          
          <Route path="/admin/add-user/asg-enroll-course/enroll-course" element={<StudentEnrollment/>} />

          {/* 5. Other Admin Screens */}
          <Route path="student-pass" element={<ManageStudentPassScreen />} />
          <Route path="alerts" element={<ManageNotificationsScreen />} />
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
          <Route path="scan-qr" element={<ScanScreen/>}/>
        </Route>

        {/* ================= PARENT ================= */}
        <Route path="/parent" element={<ParentLayout />}>
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="child-detail" element={<ParentChildDetailsScreen/>} />
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
          {/* <Route path="report-issue" element={<ReportIssue />} /> */}
          <Route path="emergency-alert" element={<EmergencyAlertScreen />} />
          <Route path="send-alerts" element={<SendAlertScreen />} />
          <Route path="student-status" element={<StudentTransportStatusScreen />} />
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<div style={{ padding: "20px" }}>Page Not Found</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;






{/* 
        
     // ... existing imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        ================= ADMIN ================= 
        <Route path="/admin" element={<AdminLayout />}>
          {/* Landing on /admin now shows Dashboard by default 
          <Route index element={<AdminDashboard />} /> 
          <Route path="dashboard" element={<AdminDashboard />} />
          
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          
          {/* Quick Add Section 
          <Route path="add-new" element={<AddNewRecord />} />
          <Route path="add-new/student" element={<AddStudentScreen />} />
          <Route path="add-new/faculty" element={<AddTeacherScreen />} />
          <Route path="add-new/driver" element={<AddDriverScreen />} />

          {/* Other Admin Routes 
          <Route path="buses" element={<AddBusScreen />} />
          <Route path="student-pass" element={<ManageStudentPassScreen />} />
          <Route path="map" element={<MapScreen />} />
          <Route path="alerts" element={<ManageNotificationsScreen />} />
        </Route>
   
        
        
        
        
        */}




