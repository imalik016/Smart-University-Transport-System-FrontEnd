import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DataService from "../../services/axios";

export default function AssignDriverScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Access the bus object passed from the previous screen
  const { bus } = location.state || {};

  const [drivers, setDrivers] = useState([]);
  const [selectedDriverId, setSelectedDriverId] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // Safety check: if no bus is passed, redirect back
    if (!bus) {
      navigate(-1);
      return;
    }
    fetchDrivers();
  }, [bus, navigate]);

  const fetchDrivers = async () => {
    try {
      const res = await DataService.get("/AdminManageUsers/GetAllUsers");
      // Filter for drivers
      const onlyDrivers = res.data.filter(u => u.role === "Driver" && u.driver_id != null);
      setDrivers(onlyDrivers);
    } catch (e) {
      window.alert("Error: Failed to load driver list");
    } finally {
      setFetching(false);
    }
  };

  const handleAssign = async () => {
    if (!selectedDriverId) {
      window.alert("Validation: Please select a driver from the list");
      return;
    }

    setLoading(true);
    try {
      // POST request to assign the driver
      await DataService.post(`/AdminBus/AssignBusToDriver?bus_id=${bus.bus_id}&driver_id=${selectedDriverId}`);
      
      window.alert("Success: Driver assigned to bus successfully!");
      navigate(-1);
    } catch (e) {
      const errorMsg = e.response?.data?.Message || "Assignment failed. Check if driver is already active.";
      window.alert(`Assignment Failed: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div style={styles.loader}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.busInfo}>Assigning to: {bus?.bus_number}</h2>
        <label style={styles.label}>Select Available Driver</label>

        <div style={styles.pickerWrapper}>
          <select 
            value={selectedDriverId}
            onChange={(e) => setSelectedDriverId(e.target.value)}
            style={styles.picker}
          >
            <option value="" disabled>Select a driver...</option>
            {drivers.map((d) => (
              <option key={d.driver_id} value={d.driver_id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div style={styles.loader}>Saving...</div>
        ) : (
          <button style={styles.saveBtn} onClick={handleAssign}>
            Confirm Assignment
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: "#1A243A", padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: "#2C3E50", padding: '20px', borderRadius: '15px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
  busInfo: { color: '#7D58C1', fontSize: '22px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', margin: 0 },
  label: { color: '#FFF', fontSize: '16px', marginBottom: '10px', display: 'block' },
  pickerWrapper: { backgroundColor: '#FFF', borderRadius: '10px', marginBottom: '25px', overflow: 'hidden', padding: '5px' },
  picker: { height: '50px', width: '100%', border: 'none', fontSize: '16px', backgroundColor: 'transparent', outline: 'none' },
  saveBtn: { backgroundColor: '#7D58C1', padding: '15px', borderRadius: '10px', border: 'none', color: '#FFF', fontWeight: 'bold', fontSize: '18px', width: '100%', cursor: 'pointer' },
  loader: { color: '#FFF', textAlign: 'center', fontSize: '18px', marginTop: '20px' }
};
