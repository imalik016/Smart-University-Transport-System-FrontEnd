import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNotificationScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    recipient: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Sending Notification:", formData);
    alert("Notification Sent!");
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.screenTitle}>Notifications</h2>
        <div style={styles.adminContainer}>
          <div style={styles.adminCircle}>
            <span style={styles.adminIcon}>👤</span>
          </div>
          <span style={styles.adminText}>Admin</span>
        </div>
      </div>

      {/* Category Bar */}
      <div style={styles.categoryBar}>
        <span style={styles.categoryText}>Create Notification and Announcement</span>
      </div>

      {/* Form */}
      <form style={styles.formCard} onSubmit={handleSend}>
        {/* Notification Type */}
        <label style={styles.label}>Notification Type</label>
        <select style={styles.dropdown} name="type" onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="announcement">Announcement</option>
          <option value="alert">Alert</option>
          <option value="update">Update</option>
        </select>

        {/* Sent to */}
        <label style={styles.label}>Sent to</label>
        <select style={styles.dropdown} name="recipient" onChange={handleChange} required>
          <option value="">Select Recipient</option>
          <option value="students">All Students</option>
          <option value="drivers">All Drivers</option>
          <option value="parents">All Parents</option>
        </select>

        {/* Message */}
        <label style={styles.label}>Message</label>
        <textarea
          style={styles.textArea}
          name="message"
          placeholder="Type here"
          rows="5"
          required
          onChange={handleChange}
        />

        {/* Send Button */}
        <button type="submit" style={styles.sendButton}>
          <span style={styles.sendText}>Send</span>
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#1A243A', paddingBottom: '40px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', paddingHorizontal: '20px', padding: '20px' },
  screenTitle: { color: '#FFFFFF', fontSize: '22px', margin: 0 },
  adminContainer: { alignItems: 'center', display: 'flex', flexDirection: 'column' },
  adminCircle: { width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#E5E7EB', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  adminIcon: { fontSize: '16px' },
  adminText: { color: '#FFFFFF', fontSize: '12px', marginTop: '4px', fontWeight: 'bold' },
  categoryBar: { backgroundColor: '#D8298C', margin: '15px 20px', borderRadius: '12px', padding: '10px', textAlign: 'center' },
  categoryText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: '16px', textDecoration: 'underline' },
  formCard: { backgroundColor: '#E6E6E6', borderRadius: '15px', padding: '20px', margin: '0 20px' },
  label: { fontWeight: 'bold', fontSize: '14px', color: '#000000', marginBottom: '6px', display: 'block' },
  dropdown: { backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '12px', marginBottom: '14px', width: '100%', border: '1px solid #CCC', fontSize: '16px' },
  textArea: { backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '12px', fontSize: '16px', marginBottom: '14px', width: '100%', border: '1px solid #CCC', boxSizing: 'border-box', resize: 'vertical' },
  sendButton: { backgroundColor: '#7A60E0', borderRadius: '12px', padding: '12px', marginTop: '10px', width: '100%', border: 'none', cursor: 'pointer' },
  sendText: { fontSize: '18px', color: '#FFFFFF', fontWeight: 'bold' }
};




























// import React from "react";

// function AddNotificationScreen() {
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#1A243A",
//     paddingBottom: "40px",
//     boxSizing: "border-box",
//     overflowY: "auto",
//   };

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: "20px",
//     paddingLeft: "20px",
//     paddingRight: "20px",
//   };

//   const adminContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const adminCircleStyle = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "19px",
//     backgroundColor: "#E5E7EB",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const adminIconStyle = { fontSize: "16px" };
//   const adminTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//     fontWeight: "bold",
//   };

//   const categoryBarStyle = {
//     backgroundColor: "#D8298C",
//     margin: "15px 20px 0 20px",
//     borderRadius: "12px",
//     padding: "10px 0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const categoryTextStyle = {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     fontSize: "16px",
//     textDecoration: "underline",
//     textAlign: "center",
//   };

//   const formCardStyle = {
//     backgroundColor: "#E6E6E6",
//     borderRadius: "15px",
//     padding: "20px",
//     margin: "20px",
//   };

//   const labelStyle = {
//     fontWeight: "bold",
//     fontSize: "14px",
//     color: "#000",
//     marginBottom: "6px",
//   };

//   const inputStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "12px",
//     fontSize: "16px",
//     marginBottom: "14px",
//     width: "100%",
//     boxSizing: "border-box",
//     border: "none",
//     outline: "none",
//   };

//   const dropdownStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "12px",
//     marginBottom: "14px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     cursor: "pointer",
//   };

//   const dropdownTextStyle = {
//     fontSize: "16px",
//     color: "#555",
//   };

//   const arrowStyle = {
//     fontSize: "14px",
//     color: "#555",
//   };

//   const sendButtonStyle = {
//     backgroundColor: "#7A60E0",
//     borderRadius: "12px",
//     padding: "12px",
//     marginTop: "10px",
//     width: "100%",
//     color: "#fff",
//     fontSize: "18px",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header */}
//       <div style={headerStyle}>
//         <div></div>
//         <div style={adminContainerStyle}>
//           <div style={adminCircleStyle}>
//             <span style={adminIconStyle}>👤</span>
//           </div>
//           <div style={adminTextStyle}>Admin</div>
//         </div>
//       </div>

//       {/* Category Bar */}
//       <div style={categoryBarStyle}>
//         <span style={categoryTextStyle}>
//           Create Notification and Announcement
//         </span>
//       </div>

//       {/* Form */}
//       <div style={formCardStyle}>
//         <label style={labelStyle}>Notification Type</label>
//         <div style={dropdownStyle}>
//           <span style={dropdownTextStyle}>Select Type</span>
//           <span style={arrowStyle}>▼</span>
//         </div>

//         <label style={labelStyle}>Sent to</label>
//         <div style={dropdownStyle}>
//           <span style={dropdownTextStyle}>Select Recipient</span>
//           <span style={arrowStyle}>▼</span>
//         </div>

//         <label style={labelStyle}>Message</label>
//         <textarea
//           style={{ ...inputStyle, height: "100px", resize: "none" }}
//           placeholder="Type here"
//         />

//         <button style={sendButtonStyle}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default AddNotificationScreen;

