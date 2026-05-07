import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
//import BottomNavbar from "./BottomNavbar";
import Sidebar from "./bottomNavbar";

const center = { lat: 33.642, lng: 73.076 }; // Example coordinates

export default function MapScreen() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Live Bus Tracking</h2>
      
      <div style={styles.mapContainer}>
        {isLoaded ? (
          <GoogleMap mapContainerStyle={styles.map} center={center} zoom={15}>
            <Marker position={center} icon="https://maps.google.com/mapfiles/kml/shapes/bus.png" />
          </GoogleMap>
        ) : <p>Loading Map...</p>}
      </div>

      {/* Info Card Overlay from 4th.jpeg */}
      <div style={styles.infoCard}>
        <div style={styles.cardHeader}>
          <span style={styles.busName}>BUS #Bus01</span>
          <span style={styles.time}>9:43:33 AM</span>
        </div>
        <p style={styles.desc}>Bus Bus01 has arrived at University.</p>
        <div style={styles.status}>
          <span style={styles.dot}>●</span> LIVE UPDATES ACTIVE
        </div>
      </div>

      <Sidebar active="map" />
    </div>
  );
}

const styles = {
  container: { height: '100vh', backgroundColor: "#1A243A", display: 'flex', flexDirection: 'column' },
  title: { textAlign: 'center', color: '#FFF', padding: '20px', margin: 0 },
  mapContainer: { flex: 1, position: 'relative' },
  map: { width: '100%', height: '100%' },
  infoCard: { 
    position: 'absolute', bottom: '100px', left: '20px', right: '20px', 
    backgroundColor: '#FFF', borderRadius: '25px', padding: '20px', zIndex: 10 
  },
  cardHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' },
  busName: { fontWeight: 'bold', fontSize: '20px' },
  time: { color: '#666' },
  desc: { fontSize: '16px', marginBottom: '15px' },
  status: { color: '#4CAF50', fontWeight: 'bold', fontSize: '12px' },
  dot: { marginRight: '5px' }
};
