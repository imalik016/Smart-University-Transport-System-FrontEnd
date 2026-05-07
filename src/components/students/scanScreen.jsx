import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./BottomNavbar";

export default function ScanScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const scanType = location.state?.type || "BOARD"; // Default to BOARD if state is missing

  return (
    <div style={styles.container}>
      <div style={styles.scanArea}>
        {/* The purple square from 2nd.jpeg */}
        <div style={styles.scannerFrame}></div>
        
        <h2 style={styles.scanText}>
          Scanning for {scanType}...
        </h2>

        <button style={styles.cancelBtn} onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>

      <Sidebar active="scan" />
    </div>
  );
}

const styles = {
  container: { height: '100vh', backgroundColor: "#0D1117", display: 'flex', flexDirection: 'column' },
  scanArea: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  scannerFrame: { 
    width: '280px', height: '280px', border: '4px solid #7D58C1', 
    borderRadius: '40px', marginBottom: '30px' 
  },
  scanText: { color: '#FFF', fontSize: '20px', fontWeight: 'bold' },
  cancelBtn: { 
    marginTop: '50px', backgroundColor: '#FFF', color: '#000', 
    padding: '12px 40px', borderRadius: '25px', border: 'none', fontWeight: 'bold' 
  }
};
