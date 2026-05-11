
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Sidebar({ active }) {
//   const navigate = useNavigate();

//   return (
//     <div style={sidebarStyles.wrapper}>
//       {/* App Logo or Brand Area */}
//       <div style={sidebarStyles.logoArea}>
//         <div style={sidebarStyles.logoCircle}>👥</div>
//         <h2 style={sidebarStyles.brandName}>Manage Users</h2>
//       </div>

//       <nav style={sidebarStyles.navLinks}>
//         <button 
//           style={{ ...sidebarStyles.navItem, ...(active === "scan" ? sidebarStyles.activeItem : {}) }} 
//           onClick={() => navigate("/scan")}
//         >
//           <span style={sidebarStyles.icon}>📷</span>
//           <span style={sidebarStyles.label}>Scan QR</span>
//         </button>

//         <button 
//           style={{ ...sidebarStyles.navItem, ...(active === "map" ? sidebarStyles.activeItem : {}) }} 
//           onClick={() => navigate("/map")}
//         >
//           <span style={sidebarStyles.icon}>📍</span>
//           <span style={sidebarStyles.label}>Live Map</span>
//         </button>

//         <button 
//           style={{ ...sidebarStyles.navItem, ...(active === "alerts" ? sidebarStyles.activeItem : {}) }} 
//           onClick={() => navigate("/alerts")}
//         >
//           <span style={sidebarStyles.icon}>🔔</span>
//           <span style={sidebarStyles.label}>Alerts</span>
//         </button>

//         <button 
//           style={{ ...sidebarStyles.navItem, ...(active === "alerts" ? sidebarStyles.activeItem : {}) }} 
//           onClick={() => navigate("/alerts")}
//         >
//           <span style={sidebarStyles.icon}>🔔</span>
//           <span style={sidebarStyles.label}>Alerts</span>
//         </button>
//       </nav>

//       {/* Logout at the bottom */}
//       <div style={sidebarStyles.footer}>
//         <button style={sidebarStyles.logoutBtn} onClick={() => navigate("/logout")}>
//           <span style={sidebarStyles.icon}>🏃</span>
//           <span style={sidebarStyles.label}>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// const sidebarStyles = {
//   wrapper: {
//     width: "260px",
//     height: "100vh",
//     backgroundColor: "#0D1117", // Dark theme matching ManageUsers1
//     borderRight: "1px solid #2D3748",
//     display: "flex",
//     flexDirection: "column",
//     position: "fixed",
//     left: 0,
//     top: 0,
//   },
//   logoArea: {
//     padding: "30px 20px",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     borderBottom: "1px solid #1A243A"
//   },
//   logoCircle: {
//     fontSize: "24px",
//     backgroundColor: "#7D58C1", // Purple accent from ManageUsers1
//     padding: "8px",
//     borderRadius: "10px"
//   },
//   brandName: {
//     color: "#FFF",
//     fontSize: "20px",
//     fontWeight: "bold",
//     margin: 0
//   },
//   navLinks: {
//     flex: 1,
//     padding: "20px 10px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px"
//   },
//   navItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//     padding: "12px 15px",
//     borderRadius: "12px",
//     border: "none",
//     background: "transparent",
//     color: "#A0AEC0",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//     textAlign: "left",
//     fontSize: "16px"
//   },
//   activeItem: {
//     backgroundColor: "#1A243A",
//     color: "#7D58C1", // Active purple from image_1cd883
//     fontWeight: "600"
//   },
//   icon: {
//     fontSize: "20px",
//     minWidth: "25px"
//   },
//   label: {
//     flex: 1
//   },
//   footer: {
//     padding: "20px",
//     borderTop: "1px solid #1A243A"
//   },
//   logoutBtn: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//     width: "100%",
//     padding: "12px",
//     borderRadius: "12px",
//     border: "none",
//     backgroundColor: "transparent",
//     color: "#FF5252", // Red logout for clarity
//     cursor: "pointer",
//     fontWeight: "bold"
//   }
// };

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ active }) {
  const navigate = useNavigate();

  // const menuItems = [
  //   { id: "manage", label: "Manage Users", icon: "👥", path: "/admin/manage-users" },
  //   { id: "buses", label: "Buses", icon: "🚌", path: "/admin/manage-info" },
  //   { id: "add-new", label: "Add New", icon: "➕", path: "/admin/add-user" },
  //   { id: "records", label: "Student Pass", icon: "💳", path: "/student-records" },
  //   { id: "map", label: "Live Map", icon: "📍", path: "/add-user/add-stop" },
  //   { id: "alerts", label: "Alerts", icon: "🔔", path: "/alerts" },
  // ];
const menuItems = [
  { id: "manage", label: "Manage Users", icon: "👥", path: "/admin/manage-users" },
  { id: "buses", label: "Buses", icon: "🚌", path: "/admin/manage-info" },
  { id: "add-new", label: "Add New", icon: "➕", path: "/admin/add-user" },
  { id: "records", label: "Student Pass", icon: "💳", path: "/admin/student-pass" },
  { id: "map", label: "Add Stop", icon: "📍", path: "/admin/add-user/add-stop" },
  { id: "alerts", label: "Alerts", icon: "🔔", path: "/admin/alerts" },
];
  return (
    <div style={sidebarStyles.wrapper}>
      <div style={sidebarStyles.logoArea}>
        <div style={sidebarStyles.logoCircle}>🚌</div>
        <h2 style={sidebarStyles.brandName}>UniBus Admin</h2>
      </div>

      <nav style={sidebarStyles.navLinks}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            style={{ 
              ...sidebarStyles.navItem, 
              ...(active === item.id ? sidebarStyles.activeItem : {}) 
            }}
            onClick={() => navigate(item.path)}
          >
            <span style={sidebarStyles.icon}>{item.icon}</span>
            <span style={sidebarStyles.label}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div style={sidebarStyles.footer}>
        <button style={sidebarStyles.logoutBtn} onClick={() => navigate("/logout")}>
          <span style={sidebarStyles.icon}>🏃</span>
          <span style={sidebarStyles.label}>Logout</span>
        </button>
      </div>
    </div>
  );
}

const sidebarStyles = {
  wrapper: { width: "260px", height: "100vh", backgroundColor: "#0D1117", borderRight: "1px solid #2D3748", display: "flex", flexDirection: "column", position: "fixed", left: 0, top: 0 },
  logoArea: { padding: "30px 20px", display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid #1A243A" },
  logoCircle: { fontSize: "24px", backgroundColor: "#7D58C1", padding: "8px", borderRadius: "10px" },
  brandName: { color: "#FFF", fontSize: "20px", fontWeight: "bold", margin: 0 },
  navLinks: { flex: 1, padding: "20px 10px", display: "flex", flexDirection: "column", gap: "8px" },
  navItem: { display: "flex", alignItems: "center", gap: "15px", padding: "12px 15px", borderRadius: "12px", border: "none", background: "transparent", color: "#A0AEC0", cursor: "pointer", textAlign: "left", fontSize: "16px" },
  activeItem: { backgroundColor: "#1A243A", color: "#7D58C1", fontWeight: "600" },
  icon: { fontSize: "20px", minWidth: "25px" },
  label: { flex: 1 },
  footer: { padding: "20px", borderTop: "1px solid #1A243A" },
  logoutBtn: { display: "flex", alignItems: "center", gap: "15px", width: "100%", padding: "12px", borderRadius: "12px", border: "none", backgroundColor: "transparent", color: "#FF5252", cursor: "pointer", fontWeight: "bold" }
};



