import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import DataService from "../../services/axios";

// Fix default marker icon broken in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const defaultCenter = [33.6844, 73.0479]; // Islamabad/Rawalpindi

// Component to handle map clicks
function LocationPicker({ onLocationSelect }) {
  useMapEvents({
    click(e) {
      onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}

export default function AddStopScreen() {
  const [stopName, setStopName] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSaveStop = async () => {
    if (!stopName.trim()) {
      alert("Please enter a stop name.");
      return;
    }
    if (!location) {
      alert("Please click on the map to pick a location.");
      return;
    }

    setLoading(true);
    try {
      await DataService.post("/AdminRouteStop/AddStop", {
        stop_name: stopName.trim(),
        latitude: location.lat.toString(),
        longitude: location.lng.toString(),
      });
      alert("Stop Saved!");
      setStopName("");
      setLocation(null);
    } catch (error) {
      console.error(error);
      alert("Failed to save stop. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Map */}
        <div style={styles.mapWrapper}>
          <div style={styles.mapLabel}>Tap map to pick location</div>
          <MapContainer
            center={defaultCenter}
            zoom={13}
            style={{ width: "100%", height: "300px" }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationPicker onLocationSelect={setLocation} />
            {location && <Marker position={[location.lat, location.lng]} />}
          </MapContainer>
        </div>

        {/* Form */}
        <div style={styles.form}>
          {/* Stop Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Stop Name</label>
            <input
              style={styles.input}
              placeholder="e.g. Committee Chowk"
              value={stopName}
              onChange={(e) => setStopName(e.target.value)}
            />
          </div>

          {/* Lat / Lng */}
          <div style={styles.row}>
            <div style={styles.half}>
              <label style={styles.label}>Latitude</label>
              <input
                style={{ ...styles.input, ...styles.readOnly }}
                value={location ? location.lat.toFixed(6) : "0.000000"}
                readOnly
              />
            </div>
            <div style={styles.half}>
              <label style={styles.label}>Longitude</label>
              <input
                style={{ ...styles.input, ...styles.readOnly }}
                value={location ? location.lng.toFixed(6) : "0.000000"}
                readOnly
              />
            </div>
          </div>

          {/* Pin status */}
          <div style={styles.pinStatus}>
            <span style={{
              ...styles.pinDot,
              backgroundColor: location ? "#4CAF50" : "#aaa"
            }} />
            <span style={{ fontSize: 13, color: location ? "#4CAF50" : "#999" }}>
              {location ? "Location pinned ✓" : "No location selected"}
            </span>
          </div>

          {/* Save Button */}
          <button
            style={{
              ...styles.saveBtn,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onClick={handleSaveStop}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Stop"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    minWidth: "70vw",
    backgroundColor: "#1a233a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    boxSizing: "border-box",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    
    width: "100%",
    maxWidth: "1000px",
  },
  mapWrapper: {
    width:"100%",
    borderRadius: "16px",
    overflow: "hidden",
    border: "3px solid #7e57c2",
    marginBottom: "20px",
  },
  mapLabel: {
    backgroundColor: "#7e57c2",
    color: "#fff",
    textAlign: "center",
    padding: "8px",
    fontSize: "14px",
    fontWeight: "600",
  },
  form: {
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    padding: "24px 20px",
  },
  fieldGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "700",
    color: "#1a233a",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "13px 14px",
    borderRadius: "10px",
    border: "1.5px solid #ddd",
    fontSize: "15px",
    color: "#1a233a",
    backgroundColor: "#fff",
    boxSizing: "border-box",
    outline: "none",
  },
  readOnly: {
    backgroundColor: "#e8e8e8",
    color: "#555",
    cursor: "default",
  },
  row: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
  },
  half: {
    flex: 1,
  },
  pinStatus: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  pinDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    display: "inline-block",
  },
  saveBtn: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#7e57c2",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "12px",
  },
};
