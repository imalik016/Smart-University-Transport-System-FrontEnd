// // // import React, { useState } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import DataService from "../../services/axios";

// // // export default function EditUserScreen() {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();
// // //   const user = location.state?.user; // Accessing the passed user object

// // //   const [password, setPassword] = useState("");
// // //   const [status, setStatus] = useState(user?.status || "Active");
// // //   const [loading, setLoading] = useState(false);

// // //   // Safety check if user data is missing
// // //   if (!user) {
// // //     return <div style={{ color: '#FFF', padding: '20px' }}>No User Data Found.</div>;
// // //   }

// // //   const handleUpdate = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);

// // //     try {
// // //       await DataService.post("/AdminManageUsers/UpdateUser", {
// // //         user_id: user.user_id,
// // //         password: password,
// // //         status: status,
// // //       });

// // //       alert("Success ✅: User details updated!");
// // //       navigate(-1); // Go back
// // //     } catch (error) {
// // //       console.error(error);
// // //       alert(error.response?.data?.Message || "Failed to update user.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       {/* Header with Admin Badge */}
// // //       <div style={styles.header}>
// // //         <div style={styles.adminIcon}>👤</div>
// // //         <div style={styles.adminLabel}>Admin</div>
// // //       </div>

// // //       {/* Profile Visual */}
// // //       <div style={styles.avatarLarge}>
// // //         <span style={{ fontSize: '60px' }}>👤</span>
// // //       </div>
// // //       <h2 style={styles.title}>Edit User Details</h2>

// // //       <form style={styles.form} onSubmit={handleUpdate}>
// // //         <label style={styles.label}>Name</label>
// // //         <input style={{...styles.input, ...styles.readOnly}} value={user.name} readOnly />

// // //         <label style={styles.label}>Email</label>
// // //         <input style={{...styles.input, ...styles.readOnly}} value={user.email} readOnly />

// // //         <label style={styles.label}>Change Password</label>
// // //         <input 
// // //           style={styles.input} 
// // //           type="password"
// // //           placeholder="Enter New Password (Optional)" 
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />

// // //         <label style={styles.label}>Change Status</label>
// // //         <select 
// // //           style={styles.select} 
// // //           value={status}
// // //           onChange={(e) => setStatus(e.target.value)}
// // //         >
// // //           <option value="Active">Active</option>
// // //           <option value="Inactive">Inactive</option>
// // //         </select>

// // //         <button 
// // //           type="submit" 
// // //           style={styles.saveBtn} 
// // //           disabled={loading}
// // //         >
// // //           {loading ? "Updating..." : "Save Changes"}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // const styles = {
// // //   container: { minHeight: '100vh', backgroundColor: '#1A243A', padding: '20px' },
// // //   header: { position: 'absolute', top: '50px', right: '20px', alignItems: 'center', textAlign: 'center' },
// // //   adminIcon: { width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#E1BEE7', display: 'flex', justifyContent: 'center', alignItems: 'center' },
// // //   adminLabel: { color: '#FFF', fontSize: '12px', marginTop: '4px' },
// // //   avatarLarge: { alignSelf: 'center', margin: '80px auto 20px', width: '120px', height: '120px', borderRadius: '60px', backgroundColor: '#E1BEE7', display: 'flex', justifyContent: 'center', alignItems: 'center' },
// // //   title: { color: '#FFF', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' },
// // //   form: { marginTop: '10px', maxWidth: '500px', margin: '0 auto' },
// // //   input: { backgroundColor: '#FFF', borderRadius: '8px', padding: '12px', marginBottom: '15px', color: '#000', fontSize: '16px', width: '100%', boxSizing: 'border-box', border: '1px solid #DDD' },
// // //   readOnly: { backgroundColor: '#CCC', color: '#555', cursor: 'not-allowed' },
// // //   label: { color: '#FFF', fontWeight: 'bold', marginBottom: '5px', marginLeft: '5px', display: 'block' },
// // //   select: { backgroundColor: '#FFF', borderRadius: '8px', padding: '12px', marginBottom: '30px', width: '100%', fontSize: '16px', border: '1px solid #DDD' },
// // //   saveBtn: { backgroundColor: '#7A60E0', padding: '15px', borderRadius: '12px', border: 'none', width: '100%', cursor: 'pointer', color: '#FFF', fontSize: '18px', fontWeight: 'bold' }
// // // };





































// // // // import React from "react";
// // // // import userImage from "../../assets/images/Usericon.png";

// // // // function EditUserScreen() {
// // // //   const containerStyle = {
// // // //     minHeight: "100vh",
// // // //     width:"100vw",
// // // //     backgroundColor: "#1A243A",
// // // //     position: "relative",
// // // //     paddingBottom: "40px",
// // // //   };

// // // //   const adminContainerStyle = {
// // // //     position: "absolute",
// // // //     top: "20px",
// // // //     right: "20px",
// // // //     textAlign: "center",
// // // //   };

// // // //   const adminIconStyle = {
// // // //     width: "40px",
// // // //     height: "40px",
// // // //     borderRadius: "50%",
// // // //   };

// // // //   const adminTextStyle = {
// // // //     color: "#FFFFFF",
// // // //     fontSize: "12px",
// // // //     marginTop: "4px",
// // // //   };

// // // //   const avatarContainerStyle = {
// // // //     textAlign: "center",
// // // //     marginTop: "100px",
// // // //     marginBottom: "30px",
// // // //   };

// // // //   const avatarCircleStyle = {
// // // //     width: "160px",
// // // //     height: "160px",
// // // //     borderRadius: "50%",
// // // //     backgroundColor: "#9C8CF0",
// // // //     display: "flex",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     margin: "0 auto",
// // // //   };

// // // //   const avatarImageStyle = {
// // // //     width: "80px",
// // // //     height: "80px",
// // // //     objectFit: "contain",
// // // //   };

// // // //   const titleStyle = {
// // // //     color: "#FFFFFF",
// // // //     fontSize: "22px",
// // // //     fontWeight: "bold",
// // // //     marginTop: "16px",
// // // //   };

// // // //   const formSectionStyle = {
// // // //     padding: "0 30px",
// // // //   };

// // // //   const inputBoxStyle = {
// // // //     display:"grid",
// // // //     marginLeft:"420px",
// // // //   }

// // // //   const inputStyle = {
// // // //     width: "55%",
// // // //     backgroundColor: "#FFFFFF",
// // // //     borderRadius: "10px",
// // // //     padding: "15px",
// // // //     marginBottom: "16px",
// // // //     fontSize: "16px",
// // // //     border: "none",
// // // //     outline: "none",
// // // //     boxSizing: "border-box",
// // // //   };

// // // //   const labelStyle = {
// // // //     color: "#FFFFFF",
// // // //     fontSize: "16px",
// // // //     marginBottom: "8px",
// // // //     marginTop: "10px",
// // // //     display: "block",
// // // //   };

// // // //   const dateRowStyle = {
// // // //     display: "flex",
// // // //     //justifyContent:"space-between",
// // // //     justifyContent:"flex-start",
// // // //     marginBottom: "16px",
// // // //     marginLeft:"280px",
// // // //     gap: "8px",
// // // //   };

// // // //   const dateInputStyle = {
// // // //     width: "20%",
// // // //     backgroundColor: "#FFFFFF",
// // // //     borderRadius: "10px",
// // // //     padding: "12px",
// // // //     textAlign: "center",
// // // //     border: "none",
// // // //     outline: "none",
// // // //   };

// // // //   const dropdownStyle = {
// // // //     backgroundColor: "#FFFFFF",
// // // //     borderRadius: "10px",
// // // //     padding: "15px",
// // // //     display: "flex",
// // // //     width:"35%",
// // // //     marginLeft:"420px",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //     marginBottom: "24px",
// // // //     cursor: "pointer",
// // // //   };

// // // //   const dropdownTextStyle = {
// // // //     fontSize: "16px",
// // // //     color: "#000",
// // // //   };

// // // //   const dropdownArrowStyle = {
// // // //     fontSize: "14px",
// // // //     color: "#555",
// // // //   };

// // // //   const saveButtonStyle = {
// // // //     width: "25%",
// // // //     backgroundColor: "#7A60E0",
// // // //     borderRadius: "10px",
// // // //     padding: "12px",
// // // //     fontSize: "18px",
// // // //     color: "#FFFFFF",
// // // //     border: "none",
// // // //     cursor: "pointer",
// // // //     marginLeft:"50px",
// // // //     marginBottom: "12px",
// // // //   };

// // // //   const buttonStyle = {
// // // //     display:"grid",
// // // //     marginLeft:"500px",
// // // //   }
  
// // // //   const deleteButtonStyle = {
// // // //     width: "25%",
// // // //     backgroundColor: "#d8298c",
// // // //     borderRadius: "10px",
// // // //     padding: "12px",
// // // //     fontSize: "18px",
// // // //     marginLeft:"50px",
// // // //     color: "#FFFFFF",
// // // //     border: "none",
// // // //     cursor: "pointer",
// // // //   };

// // // //   return (
// // // //     <div style={containerStyle}>
// // // //       {/* Admin Top Right */}
// // // //       <div style={adminContainerStyle}>
// // // //         <img src={userImage} alt="Admin" style={adminIconStyle} />
// // // //         <div style={adminTextStyle}>Admin</div>
// // // //       </div>

// // // //       {/* Avatar */}
// // // //       <div style={avatarContainerStyle}>
// // // //         <div style={avatarCircleStyle}>
// // // //           <img src={userImage} alt="User" style={avatarImageStyle} />
// // // //         </div>
// // // //         <div style={titleStyle}>Edit User Details</div>
// // // //       </div>

// // // //       {/* Form */}
// // // //       <div style={formSectionStyle}>
// // // //         <div style={inputBoxStyle}>
// // // //             <input type="text" placeholder="Full Name" style={inputStyle} />
// // // //             <input type="email" placeholder="Email" style={inputStyle} />
// // // //         </div>
// // // //         <label style={labelStyle}>Recharge Pass</label>
// // // //         <div style={dateRowStyle}>
// // // //           <input type="text" placeholder="DD" style={dateInputStyle} />
// // // //           <input type="text" placeholder="MM" style={dateInputStyle} />
// // // //           <input type="text" placeholder="YYYY" style={dateInputStyle} />
// // // //         </div>

// // // //         <label style={labelStyle}>Change Status</label>
// // // //         <div style={dropdownStyle}>
// // // //           <span style={dropdownTextStyle}>Active</span>
// // // //           <span style={dropdownArrowStyle}>▼</span>
// // // //         </div>
// // // //         <div style ={buttonStyle}>    
// // // //             <button style={saveButtonStyle}>Save</button>
// // // //             <button style={deleteButtonStyle}>Delete User</button>
// // // //         </div>    
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default EditUserScreen;

// // import React, { useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import DataService from "../../services/axios";

// // export default function EditUser() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   import { useLocation, useParams } from 'react-router-dom';

// //   const EditUser = () => {
// //   const location = useLocation();
// //   const { id } = useParams(); // Gets the ID from the URL
// //   const user = location.state?.user; // Gets the full user object passed from ManageUsers

// //   // Retrieve the user data passed from the ManageUsers screen
// //   const userData = location.state?.user || {};

// //   const [password, setPassword] = useState("");
// //   const [status, setStatus] = useState(userData.status || "Active");
// //   const [loading, setLoading] = useState(false);

// //   const handleSaveChanges = async () => {
// //     setLoading(true);
    
// //     // Constructing model based on your C# 'UpdateUserModel'
// //     const updatePayload = {
// //       user_id: userData.user_id,
// //       password: password, // Backend handles the "Optional" logic via !string.IsNullOrWhiteSpace
// //       status: status
// //     };

// //     try {
// //       const response = await DataService.post("/AdminManageUsers/UpdateUser", updatePayload);
// //       if (response.status === 200) {
// //         alert("User updated successfully!");
// //         navigate(-1); // Go back to the list
// //       }
// //     } catch (error) {
// //       console.error("Update failed:", error);
// //       alert("Failed to update user. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
    
// //     <div style={styles.container}>
// //       <h2>Editing User: {user?.name || id}</h2>
// //       {/* Small Header Admin Icon */}
// //       <div style={styles.headerRight}>
// //         <div style={styles.adminAvatar}>👤</div>
// //         <span style={styles.adminLabel}>Admin</span>
// //       </div>

// //       {/* Large Profile Circle */}
// //       <div style={styles.profileContainer}>
// //         <div style={styles.largeAvatar}>👤</div>
// //         <h1 style={styles.title}>Edit User Details</h1>
// //       </div>
// //       <h2>Editing User: {user?.name || id}</h2>
// //       {/* Form Fields */}
// //       <div style={styles.form}>
// //         <div style={styles.inputGroup}>
// //           <label style={styles.label}>Name</label>
// //           <input 
// //             style={styles.disabledInput} 
// //             value={userData.name || ""} 
// //             readOnly 
// //           />
// //         </div>

// //         <div style={styles.inputGroup}>
// //           <label style={styles.label}>Email</label>
// //           <input 
// //             style={styles.disabledInput} 
// //             value={userData.email || ""} 
// //             readOnly 
// //           />
// //         </div>

// //         <div style={styles.inputGroup}>
// //           <label style={styles.label}>Change Password</label>
// //           <input 
// //             style={styles.activeInput} 
// //             placeholder="Enter New Password (Optional)" 
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div>

// //         <div style={styles.inputGroup}>
// //           <label style={styles.label}>Change Status</label>
// //           <select 
// //             style={styles.selectInput}
// //             value={status}
// //             onChange={(e) => setStatus(e.target.value)}
// //           >
// //             <option value="Active">Active</option>
// //             <option value="Inactive">Inactive</option>
// //             <option value="Suspended">Suspended</option>
// //           </select>
// //         </div>

// //         {/* Save Button */}
// //         <button 
// //           style={{ ...styles.saveBtn, opacity: loading ? 0.7 : 1 }} 
// //           onClick={handleSaveChanges}
// //           disabled={loading}
// //         >
// //           {loading ? "Saving..." : "Save Changes"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: { 
// //     minHeight: '100vh', 
// //     backgroundColor: "#1A243A", 
// //     padding: '20px', 
// //     fontFamily: 'sans-serif',
// //     color: '#FFF'
// //   },
// //   headerRight: { 
// //     display: 'flex', 
// //     flexDirection: 'column', 
// //     alignItems: 'flex-end',
// //     marginBottom: '20px' 
// //   },
// //   adminAvatar: { 
// //     width: '40px', height: '40px', borderRadius: '20px', 
// //     backgroundColor: '#D1C4E9', display: 'flex', 
// //     justifyContent: 'center', alignItems: 'center' 
// //   },
// //   adminLabel: { fontSize: '12px', marginTop: '4px' },
  
// //   profileContainer: { 
// //     display: 'flex', 
// //     flexDirection: 'column', 
// //     alignItems: 'center', 
// //     marginBottom: '40px' 
// //   },
// //   largeAvatar: { 
// //     width: '180px', height: '180px', borderRadius: '90px', 
// //     backgroundColor: '#E1BEE7', display: 'flex', 
// //     justifyContent: 'center', alignItems: 'center', fontSize: '80px',
// //     marginBottom: '20px'
// //   },
// //   title: { fontSize: '24px', fontWeight: 'bold' },

// //   form: { display: 'flex', flexDirection: 'column', gap: '20px' },
// //   inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
// //   label: { fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' },
  
// //   disabledInput: { 
// //     backgroundColor: '#C4C4C4', // Greyed out as per screenshot
// //     height: '55px', borderRadius: '12px', border: 'none', 
// //     padding: '0 15px', fontSize: '16px', color: '#555' 
// //   },
// //   activeInput: { 
// //     backgroundColor: '#FFF', 
// //     height: '55px', borderRadius: '12px', border: 'none', 
// //     padding: '0 15px', fontSize: '16px', color: '#333',
// //     outline: 'none'
// //   },
// //   selectInput: { 
// //     backgroundColor: '#FFF', 
// //     height: '55px', borderRadius: '12px', border: 'none', 
// //     padding: '0 15px', fontSize: '16px', color: '#333',
// //     appearance: 'none', cursor: 'pointer'
// //   },
  
// //   saveBtn: { 
// //     marginTop: '20px',
// //     backgroundColor: '#7D58C1', 
// //     height: '60px', borderRadius: '15px', border: 'none', 
// //     color: '#FFF', fontSize: '20px', fontWeight: 'bold', 
// //     cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' 
// //   }
// // };



// import React, { useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom"; // Combined imports
// import DataService from "../../services/axios";

// export default function EditUser() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams(); 

//   // Retrieve the user data passed from the ManageUsers screen
//   // Using location.state?.user ensures it doesn't crash if accessed directly
//   const userData = location.state?.user || {};

//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState(userData.status || "Active");
//   const [loading, setLoading] = useState(false);

//   const handleSaveChanges = async () => {
//     setLoading(true);
    
//     const updatePayload = {
//       user_id: userData.user_id || id, // Fallback to ID from URL
//       password: password,
//       status: status
//     };

//     try {
//       // Ensure this endpoint matches your C# Controller
//       const response = await DataService.post("/AdminManageUsers/UpdateUser", updatePayload);
//       if (response.status === 200) {
//         alert("User updated successfully!");
//         navigate(-1); 
//       }
//     } catch (error) {
//       console.error("Update failed:", error);
//       alert("Failed to update user. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Header Admin Icon */}
//       <div style={styles.headerRight}>
//         <div style={styles.adminAvatar}>👤</div>
//         <span style={styles.adminLabel}>Admin</span>
//       </div>

//       {/* Profile Section */}
//       <div style={styles.profileContainer}>
//         <div style={styles.largeAvatar}>👤</div>
//         <h1 style={styles.title}>Edit User Details</h1>
//         <p>Editing: {userData.name || "User " + id}</p>
//       </div>

//       {/* Form Fields */}
//       <div style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Name</label>
//           <input 
//             style={styles.disabledInput} 
//             value={userData.name || ""} 
//             readOnly 
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Email</label>
//           <input 
//             style={styles.disabledInput} 
//             value={userData.email || ""} 
//             readOnly 
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Change Password</label>
//           <input 
//             style={styles.activeInput} 
//             placeholder="Enter New Password (Optional)" 
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Change Status</label>
//           <select 
//             style={styles.selectInput}
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//             <option value="Suspended">Suspended</option>
//           </select>
//         </div>

//         <button 
//           style={{ ...styles.saveBtn, opacity: loading ? 0.7 : 1 }} 
//           onClick={handleSaveChanges}
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save Changes"}
//         </button>
//       </div>
//     </div>
//   );
// }

// // Keep your styles object as it was...
// const styles = { 
//   container: { 
//     minHeight: '100vh', 
//     backgroundColor: "#1A243A", 
//     padding: '20px', 
//     fontFamily: 'sans-serif',
//     color: '#FFF'
//   },
//   headerRight: { 
//     display: 'flex', 
//     flexDirection: 'column', 
//     alignItems: 'flex-end',
//     marginBottom: '20px' 
//   },
//   adminAvatar: { 
//     width: '40px', height: '40px', borderRadius: '20px', 
//     backgroundColor: '#D1C4E9', display: 'flex', 
//     justifyContent: 'center', alignItems: 'center' 
//   },
//   adminLabel: { fontSize: '12px', marginTop: '4px' },
  
//   profileContainer: { 
//     display: 'flex', 
//     flexDirection: 'column', 
//     alignItems: 'center', 
//     marginBottom: '40px' 
//   },
//   largeAvatar: { 
//     width: '180px', height: '180px', borderRadius: '90px', 
//     backgroundColor: '#E1BEE7', display: 'flex', 
//     justifyContent: 'center', alignItems: 'center', fontSize: '80px',
//     marginBottom: '20px'
//   },
//   title: { fontSize: '24px', fontWeight: 'bold' },

//   form: { display: 'flex', flexDirection: 'column', gap: '20px' },
//   inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
//   label: { fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' },
  
//   disabledInput: { 
//     backgroundColor: '#C4C4C4', // Greyed out as per screenshot
//     height: '55px', borderRadius: '12px', border: 'none', 
//     padding: '0 15px', fontSize: '16px', color: '#555' 
//   },
//   activeInput: { 
//     backgroundColor: '#FFF', 
//     height: '55px', borderRadius: '12px', border: 'none', 
//     padding: '0 15px', fontSize: '16px', color: '#333',
//     outline: 'none'
//   },
//   selectInput: { 
//     backgroundColor: '#FFF', 
//     height: '55px', borderRadius: '12px', border: 'none', 
//     padding: '0 15px', fontSize: '16px', color: '#333',
//     appearance: 'none', cursor: 'pointer'
//   },
  
//   saveBtn: { 
//     marginTop: '20px',
//     backgroundColor: '#7D58C1', 
//     height: '60px', borderRadius: '15px', border: 'none', 
//     color: '#FFF', fontSize: '20px', fontWeight: 'bold', 
//     cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' 
//   }
// };

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

export default function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Data passed from ManageUsers item
  const userData = location.state?.user || {};

  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(userData.status || "Active");
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = async () => {
    if (!userData.user_id) {
        alert("Error: User ID not found.");
        return;
    }

    setLoading(true);
    const updatePayload = {
      user_id: userData.user_id, // Key must match C# UpdateUserModel
      password: password,        // Optional in backend
      status: status
    };

    try {
      const response = await DataService.post("/AdminManageUsers/UpdateUser", updatePayload);
      if (response.status === 200) {
        alert("User updated successfully!");
        navigate("/admin/manage-users"); // Navigate back to the list
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={editStyles.container}>
      <div style={editStyles.headerRight}>
        <div style={editStyles.adminAvatar}>👤</div>
        <span style={editStyles.adminLabel}>Admin</span>
      </div>

      <div style={editStyles.profileContainer}>
        <div style={editStyles.largeAvatar}>👤</div>
        <h1 style={editStyles.title}>Edit User Details</h1>
      </div>

      <div style={editStyles.form}>
        <div style={editStyles.inputGroup}>
          <label style={editStyles.label}>Name</label>
          <input style={editStyles.disabledInput} value={userData.name || ""} readOnly />
        </div>

        <div style={editStyles.inputGroup}>
          <label style={editStyles.label}>Email</label>
          <input style={editStyles.disabledInput} value={userData.email || ""} readOnly />
        </div>

        <div style={editStyles.inputGroup}>
          <label style={editStyles.label}>Change Password</label>
          <input 
            style={editStyles.activeInput} 
            placeholder="Enter New Password (Optional)" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={editStyles.inputGroup}>
          <label style={editStyles.label}>Change Status</label>
          <select 
            style={editStyles.selectInput}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button 
          style={{ ...editStyles.saveBtn, opacity: loading ? 0.7 : 1 }} 
          onClick={handleSaveChanges}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

const editStyles = {
  container: { minHeight: '100vh', backgroundColor: "#1A243A", padding: '20px', color: '#FFF', fontFamily: 'sans-serif' },
  headerRight: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: '20px' },
  adminAvatar: { width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#FF8A80', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  adminLabel: { fontSize: '12px', marginTop: '4px' },
  profileContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' },
  largeAvatar: { width: '150px', height: '150px', borderRadius: '75px', backgroundColor: '#E1BEE7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '60px', marginBottom: '15px' },
  title: { fontSize: '22px', fontWeight: 'bold' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '14px', fontWeight: 'bold' },
  disabledInput: { backgroundColor: '#C4C4C4', height: '50px', borderRadius: '10px', border: 'none', padding: '0 15px', color: '#333' },
  activeInput: { backgroundColor: '#FFF', height: '50px', borderRadius: '10px', border: 'none', padding: '0 15px', color: '#333' },
  selectInput: { backgroundColor: '#FFF', height: '50px', borderRadius: '10px', border: 'none', padding: '0 15px', color: '#333' },
  saveBtn: { marginTop: '20px', backgroundColor: '#7D58C1', height: '55px', borderRadius: '12px', border: 'none', color: '#FFF', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }
};