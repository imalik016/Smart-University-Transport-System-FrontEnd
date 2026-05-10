// // // // import { Outlet, Link } from "react-router-dom";

// // // // export default function AdminLayout() {
// // // //   return (
// // // //     <div>
// // // // {/*      <h4 style={{marginLeft:"40px"}}>Admin Panel</h4>
 
// // // //       <nav>
// // // //         <Link to="dashboard">Dashboard | </Link>
// // // //         <Link to="add-bus">Add Bus | </Link>
// // // //         <Link to="manage-routes">Manage Routes | </Link>
// // // //         <Link to="travel-logs">Travel Logs</Link>
// // // //       </nav> */}

// // // //       <hr />

// // // //       <Outlet />
// // // //     </div>
// // // //   );
// // // // }

// // // import React from "react";
// // // import Sidebar from "./Sidebar";

// // // export default function AdminLayout({ children, activeTab }) {
// // //   return (
// // //     <div style={{ display: "flex",width:"100vw", minHeight: "100vh", backgroundColor: "#1A243A" }}>
// // //       {/* Sidebar stays fixed on the left */}
// // //       <Sidebar active={activeTab} />
      
// // //       {/* The dynamic content changes here */}
// // //       <div style={{ flex: 1, marginLeft: "260px", padding: "20px", color: "#FFF" }}>
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React from "react";
// // import { Outlet } from "react-router-dom";
// // import Sidebar from "./Sidebar";

// // export default function AdminLayout() {
// //   return (
// //     <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1A243A" }}>
// //       <Sidebar />
// //       <div style={{ flex: 1, marginLeft: "260px", padding: "20px" }}>
// //         {/* This is where ManageUsers or Dashboard will render */}
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

// export default function AdminLayout() {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1A243A" }}>
//       <Sidebar /> {/* Sidebar is ALWAYS here */}
//       <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
//         <Outlet /> {/* This is where the screens swap! */}
//       </main>
//     </div>
//   );
// }


import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; 

export default function AdminLayout() {
  return (
    <div style={{ 
      display: "flex", 
      height: "100vh", // Lock height to viewport
      width: "100vw", 
      overflow: "hidden", // Prevent the whole page from scrolling
      backgroundColor: "#1A243A" 
    }}>
      {/* SIDEBAR: Fixed width, no shrinking */}
      <div style={{ width: "260px", flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* MAIN CONTENT: This area will scroll internally */}
      <main style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column",
        height: "100%", 
        position: "relative",
        overflowY: "auto", // Only this area scrolls
        padding: "24px"
      }}>
        <Outlet /> 
      </main>
    </div>
  );
}