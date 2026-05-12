// import React from "react";
// import userImage from "../../assets/images/Usericon.png";

// function ManageInfoScreen() {

//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#1A243A",
//     paddingBottom: "40px",
//     position: "relative",
//   };

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "20px 30px",
//   };

//   const titleStyle = {
//     color: "#FFFFFF",
//     fontSize: "22px",
//     fontWeight: "bold",
//   };

//   const adminContainerStyle = {
//     textAlign: "center",
//   };

//   const adminIconStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//   };

//   const adminTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//   };

//   const tabBarStyle = {
//     backgroundColor: "#D8298C",
//     margin: "0 30px",
//     borderRadius: "12px",
//     padding: "10px",
//     display: "flex",
//     justifyContent: "space-around",
//     marginBottom: "20px",
//   };

//   const tabStyle = {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     cursor: "pointer",
//   };

//   const activeTabStyle = {
//     textDecoration: "underline",
//   };

//   const cardContainerStyle = {
//     padding: "0 30px",
//   };

//   const cardStyle = {
//     backgroundColor: "#E6E6E6",
//     borderRadius: "15px",
//     padding: "15px",
//     marginBottom: "15px",
//     color: "#000",
//   };

//   const deleteButtonStyle = {
//     backgroundColor: "#D8298C",
//     border: "none",
//     color: "#FFF",
//     padding: "6px 12px",
//     borderRadius: "10px",
//     cursor: "pointer",
//     marginTop: "8px",
//   };

//   return (
//     <div style={containerStyle}>

//       <div style={headerStyle}>
//         <div style={titleStyle}>Manage Info</div>

//         <div style={adminContainerStyle}>
//           <img src={userImage} alt="Admin" style={adminIconStyle} />
//           <div style={adminTextStyle}>Admin</div>
//         </div>
//       </div>

//       <div style={tabBarStyle}>
//         <span style={{ ...tabStyle, ...activeTabStyle }}>Schedule</span>
//         <span style={tabStyle}>Travel Logs</span>
//         <span style={tabStyle}>Reports</span>
//       </div>

//       <div style={cardContainerStyle}>
//         <div style={cardStyle}>
//           <strong>Bus-01</strong>
//           <div>Departure: 7:30 | Return: 2</div>
//           <div>Type: Morning</div>
//           <button style={deleteButtonStyle}>Delete</button>
//         </div>

//         <div style={cardStyle}>
//           <strong>Bus-02</strong>
//           <div>Departure: 8:30 | Return: 3</div>
//           <div>Type: Evening</div>
//           <button style={deleteButtonStyle}>Delete</button>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default ManageInfoScreen;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

function ManageInfo () {
    const [buses, setBuses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const response = await DataService.get("/AdminBus/GetBuses");
            const busData = response.data;

            // Fetch current driver for each bus to match your UI
            const busesWithDrivers = await Promise.all(busData.map(async (bus) => {
                const driverRes = await DataService.get(`/AdminBus/GetCurrentDriver?bus_id=${bus.bus_id}`);
                return { ...bus, currentDriver: driverRes.data };
            }));

            setBuses(busesWithDrivers);
        } catch (error) {
            console.error("Error fetching buses", error);
        }
    };

    const handleEndAssignment = async (busId) => {
        try {
            await DataService.post(`/AdminBus/EndBusAssignment?bus_id=${busId}`);
            fetchBuses(); // Refresh list
        } catch (error) {
            alert("Error ending assignment");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>Manage Info</h2>
                <div style={styles.tabBar}>
                    <span style={styles.activeTab}>Buses</span>
                    <span>Travel Logs</span>
                    <span>Reports</span>
                </div>
            </div>

            <div style={styles.listContainer}>
                {buses.map((bus) => (
                    <div key={bus.bus_id} style={styles.busCard}>
                        <div style={styles.busIconSection}>
                            {/* <img src="/bus-icon.png" alt="Bus" style={{width: 50}} /> */}
                            🚌
                        </div>
                        <div style={styles.busDetails}>
                            <h3>Bus {bus.bus_number}</h3>
                            <p>Route: {bus.RouteName}</p>
                            {bus.currentDriver ? (
                                <p style={styles.driverActive}>Driver: {bus.currentDriver.name}</p>
                            ) : (
                                <p style={styles.driverNone}>No Driver Assigned</p>
                            )}
                            
                            <div style={styles.buttonGroup}>
                                {bus.currentDriver ? (
                                    <button onClick={() => handleEndAssignment(bus.bus_id)} style={styles.btnEnd}>End Assignment</button>
                                ) : (
                                    <button onClick={() => navigate(`/admin/manage-info/assign-driver/${bus.bus_id}/${bus.bus_number}`)} style={styles.btnAssign}>Assign Driver</button>
                                )}
                                <button onClick={() => navigate(`/admin/manage-info/show-history/${bus.bus_id}`)} style={styles.btnHistory}>History</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button style={styles.btnAddBus} onClick={() => navigate("/admin/manage-info/add-bus")}>+ Add New Bus</button>
        </div>
    );
};

// Styles for the UI
const styles = {
    container: { width:"80vw",padding: '20px', backgroundColor: '#1a233a', minHeight: '100vh', color: 'white' },
    tabBar: { display: 'flex', gap: '20px', backgroundColor: '#e91e63', padding: '10px', borderRadius: '8px', marginBottom: '20px' },
    activeTab: { borderBottom: '2px solid white', fontWeight: 'bold' },
    busCard: { display: 'flex', backgroundColor: '#b0bec5', borderRadius: '15px', padding: '4px', marginBottom: '15px', color: '#333' },
    busIconSection: { minHeight:"10px",width:"50",backgroundColor: 'white', borderRadius: '12px', padding: '8px', marginRight: '15px', display: 'flex', alignItems: 'center' },
    driverActive: { marginTop:'3px',color: 'white', backgroundColor: '#7e57c2', padding: '2px 5px', borderRadius: '5px', display: 'inline-block' },
    driverNone: { color: 'red', fontWeight: 'bold', marginTop:'3px' },
    buttonGroup: { marginTop: '7px', display: 'flex', gap: '10px' },
    btnAssign: { backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px' },
    btnEnd: { backgroundColor: '#e91e63', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px' },
    btnHistory: { backgroundColor: '#263238', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px' },
    btnAddBus: { width: '100%', padding: '15px', backgroundColor: '#7e57c2', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', cursor: 'pointer' }
};

export default ManageInfo;







