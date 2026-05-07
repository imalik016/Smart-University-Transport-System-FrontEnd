import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

export default function HistoryScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve busId from location state
  const { busId } = location.state || {};
  
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect if no busId is found
    if (!busId) {
      navigate(-1);
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await DataService.get(`/AdminBus/GetBusAssignmentHistory?bus_id=${busId}`);
        setHistory(res.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [busId, navigate]);

  return (
    <div style={styles.container}>
      {loading ? (
        <div style={styles.loader}>Loading history...</div>
      ) : (
        <div style={styles.listContainer}>
          {history.length > 0 ? (
            history.map((item, index) => (
              <div key={index} style={styles.logCard}>
                <h3 style={styles.driverName}>👤 {item.name}</h3>
                <p style={styles.dateText}>
                  Assigned: {new Date(item.assigned_date).toLocaleDateString()}
                </p>
                <p style={styles.dateText}>
                  Ended: {item.end_date ? new Date(item.end_date).toLocaleDateString() : "Present"}
                </p>
              </div>
            ))
          ) : (
            <p style={{ color: "#FFF", textAlign: "center" }}>No history found.</p>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: "#1A243A", padding: '20px' },
  listContainer: { maxWidth: '600px', margin: '0 auto' },
  logCard: { backgroundColor: "#2C3E50", padding: '15px', borderRadius: '10px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' },
  driverName: { color: "#FFF", fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0' },
  dateText: { color: "#BDC3C7", fontSize: '13px', margin: '4px 0 0 0' },
  loader: { color: '#FFF', textAlign: 'center', marginTop: '50px' }
};
