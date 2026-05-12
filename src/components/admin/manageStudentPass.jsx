// import React from "react";

// function ManageStudentPassScreen() {

//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#1A243A",
//     position: "relative",
//     paddingBottom: "120px",
//     boxSizing: "border-box",
//   };

//   /* Header */
//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "20px 30px",
//   };
//   const screenTitleStyle = {
//     color: "#FFFFFF",
//     fontSize: "22px",
//     fontWeight: "bold",
//   };
//   const adminContainerStyle = { textAlign: "center" };
//   const adminCircleStyle = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     backgroundColor: "#E5E7EB",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "0 auto",
//   };
//   const adminIconStyle = { fontSize: "16px" };
//   const adminTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//     fontWeight: "bold",
//   };

//   /* Search Section */
//   const searchRowStyle = {
//     display: "flex",
//     padding: "0 30px",
//     marginTop: "16px",
//     width:"750px",
//     marginBottom: "10px",
//     marginLeft:"280px",
//   };
//   const searchInputStyle = {
//     flex: 1,
//     width:"300px",
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "0 12px",
//     height: "42px",
//     border: "none",
//     outline: "none",
//   };
//   const searchButtonStyle = {
//     marginLeft: "10px",
//     width:"100px",
//     backgroundColor: "#00b894",
//     borderRadius: "10px",
//     padding: "0 16px",
//     display: "flex",
//     justifyContent: "center",
//     cursor: "pointer",
//   };
//   const searchButtonTextStyle = {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   };

//   /* Cards */
//   const listStyle = { padding: "0 30px" };
//   const cardStyle = {
//     width:"700px",
//     display: "flex",
//     flexDirection: "row",
//     backgroundColor: "#E6E6E6",
//     borderRadius: "15px",
//     marginLeft:"280px",
//     padding: "12px",
//     marginBottom: "16px",
//     alignItems: "center",
//   };
//   const avatarStyle = {
//     width: "50px",
//     height: "50px",
//     borderRadius: "50%",
//     backgroundColor: "#FFFFFF",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: "12px",
//   };
//   const avatarTextStyle = { fontSize: "22px" };
//   const cardInfoStyle = { flex: 1 };
//   const studentNameStyle = {
//     fontWeight: "bold",
//     fontSize: "16px",
//     color: "#000",
//     marginBottom: "4px",
//   };
//   const passDetailsStyle = {
//     fontSize: "14px",
//     color: "#333",
//     marginBottom: "2px",
//   };
//   const ticketStyle = { fontSize: "14px", color: "#333", marginBottom: "2px" };
//   const expiryStyle = { fontSize: "14px", color: "#FF9900", marginBottom: "8px" };
//   const actionRowStyle = { display: "flex", gap: "6px" };
//   const actionButtonStyle = {
//     flex: 1,
//     backgroundColor: "#555",
//     borderRadius: "10px",
//     padding: "6px 0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     cursor: "pointer",
//     border: "none",
//   };

//   /* Floating Action Button */
//   const fabStyle = {
//     position: "fixed",
//     bottom: "30px",
//     right: "30px",
//     width: "50px",
//     height: "50px",
//     borderRadius: "50%",
//     backgroundColor: "#7A60E0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "28px",
//     color: "#FFFFFF",
//     cursor: "pointer",
//     border: "none",
//   };

//   /* Pagination */
//   const paginationStyle = {
//     position: "fixed",
//     bottom: "10px",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     gap: "6px",
//   };
//   const dotStyle = (color) => ({
//     width: "10px",
//     height: "10px",
//     borderRadius: "50%",
//     backgroundColor: color,
//   });

//   return (
//     <div style={containerStyle}>

//       {/* Header */}
//       <div style={headerStyle}>
//         <div style={screenTitleStyle}>Manage Student Pass</div>
//         <div style={adminContainerStyle}>
//           <div style={adminCircleStyle}>
//             <span style={adminIconStyle}>👤</span>
//           </div>
//           <div style={adminTextStyle}>Admin</div>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div style={searchRowStyle}>
//         <input type="text" placeholder="Search student" style={searchInputStyle} />
//         <button style={searchButtonStyle}>
//           <span style={searchButtonTextStyle}>Search</span>
//         </button>
//       </div>

//       {/* Cards */}
//       <div style={listStyle}>

//         <div style={cardStyle}>
//           <div style={avatarStyle}>
//             <span style={avatarTextStyle}>👤</span>
//           </div>
//           <div style={cardInfoStyle}>
//             <div style={studentNameStyle}>Abdullah Munawar</div>
//             <div style={passDetailsStyle}>Pass ID: 12345 | Route: Campus-City</div>
//             <div style={ticketStyle}>Ticket: 3/100</div>
//             <div style={expiryStyle}>Exp: 18-oct-2025</div>
//             <div style={actionRowStyle}>
//               <button style={actionButtonStyle}>Recharge</button>
//               <button style={{ ...actionButtonStyle, backgroundColor: "#d8298c" }}>Delete</button>
//             </div>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={avatarStyle}>
//             <span style={avatarTextStyle}>👤</span>
//           </div>
//           <div style={cardInfoStyle}>
//             <div style={studentNameStyle}>Sara Ahmed</div>
//             <div style={passDetailsStyle}>Pass ID: 67890 | Route: City-Campus</div>
//             <div style={ticketStyle}>Ticket: 5/100</div>
//             <div style={expiryStyle}>Exp: 22-oct-2025</div>
//             <div style={actionRowStyle}>
//               <button style={actionButtonStyle}>Recharge</button>
//               <button style={{ ...actionButtonStyle, backgroundColor: "#d8298c" }}>Delete</button>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Floating Action Button */}
//       <button style={fabStyle}>+</button>

//       {/* Pagination */}
//       <div style={paginationStyle}>
//         <div style={dotStyle("#7A60E0")}></div>
//         <div style={dotStyle("#555")}></div>
//       </div>

//     </div>
//   );
// }

// export default ManageStudentPassScreen;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

function ManageStudentPassScreen() {
  const [passes, setPasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPasses();
  }, []);

  const fetchPasses = async () => {
    try {
      const res = await DataService.get("/AdminPass/GetAllPasses");
      setPasses(res.data);
    } catch (err) {
      console.error("Error fetching passes", err);
    }
  };

  const filteredPasses = passes.filter(p => 
    p.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.Reg_No.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Student Pass</h2>

      <div style={styles.searchRow}>
        <input 
          type="text" 
          placeholder="Search by name or Reg No..." 
          style={styles.searchInput} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={styles.list}>
        {filteredPasses.map((item) => (
          <div key={item.Reg_No} style={styles.card}>
            <div style={styles.avatar}>👨‍🎓</div>
            <div style={styles.info}>
              <div style={styles.name}>{item.Name}</div>
              <div style={styles.detail}>Reg No: {item.Reg_No}</div>
              <div style={{...styles.detail, color: item.Status === "Active" ? "#00b894" : "#ff7675"}}>
                Status: {item.Status}
              </div>
              <div style={styles.expiry}>
                Valid: {item.StartDate ? new Date(item.StartDate).toLocaleDateString() : "N/A"} to {item.EndDate ? new Date(item.EndDate).toLocaleDateString() : "N/A"}
              </div>
              <div style={styles.actionRow}>
                <button 
                  style={styles.rechargeBtn} 
                  onClick={() => navigate(`/admin/student-pass/recharge-pass/${item.Reg_No}`)}
                >
                  Recharge
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#1A243A", padding: "20px" },
  title: { color: "white", textAlign: "center", marginBottom: "20px" },
  searchRow: { display: "flex", justifyContent: "center", marginBottom: "20px" },
  searchInput: { width: "70%", padding: "10px", borderRadius: "8px", border: "none" },
  list: { display: "flex", flexDirection: "column", alignItems: "center" },
  card: { backgroundColor: "#f0f0f0", width: "80%", maxWidth: "600px", padding: "15px", borderRadius: "12px", display: "flex", marginBottom: "15px" },
  avatar: { fontSize: "40px", marginRight: "15px" },
  info: { flex: 1 },
  name: { color:"#1a1d1c", fontWeight: "bold", fontSize: "18px" },
  detail: { fontSize: "14px", color: "#555" },
  expiry: { fontSize: "14px", color: "#e67e22", margin: "5px 0" },
  actionRow: { marginTop: "10px" },
  rechargeBtn: { marginLeft:"120px",backgroundColor: "#7A60E0", color: "white", border: "none", padding: "8px 15px", borderRadius: "20px", cursor: "pointer" }
};

export default ManageStudentPassScreen;