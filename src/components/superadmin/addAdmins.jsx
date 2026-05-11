// import React, { useState } from "react";

// function AddAdminScreen() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#0F1B2D",
//         fontFamily: "Arial, sans-serif",
//         //position: "relative",
//         paddingTop: "40px",
//       }}
//     >
//       {/* Header */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "0 20px",
//         }}
//       >
//         <div></div>

//         <div style={{ textAlign: "center" }}>
//           <div
//             style={{
//               width: "42px",
//               height: "42px",
//               borderRadius: "50%",
//               backgroundColor: "#7D58C1",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               margin: "0 auto",
//             }}
//           >
//             👤
//           </div>
//           <div
//             style={{
//               color: "#FFFFFF",
//               fontSize: "12px",
//               fontWeight: "bold",
//               marginTop: "4px",
//             }}
//           >
//             Super Admin
//           </div>
//         </div>
//       </div>

//       {/* Title Bar */}
//       <div
//         style={{
//           marginTop: "20px",
//           backgroundColor: "#7D58C1",
//           padding: "14px",
//           textAlign: "center",
//           color: "#FFFFFF",
//           fontSize: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         Add Admin
//       </div>

//       {/* Form Card */}
//       <div
//         style={{
//           margin: "20px",
//           backgroundColor: "#E5E7EB",
//           borderRadius: "18px",
//           padding: "20px",
//         }}
//       >
//         {/* Name */}
//         <label style={{ fontWeight: "bold", fontSize: "14px" }}>
//           Name
//         </label>
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{
//             width: "100%",
//             marginTop: "6px",
//             marginBottom: "16px",
//             padding: "10px 14px",
//             borderRadius: "10px",
//             border: "none",
//             fontSize: "14px",
//           }}
//         />

//         {/* Email */}
//         <label style={{ fontWeight: "bold", fontSize: "14px" }}>
//           Email
//         </label>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{
//             width: "100%",
//             marginTop: "6px",
//             marginBottom: "16px",
//             padding: "10px 14px",
//             borderRadius: "10px",
//             border: "none",
//             fontSize: "14px",
//           }}
//         />

//         {/* Password */}
//         <label style={{ fontWeight: "bold", fontSize: "14px" }}>
//           Password
//         </label>
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{
//             width: "100%",
//             marginTop: "6px",
//             marginBottom: "16px",
//             padding: "10px 14px",
//             borderRadius: "10px",
//             border: "none",
//             fontSize: "14px",
//           }}
//         />

//         {/* Button */}
//         <button
//           style={{
//             width: "100%",
//             backgroundColor: "#7D58C1",
//             padding: "14px",
//             borderRadius: "25px",
//             border: "none",
//             color: "#FFFFFF",
//             fontSize: "16px",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Add Admin
//         </button>
//       </div>

//       {/* Pagination */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           width: "40%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "8px",
//             height: "8px",
//             borderRadius: "50%",
//             backgroundColor: "#6B7280",
//             margin: "0 5px",
//           }}
//         />
//         <div
//           style={{
//             width: "8px",
//             height: "8px",
//             borderRadius: "50%",
//             backgroundColor: "#FFFFFF",
//             margin: "0 5px",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default AddAdminScreen;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

function AddAdminScreen () {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ name: "", email: "", phone: "", password: "" });

  const handleSave = async () => {
    try {
      await DataService.post("/SuperAdmin/AddAdmin", admin);
      alert("Admin Added!");
      navigate("/");
    } catch (err) {
      alert("Failed to add admin");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Add Admin</div>
      <div style={styles.formCard}>
        <label style={styles.label}>Name</label>
        <input style={styles.input} placeholder="Enter name" onChange={e => setAdmin({...admin, name: e.target.value})} />
        
        <label style={styles.label}>Email</label>
        <input style={styles.input} placeholder="Enter email" onChange={e => setAdmin({...admin, email: e.target.value})} />
        
        <label style={styles.label}>Phone Number</label>
        <input style={styles.input} placeholder="Enter phone" onChange={e => setAdmin({...admin, phone: e.target.value})} />
        
        <label style={styles.label}>Password</label>
        <input style={styles.input} type="password" placeholder="Enter password" onChange={e => setAdmin({...admin, password: e.target.value})} />
        
        <button style={styles.saveBtn} onClick={handleSave}>Add Admin</button>
      </div>
    </div>
  );
};

export default AddAdminScreen;

// Add this at the bottom of Dashboard.jsx, after the export
const styles = {
  container: { backgroundColor: '#1a1f2b', minHeight: '100vh', width:'200vh',padding: '20px', color: 'white', fontFamily: 'Arial' },
  header: { backgroundColor: '#8e56cc', padding: '15px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' },
  cardContainer: { backgroundColor: '#2d3446', borderRadius: '15px', padding: '15px' },
  listItem: { display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', color: 'black', padding: '15px', borderRadius: '10px', marginBottom: '10px', alignItems: 'center' },
  editBtn: { backgroundColor: '#8e56cc', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '20px', cursor: 'pointer' },
  addBtn: { backgroundColor: '#e91e63', color: 'white', width: '100%', padding: '15px', borderRadius: '10px', border: 'none', marginTop: '20px', fontSize: '16px', cursor: 'pointer' },
  formCard: { backgroundColor: '#d1d5db', borderRadius: '15px', padding: '20px', color: 'black' },
  label: { display: 'block', fontWeight: 'bold', marginBottom: '5px' },
  input: { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' },
  saveBtn: { backgroundColor: '#8e56cc', color: 'white', width: '100%', padding: '12px', borderRadius: '25px', border: 'none', marginBottom: '10px', cursor: 'pointer' },
  deleteBtn: { backgroundColor: '#ff5252', color: 'white', width: '100%', padding: '12px', borderRadius: '25px', border: 'none', cursor: 'pointer' }
};


