// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DataService from '../../services/axios'; // Assuming this service is set up

// export default function AddRouteScreen() {
//   const navigate = useNavigate();
//   const [routeName, setRouteName] = useState('');
//   const [allStops, setAllStops] = useState([]);
//   const [selectedStops, setSelectedStops] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStops();
//   }, []);

//   const fetchStops = async () => {
//     try {
//       const response = await DataService.get('/AdminRouteStop/GetStops');
//       setAllStops(response.data);
//     } catch (error) {
//       window.alert("Error: Could not load stops from server");
//     }
//   };

//   const toggleStop = (stop) => {
//     const isSelected = selectedStops.find(s => s.stop_id === stop.stop_id);
//     if (isSelected) {
//       setSelectedStops(selectedStops.filter(s => s.stop_id !== stop.stop_id));
//     } else {
//       setSelectedStops([...selectedStops, stop]);
//     }
//   };

//   const handleSaveRoute = async () => {
//     if (!routeName.trim() || selectedStops.length === 0) {
//       window.alert("Error: Please enter a route name and select at least one stop");
//       return;
//     }

//     setLoading(true);

//     try {
//       const routeResponse = await DataService.post('/AdminRouteStop/AddRoute', { route_name: routeName });
//       const routeId = routeResponse.data.route_id;

//       for (const stop of selectedStops) {
//         await DataService.post(`/AdminRouteStop/AddStopToRoute?route_id=${routeId}&stop_id=${stop.stop_id}`);
//       }

//       window.alert("Success: Route and stops saved successfully");
//       setRouteName('');
//       setSelectedStops([]);
//     } catch (error) {
//       window.alert("Error: Failed to save route details");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.backgroundPlaceholder} />

//       <div style={styles.modalContainer}>
//         <div style={styles.profileContainer}>
//           <div style={styles.avatar}>👤</div>
//           <span style={styles.adminLabel}>Admin</span>
//         </div>

//         <h2 style={styles.modalTitle}>Route Details</h2>

//         <input
//           style={styles.input}
//           placeholder="Route Name"
//           value={routeName}
//           onChange={(e) => setRouteName(e.target.value)}
//         />

//         <div style={styles.sectionBox}>
//           <p style={styles.sectionTitle}>Selected Stops</p>
//           <div style={styles.chipContainer}>
//             {selectedStops.map(stop => (
//               <div key={stop.stop_id} style={styles.chip}>
//                 <span style={styles.chipText}>{stop.stop_name}</span>
//               </div>
//             ))}
//             {selectedStops.length === 0 && <span style={styles.noneText}>None selected</span>}
//           </div>
//         </div>

//         <div style={{...styles.sectionBox, maxHeight: '200px', overflowY: 'auto' }}>
//           {allStops.map(stop => (
//             <label key={stop.stop_id} style={styles.checkboxRow}>
//               <input
//                 type="checkbox"
//                 checked={selectedStops.some(s => s.stop_id === stop.stop_id)}
//                 onChange={() => toggleStop(stop)}
//                 style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
//               />
//               <span style={styles.checkboxLabel}>{stop.stop_name}</span>
//             </label>
//           ))}
//         </div>

//         {loading ? (
//           <div style={{ color: '#FFF', textAlign: 'center', margin: '20px 0' }}>Loading...</div>
//         ) : (
//           <>
//             <button style={styles.addBtn} onClick={handleSaveRoute}>ADD</button>
//             <button style={styles.closeBtn} onClick={() => navigate(-1)}>CLOSE</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { minHeight: '100vh',minWidth:'80vw', backgroundColor: '#1A243A', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
//   backgroundPlaceholder: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0F172A', opacity: 0.5 },
//   modalContainer: { backgroundColor: '#09215c', borderRadius: '25px', padding: '20px', border: '1px solid #FFF', width: '100%', maxWidth: '400px', zIndex: 1 },
//   modalTitle: { fontSize: '24px', color: '#FFF', fontWeight: 'bold', textAlign: 'center', margin: '10px 0 20px 0' },
//   profileContainer: { alignItems: "center", display: 'flex', flexDirection: 'column' },
//   avatar: { width: '45px', height: '45px', borderRadius: '22.5px', backgroundColor: "#D1C4E9", display: 'flex', justifyContent: 'center', alignItems: 'center' },
//   adminLabel: { color: "#FFF", fontSize: '12px', marginTop: '4px' },
//   input: { borderBottom: '1px solid #FFF', backgroundColor: 'transparent', color: '#FFF', fontSize: '16px', textAlign: 'center', marginBottom: '20px', padding: '5px', width: '100%', borderTop: 'none', borderLeft: 'none', borderRight: 'none', outline: 'none' },
//   sectionBox: { border: '1px solid rgba(255,255,255,0.5)', borderRadius: '15px', padding: '10px', marginBottom: '15px' },
//   sectionTitle: { color: '#FFF', fontSize: '12px', margin: '0 0 8px 0' },
//   chipContainer: { display: 'flex', flexWrap: 'wrap' },
//   chip: { backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '15px', padding: '6px 12px', margin: '4px' },
//   chipText: { color: '#FFF', fontSize: '12px' },
//   noneText: { color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontStyle: 'italic' },
//   checkboxRow: { display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#FFF', cursor: 'pointer' },
//   checkboxLabel: { fontSize: '14px', marginLeft: '10px' },
//   addBtn: { backgroundColor: '#FFF', borderRadius: '10px', padding: '12px', border: 'none', width: '100%', color: '#168374', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '10px' },
//   closeBtn: { backgroundColor: '#FFF', borderRadius: '10px', padding: '12px', border: 'none', width: '100%', color: '#168374', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }
// };

// // import React from "react";

// // function AddRouteScreen() {
// //   const containerStyle = {
// //     minHeight: "100vh",
// //     backgroundColor: "#1A243A",
// //     paddingBottom: "40px",
// //     boxSizing: "border-box",
// //   };

// //   const headerStyle = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     padding: "20px",
// //     paddingTop: "20px",
// //   };

// //   const adminContainerStyle = {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //   };

// //   const adminCircleStyle = {
// //     width: "38px",
// //     height: "38px",
// //     borderRadius: "19px",
// //     backgroundColor: "#E5E7EB",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   };

// //   const adminIconStyle = { fontSize: "16px" };
// //   const adminTextStyle = {
// //     color: "#FFFFFF",
// //     fontSize: "12px",
// //     marginTop: "4px",
// //     fontWeight: "bold",
// //   };

// //   const iconWrapperStyle = {
// //     textAlign: "center",
// //     marginTop: "30px",
// //     marginBottom: "20px",
// //   };

// //   const iconBoxStyle = {
// //     width: "120px",
// //     height: "120px",
// //     borderRadius: "20px",
// //     backgroundColor: "#E6E6E6",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     margin: "0 auto 12px auto",
// //   };

// //   const iconTextStyle = { fontSize: "48px" };

// //   const screenTitleStyle = {
// //     color: "#FFFFFF",
// //     fontSize: "22px",
// //     fontWeight: "bold",
// //   };

// //   const formWrapperStyle = {
// //     padding: "0 20px",
// //   };

// //   const formCardStyle = {
// //     backgroundColor: "#E6E6E6",
// //     borderRadius: "20px",
// //     padding: "20px",
// //   };

// //   const labelStyle = {
// //     fontSize: "14px",
// //     fontWeight: "bold",
// //     color: "#111",
// //     marginBottom: "6px",
// //     marginTop: "10px",
// //     display: "block",
// //   };

// //   const inputStyle = {
// //     width: "100%",
// //     padding: "12px",
// //     fontSize: "16px",
// //     borderRadius: "10px",
// //     marginBottom: "12px",
// //     border: "none",
// //     outline: "none",
// //     boxSizing: "border-box",
// //   };

// //   const stopsContainerStyle = { marginBottom: "16px" };
// //   const stopItemStyle = {
// //     display: "flex",
// //     alignItems: "center",
// //     marginBottom: "10px",
// //     cursor: "pointer",
// //   };
// //   const checkboxStyle = {
// //     width: "20px",
// //     height: "20px",
// //     borderRadius: "6px",
// //     backgroundColor: "#7A60E0",
// //     marginRight: "12px",
// //   };
// //   const stopTextStyle = { fontSize: "14px", color: "#111" };

// //   const saveButtonStyle = {
// //     backgroundColor: "#7A60E0",
// //     borderRadius: "20px",
// //     padding: "16px",
// //     width: "100%",
// //     color: "#FFFFFF",
// //     fontSize: "18px",
// //     fontWeight: "bold",
// //     border: "none",
// //     cursor: "pointer",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       {/* Header */}
// //       <div style={headerStyle}>
// //         <div></div>
// //         <div style={adminContainerStyle}>
// //           <div style={adminCircleStyle}>
// //             <span style={adminIconStyle}>👤</span>
// //           </div>
// //           <div style={adminTextStyle}>Admin</div>
// //         </div>
// //       </div>

// //       {/* Icon & Title */}
// //       <div style={iconWrapperStyle}>
// //         <div style={iconBoxStyle}>
// //           <span style={iconTextStyle}>🗺️</span>
// //         </div>
// //         <div style={screenTitleStyle}>Add Route</div>
// //       </div>

// //       {/* Form Card */}
// //       <div style={formWrapperStyle}>
// //         <div style={formCardStyle}>
// //           <label style={labelStyle}>Route Name</label>
// //           <input type="text" placeholder="Enter Route Name" style={inputStyle} />

// //           <label style={labelStyle}>Distance (Kms)</label>
// //           <input type="number" placeholder="Enter Distance" style={inputStyle} />

// //           <label style={labelStyle}>Number of Stops</label>
// //           <div style={stopsContainerStyle}>
// //             <div style={stopItemStyle}>
// //               <div style={checkboxStyle}></div>
// //               <span style={stopTextStyle}>Mandimorr</span>
// //             </div>
// //             <div style={stopItemStyle}>
// //               <div style={checkboxStyle}></div>
// //               <span style={stopTextStyle}>Carriage Factory</span>
// //             </div>
// //             <div style={stopItemStyle}>
// //               <div style={checkboxStyle}></div>
// //               <span style={stopTextStyle}>Campus Main Gate</span>
// //             </div>
// //           </div>

// //           <button style={saveButtonStyle}>Save</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddRouteScreen;

import React, { useState, useEffect } from "react";
import DataService from "../../services/axios";

function AddRouteScreen() {
    const [routeName, setRouteName] = useState("");
    const [allStops, setAllStops] = useState([]);
    const [selectedStops, setSelectedStops] = useState([]);

    useEffect(() => {
        // Fetch stops to populate the checklist
        DataService.get("/AdminRouteStop/GetStops").then(res => setAllStops(res.data));
    }, []);

    const handleCheckboxChange = (stopId) => {
        setSelectedStops(prev => 
            prev.includes(stopId) ? prev.filter(id => id !== stopId) : [...prev, stopId]
        );
    };

    const handleCreateRoute = async () => {
        if (!routeName || selectedStops.length === 0) return alert("Enter route name and select stops");

        try {
            // 1. Create the Route
            const routeRes = await DataService.post("/AdminRouteStop/AddRoute", { route_name: routeName });
            const newRouteId = routeRes.data.route_id;

            // 2. Assign each selected stop to this route
            for (const stopId of selectedStops) {
                await DataService.post(`/AdminRouteStop/AddStopToRoute?route_id=${newRouteId}&stop_id=${stopId}`);
            }

            alert("Route and Stops successfully linked!");
        } catch (error) {
            alert("Error creating route");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.routeCard}>
                <h2 style={{textAlign: 'center'}}>Route Details</h2>
                <input 
                    style={styles.routeNameInput} 
                    placeholder="Route Name" 
                    onChange={(e) => setRouteName(e.target.value)} 
                />

                <div style={styles.stopSelector}>
                    <p style={{color: '#999'}}>Selected Stops: {selectedStops.length}</p>
                    <div style={styles.checklist}>
                        {allStops.map(stop => (
                            <div key={stop.stop_id} style={styles.checkItem}>
                                <input 
                                    type="checkbox" 
                                    onChange={() => handleCheckboxChange(stop.stop_id)} 
                                />
                                <span>{stop.stop_name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button style={styles.btnAdd} onClick={handleCreateRoute}>ADD ROUTE</button>
                <button style={styles.btnClose} onClick={() => window.history.back()}>CLOSE</button>
            </div>
        </div>
    );
};

const styles = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#1a233a' },
    routeCard: { backgroundColor: '#0d1b3e', padding: '30px', borderRadius: '25px', border: '1px solid white', width: '400px', color: 'white' },
    routeNameInput: { width: '100%', background: 'transparent', borderBottom: '1px solid white', borderTop: 'none', borderLeft: 'none', borderRight: 'none', color: 'white', padding: '10px', marginBottom: '20px', outline: 'none' },
    stopSelector: { border: '1px solid #555', borderRadius: '15px', padding: '15px', marginBottom: '20px' },
    checklist: { maxHeight: '200px', overflowY: 'auto' },
    checkItem: { display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' },
    btnAdd: { width: '100%', padding: '15px', backgroundColor: 'white', color: '#004d40', fontWeight: 'bold', borderRadius: '10px', border: 'none', marginBottom: '10px' },
    btnClose: { width: '100%', padding: '15px', backgroundColor: 'white', color: '#004d40', fontWeight: 'bold', borderRadius: '10px', border: 'none' }
};

export default AddRouteScreen;