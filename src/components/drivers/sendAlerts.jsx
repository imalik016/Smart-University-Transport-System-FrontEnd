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

// import React from "react";

// function SendAlertScreen() {
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#3B5998",
//     boxSizing: "border-box",
//   };

//   /* Header */
//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: "20px",
//     padding: "20px",
//   };

//   const profileContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const profileCircleStyle = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     backgroundColor: "#E5E7EB",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const profileTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//     fontWeight: "bold",
//   };

//   /* Secondary Header */
//   const secondaryHeaderStyle = {
//     backgroundColor: "#2E2E2E",
//     margin: "15px 20px 0 20px",
//     borderRadius: "12px",
//     padding: "12px 0",
//     textAlign: "center",
//   };

//   const secondaryHeaderTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "16px",
//     fontWeight: "bold",
//   };

//   /* Form Card */
//   const formCardStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "15px",
//     padding: "20px",
//     margin: "20px 20px 0 20px",
//   };

//   const labelStyle = {
//     fontWeight: "bold",
//     fontSize: "14px",
//     color: "#000",
//     marginBottom: "6px",
//     marginTop: "10px",
//   };

//   const inputStyle = {
//     backgroundColor: "#F0F0F0",
//     borderRadius: "10px",
//     padding: "14px",
//     fontSize: "16px",
//     color: "#000",
//     marginBottom: "14px",
//     border: "none",
//     outline: "none",
//     width: "100%",
//   };

//   const dropdownStyle = {
//     backgroundColor: "#F0F0F0",
//     borderRadius: "10px",
//     padding: "14px",
//     marginBottom: "14px",
//   };

//   const dropdownTextStyle = {
//     fontSize: "16px",
//     color: "#555",
//   };

//   /* Send Button */
//   const sendButtonStyle = {
//     backgroundColor: "#2E2E2E",
//     borderRadius: "12px",
//     padding: "14px 0",
//     textAlign: "center",
//     marginTop: "10px",
//     cursor: "pointer",
//   };

//   const sendButtonTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "16px",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header */}
//       <div style={headerStyle}>
//         <div></div>

//         <div style={profileContainerStyle}>
//           <div style={profileCircleStyle}>👤</div>
//           <div style={profileTextStyle}>Driver</div>
//         </div>
//       </div>

//       {/* Secondary Header Bar */}
//       <div style={secondaryHeaderStyle}>
//         <div style={secondaryHeaderTextStyle}>Send An Alert</div>
//       </div>

//       {/* Form Card */}
//       <div style={formCardStyle}>
//         {/* Alert Type */}
//         <div style={labelStyle}>Alert Type</div>
//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Bus Delay ▼</div>
//         </div>

//         {/* Enter Details */}
//         <div style={labelStyle}>Enter Details</div>
//         <textarea
//           style={{ ...inputStyle, height: "100px", resize: "none" }}
//           placeholder="Type your alert here"
//         />

//         {/* To */}
//         <div style={labelStyle}>To</div>
//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Parents ▼</div>
//         </div>

//         {/* Send Alert Button */}
//         <div style={sendButtonStyle}>
//           <div style={sendButtonTextStyle}>Send Alert</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SendAlertScreen;

