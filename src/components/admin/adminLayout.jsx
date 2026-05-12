// // // // // // import { Outlet, Link } from "react-router-dom";

// // // // // // export default function AdminLayout() {
// // // // // //   return (
// // // // // //     <div>
// // // // // // {/*      <h4 style={{marginLeft:"40px"}}>Admin Panel</h4>
 
// // // // // //       <nav>
// // // // // //         <Link to="dashboard">Dashboard | </Link>
// // // // // //         <Link to="add-bus">Add Bus | </Link>
// // // // // //         <Link to="manage-routes">Manage Routes | </Link>
// // // // // //         <Link to="travel-logs">Travel Logs</Link>
// // // // // //       </nav> */}

// // // // // //       <hr />

// // // // // //       <Outlet />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React from "react";
// // // // // import Sidebar from "./Sidebar";

// // // // // export default function AdminLayout({ children, activeTab }) {
// // // // //   return (
// // // // //     <div style={{ display: "flex",width:"100vw", minHeight: "100vh", backgroundColor: "#1A243A" }}>
// // // // //       {/* Sidebar stays fixed on the left */}
// // // // //       <Sidebar active={activeTab} />
      
// // // // //       {/* The dynamic content changes here */}
// // // // //       <div style={{ flex: 1, marginLeft: "260px", padding: "20px", color: "#FFF" }}>
// // // // //         {children}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React from "react";
// // // // import { Outlet } from "react-router-dom";
// // // // import Sidebar from "./Sidebar";

// // // // export default function AdminLayout() {
// // // //   return (
// // // //     <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1A243A" }}>
// // // //       <Sidebar />
// // // //       <div style={{ flex: 1, marginLeft: "260px", padding: "20px" }}>
// // // //         {/* This is where ManageUsers or Dashboard will render */}
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import React from "react";
// // // import { Outlet } from "react-router-dom";
// // // import Sidebar from "./Sidebar";

// // // export default function AdminLayout() {
// // //   return (
// // //     <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1A243A" }}>
// // //       <Sidebar /> {/* Sidebar is ALWAYS here */}
// // //       <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
// // //         <Outlet /> {/* This is where the screens swap! */}
// // //       </main>
// // //     </div>
// // //   );
// // // }


// // import React from "react";
// // import { Outlet } from "react-router-dom";
// // import Sidebar from "./Sidebar"; 

// // export default function AdminLayout() {
// //   return (
// //     <div style={{ 
// //       display: "flex", 
// //       height: "100vh", // Lock height to viewport
// //       width: "100vw", 
// //       overflow: "hidden", // Prevent the whole page from scrolling
// //       backgroundColor: "#1A243A" 
// //     }}>
// //       {/* SIDEBAR: Fixed width, no shrinking */}
// //       <div style={{ width: "260px", flexShrink: 0 }}>
// //         <Sidebar />
// //       </div>

// //       {/* MAIN CONTENT: This area will scroll internally */}
// //       <main style={{ 
// //         flex: 1, 
// //         display: "flex", 
// //         flexDirection: "column",
// //         height: "100%", 
// //         position: "relative",
// //         overflowY: "auto", // Only this area scrolls
// //         padding: "24px"
// //       }}>
// //         <Outlet /> 
// //       </main>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar"; 

// export default function AdminLayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      
//       {/* SIDEBAR: Width changes or it translates based on state */}
//       <div style={{ 
//         width: isSidebarOpen ? "260px" : "0px", 
//         transition: "width 0.3s ease", // Smooth sliding effect
//         overflow: "hidden",
//         flexShrink: 0,
//         backgroundColor: "#1A243A"
//       }}>
//         <Sidebar />
//       </div>

//       {/* MAIN CONTENT AREA */}
//       <main style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", overflowY: "auto" }}>
        
//         {/* TOP BAR / TOGGLE BUTTON */}
//         <header style={{ padding: "10px", backgroundColor: "#1A243A", display: "flex", alignItems: "center" }}>
//           <button 
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             style={{
//               padding: "8px 12px",
//               backgroundColor: "#7A60E0",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer"
//             }}
//           >
//             {isSidebarOpen ? "◀ Hide Menu" : "▶ Show Menu"}
//           </button>
//         </header>

//         <div style={{ padding: "20px", flex: 1 }}>
//           <Outlet /> 
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; 

export default function AdminLayout() {
  // Mobile view usually starts with sidebar closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1A243A" }}>
      
      {/* Sidebar Container */}
      <div style={{ 
        width: isSidebarOpen ? "210px" : "0px", 
        transition: "0.3s",
        zIndex: 1000,
        position: "relative" 
      }}>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <main style={{ 
        flex: 1, 
        transition: "0.3s",
        display: "flex", 
        flexDirection: "column",
        width: "100%"
      }}>
        <header style={{ 
          padding: "15px", 
          backgroundColor: "#0D1117", 
          display: "flex", 
          alignItems: "center",
          borderBottom: "1px solid #2D3748" 
        }}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              padding: "10px",
              backgroundColor: "#7D58C1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              zIndex: 1100
            }}
          >
            {isSidebarOpen ? "✕ Close" : "☰ Menu"}
          </button>
        </header>

        <div style={{ padding: "20px" }}>
          <Outlet /> 
        </div>
      </main>
    </div>
  );
}