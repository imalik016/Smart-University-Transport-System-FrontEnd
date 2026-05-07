// import React from "react";

// function TeacherAlertsScreen() {
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

//   /* Scroll Content */
//   const contentStyle = {
//     padding: "20px",
//   };

//   /* Card Styles */
//   const cardStyle = {
//     backgroundColor: "#E6E6E6",
//     borderRadius: "15px",
//     padding: "15px",
//     marginBottom: "15px",
//   };

//   const cardTitleStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#000000",
//     marginBottom: "6px",
//   };

//   const cardDetailsStyle = {
//     fontSize: "14px",
//     color: "#000000",
//     marginBottom: "4px",
//   };

//   /* Button */
//   const actionButtonStyle = {
//     backgroundColor: "#2E2E2E",
//     borderRadius: "12px",
//     padding: "10px 0",
//     textAlign: "center",
//     marginTop: "10px",
//     cursor: "pointer",
//   };

//   const actionTextStyle = {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: "14px",
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
//         <div style={{ ...navTabStyle, ...activeTabStyle }}>Alerts</div>
//         <div style={navTabStyle}>Student Status</div>
//         <div style={navTabStyle}>Report Issue</div>
//       </div>

//       {/* Alerts List */}
//       <div style={contentStyle}>
//         {/* Alert 1 */}
//         <div style={cardStyle}>
//           <div style={cardTitleStyle}>Bus 08 Delayed 1 hour</div>
//           <div style={cardDetailsStyle}>
//             Affects: CS101 Students | Route: B
//           </div>
//           <div style={cardDetailsStyle}>Received: 8:20 AM</div>

//           <div style={actionButtonStyle}>
//             <div style={actionTextStyle}>Acknowledge</div>
//           </div>
//         </div>

//         {/* Alert 2 */}
//         <div style={cardStyle}>
//           <div style={cardTitleStyle}>
//             Student Hamza Arrived Late
//           </div>

//           <div style={actionButtonStyle}>
//             <div style={actionTextStyle}>Acknowledge</div>
//           </div>
//         </div>

//         {/* Alert 3 */}
//         <div style={cardStyle}>
//           <div style={cardTitleStyle}>Bus 05 On Time</div>
//           <div style={cardDetailsStyle}>
//             Affects: CS102 Students | Route: A
//           </div>
//           <div style={cardDetailsStyle}>Received: 7:50 AM</div>

//           <div style={actionButtonStyle}>
//             <div style={actionTextStyle}>Acknowledge</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherAlertsScreen;



import React, { useState } from "react";

function SendAlertScreen() {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState("");
  const [alertType, setAlertType] = useState("Bus Delay");
  const [recipient, setRecipient] = useState("Parents");

  const handleSendAlert = async () => {
    // Integration with your backend API
    console.log("Sending:", { alertType, details, recipient });
    setLoading(true);
    // Add your API call here (e.g., DataService.post)
    setTimeout(() => {
      setLoading(false);
      alert("Alert sent successfully!");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.screenTitle}>Driver Dashboard</h2>
        <div style={styles.profileContainer}>
          <div style={styles.profileCircle}>
            <span>👤</span>
          </div>
          <p style={styles.profileText}>Driver</p>
        </div>
      </div>

      {/* Secondary Header Bar */}
      <div style={styles.secondaryHeader}>
        <h3 style={styles.secondaryHeaderText}>Send An Alert</h3>
      </div>

      {/* Form Card */}
      <div style={styles.scrollWrapper}>
        <div style={styles.formCard}>
          <label style={styles.label}>Alert Type</label>
          <select 
            style={styles.dropdown} 
            value={alertType} 
            onChange={(e) => setAlertType(e.target.value)}
          >
            <option>Bus Delay</option>
            <option>Emergency</option>
          </select>

          <label style={styles.label}>Enter Details</label>
          <textarea
            style={{ ...styles.input, height: "100px" }}
            placeholder="Type your alert here"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <label style={styles.label}>To</label>
          <select 
            style={styles.dropdown}
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)}
          >
            <option>Parents</option>
            <option>Students</option>
          </select>

          <button 
            style={{ ...styles.sendButton, opacity: loading ? 0.7 : 1 }} 
            onClick={handleSendAlert}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Alert"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    minWidth:"80vw",
    width:"80%",
    backgroundColor: "#3B5998",
    paddingBottom: "100px"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  screenTitle: {
    color: "#FFFFFF",
    margin: 0,
  },
  profileContainer: {
    textAlign: "center",
  },
  profileCircle: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  },
  profileText: {
    color: "#FFFFFF",
    fontSize: "12px",
    margin: "4px 0 0 0",
    fontWeight: "bold",
  },
  secondaryHeader: {
    backgroundColor: "#2E2E2E",
    margin: "15px 20px",
    borderRadius: "12px",
    padding: "12px",
    textAlign: "center",
  },
  secondaryHeaderText: {
    color: "#FFFFFF",
    margin: 0,
    fontSize: "16px",
  },
  scrollWrapper: {
    padding: "20px",
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    padding: "20px",
  },
  label: {
    fontWeight: "bold",
    fontSize: "14px",
    display: "block",
    marginBottom: "6px",
    marginTop: "10px",
  },
  input: {
    width: "60%",
    boxSizing: "border-box", // Important for padding
    backgroundColor: "#F0F0F0",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    marginBottom: "14px",
  },
  dropdown: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: "10px",
    padding: "14px",
    marginBottom: "14px",
    border: "none",
    fontSize: "16px",
  },
  sendButton: {
    width: "100%",
    backgroundColor: "#2E2E2E",
    borderRadius: "12px",
    padding: "14px",
    border: "none",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default SendAlertScreen;