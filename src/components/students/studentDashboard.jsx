// // import React, { useState } from "react";
// // import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// // import DataService from "../../services/axios"; // Ensure your axios service is imported
// // import { useNavigate } from "react-router-dom";

// // const mapContainerStyle = { width: "100%", height: "350px", borderRadius: "20px", marginBottom: "20px" };
// // const center = { lat: 33.6844, lng: 73.0479 }; // Default to Rawalpindi

// // function StudentDashboardScreen() {
// //   const [stopName, setStopName] = useState("");
// //   const [coords, setCoords] = useState({ lat: null, lng: null });
// //   const navigate = useNavigate();

// //   const { isLoaded } = useJsApiLoader({
// //     googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
// //     //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// //   });

// //   const onMapClick = (event) => {
// //     setCoords({
// //       lat: event.latLng.lat(),
// //       lng: event.latLng.lng()
// //     });
// //   };

// //   const handleSave = async () => {
// //     if (!stopName || !coords.lat) {
// //       alert("Please enter a name and click a location on the map.");
// //       return;
// //     }

// //     try {
// //       await DataService.post("AdminStop/AddStop", {
// //         stop_name: stopName,
// //         latitude: coords.lat,
// //         longitude: coords.lng
// //       });
// //       alert("Stop added successfully!");
// //       navigate("/admin/dashboard");
// //     } catch (error) {
// //       console.error(error);
// //       alert("Failed to save stop.");
// //     }
// //   };

// //   if (!isLoaded) return <div>Loading Map...</div>;

// //   return (
// //     <div style={{ padding: "20px", backgroundColor: "#1A243A",minHeight:"100vh", minwidth: "100vw" }}>
// //       <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13} onClick={onMapClick}>
// //         {coords.lat && <Marker position={{ lat: coords.lat, lng: coords.lng }} />}
// //       </GoogleMap>

// //       <div style={{ backgroundColor: "#E6E6E6", padding: "20px", borderRadius: "20px" }}>
// //         <h3 style={{ marginBottom: "15px" }}>Add New Stop</h3>
        
// //         <input 
// //           style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px" }} 
// //           placeholder="Stop Name" 
// //           value={stopName} 
// //           onChange={(e) => setStopName(e.target.value)} 
// //         />
        
// //         <div style={{ marginBottom: "15px" }}>
// //           <p>Lat: {coords.lat ? coords.lat.toFixed(6) : "Click map"}</p>
// //           <p>Lng: {coords.lng ? coords.lng.toFixed(6) : "Click map"}</p>
// //         </div>

// //         <button 
// //           onClick={handleSave} 
// //           style={{ width: "100%", padding: "15px", backgroundColor: "#7A60E0", color: "#FFF", border: "none", borderRadius: "10px" }}
// //         >
// //           Save Stop
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default StudentDashboardScreen;



// import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import DataService from "../../services/axios"; 
// import { useNavigate } from "react-router-dom";

// // Desktop Layout Styles
// const containerStyle = { 
//   display: "flex", 
//   flexDirection: "row", 
//   height: "100vh", 
//   width: "100vw", 
//   overflow: "hidden" 
// };

// const mapContainerStyle = { 
//   flex: "2", 
//   height: "100%", 
//   width: "100%" 
// };

// const sidebarStyle = { 
//   flex: "1", 
//   padding: "40px", 
//   backgroundColor: "#633a7aef", 
//   borderLeft: "1px solid #ddd", 
//   display: "flex", 
//   flexDirection: "column", 
//   gap: "20px" 
// };

// const center = { lat: 33.6844, lng: 73.0479 };

// function StudentDashboardScreen() {
//   const [stopName, setStopName] = useState("");
//   const [coords, setCoords] = useState({ lat: null, lng: null });
//   const navigate = useNavigate();

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
//   });

//   // const onMapClick = (event) => {
//   //   setCoords({
//   //     lat: event.latLng.lat(),
//   //     lng: event.latLng.lng()
//   //   });
//   // };

//   const onMapClick = (event) => {
//   // Defensive check for latLng
//   if (!event || !event.latLng) {
//     console.warn("Click event does not contain latLng:", event);
//     return;
//   }

//   // Extract coordinates using the Google Maps API methods
//   const newLat = typeof event.latLng.lat === 'function' ? event.latLng.lat() : event.latLng.lat;
//   const newLng = typeof event.latLng.lng === 'function' ? event.latLng.lng() : event.latLng.lng;

//   setCoords({
//     lat: newLat,
//     lng: newLng
//   });
// };

//   const handleSave = async () => {
//     if (!stopName || !coords.lat) {
//       alert("Please enter a name and click a location on the map.");
//       return;
//     }

//     try {
//       await DataService.post("AdminStop/AddStop", {
//         stop_name: stopName,
//         latitude: coords.lat,
//         longitude: coords.lng
//       });
//       alert("Stop added successfully!");
//       navigate("/admin/dashboard");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to save stop.");
//     }
//   };

//   if (!isLoaded) return <div style={{ padding: "20px" }}>Loading Map...</div>;

//   return (
//     <div style={containerStyle}>
//       {/* Map Section */}
//       <div style={mapContainerStyle}>
//         <GoogleMap 
//           mapContainerStyle={{ width: "100%", height: "100%" }} 
//           center={center} 
//           zoom={13} 
//           onClick={onMapClick}
//         >
//           {coords.lat && <Marker position={{ lat: coords.lat, lng: coords.lng }} />}
//         </GoogleMap>
//       </div>

//       {/* Control Panel Section */}
//       <div style={sidebarStyle}>
//         <h2 style={{ fontSize: "24px", color: "#c2bbbb", marginBottom: "10px" }}>Add New Stop</h2>
//         <p style={{ color: "#dfdddd" }}>Select a location on the map to get coordinates.</p>
        
//         <div style={{ marginTop: "20px" }}>
//           <label style={{ fontWeight: "600", display: "block", marginBottom: "8px" }}>Stop Name</label>
//           <input 
//             style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #cccccc9d" }} 
//             placeholder="e.g. Main Gate" 
//             value={stopName} 
//             onChange={(e) => setStopName(e.target.value)} 
//           />
//         </div>

//         <div style={{ backgroundColor: "#e9e1e1", color:"#0e0d0dd3", padding: "15px", borderRadius: "8px", border: "1px solid #eeeeee07" }}>
//           <p style={{ margin: "5px 0" }}><strong>Latitude:</strong> {coords.lat ? coords.lat.toFixed(6) : "Not selected"}</p>
//           <p style={{ margin: "5px 0" }}><strong>Longitude:</strong> {coords.lng ? coords.lng.toFixed(6) : "Not selected"}</p>
//         </div>

//         <button 
//           onClick={handleSave} 
//           style={{ 
//             marginTop: "auto", 
//             padding: "15px", 
//             backgroundColor: "#5a25eb", 
//             color: "#ffffff96", 
//             border: "none", 
//             borderRadius: "6px", 
//             fontSize: "16px",
//             cursor: "pointer" 
//           }}
//         >
//           Save Stop to Database
//         </button>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboardScreen;
































// // import React from "react";

// // function StudentDashboardScreen() {

// //   const containerStyle = {
// //     minHeight: "100vh",
// //     //width: "100vw",
// //     backgroundColor: "#5DADE2",
// //     paddingTop: "40px",
// //     boxSizing: "border-box",
// //   };

// //   /* Header */
// //   const headerStyle = {
// //     display: "flex",
// //     alignItems: "center",
// //     padding: "0 20px",
// //     marginBottom: "10px",
// //   };

// //   const studentIconStyle = {
// //     width: "38px",
// //     height: "38px",
// //     borderRadius: "50%",
// //     backgroundColor: "#AED6F1",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginRight: "8px",
// //     fontSize: "16px",
// //   };

// //   const studentTextStyle = {
// //     fontWeight: "bold",
// //     fontSize: "16px",
// //     color: "#000000",
// //   };

// //   /* Navigation Bar */
// //   const navBarStyle = {
// //     display: "flex",
// //     justifyContent: "space-around",
// //     backgroundColor: "#2E4053",
// //     padding: "10px 0",
// //     marginBottom: "10px",
// //   };

// //   const navTabStyle = {
// //     color: "#FFFFFF",
// //     fontWeight: "bold",
// //     padding: "5px 10px",
// //     borderRadius: "12px",
// //     cursor: "pointer",
// //   };

// //   const activeTabStyle = {
// //     backgroundColor: "#5DADE2",
// //   };

// //   /* Main Content */
// //   const scrollContainerStyle = {
// //     padding: "0 20px 20px 20px",
// //   };

// //   const trackingSectionStyle = {
// //     backgroundColor: "#E6E6E6",
// //     borderRadius: "15px",
// //     padding: "15px",
// //     textAlign: "center",
// //   };

// //   const sectionTitleStyle = {
// //     fontWeight: "bold",
// //     fontSize: "16px",
// //     color: "#000000",
// //     marginBottom: "10px",
// //   };

// //   const mapContainerStyle = {
// //     width: "100%",
// //     height: "200px",
// //     backgroundColor: "#D5DBDB",
// //     borderRadius: "12px",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: "10px",
// //   };

// //   const mapPlaceholderStyle = {
// //     color: "#555555",
// //     fontStyle: "italic",
// //   };

// //   const statusBarStyle = {
// //     width: "100%",
// //     backgroundColor: "#3498DB",
// //     padding: "10px 0",
// //     borderRadius: "8px",
// //     textAlign: "center",
// //   };

// //   const statusTextStyle = {
// //     fontWeight: "bold",
// //     color: "#000000",
// //   };

// //   return (
// //     <div style={containerStyle}>

// //       {/* Header */}
// //       <div style={headerStyle}>
// //         <div style={studentIconStyle}>👤</div>
// //         <div style={studentTextStyle}>Student</div>
// //       </div>

// //       {/* Navigation Bar */}
// //       <div style={navBarStyle}>
// //         <div style={{ ...navTabStyle, ...activeTabStyle }}>Dashboard</div>
// //         <div style={navTabStyle}>Alerts</div>
// //         <div style={navTabStyle}>My Pass</div>
// //       </div>

// //       {/* Main Content */}
// //       <div style={scrollContainerStyle}>

// //         {/* Live Bus Tracking Section */}
// //         <div style={trackingSectionStyle}>

// //           <div style={sectionTitleStyle}>Live Bus Tracking</div>

// //           {/* Map Placeholder */}
// //           <div style={mapContainerStyle}>
// //             <div style={mapPlaceholderStyle}>[Map Placeholder]</div>
// //           </div>

// //           {/* Status Bar */}
// //           <div style={statusBarStyle}>
// //             <div style={statusTextStyle}>
// //               Bus# 12 | Status: Arriving in 5 mins
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default StudentDashboardScreen;

import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./bottomNavbar"; // Shared navigation component

export default function BusAttendance() {
  const navigate = useNavigate();

  // Mock data representing the logged-in student session
  const student = { name: "Qasim Mumtaz", regNo: "2001-ARID-0380" };

  return (
    <div style={styles.container}>
      {/* Student Header */}
      <div style={styles.header}>
        <p style={styles.headerText}>Logged in: {student.name}</p>
        <p style={styles.headerText}>Reg No: {student.regNo}</p>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>Bus Attendance</h1>
        <p style={styles.subtitle}>Choose action then scan</p>

        <button 
          style={styles.boardingBtn} 
          onClick={() => navigate("/scan", { state: { type: "BOARD" } })}
        >
          🚌 Boarding
        </button>

        <button 
          style={styles.offboardingBtn} 
          onClick={() => navigate("/scan", { state: { type: "OFFBOARD" } })}
        >
          🚶 Offboarding
        </button>
      </div>

      <Sidebar active="attendance" />
    </div>
  );
}

const styles = {
  container: { height: '100vh',width:'100vw', backgroundColor: "#1A243A", color: "#FFF", display: 'flex', flexDirection: 'column' },
  header: { backgroundColor: "#0D1117", padding: "15px", textAlign: "center" },
  headerText: { color: "#00FF00", fontSize: "14px", fontWeight: "bold", margin: "2px 0" },
  content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: "20px" },
  title: { fontSize: "32px", fontWeight: "bold", marginBottom: "10px" },
  subtitle: { fontSize: "18px", opacity: 0.8, marginBottom: "40px" },
  boardingBtn: { width: "100%", height: "70px", backgroundColor: "#4CAF50", borderRadius: "15px", fontSize: "22px", color: "#FFF", border: "none", marginBottom: "20px", fontWeight: "bold" },
  offboardingBtn: { width: "100%", height: "70px", backgroundColor: "#FF5252", borderRadius: "15px", fontSize: "22px", color: "#FFF", border: "none", fontWeight: "bold" }
};