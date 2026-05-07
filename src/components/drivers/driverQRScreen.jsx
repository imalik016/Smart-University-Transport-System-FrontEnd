import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BASE_URL = "http://192.168.1.100/MAP25_Sem7/api/AdminTrip";

function DriverQRScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Accessing tripId from state (passed via navigate('/driver-qr', { state: { tripId: X } }))
  const { tripId } = location.state || { tripId: 47 }; 

  const qrImageUrl = `${BASE_URL}/GetTripQR/${tripId}`;

  return (
    <div style={styles.container}>
      {/* QR Display Card */}
      <div style={styles.qrCard}>
        <h3 style={styles.instructionText}>Please Scan to Board</h3>
        
        <div style={styles.imageContainer}>
          <img
            src={qrImageUrl}
            alt="Trip QR Code"
            style={styles.qrImage}
          />
        </div>

        <div style={styles.statusBadge}>
          <span style={styles.statusText}>ACTIVE TRIP</span>
        </div>
      </div>

      <p style={styles.footerNote}>
        Scan Now 
      </p>

      <button 
        style={styles.backButton} 
        onClick={() => navigate(-1)}
      >
        <span style={styles.backButtonText}>Close</span>
      </button>
    </div>
  );
}

export default DriverQRScreen;

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: "#1A243A",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
  },
  qrCard: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    maxWidth: '400px', // Prevents it from getting too wide on desktop
    borderRadius: '25px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
  },
  instructionText: {
    color: '#1A243A',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    margin: 0,
  },
  imageContainer: {
    width: '250px',
    height: '250px',
    backgroundColor: '#F9F9F9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    border: '1px solid #EEE',
  },
  qrImage: {
    width: '230px',
    height: '230px',
    objectFit: 'contain',
  },
  statusBadge: {
    marginTop: '20px',
    backgroundColor: '#4CAF50',
    padding: '8px 20px',
    borderRadius: '20px',
  },
  statusText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  footerNote: {
    color: '#BDC3C7',
    textAlign: 'center',
    padding: '0 40px',
    marginTop: '30px',
    fontSize: '14px',
  },
  backButton: {
    marginTop: 'auto',
    marginBottom: '40px',
    backgroundColor: '#7A60E0',
    padding: '12px 40px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};
