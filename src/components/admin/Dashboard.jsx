import React from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios"; // Included for project consistency

export default function Dashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Manage\nUsers", icon: "👔", route: "/manage-users" },
    { title: "Manage\nTravel", icon: "🚌", route: "/manage-travel" },
    { title: "Manage\nPass", icon: "🎫", route: "/manage-passes" },
    { title: "Manage\nSchedule", icon: "📆", route: "/manage-schedule" },
  ];

  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <div style={styles.profileContainer}>
        <div style={styles.profileCircle}>
          <span style={styles.profileIcon}>A</span>
        </div>
        <span style={styles.profileText}>Admin</span>
      </div>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerText}>Dashboard</h1>
      </div>

      {/* Dashboard Cards Grid */}
      <div style={styles.cardContainer}>
        {/* We map the items into two rows to maintain your layout */}
        <div style={styles.row}>
          {menuItems.slice(0, 2).map((item, index) => (
            <div key={index} style={styles.card} onClick={() => navigate(item.route)}>
              <span style={styles.cardText}>{item.title}</span>
              <span style={styles.cardIcon}>{item.icon}</span>
            </div>
          ))}
        </div>

        <div style={styles.row}>
          {menuItems.slice(2, 4).map((item, index) => (
            <div key={index} style={styles.card} onClick={() => navigate(item.route)}>
              <span style={styles.cardText}>{item.title}</span>
              <span style={styles.cardIcon}>{item.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh',minWidth:'100vw', backgroundColor: "#1A243A", paddingTop: '40px' },
  profileContainer: { display: 'flex', flexDirection: 'column', alignItems: "flex-end", paddingRight: '20px' },
  profileCircle: { width: '60px', height: '60px', borderRadius: '30px', backgroundColor: "#D1D5DB", display: 'flex', justifyContent: "center", alignItems: "center" },
  profileIcon: { fontSize: '28px', fontWeight: "bold", color: "#1A243A" },
  profileText: { color: "#FFFFFF", fontWeight: "bold", marginTop: '5px' },
  header: { backgroundColor: "#7A60E0", padding: '12px 0', marginTop: '20px', textAlign: 'center' },
  headerText: { color: "#FFFFFF", fontSize: '22px', fontWeight: "bold", margin: 0 },
  cardContainer: { padding: '20px', maxWidth: '600px', margin: '0 auto' },
  row: { display: 'flex', justifyContent: "space-between", marginBottom: '20px' },
  card: { backgroundColor: "#FFFFFF", width: "47%", height: '130px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
  cardText: { color: "#1A243A", fontSize: '16px', fontWeight: "bold", textAlign: "center", whiteSpace: 'pre-line' },
  cardIcon: { fontSize: '24px', marginTop: '8px' }
};







































// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const [adminName, setAdminName] = useState("Admin");

//   useEffect(() => {
//     // Get user data stored during Login
//     const userData = localStorage.getItem("user");
//     if (userData) {
//       const user = JSON.parse(userData);
//       setAdminName(user.name); // Displays actual name from DB
      
//       // Basic security check: if not Admin, kick them out
//       if (user.role !== "Admin") {
//         navigate("/login");
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   // Styles (Kept your original logic, refined for layout)
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     background: "linear-gradient(to right, #323077d8, #062a61d5)",
//     padding: "35px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const headerStyle = {
//     background: "#6f42c1",
//     color: "white",
//     padding: "20px",
//     width: "60%",
//     textAlign: "center",
//     borderRadius: "8px",
//     fontSize: "24px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center"
//   };

//   const panelStyle = {
//     background: "rgba(255, 255, 255, 0.1)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "20px",
//     padding: "40px",
//     width: "60%",
//     display: "flex",
//     justifyContent: "center",
//     boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)",
//     gap: "30px",
//     width: "30%",
//   };

//   const buttonStyle = {
//     background: "#ffffff",
//     borderRadius: "18px",
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     cursor: "pointer",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
//     fontWeight: "600",
//     color: "#333",
    

//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header with Welcome and Logout */}
//       <div style={headerStyle}>
//         <span>Welcome, {adminName}</span>
//         <button 
//           onClick={handleLogout}
//           style={{background: "#dc3545", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer", fontSize: "14px"}}
//         >
//           Logout
//         </button>
//       </div>

//       <div style={panelStyle}>
//         <div style={gridStyle}>
//           {/* Action Cards */}
//           <DashboardCard icon="🛣️" label="Manage Routes" onClick={() => navigate("/admin/manage-routes")} />
//           <DashboardCard icon="🧭" label="Manage Travels" onClick={() => navigate("/admin/manage-travels")} />
//           <DashboardCard icon="🎫" label="Manage Pass" onClick={() => navigate("/admin/manage-pass")} />
//           <DashboardCard icon="📅" label="Manage Schedule" onClick={() => navigate("/admin/manage-schedule")} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Card Component for cleaner code
// function DashboardCard({ icon, label, onClick }) {
//   return (
//     <div 
//       style={{
//         background: "#f1f1f1",
//         borderRadius: "18px",
//         height: "120px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         cursor: "pointer",
//         boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//         fontWeight: "600",
//         color: "#333",
//       }}
//       onClick={onClick}
//       onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
//       onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
//     >
//       <div style={{fontSize: "32px", marginBottom: "10px"}}>{icon}</div>
//       {label}
//     </div>
//   );
// }



































































// // import { useNavigate } from "react-router-dom";

// // export default function AdminDashboard() {
// //   const navigate = useNavigate();

// //   // Styles
// //   const containerStyle = {
// //     minHeight: "100vh",
// //     // width: "100vw",
// //     background: "linear-gradient(to right, #323077d8, #062a61d5)",
// //     padding: "35px",
// //     boxSizing: "border-box",
// //     marginLeft:"400px",
// //   };

// //   const headerStyle = {
// //     background: "#6f42c1",
// //     color: "white",
// //     padding: "15px",
// //     textAlign: "center",
// //     borderRadius: "8px",
// //     fontSize: "22px",
// //     fontWeight: "bold",
// //     marginBottom: "40px",
// //   };

// //   const panelStyle = {
// //     background: "linear-gradient(to bottom, #4748587e, #4a515aa4)",
// //     borderRadius: "20px",
// //     padding: "40px",
// //     width: "75%",
// //     display: "flex",
// //     justifyContent: "center",
// //   };

// //   const gridStyle = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(2, 1fr)",
// //     gap: "30px",
// //     justifyItems: "center",
// //   };

// //   const buttonStyle = {
// //     background: "#f1f1f1",
// //     borderRadius: "18px",
// //     width: "140px",
// //     height: "100px",
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     cursor: "pointer",
// //     boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
// //     fontWeight: "600",
// //     color: "#333",
// //     fontSize: "16px",
// //   };

// //   const iconStyle = {
// //     fontSize: "32px",
// //     marginBottom: "10px",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       {/* Header */}
// //       <div style={headerStyle}>Admin Dashboard</div>

// //       {/* Center Panel */}
// //       <div style={panelStyle}>
// //         <div style={gridStyle}>
// //           {/* Add Bus */}
// //           {/* <div
// //             style={buttonStyle}
// //             onClick={() => navigate("/admin/add-bus")}
// //           >
// //             <div style={iconStyle}>🚌</div>
// //             Add Bus
// //           </div> */}

// //           {/* Manage Routes */}
// //           <div
// //             style={buttonStyle}
// //             onClick={() => navigate("/admin/manage-routes")}
// //           >
// //             <div style={iconStyle}>🛣️</div>
// //             Manage Routes
// //           </div>

// //           {/* Manage Travels */}
// //           <div
// //             style={buttonStyle}
// //             onClick={() => navigate("/admin/manage-travels")}
// //           >
// //             <div style={iconStyle}>🧭</div>
// //             Manage Travels
// //           </div>

// //           {/* Manage Pass */}
// //           <div
// //             style={buttonStyle}
// //             onClick={() => navigate("/admin/manage-pass")}
// //           >
// //             <div style={iconStyle}>🎫</div>
// //             Manage Pass
// //           </div>

// //           {/* Manage Schedule */}
// //           <div
// //             style={buttonStyle}
// //             onClick={() => navigate("/admin/manage-schedule")}
// //           >
// //             <div style={iconStyle}>📅</div>
// //             Manage Schedule
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





















// // // // function AdminDashboard() {

// // // //   const containerStyle = {
// // // //     minHeight: "100vh",
// // // //     width:"100vw",
// // // //     background: "linear-gradient(to right, #323077d8, #062a61d5)",
// // // //     // padding: "40px 80px",
// // // //     margin:"10px",
// // // //   };

// // // //   const headerStyle = {
// // // //     background: "#6f42c1",
// // // //     color: "white",
// // // //     padding: "15px",
// // // //     textAlign: "center",
// // // //     borderRadius: "8px",
// // // //     fontSize: "22px",
// // // //     fontWeight: "bold",
// // // //     marginBottom: "40px",
// // // //   };

// // // //   const panelStyle = {
// // // //     background: "linear-gradient(to bottom, #4748587e, #4a515aa4)",
// // // //     borderRadius: "20px",
// // // //     padding: "40px",
// // // //     width: "93%",
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //   };

// // // //   const gridStyle = {
// // // //     display: "grid",
// // // //     gridTemplateColumns: "repeat(2, 1fr)",
// // // //     gap: "30px",
// // // //     justifyItems: "center",
// // // //   };

// // // //   const buttonStyle = {
// // // //     background: "#f1f1f1",
// // // //     borderRadius: "18px",
// // // //     width: "180px",
// // // //     height: "140px",
// // // //     display: "flex",
// // // //     flexDirection: "column",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     cursor: "pointer",
// // // //     boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
// // // //     fontWeight: "600",
// // // //     color: "#333",
// // // //   };

// // // //   const iconStyle = {
// // // //     fontSize: "32px",
// // // //     marginBottom: "10px",
// // // //   };

// // // //   return (
// // // //     <div style={containerStyle}>
// // // //       {/* Header */}
// // // //       <div style={headerStyle}>Admin Dashboard</div>

// // // //       {/* Center Panel */}
// // // //       <div style={panelStyle}>
// // // //         <div style={gridStyle}>

// // // //           <div style={buttonStyle}>
// // // //             <div style={iconStyle}>👥</div>
// // // //             Manage Users
// // // //           </div>

// // // //           <div style={buttonStyle}>
// // // //             <div style={iconStyle}>🚌</div>
// // // //             Manage Travels
// // // //           </div>

// // // //           <div style={buttonStyle}>
// // // //             <div style={iconStyle}>🎫</div>
// // // //             Manage Pass
// // // //           </div>

// // // //           <div style={buttonStyle}>
// // // //             <div style={iconStyle}>📅</div>
// // // //             Manage Schedule
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AdminDashboard;






// // // import { useNavigate } from "react-router-dom";

// // // export default function AdminDashboard() {

// // //   const navigate = useNavigate();

// // //   return (
// // //     <div style={{ padding: "30px" }}>
// // //       <h2>Admin Dashboard</h2>

// // //       <button
// // //         onClick={() => navigate("/admin/add-bus")}
// // //         style={{ marginRight: "10px" }}
// // //       >
// // //         Add Bus
// // //       </button>

// // //       <button
// // //         onClick={() => navigate("/admin/manage-routes")}
// // //       >
// // //         Manage Routes
// // //       </button>
// // //     </div>
// // //   );
// // // }
