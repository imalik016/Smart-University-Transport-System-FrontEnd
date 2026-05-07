





// import React from "react";

// function TeacherReportIssueScreen() {
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#1ABC9C",
//     boxSizing: "border-box",
//   };

//   /* Header */
//   const headerStyle = {
//     paddingTop: "40px",
//     padding: "0 20px",
//     display: "flex",
//     alignItems: "center",
//   };

//   const profileContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "row",
//   };

//   const profileCircleStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     backgroundColor: "#FFFFFF",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: "10px",
//   };

//   const profileTextStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#000",
//   };

//   /* Navigation Bar */
//   const navBarStyle = {
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "#000000",
//     margin: "15px 20px 0 20px",
//     borderRadius: "12px",
//     justifyContent: "space-around",
//     padding: "10px 0",
//   };

//   const navTabStyle = {
//     color: "#FFFFFF",
//     fontSize: "14px",
//     fontWeight: "bold",
//     padding: "6px 10px",
//     borderRadius: "12px",
//   };

//   const activeTabStyle = {
//     backgroundColor: "#1ABC9C",
//   };

//   /* Content */
//   const contentStyle = {
//     padding: "20px",
//   };

//   const sectionTitleStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#000000",
//     textAlign: "center",
//     margin: "15px 0",
//   };

//   /* Cards */
//   const cardStyle = {
//     backgroundColor: "#E6E6E6",
//     borderRadius: "15px",
//     padding: "15px",
//     marginBottom: "20px",
//   };

//   const cardLabelStyle = {
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#000000",
//     marginBottom: "8px",
//   };

//   const dropdownStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "12px",
//   };

//   const dropdownTextStyle = {
//     fontSize: "14px",
//     color: "#555555",
//   };

//   const textAreaStyle = {
//     width: "100%",
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "12px",
//     height: "100px",
//     fontSize: "14px",
//     border: "none",
//     outline: "none",
//     resize: "none",
//   };

//   /* Submit Button */
//   const submitButtonStyle = {
//     backgroundColor: "#2C3E50",
//     borderRadius: "12px",
//     marginTop: "10px",
//     padding: "12px 0",
//     textAlign: "center",
//     cursor: "pointer",
//   };

//   const submitTextStyle = {
//     fontSize: "16px",
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header */}
//       <div style={headerStyle}>
//         <div style={profileContainerStyle}>
//           <div style={profileCircleStyle}>👤</div>
//           <div style={profileTextStyle}>Teacher</div>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <div style={navBarStyle}>
//         <div style={navTabStyle}>Alerts</div>
//         <div style={navTabStyle}>Student Status</div>
//         <div style={{ ...navTabStyle, ...activeTabStyle }}>Report Issue</div>
//       </div>

//       <div style={contentStyle}>
//         {/* Section Title */}
//         <div style={sectionTitleStyle}>Report a Transport Issue</div>

//         {/* Issue Type Card */}
//         <div style={cardStyle}>
//           <div style={cardLabelStyle}>Issue Type</div>
//           <div style={dropdownStyle}>
//             <div style={dropdownTextStyle}>Bus Missed ▼</div>
//           </div>
//         </div>

//         {/* Description Card */}
//         <div style={cardStyle}>
//           <div style={cardLabelStyle}>Description</div>
//           <textarea
//             style={textAreaStyle}
//             placeholder="Write here"
//           />
//         </div>

//         {/* Submit Button */}
//         <div style={submitButtonStyle}>
//           <div style={submitTextStyle}>Submit Report</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherReportIssueScreen;

import React from 'react';

function EmergencyAlertScreen({ alertData }) {
  // Mock data for demonstration
  const alert = alertData || {
    route: "University Circular Route",
    issue: "Bus technical fault/Breakdown",
    time: "11:24 AM"
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>👤</div>
        <h3 style={styles.title}>Emergency Bus Alert</h3>
        <p style={styles.details}>
          <strong>Route:</strong> {alert.route}<br/>
          <strong>Issue:</strong> {alert.issue}<br/>
          <strong>Expect significant delays.</strong>
        </p>
        <p style={styles.time}>Received: {alert.time}</p>
        <button style={styles.acknowledgeButton} onClick={() => window.alert("Acknowledged")}>
          Acknowledge
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#26A69A', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
  card: { backgroundColor: '#EEE', width: '100%', maxWidth: '400px', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  icon: { fontSize: '40px', marginBottom: '10px' },
  title: { fontSize: '20px', marginBottom: '20px' },
  details: { textAlign: 'left', marginBottom: '20px', lineHeight: '1.6' },
  time: { fontSize: '14px', color: '#666', marginBottom: '20px' },
  acknowledgeButton: { padding: '12px 40px', backgroundColor: '#1A243A', color: '#FFF', borderRadius: '20px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }
};

export default EmergencyAlertScreen;