// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DataService from "../../services/axios";

// export default function HistoryScreen() {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Retrieve busId from location state
//   const { busId } = location.state || {};
  
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Redirect if no busId is found
//     if (!busId) {
//       navigate(-1);
//       return;
//     }

//     const fetchHistory = async () => {
//       try {
//         const res = await DataService.get(`/AdminBus/GetBusAssignmentHistory?bus_id=${busId}`);
//         setHistory(res.data);
//       } catch (error) {
//         console.error("Error fetching history:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHistory();
//   }, [busId, navigate]);

//   return (
//     <div style={styles.container}>
//       {loading ? (
//         <div style={styles.loader}>Loading history...</div>
//       ) : (
//         <div style={styles.listContainer}>
//           {history.length > 0 ? (
//             history.map((item, index) => (
//               <div key={index} style={styles.logCard}>
//                 <h3 style={styles.driverName}>👤 {item.name}</h3>
//                 <p style={styles.dateText}>
//                   Assigned: {new Date(item.assigned_date).toLocaleDateString()}
//                 </p>
//                 <p style={styles.dateText}>
//                   Ended: {item.end_date ? new Date(item.end_date).toLocaleDateString() : "Present"}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p style={{ color: "#FFF", textAlign: "center" }}>No history found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: { minHeight: '100vh', backgroundColor: "#1A243A", padding: '20px' },
//   listContainer: { maxWidth: '600px', margin: '0 auto' },
//   logCard: { backgroundColor: "#2C3E50", padding: '15px', borderRadius: '10px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
//   driverName: { color: "#FFF", fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' },
//   dateText: { color: "#BDC3C7", fontSize: '13px', margin: '4px 0 0 0' },
//   loader: { color: '#FFF', textAlign: 'center', marginTop: '50px' }
// };
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataService from "../../services/axios";

const AssignmentHistory = () => {
    const { busId } = useParams();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        DataService.get(`/AdminBus/GetBusAssignmentHistory?bus_id=${busId}`)
            .then(res => setHistory(res.data));
    }, [busId]);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <button onClick={() => window.history.back()}>←</button>
                <h2>Assignment History</h2>
            </header>
            {history.map((log, index) => (
                <div key={index} style={styles.historyCard}>
                    <div style={styles.userIcon}>👤</div>
                    <div>
                        <h4 style={{margin: 0}}>{log.name}</h4>
                        <p style={styles.dateText}>Assigned: {new Date(log.assigned_date).toLocaleDateString()}</p>
                        <p style={styles.dateText}>Ended: {log.end_date ? new Date(log.end_date).toLocaleDateString() : "Present"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: { padding: '20px', backgroundColor: '#1a233a', minHeight: '100vh', color: 'white' },
    header: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' },
    historyCard: { backgroundColor: '#263238', padding: '15px', borderRadius: '12px', marginBottom: '10px', display: 'flex', gap: '15px', alignItems: 'center' },
    userIcon: { fontSize: '24px', backgroundColor: '#1a233a', padding: '10px', borderRadius: '50%' },
    dateText: { fontSize: '13px', color: '#b0bec5', margin: '2px 0' }
};

export default AssignmentHistory;