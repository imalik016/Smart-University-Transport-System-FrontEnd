// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import DataService from "../../services/axios"; // Assuming your DataService location

// //   //import { useNavigate } from 'react-router-dom';

// // const ROLES = ["All", "Student", "Teacher", "Driver", "Parent"];

// // const getBadgeColor = (role) => {
// //   switch (role) {
// //     case "Student": return "#00C853"; // Green
// //     case "Teacher": return "#2196F3"; // Blue
// //     case "Driver": return "#FF9100";  // Orange
// //     case "Parent": return "#03A9F4";  // Sky Blue
// //     default: return "#7D58C1";        // Purple
// //   }
// // };

// // export default function ManageUsers() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [selectedRole, setSelectedRole] = useState("All");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const fetchUsers = async (name = searchQuery, role = selectedRole) => {
// //     setLoading(true);
// //     try {
// //       // Integration with AdminManageUsersController/SearchUsers
// //       const res = await DataService.get(`/AdminManageUsers/SearchUsers`, {
// //         params: { name: name, role: role }
// //       });
// //       setUsers(res.data);
// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const ManageUsers = () => {
// //     const navigate = useNavigate();

// //     const handleEdit = (user) => {
// //       // Navigate to the edit path and pass the user object in the 'state'
// //       navigate(`/admin/edit-user/${user.id}`, { state: { user } });
// //     };
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {/* Header Area */}
// //       <div style={styles.header}>
// //         <h1 style={styles.headerTitle}>Manage Users</h1>
// //         <div style={styles.adminProfile}>
// //           <div style={styles.adminAvatar}>👤</div>
// //           <span style={styles.adminLabel}>Admin</span>
// //         </div>
// //       </div>

// //       {/* Search Input and Button */}
// //       <div style={styles.searchSection}>
// //         <input
// //           style={styles.searchInput}
// //           placeholder="Search by name"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //         <button style={styles.searchBtn} onClick={() => fetchUsers()}>
// //           Search
// //         </button>
// //       </div>

// //       {/* Filter Roles */}
// //       <div style={styles.chipContainer}>
// //         {ROLES.map((role) => {
// //           const isActive = selectedRole === role;
// //           return (
// //             <button
// //               key={role}
// //               style={{ ...styles.chip, ...(isActive ? styles.activeChip : {}) }}
// //               onClick={() => {
// //                 setSelectedRole(role);
// //                 fetchUsers(searchQuery, role);
// //               }}
// //             >
// //               <span style={styles.chipText(isActive)}>
// //                 {role === "All" ? role : `${role}s`}
// //               </span>
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* Main List */}
// //       <div style={{ marginTop: '10px' }}>
// //         {loading ? (
// //           <p style={{ color: '#FFF', textAlign: 'center' }}>Loading users...</p>
// //         ) : (
// //           users.map((item) => (
// //             <div key={item.user_id} style={styles.card}>
// //               <div style={styles.avatar}>👤</div>
              
// //               <div style={styles.cardContent}>
// //                 <h3 style={styles.userName}>{item.name}</h3>
// //                 <p style={styles.userEmail}>{item.email}</p>
// //                 <div style={styles.badgeRow}>
// //                   <div style={styles.roleBadge(getBadgeColor(item.role))}>
// //                     {item.role}
// //                   </div>
// //                   <span style={styles.statusText}>{item.status}</span>
// //                 </div>
// //               </div>

// //               <button 
// //                 style={styles.editButton}
// //                 // onClick={() => navigate("/edit-user", { state: { user: item } })}
// //                  onClick={() => handleEdit(userData)}>
// //                 Edit
// //               </button>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       {/* Global Add Button */}
// //       <button style={styles.addNewBtn} onClick={() => navigate("/add-user")}>
// //         Add New User
// //       </button>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import DataService from "../../services/axios";

// const ROLES = ["All", "Student", "Teacher", "Driver", "Parent"];

// const getBadgeColor = (role) => {
//   switch (role) {
//     case "Student": return "#00C853";
//     case "Teacher": return "#2196F3";
//     case "Driver": return "#FF9100";
//     case "Parent": return "#03A9F4";
//     default: return "#7D58C1";
//   }
// };

// export default function ManageUsers() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRole, setSelectedRole] = useState("All");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async (name = searchQuery, role = selectedRole) => {
//     setLoading(true);
//     try {
//       const res = await DataService.get(`/AdminManageUsers/SearchUsers`, {
//         params: { name: name, role: role }
//       });
//       setUsers(res.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- FIXED HANDLE EDIT LOGIC ---
//   const handleEdit = (user) => {
//     // Navigate to the edit screen and pass the specific user object
//     // Note: Use your actual route path here (e.g., "/edit-user")
//     navigate("/admin/edit-users", { state: { user } });
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.headerTitle}>Manage Users</h1>
//         <div style={styles.adminProfile}>
//           <div style={styles.adminAvatar}>👤</div>
//           <span style={styles.adminLabel}>Admin</span>
//         </div>
//       </div>

//       <div style={styles.searchSection}>
//         <input
//           style={styles.searchInput}
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button style={styles.searchBtn} onClick={() => fetchUsers()}>
//           Search
//         </button>
//       </div>

//       <div style={styles.chipContainer}>
//         {ROLES.map((role) => {
//           const isActive = selectedRole === role;
//           return (
//             <button
//               key={role}
//               style={{ ...styles.chip, ...(isActive ? styles.activeChip : {}) }}
//               onClick={() => {
//                 setSelectedRole(role);
//                 fetchUsers(searchQuery, role);
//               }}
//             >
//               <span style={styles.chipText(isActive)}>
//                 {role === "All" ? role : `${role}s`}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       <div style={{ marginTop: '10px' }}>
//         {loading ? (
//           <p style={{ color: '#FFF', textAlign: 'center' }}>Loading users...</p>
//         ) : (
//           users.map((item) => (
//             <div key={item.user_id} style={styles.card}>
//               <div style={styles.avatar}>👤</div>
              
//               <div style={styles.cardContent}>
//                 <h3 style={styles.userName}>{item.name}</h3>
//                 <p style={styles.userEmail}>{item.email}</p>
//                 <div style={styles.badgeRow}>
//                   <div style={styles.roleBadge(getBadgeColor(item.role))}>
//                     {item.role}
//                   </div>
//                   <span style={styles.statusText}>{item.status}</span>
//                 </div>
//               </div>

//               <button 
//                 style={styles.editButton}
//                 onClick={() => handleEdit(item)} // Pass the 'item' from the map
//               >
//                 Edit
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <button style={styles.addNewBtn} onClick={() => navigate("/add-user")}>
//         Add New User
//       </button>
//     </div>
//   );
// }


// const styles = {
//   container: { 
//     minHeight: '100vh', 
//     width: '95vw', 
//     backgroundColor: "#1A243A", 
//     padding: '20px', 
//     paddingBottom: '100px',
//     fontFamily: 'sans-serif'
//   },
//   header: { 
//     display: 'flex', 
//     justifyContent: 'space-between', 
//     alignItems: 'center', 
//     marginTop: '20px',
//     marginBottom: '25px'
//   },
//   headerTitle: { fontSize: '28px', color: '#FFF', fontWeight: 'bold', margin: 0 },
//   adminProfile: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
//   adminAvatar: { 
//     width: '45px', height: '45px', borderRadius: '25px', 
//     backgroundColor: '#FF8A80', display: 'flex', 
//     justifyContent: 'center', alignItems: 'center', fontSize: '20px' 
//   },
//   adminLabel: { color: '#FFF', fontSize: '12px', marginTop: '4px', opacity: 0.8 },
  
//   searchSection: { display: 'flex', gap: '10px', marginBottom: '20px' },
//   searchInput: { 
//     flex: 1, backgroundColor: '#FFF', borderRadius: '12px', 
//     padding: '0 15px', height: '50px', border: 'none', outline: 'none', fontSize: '16px' 
//   },
//   searchBtn: { 
//     backgroundColor: '#7D58C1', borderRadius: '18px', padding: '0 25px', 
//     border: 'none', color: '#FFF', fontWeight: 'bold', cursor: 'pointer' 
//   },
  
//   chipContainer: { 
//     display: 'flex', gap: '10px', overflowX: 'auto', 
//     paddingBottom: '15px', marginBottom: '10px' 
//   },
//   chip: { 
//     backgroundColor: '#2D3748', padding: '10px 20px', borderRadius: '25px', 
//     border: '1px solid #4A5568', cursor: 'pointer', whiteSpace: 'nowrap' 
//   },
//   activeChip: { backgroundColor: '#7D58C1', border: 'none' },
//   chipText: (isActive) => ({ color: isActive ? '#FFF' : '#999', fontWeight: 'bold' }),
  
//   card: { 
//     backgroundColor: '#2D3748', borderRadius: '30px', padding: '20px', 
//     display: 'flex', alignItems: 'center', marginBottom: '15px' 
//   },
//   avatar: { 
//     width: '65px', height: '65px', borderRadius: '35px', 
//     backgroundColor: '#F7FAFC', display: 'flex', 
//     justifyContent: 'center', alignItems: 'center', fontSize: '28px' 
//   },
//   cardContent: { flex: 1, marginLeft: '15px' },
//   userName: { color: '#FFF', fontSize: '20px', fontWeight: 'bold', margin: 0 },
//   userEmail: { color: '#A0AEC0', fontSize: '14px', margin: '4px 0' },
//   badgeRow: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
//   roleBadge: (color) => ({ 
//     backgroundColor: color, padding: '4px 12px', borderRadius: '8px', 
//     color: '#FFF', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' 
//   }),
//   statusText: { fontSize: '13px', fontWeight: 'bold', color: '#48BB78' },
  
//   editButton: { 
//     backgroundColor: '#7D58C1', padding: '8px 20px', borderRadius: '18px', 
//     border: 'none', color: '#FFF', fontWeight: 'bold', cursor: 'pointer' 
//   },
//   addNewBtn: { 
//     position: 'fixed', bottom: '30px', left: '25px', right: '25px', 
//     backgroundColor: '#6C5CE7', borderRadius: '18px', height: '60px', 
//     border: 'none', color: '#FFF', fontSize: '22px', fontWeight: 'bold', 
//     cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4)' 
//   }
// };




















// // const ROLES = ["All", "Student", "Teacher", "Driver", "Parent"];

// // export default function ManageUsers() {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [selectedRole, setSelectedRole] = useState("All");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchUsers(searchQuery, selectedRole);
// //   }, []); // Fetches data on mount

// //   const fetchUsers = async (name = "", role = "All") => {
// //     setLoading(true);
// //     try {
// //       // Using DataService for the API call
// //       const res = await DataService.get(`/AdminManageUsers/SearchUsers?name=${name}&role=${role}`);
// //       setUsers(res.data);
// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getBadgeColor = (role) => {
// //     switch (role) {
// //       case "Student": return "#00C853";
// //       case "Teacher": return "#FFD600";
// //       case "Driver": return "#FF9100";
// //       case "Parent": return "#2196F3";
// //       default: return "#7D58C1";
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {/* Header */}
// //       <div style={styles.header}>
// //         <h1 style={styles.headerTitle}>Manage Users</h1>
// //         <div style={styles.adminProfile}>
// //           <div style={styles.adminAvatar}>👤</div>
// //           <span style={styles.adminLabel}>Admin</span>
// //         </div>
// //       </div>

// //       {/* Search Section */}
// //       <div style={styles.searchSection}>
// //         <input
// //           style={styles.searchInput}
// //           placeholder="Search by name"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //         <button 
// //           style={styles.searchBtn} 
// //           onClick={() => fetchUsers(searchQuery, selectedRole)}
// //         >
// //           Search
// //         </button>
// //       </div>

// //       {/* Role Chips */}
// //       <div style={styles.chipContainer}>
// //         {ROLES.map((role) => (
// //           <button
// //             key={role}
// //             style={{ ...styles.chip, ...(selectedRole === role ? styles.activeChip : {}) }}
// //             onClick={() => {
// //               setSelectedRole(role);
// //               fetchUsers(searchQuery, role);
// //             }}
// //           >
// //             <span style={{ color: selectedRole === role ? '#FFF' : '#999', fontWeight: 'bold' }}>
// //               {role === "All" ? role : `${role}s`}
// //             </span>
// //           </button>
// //         ))}
// //       </div>

// //       {/* User List */}
// //       {loading ? (
// //         <div style={styles.loader}>Loading...</div>
// //       ) : (
// //         <div style={styles.list}>
// //           {users.length > 0 ? (
// //             users.map((item) => (
// //               <div key={item.user_id} style={styles.card}>
// //                 <div style={styles.avatar}>👤</div>
// //                 <div style={styles.cardContent}>
// //                   <h3 style={styles.userName}>{item.name}</h3>
// //                   <p style={styles.userEmail}>{item.email}</p>
// //                   <div style={styles.badgeRow}>
// //                     <div style={{ ...styles.roleBadge, backgroundColor: getBadgeColor(item.role) }}>
// //                       <span style={styles.badgeText}>{item.role}</span>
// //                     </div>
// //                     <span style={{ ...styles.statusText, color: item.status === 'Active' ? '#00C853' : '#FF5252' }}>
// //                       {item.status}
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <button 
// //                   style={styles.editButton}
// //                   onClick={() => navigate("/edit-user", { state: { user: item } })}
// //                 >
// //                   Edit
// //                 </button>
// //               </div>
// //             ))
// //           ) : (
// //             <p style={{ color: '#FFF', textAlign: 'center', marginTop: '20px' }}>No users found.</p>
// //           )}
// //         </div>
// //       )}

// //       {/* Floating Add Button */}
// //       <button 
// //         style={styles.addNewBtn} 
// //         onClick={() => navigate("/quick-add")}
// //       >
// //         Add New User
// //       </button>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: { minHeight: '100vh',width:'95vw', backgroundColor: "#1A243A", padding: '20px', paddingBottom: '100px' },
// //   header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' },
// //   headerTitle: { fontSize: '26px', color: '#FFF', fontWeight: 'bold', margin: 0 },
// //   adminProfile: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
// //   adminAvatar: { width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#FF8A80', display: 'flex', justifyContent: 'center', alignItems: 'center' },
// //   adminLabel: { color: '#FFF', fontSize: '12px', marginTop: '4px' },
// //   searchSection: { display: 'flex', marginTop: '25px', gap: '10px' },
// //   searchInput: { flex: 1, backgroundColor: '#FFF', borderRadius: '8px', padding: '0 15px', height: '45px', border: 'none', outline: 'none' },
// //   searchBtn: { backgroundColor: '#7D58C1', borderRadius: '20px', padding: '0 20px', border: 'none', color: '#FFF', fontWeight: 'bold', cursor: 'pointer' },
// //   chipContainer: { display: 'flex',minWidth:'70px', marginTop: '15px', marginBottom: '10px', gap: '10px', overflowX: 'auto' },
// //   chip: { backgroundColor: '#2C3E50', padding: '8px 15px', borderRadius: '20px', border: 'none', cursor: 'pointer' },
// //   activeChip: { backgroundColor: '#7D58C1' },
// //   loader: { color: '#FFF', textAlign: 'center', marginTop: '50px' },
// //   card: { backgroundColor: '#2C3E50',minWidth:'50px', borderRadius: '20px', padding: '15px', display: 'flex', alignItems: 'center', marginTop: '15px' },
// //   avatar: { width: '60px', height: '60px', borderRadius: '30px', backgroundColor: '#E0E0E0', display: 'flex', justifyContent: 'center', alignItems: 'center' },
// //   cardContent: { flex: 1, marginLeft: '15px' },
// //   userName: { color: '#FFF', fontSize: '18px', fontWeight: 'bold', margin: 0 },
// //   userEmail: { color: '#BDC3C7', fontSize: '14px', margin: '5px 0 0 0' },
// //   badgeRow: { display: 'flex', alignItems: 'center', marginTop: '8px' },
// //   roleBadge: { padding: '2px 10px', borderRadius: '10px', marginRight: '10px' },
// //   badgeText: { color: '#FFF', fontSize: '12px', fontWeight: 'bold' },
// //   statusText: { fontSize: '12px', fontWeight: 'bold' },
// //   editButton: { backgroundColor: '#7D58C1', padding: '5px 15px', borderRadius: '15px', border: 'none', color: '#FFF', fontWeight: 'bold', cursor: 'pointer' },
// //   addNewBtn: { position: 'fixed', bottom: '30px', left: '20px', right: '20px', backgroundColor: '#6C5CE7', borderRadius: '12px', height: '55px', border: 'none', color: '#FFF', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }
// // };

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

const ROLES = ["All", "Student", "Teacher", "Driver", "Parent"];

const getBadgeColor = (role) => {
  switch (role) {
    case "Student": return "#00C853";
    case "Teacher": return "#2196F3";
    case "Driver": return "#FF9100";
    case "Parent": return "#03A9F4";
    default: return "#7D58C1";
  }
};

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (name = searchQuery, role = selectedRole) => {
    setLoading(true);
    try {
      const res = await DataService.get(`/AdminManageUsers/SearchUsers`, {
        params: { name: name, role: role }
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    // Navigating to the absolute path defined in your App routes
    navigate("/admin/edit-users", { state: { user } });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Manage Users</h1>
        <div style={styles.adminProfile}>
          <div style={styles.adminAvatar}>👤</div>
          <span style={styles.adminLabel}>Admin</span>
        </div>
      </div>

      <div style={styles.searchSection}>
        <input
          style={styles.searchInput}
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button style={styles.searchBtn} onClick={() => fetchUsers()}>Search</button>
      </div>

      <div style={styles.chipContainer}>
        {ROLES.map((role) => (
          <button
            key={role}
            style={{ ...styles.chip, ...(selectedRole === role ? styles.activeChip : {}) }}
            onClick={() => {
              setSelectedRole(role);
              fetchUsers(searchQuery, role);
            }}
          >
            <span style={{ color: selectedRole === role ? '#FFF' : '#999', fontWeight: 'bold' }}>
              {role === "All" ? role : `${role}s`}
            </span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '10px' }}>
        {loading ? (
          <p style={{ color: '#FFF', textAlign: 'center' }}>Loading users...</p>
        ) : (
          users.map((item) => (
            <div key={item.user_id} style={styles.card}>
              <div style={styles.avatar}>👤</div>
              <div style={styles.cardContent}>
                <h3 style={styles.userName}>{item.name}</h3>
                <p style={styles.userEmail}>{item.email}</p>
                <div style={styles.badgeRow}>
                  <div style={{ ...styles.roleBadge, backgroundColor: getBadgeColor(item.role) }}>
                    {item.role}
                  </div>
                  <span style={styles.statusText}>{item.status}</span>
                </div>
              </div>
              <button style={styles.editButton} onClick={() => handleEdit(item)}>
                Edit
              </button>
            </div>
          ))
        )}
      </div>

      <button style={styles.addNewBtn} onClick={() => navigate("/admin/add-user")}>
        Add New User
      </button>
    </div>
  );
}

// Internal styles to keep the file self-contained
const styles = {
  container: { minHeight: '100vh', width: '95vw', backgroundColor: "#1A243A", padding: '20px', paddingBottom: '100px', fontFamily: 'sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', marginBottom: '25px' },
  headerTitle: { fontSize: '28px', color: '#FFF', fontWeight: 'bold', margin: 0 },
  adminProfile: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  adminAvatar: { width: '45px', height: '45px', borderRadius: '25px', backgroundColor: '#FF8A80', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  adminLabel: { color: '#FFF', fontSize: '12px', marginTop: '4px' },
  searchSection: { display: 'flex', gap: '10px', marginBottom: '20px' },
  searchInput: { flex: 1, backgroundColor: '#FFF', borderRadius: '12px', padding: '0 15px', height: '50px', border: 'none' },
  searchBtn: { backgroundColor: '#7D58C1', borderRadius: '18px', padding: '0 25px', border: 'none', color: '#FFF', fontWeight: 'bold' },
  chipContainer: { display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' },
  chip: { backgroundColor: '#2D3748', padding: '10px 20px', borderRadius: '25px', border: 'none' },
  activeChip: { backgroundColor: '#7D58C1' },
  card: { backgroundColor: '#2D3748', borderRadius: '30px', padding: '20px', display: 'flex', alignItems: 'center', marginBottom: '15px' },
  avatar: { width: '65px', height: '65px', borderRadius: '35px', backgroundColor: '#F7FAFC', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  cardContent: { flex: 1, marginLeft: '15px' },
  userName: { color: '#FFF', fontSize: '18px', fontWeight: 'bold' },
  userEmail: { color: '#A0AEC0', fontSize: '14px' },
  badgeRow: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' },
  roleBadge: { padding: '4px 12px', borderRadius: '8px', color: '#FFF', fontSize: '11px', fontWeight: 'bold' },
  statusText: { fontSize: '13px', fontWeight: 'bold', color: '#48BB78' },
  editButton: { backgroundColor: '#7D58C1', padding: '8px 20px', borderRadius: '18px', border: 'none', color: '#FFF', fontWeight: 'bold' },
  addNewBtn: { position: 'fixed', bottom: '30px', left: '25px', right: '25px', backgroundColor: '#6C5CE7', borderRadius: '18px', height: '60px', border: 'none', color: '#FFF', fontSize: '20px', fontWeight: 'bold' }
};
