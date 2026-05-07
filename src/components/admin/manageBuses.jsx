
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

const BASE_URL = "http://192.168.1.100/MAP25_Sem7/api/AdminBus";

export default function ManageBusesScreen() {
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBusesData = async () => {
    setLoading(true);
    try {
      // Fetching list
      const res = await DataService.get("/AdminBus/GetBuses");
      const busesList = res.data;

      // Adding driver details
      const detailedBuses = await Promise.all(
        busesList.map(async (bus) => {
          try {
            const driverRes = await DataService.get(`/AdminBus/GetCurrentDriver?bus_id=${bus.bus_id}`);
            return { ...bus, currentDriver: driverRes.data };
          } catch {
            return { ...bus, currentDriver: null };
          }
        })
      );
      setBuses(detailedBuses);
    } catch (error) {
      console.error(error);
      window.alert("Error: Could not load buses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusesData();
  }, []);

  const handleEndAssignment = async (bus_id) => {
    const confirm = window.confirm("Are you sure you want to remove this driver from the bus?");
    if (confirm) {
      try {
        await DataService.post(`/AdminBus/EndBusAssignment?bus_id=${bus_id}`);
        window.alert("Success: Assignment ended");
        fetchBusesData();
      } catch (error) {
        window.alert("Error: Failed to end assignment");
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Manage Info</h1>
        <div style={styles.adminProfile}>
          <div style={styles.avatar}>👤</div>
          <span style={styles.adminLabel}>Admin</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabBar}>
        <span style={styles.tabActive}>Buses</span>
        <span style={styles.tabInactive}>Travel Logs</span>
        <span style={styles.tabInactive}>Reports</span>
      </div>

      {/* Bus List */}
      <div style={styles.listContainer}>
        {loading ? (
          <div style={styles.loader}>Loading...</div>
        ) : (
          <>
            {buses.map((item) => (
              <div key={item.bus_id} style={styles.card}>
                <div style={styles.busIconContainer}>
                  <span style={{ fontSize: '40px' }}>🚌</span>
                </div>
                <div style={styles.infoContainer}>
                  <h3 style={styles.busNumber}>{item.bus_number}</h3>
                  <p style={styles.routeText}>Route: {item.RouteName}</p>

                  {item.currentDriver ? (
                    <div style={styles.driverBadge}>
                      <span style={styles.driverName}>Driver: {item.currentDriver.name}</span>
                    </div>
                  ) : (
                    <p style={styles.noDriverText}>No Driver Assigned</p>
                  )}

                  <div style={styles.actionRow}>
                    {item.currentDriver ? (
                      <button 
                        style={styles.endBtn} 
                        onClick={() => handleEndAssignment(item.bus_id)}
                      >
                        End Assignment
                      </button>
                    ) : (
                      <button 
                        style={styles.assignBtn} 
                        onClick={() => navigate("/assign-driver", { state: { bus: item } })}
                      >
                        Assign Driver
                      </button>
                    )}
                    <button 
                      style={styles.historyBtn} 
                      onClick={() => navigate("/bus-history", { state: { busId: item.bus_id } })}
                    >
                      History
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add New Bus Button */}
            <button 
              style={styles.addBusBtn} 
              onClick={() => navigate("/add-bus")}
            >
              + Add New Bus
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: "#1A243A", paddingBottom: '50px' },
  header: { display: 'flex', justifyContent: 'space-between', padding: '20px', paddingTop: '50px', alignItems: 'center' },
  title: { color: '#FFF', fontSize: '28px', fontWeight: 'bold', margin: 0 },
  adminProfile: { alignItems: 'center', display: 'flex', flexDirection: 'column' },
  avatar: { width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#D1D5DB', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  adminLabel: { color: '#FFF', fontSize: '10px', marginTop: '4px' },
  tabBar: { display: 'flex', backgroundColor: '#E91E63', margin: '0 15px', borderRadius: '10px', padding: '10px', justifyContent: 'space-around' },
  tabActive: { color: '#FFF', fontWeight: 'bold', borderBottom: '2px solid #FFF', cursor: 'pointer' },
  tabInactive: { color: '#FFCDD2', cursor: 'pointer' },
  listContainer: { padding: '15px', maxWidth: '600px', margin: '0 auto' },
  card: { backgroundColor: '#B0BEC5', borderRadius: '20px', padding: '15px', display: 'flex', marginBottom: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
  busIconContainer: { backgroundColor: '#FFF', borderRadius: '15px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  infoContainer: { flex: 1, marginLeft: '15px' },
  busNumber: { fontSize: '20px', fontWeight: 'bold', color: '#1A243A', margin: 0 },
  routeText: { fontSize: '14px', color: '#37474F', margin: '2px 0' },
  noDriverText: { color: '#D32F2F', fontWeight: 'bold', fontSize: '12px', margin: '5px 0' },
  driverBadge: { backgroundColor: '#7D58C1', padding: '4px 8px', borderRadius: '5px', display: 'inline-block' },
  driverName: { color: '#FFF', fontSize: '12px', fontWeight: 'bold' },
  actionRow: { display: 'flex', marginTop: '10px', gap: '10px' },
  assignBtn: { backgroundColor: '#4CAF50', padding: '8px 12px', borderRadius: '10px', border: 'none', color: '#FFF', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  endBtn: { backgroundColor: '#E91E63', padding: '8px 12px', borderRadius: '10px', border: 'none', color: '#FFF', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  historyBtn: { backgroundColor: '#1A243A', padding: '8px 12px', borderRadius: '10px', border: 'none', color: '#FFF', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  addBusBtn: { backgroundColor: '#7D58C1', padding: '18px', borderRadius: '15px', marginTop: '10px', border: 'none', color: '#FFF', fontSize: '18px', fontWeight: 'bold', width: '100%', cursor: 'pointer' },
  loader: { color: '#FFF', textAlign: 'center', marginTop: '50px' }
};







