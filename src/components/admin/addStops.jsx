// import React, { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoogleMap, useJsApiLoader, Marker,useLoadScript } from "@react-google-maps/api";
// import DataService from "../../services/axios";
 

// // Map container style - responsive for web
// const mapContainerStyle = {
//   width: "100%",
//   height: "200px",
//   borderRadius: "15px",
// };

// const center = {
//   lat: 33.6491,
//   lng: 73.0789,
// };

// function AddStopScreen() {
//   const navigate = useNavigate();
//   const [stopName, setStopName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [markerCoords, setMarkerCoords] = useState(null);

//   // Load Google Maps script
//   // const { isLoaded } = useJsApiLoader({
//   //   id: 'google-map-script',
//   //   googleMapsApiKey: "AIzaSyCdmIHvKSHu-vKEeN0hcvjQrOtr8row6qE" // Add your key here
//   // });
//   const { isLoaded } = useLoadScript({
//   googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyCdmIHvKSHu-vKEeN0hcvjQrOtr8row6qE',
// });

//   const onMapClick = useCallback((e) => {
//     setMarkerCoords({
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     });
//   }, []);

//   const handleSaveStop = async () => {
//     if (!stopName.trim() || !markerCoords) {
//       alert("Please enter a name and pick a location on the map.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await DataService.post("/AdminRouteStop/AddStop", {
//         stop_name: stopName.trim(),
//         latitude: markerCoords.lat.toString(),
//         longitude: markerCoords.lng.toString(),
//       });
//       alert("Stop added successfully!");
//       navigate(-1);
//     } catch (error) {
//       console.error("Error saving stop:", error);
//       alert("Failed to save stop. Check server connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.screenTitle}>Add New Stop</h1>
//       </header>

//       <div style={styles.contentWrapper}>
//         {/* Map Section */}
//         <div style={styles.mapContainer}>
//           {isLoaded ? (
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={center}
//               zoom={13}
//               onClick={onMapClick}
//             >
//               {markerCoords && <Marker position={markerCoords} />}
//             </GoogleMap>
//           ) : (
//             <div style={styles.loadingMap}>Loading Map...</div>
//           )}
//         </div>

//         {/* Form Section */}
//         <div style={styles.formCard}>
//           <label style={styles.label}>Stop Name</label>
//           <input
//             style={styles.input}
//             placeholder="e.g. Committee Chowk"
//             value={stopName}
//             onChange={(e) => setStopName(e.target.value)}
//           />

//           <div style={styles.coordRow}>
//             <div style={styles.inputGroup}>
//               <label style={styles.label}>Latitude</label>
//               <input
//                 style={styles.disabledInput}
//                 value={markerCoords ? markerCoords.lat.toFixed(5) : "0.0000"}
//                 readOnly
//               />
//             </div>
//             <div style={styles.inputGroup}>
//               <label style={styles.label}>Longitude</label>
//               <input
//                 style={styles.disabledInput}
//                 value={markerCoords ? markerCoords.lng.toFixed(5) : "0.0000"}
//                 readOnly
//               />
//             </div>
//           </div>

//           <button 
//             style={styles.saveButton} 
//             onClick={handleSaveStop}
//             disabled={loading}
//           >
//             {loading ? "Saving..." : "Save Stop"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { minHeight: "100vh",width:"140%", backgroundColor: "#1A243A", padding: "40px 20px" },
//   header: { marginBottom: "30px", textAlign: "center" },
//   screenTitle: { color: "#FFFFFF", fontSize: "2rem" },
  
//   contentWrapper: { 
//     maxWidth: "1000px", 
//     margin: "0 auto", 
//     backgroundColor: "#ffffff", 
//     borderRadius: "20px", 
//     padding: "25px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
//   },
  
//   mapContainer: { marginBottom: "20px", border: "3px solid #7A60E0", borderRadius: "15px" },
//   loadingMap: { height: "400px", display: "flex", alignItems: "center", justifyContent: "center" },
  
//   formCard: { display: "flex", flexDirection: "column", gap: "15px" },
//   label: { fontSize: "14px", fontWeight: "bold", color: "#333", marginBottom: "5px" },
//   input: { padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
//   disabledInput: { padding: "12px", borderRadius: "8px", border: "1px solid #eee", backgroundColor: "#f9f9f9", fontSize: "16px", color: "#666" },
//   coordRow: { display: "flex", gap: "15px" },
//   inputGroup: { flex: 1 },
  
//   saveButton: { 
//     backgroundColor: "#7A60E0", 
//     color: "#FFFFFF", 
//     padding: "14px", 
//     borderRadius: "10px", 
//     border: "none", 
//     fontSize: "16px", 
//     fontWeight: "bold", 
//     cursor: "pointer",
//     marginTop: "10px"
//   },
// };

// export default AddStopScreen;


// // import React from "react";

// // function AddStopScreen() {
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
// //   };

// //   const adminContainerStyle = {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //   };

// //   const adminCircleStyle = {
// //     width: "38px",
// //     height: "38px",
// //     borderRadius: "50%",
// //     backgroundColor: "#E5E7EB",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   };

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

// //   const screenTitleStyle = {
// //     color: "#FFFFFF",
// //     fontSize: "22px",
// //     fontWeight: "bold",
// //   };

// //   const formCardStyle = {
// //     backgroundColor: "#E6E6E6",
// //     margin: "0 20px",
// //     borderRadius: "20px",
// //     padding: "20px",
// //   };

// //   const labelStyle = {
// //     fontSize: "14px",
// //     fontWeight: "bold",
// //     color: "#000",
// //     marginBottom: "6px",
// //     display: "block",
// //   };

// //   const inputStyle = {
// //     width: "100%",
// //     padding: "14px",
// //     fontSize: "16px",
// //     borderRadius: "10px",
// //     border: "none",
// //     outline: "none",
// //     marginBottom: "16px",
// //     boxSizing: "border-box",
// //   };

// //   const saveButtonStyle = {
// //     width: "100%",
// //     backgroundColor: "#7A60E0",
// //     borderRadius: "12px",
// //     padding: "14px",
// //     fontSize: "18px",
// //     fontWeight: "bold",
// //     color: "#FFFFFF",
// //     border: "none",
// //     cursor: "pointer",
// //     marginTop: "10px",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       {/* Header */}
// //       <div style={headerStyle}>
// //         <div></div>
// //         <div style={adminContainerStyle}>
// //           <div style={adminCircleStyle}>👤</div>
// //           <div style={adminTextStyle}>Admin</div>
// //         </div>
// //       </div>

// //       {/* Icon & Title */}
// //       <div style={iconWrapperStyle}>
// //         <div style={iconBoxStyle}>🛑</div>
// //         <div style={screenTitleStyle}>Add New Stop</div>
// //       </div>

// //       {/* Form */}
// //       <div style={formCardStyle}>
// //         <label style={labelStyle}>Stop Name</label>
// //         <input type="text" placeholder="Enter Stop Name" style={inputStyle} />

// //         <label style={labelStyle}>Latitude</label>
// //         <input type="number" placeholder="Enter Latitude" style={inputStyle} />

// //         <label style={labelStyle}>Longitude</label>
// //         <input type="number" placeholder="Enter Longitude" style={inputStyle} />

// //         <button style={saveButtonStyle}>Save</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddStopScreen;

// import React, { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import DataService from "../../services/axios";

// // Define libraries to prevent re-renders
// const libraries = ['places']; 

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px", // Increase height from 200px to ensure it's visible
//   borderRadius: "15px",
// };

// const center = {
//   lat: 33.6491,
//   lng: 73.0789,
// };

// function AddStopScreen() {
//   const navigate = useNavigate();
//   const [stopName, setStopName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [markerCoords, setMarkerCoords] = useState(null);

//   // useJsApiLoader is cleaner for individual components
//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
//     libraries: libraries,
//   });

//   const onMapClick = useCallback((e) => {
//     setMarkerCoords({
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     });
//   }, []);

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading Map...</div>;

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.screenTitle}>Add New Stop</h1>
//       </header>

//       <div style={styles.contentWrapper}>
//         <div style={styles.mapContainer}>
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={center}
//               zoom={13}
//               onClick={onMapClick}
//             >
//               {markerCoords && <Marker position={markerCoords} />}
//             </GoogleMap>
//         </div>
//         {/* ... rest of your form code ... */}
//       </div>
//     </div>
//   );
// } export default AddStopScreen

// const styles = {
//   // CHANGED: Fixed width from 140% to 100%
//   container: { minHeight: "100vh", width: "100%", backgroundColor: "#1A243A", padding: "40px 20px" },
//   header: { marginBottom: "30px", textAlign: "center" },
//   screenTitle: { color: "#FFFFFF", fontSize: "2rem" },
//   contentWrapper: { 
//     maxWidth: "1000px", 
//     margin: "0 auto", 
//     backgroundColor: "#ffffff", 
//     borderRadius: "20px", 
//     padding: "25px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
//   },
//   mapContainer: { marginBottom: "20px", border: "3px solid #7A60E0", borderRadius: "15px", overflow: "hidden" },
// loadingMap: { height: "400px", display: "flex", alignItems: "center", justifyContent: "center" },
  
//   formCard: { display: "flex", flexDirection: "column", gap: "15px" },
//   label: { fontSize: "14px", fontWeight: "bold", color: "#333", marginBottom: "5px" },
//   input: { padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
//   disabledInput: { padding: "12px", borderRadius: "8px", border: "1px solid #eee", backgroundColor: "#f9f9f9", fontSize: "16px", color: "#666" },
//   coordRow: { display: "flex", gap: "15px" },
//   inputGroup: { flex: 1 },
  
//   saveButton: { 
//     backgroundColor: "#7A60E0", 
//     color: "#FFFFFF", 
//     padding: "14px", 
//     borderRadius: "10px", 
//     border: "none", 
//     fontSize: "16px", 
//     fontWeight: "bold", 
//     cursor: "pointer",
//     marginTop: "10px"},
// };

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import DataService from "../../services/axios";

// Fix default leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Helper component to handle map clicks
function MapEvents({ setMarkerCoords }) {
  useMapEvents({
    click(e) {
      setMarkerCoords({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });
  return null;
}

function AddStopScreen() {
  const navigate = useNavigate();
  const [stopName, setStopName] = useState("");
  const [loading, setLoading] = useState(false);
  const [markerCoords, setMarkerCoords] = useState(null);

  const center = [33.6491, 73.0789];

  const handleSaveStop = async () => {
    if (!stopName.trim() || !markerCoords) {
      alert("Please enter a name and pick a location on the map.");
      return;
    }

    setLoading(true);
    try {
      await DataService.post("/AdminRouteStop/AddStop", {
        stop_name: stopName.trim(),
        latitude: markerCoords.lat.toString(),
        longitude: markerCoords.lng.toString(),
      });
      alert("Stop added successfully!");
      navigate(-1);
    } catch (error) {
      console.error("Error saving stop:", error);
      alert("Failed to save stop. Check server connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.screenTitle}>Add New Stop</h1>
      </header>

      <div style={styles.contentWrapper}>
        <div style={styles.mapContainer}>
          <MapContainer center={center} zoom={13} style={{ height: "300px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapEvents setMarkerCoords={setMarkerCoords} />
            {markerCoords && <Marker position={[markerCoords.lat, markerCoords.lng]} />}
          </MapContainer>
        </div>

        <div style={styles.formCard}>
          <label style={styles.label}>Stop Name</label>
          <input
            style={styles.input}
            placeholder="e.g. Committee Chowk"
            value={stopName}
            onChange={(e) => setStopName(e.target.value)}
          />

          <div style={styles.coordRow}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Latitude</label>
              <input
                style={styles.disabledInput}
                value={markerCoords ? markerCoords.lat.toFixed(5) : "0.0000"}
                readOnly
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Longitude</label>
              <input
                style={styles.disabledInput}
                value={markerCoords ? markerCoords.lng.toFixed(5) : "0.0000"}
                readOnly
              />
            </div>
          </div>

          <button style={styles.saveButton} onClick={handleSaveStop} disabled={loading}>
            {loading ? "Saving..." : "Save Stop"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", width: "100%", backgroundColor: "#1A243A", padding: "40px 20px" },
  header: { marginBottom: "30px", textAlign: "center" },
  screenTitle: { color: "#FFFFFF", fontSize: "2rem" },
  contentWrapper: { 
    maxWidth: "800px", 
    margin: "0 auto", 
    backgroundColor: "#ffffff", 
    borderRadius: "20px", 
    padding: "25px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
  },
  mapContainer: { marginBottom: "20px", border: "3px solid #7A60E0", borderRadius: "15px", overflow: "hidden" },
  formCard: { display: "flex", flexDirection: "column", gap: "15px" },
  label: { fontSize: "14px", fontWeight: "bold", color: "#333", marginBottom: "5px" },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
  disabledInput: { padding: "12px", borderRadius: "8px", border: "1px solid #eee", backgroundColor: "#f9f9f9", fontSize: "16px", color: "#666" },
  coordRow: { display: "flex", gap: "15px" },
  inputGroup: { flex: 1 },
  saveButton: { 
    backgroundColor: "#7A60E0", 
    color: "#FFFFFF", 
    padding: "14px", 
    borderRadius: "10px", 
    border: "none", 
    fontSize: "16px", 
    fontWeight: "bold", 
    cursor: "pointer",
    marginTop: "10px"
  },
};

export default AddStopScreen;


