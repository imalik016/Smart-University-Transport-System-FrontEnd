import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Sidebar from "./Sidebar";

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/kml/shapes/bus.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const busPosition = [33.642, 73.076];

export default function MapScreen() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Live Bus Tracking</h2>

      {/* Map */}
      <div style={styles.mapContainer}>
        <MapContainer
          center={busPosition}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={true}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={busPosition} icon={busIcon}>
            <Popup>Bus #Bus01 — Live Location</Popup>
          </Marker>
        </MapContainer>

        {/* Info Card Overlay */}
        <div style={styles.infoCard}>
          <div style={styles.cardHeader}>
            <span style={styles.busName}>BUS #Bus01</span>
            <span style={styles.time}>{currentTime}</span>
          </div>
          <p style={styles.desc}>Bus Bus01 has arrived at University.</p>
          <div style={styles.status}>
            <span style={styles.dot}>●</span> LIVE UPDATES ACTIVE
          </div>
        </div>
      </div>

      <Sidebar active="map" />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#1A243A",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    padding: "20px",
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
    position: "relative",
  },
  infoCard: {
    position: "absolute",
    bottom: "100px",
    left: "20px",
    right: "20px",
    backgroundColor: "#FFF",
    borderRadius: "25px",
    padding: "20px",
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  },
  busName: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#1A243A",
  },
  time: {
    color: "#666",
    fontSize: "14px",
  },
  desc: {
    fontSize: "15px",
    marginBottom: "15px",
    color: "#444",
    margin: "0 0 15px 0",
  },
  status: {
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
  },
  dot: {
    marginRight: "5px",
    fontSize: "16px",
  },
};
