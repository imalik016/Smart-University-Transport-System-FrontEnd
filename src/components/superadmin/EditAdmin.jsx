// import React, { useState } from "react";

// function EditAdminDetailsScreen() {
//   const [name, setName] = useState("Izza");
//   const [password, setPassword] = useState("");

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#0F1B2D",
//         fontFamily: "Arial, sans-serif",
//         position: "relative",
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
//               marginRight:"450px",
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
//               marginRight:"440px",
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
//         Edit Details
//       </div>

//       {/* Form Card */}
//       <div
//         style={{
//           margin: "20px",
//           backgroundColor: "#01060f",
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
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{
//             width: "20%",
//             marginTop: "6px",
//             marginBottom: "16px",
//             padding: "10px 14px",
//             borderRadius: "10px",
//             border: "none",
//             fontSize: "14px",
//           }}
//         />
//         <br/>
//         {/* Password */}
//         <label style={{ fontWeight: "bold", fontSize: "14px" }}>
//           Change Password
//         </label>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{
//             width: "20%",
//             marginTop: "6px",
//             marginBottom: "16px",
//             padding: "10px 14px",
//             borderRadius: "10px",
//             border: "none",
//             fontSize: "14px",
//             marginRight:"80px",
//           }}
//         />
//         <br/>
//         {/* Save Button */}
//         <button
//           style={{
//             width: "30%",
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
//           Save Changes
//         </button>
//       </div>

//       {/* Pagination */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           width: "100%",
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

// export default EditAdminDetailsScreen;
















// // function EditAdmin() {

// //   const containerStyle = {
// //     minHeight: "100vh",
// //     width:"100vw",
// //     background: "linear-gradient(to right, #323077d8, #062a61d5)",
// //     // padding: "40px 80px",
// //     margin:"10px",
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
// //     padding: "45px",
// //     marginLeft:"140px",
// //     width: "65%",
// //     display: "flex",
// //     justifyContent: "center",
// //   };

// //   const inputStyle = {
// //     width: "80%",
// //   padding: "12px",
// //   marginBottom: "18px",
// //   borderRadius: "8px",
// //   border: "none",
// //   fontSize: "14px",
// //   outline: "none",
// //   background:"#f5ececda",
// //   };

// //   const buttonStyle = {
// //     background: "#7d2c96ce",
// //     borderRadius: "15px",
// //     width: "150px",
// //     height: "40px",
// //     display: "flex",
// //     marginLeft:"100px",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     //justifyItems:"center",
// //     alignItems: "center",
// //     cursor: "pointer",
// //     boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
// //     fontWeight: "600",
// //     color: "#f8f8f8",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       {/* Header */}
// //       <div style={headerStyle}>Edit Details</div>

// //       {/* Center Panel */}
// //       <div style={panelStyle}>
// //         <div >

// //           <input style={inputStyle}
// //           type="text"
// //           placeholder="Name"
// //           />

// //           <input style={inputStyle}
// //           type="password"
// //           placeholder="Change Password"
// //           />

// //             <button style={buttonStyle}>Save Changes</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default EditAdmin;



import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataService from "../../services/axios";

function EditAdmin() {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const [newPass, setNewPass] = useState("");

  const handleUpdate = async () => {
    try {
      // Sending password as a JSON string to match [FromBody] string in C#
      await DataService.put(`/SuperAdmin/UpdateAdminPassword?id=${id}`, JSON.stringify(newPass), {
        headers: { "Content-Type": "application/json" }
      });
      alert("Password Updated!");
      navigate("/");
    } catch (err) { alert("Update failed"); }
  };

  const handleDelete = async () => {
    if (window.confirm("Delete this admin?")) {
      try {
        await DataService.delete(`/SuperAdmin/DeleteAdmin/${id}`);
        navigate("/");
      } catch (err) { alert("Delete failed"); }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Edit Admin Details</div>
      <div style={styles.formCard}>
        <label style={styles.label}>Admin Name</label>
        <input style={styles.input} value={name} disabled />
        
        <label style={styles.label}>New Password</label>
        <input style={styles.input} type="password" placeholder="Enter new password" onChange={e => setNewPass(e.target.value)} />
        
        <button style={styles.saveBtn} onClick={handleUpdate}>Save Changes</button>
        <button style={styles.deleteBtn} onClick={handleDelete}>Delete Admin</button>
      </div>
    </div>
  );
};

export default EditAdmin;


// Add this at the bottom of Dashboard.jsx, after the export
const styles = {
  container: { backgroundColor: '#1a1f2b', minHeight: '100vh', padding: '20px', color: 'white', fontFamily: 'Arial' },
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
