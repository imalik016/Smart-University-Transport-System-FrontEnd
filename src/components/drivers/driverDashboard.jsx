import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import DataService from "../../services/axios";

// Standard Map Container Style
const containerStyle = {
  width: '100%',
  height: '250px'
};

function DriverDashboardScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { trip } = location.state || {}; // Access passed trip data

  const [loading, setLoading] = useState(true);
  const [isTripStarted, setIsTripStarted] = useState(trip?.actual_start_time != null);
  const [stops, setStops] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const mapRef = useRef(null);

  // Google Maps Loader
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCdmIHvKSHu-vKEeN0hcvjQrOtr8row6qE" // Replace with your actual key
  });

  useEffect(() => {
    if (!trip) { navigate(-1); return; }
    fetchRouteStops();
  }, [trip, navigate]);

  const fetchRouteStops = async () => {
    try {
      const res = await DataService.get(`/AdminRouteStop/GetStopsByRoute?route_id=${trip.RouteId}`);
      setStops(res.data);
      setLoading(false);
    } catch (error) {
      window.alert("Error: Could not load route stops");
    }
  };

  const handleStartTrip = async () => {
    try {
      await DataService.post(`/AdminTrip/StartTrip/${trip.trip_id}`);
      setIsTripStarted(true);
      window.alert("Trip Started: Proceed to the first stop.");
    } catch (e) { window.alert("Error: Server unreachable"); }
  };

  const handleEndTrip = async () => {
    try {
      await DataService.post(`/AdminTrip/EndTrip/${trip.trip_id}`);
      setIsTripStarted(false);
      window.alert("Success: Trip Ended Successfully");
      navigate(-1);
    } catch (e) { window.alert("Error: Server unreachable"); }
  };

  const handleStopAlert = async (isApproaching) => {
    if (currentIndex >= stops.length) return;
    const currentStop = stops[currentIndex];
    try {
      await DataService.post(`/DriverAlerts/SendStopAlert`, {
        RouteId: trip.RouteId,
        RouteName: trip.RouteName,
        StopName: currentStop.stop_name,
        IsApproaching: isApproaching
      });
      window.alert(`Success: ${isApproaching ? "Approaching" : "Reached"} alert sent.`);
      if (!isApproaching) progressToNextStop();
    } catch (error) { window.alert("Error: Alert service down."); }
  };

  const progressToNextStop = () => {
    if (currentIndex < stops.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      // Pan to new location
      const nextStop = stops[nextIdx];
      mapRef.current?.panTo({ lat: parseFloat(nextStop.latitude), lng: parseFloat(nextStop.longitude) });
    } else {
      window.alert("Route Completed: Final stop reached.");
    }
  };

  const mapCoords = stops.map(s => ({ lat: parseFloat(s.latitude), lng: parseFloat(s.longitude) }));

  if (loading || !isLoaded) return <div style={styles.loader}>Loading Map...</div>;

  const currentStop = stops[currentIndex];
  const nextStop = stops[currentIndex + 1];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.screenTitle}>Trip Dashboard</h2>
        <div style={styles.profileContainer}>
          <div style={styles.profileCircle}>👤</div>
          <span style={styles.profileText}>Driver</span>
        </div>
      </div>

      <div style={styles.content}>
        {!isTripStarted ? (
          <button style={styles.startTripButton} onClick={handleStartTrip}>START TRIP</button>
        ) : (
          <div style={styles.card}>
            <p style={styles.routeText}>Route: {trip.RouteName}</p>
            <p style={styles.routeText}>📍 Current: {currentStop?.stop_name}</p>
            <p style={styles.routeText}>⏭️ Next: {nextStop ? nextStop.stop_name : "Final Destination"}</p>

            <div style={styles.statusRow}>
              <button style={{...styles.statusButton, ...styles.approaching}} onClick={() => handleStopAlert(true)}>Approaching</button>
              <button style={{...styles.statusButton, ...styles.reached}} onClick={() => handleStopAlert(false)}>Reached</button>
            </div>

            <div style={styles.mapContainer}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: parseFloat(stops[0]?.latitude || 33.6491), lng: parseFloat(stops[0]?.longitude || 73.0789) }}
                zoom={14}
                onLoad={(map) => (mapRef.current = map)}
              >
                <Polyline path={mapCoords} options={{ strokeColor: "#7A60E0", strokeWeight: 4 }} />
                {stops.map((s, i) => (
                  <Marker 
                    key={i} 
                    position={{ lat: parseFloat(s.latitude), lng: parseFloat(s.longitude) }} 
                    label={s.stop_name}
                  />
                ))}
              </GoogleMap>
            </div>

            <button style={styles.emergencyButton} onClick={() => window.alert("Emergency Broadcasted!")}>🚨 Send Emergency Alert</button>
            <button style={styles.endTripButton} onClick={handleEndTrip}>END TRIP</button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: "#1A243A" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "50px 20px 10px 20px" },
  screenTitle: { color: "#FFF", fontSize: "22px", margin: 0 },
  profileContainer: { alignItems: "center", display: 'flex', flexDirection: 'column' },
  profileCircle: { width: "38px", height: "38px", borderRadius: "19px", backgroundColor: "#E5E7EB", display: "flex", justifyContent: "center", alignItems: "center" },
  profileText: { color: "#FFFFFF", fontSize: "10px", marginTop: "4px", fontWeight: "bold" },
  content: { padding: "20px" },
  card: { backgroundColor: "#FFFFFF", borderRadius: "15px", padding: "16px" },
  routeText: { fontSize: "16px", fontWeight: "bold", color: "#333", margin: "5px 0" },
  statusRow: { display: "flex", justifyContent: "space-between", margin: "12px 0", gap: "10px" },
  statusButton: { flex: 1, borderRadius: "12px", padding: "12px", border: 'none', cursor: 'pointer', fontWeight: "bold" },
  approaching: { backgroundColor: "#FFD700", color: "#000" },
  reached: { backgroundColor: "#4CAF50", color: "#FFF" },
  mapContainer: { height: "250px", borderRadius: "15px", overflow: 'hidden', margin: "15px 0" },
  startTripButton: { backgroundColor: "#4CAF50", color: '#FFF', borderRadius: "12px", padding: "18px", border: 'none', width: '100%', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' },
  emergencyButton: { backgroundColor: "#FFF", borderColor: "#E91E63", borderWidth: "2px", borderStyle: 'solid', borderRadius: "12px", padding: "12px", width: '100%', color: "#E91E63", fontWeight: "bold", cursor: 'pointer', marginBottom: "10px" },
  endTripButton: { backgroundColor: "#E91E63", borderRadius: "12px", padding: "14px", border: 'none', width: '100%', color: "#FFF", fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' },
  loader: { color: '#FFF', textAlign: 'center', marginTop: '50px' }
};

export default DriverDashboardScreen;





























// import React from "react";

// function DriverDashboardScreen() {
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#3B5998",
//     boxSizing: "border-box",
//     position: "relative",
//   };

//   /* Header */
//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: "20px",
//     padding: "20px",
//   };

//   const screenTitleStyle = {
//     color: "#FFFFFF",
//     fontSize: "22px",
//     fontWeight: "bold",
//   };

//   const profileContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const profileCircleStyle = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     backgroundColor: "#E5E7EB",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const profileTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//     fontWeight: "bold",
//   };

//   /* Tab Bar */
//   const tabBarStyle = {
//     display: "flex",
//     backgroundColor: "#2E2E2E",
//     margin: "15px 20px 0 20px",
//     borderRadius: "12px",
//   };

//   const tabItemStyle = {
//     flex: 1,
//     padding: "10px 0",
//     textAlign: "center",
//     borderRadius: "12px",
//   };

//   const activeTabStyle = {
//     backgroundColor: "#555555",
//   };

//   const tabTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "14px",
//     fontWeight: "bold",
//   };

//   /* Card */
//   const cardStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "15px",
//     padding: "16px",
//     margin: "20px",
//   };

//   const routeTextStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: "6px",
//   };

//   /* Status Buttons */
//   const statusRowStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     margin: "12px 0",
//   };

//   const statusButtonStyle = {
//     flex: 1,
//     borderRadius: "12px",
//     padding: "10px 0",
//     textAlign: "center",
//     margin: "0 5px",
//     cursor: "pointer",
//   };

//   const approachingStyle = {
//     backgroundColor: "#FFD700",
//   };

//   const reachedStyle = {
//     backgroundColor: "#4CAF50",
//   };

//   const approachingTextStyle = {
//     color: "#000",
//     fontWeight: "bold",
//   };

//   const reachedTextStyle = {
//     color: "#FFF",
//     fontWeight: "bold",
//   };

//   /* Map Placeholder */
//   const mapPlaceholderStyle = {
//     height: "200px",
//     backgroundColor: "#E6E6E6",
//     borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "12px",
//     fontWeight: "bold",
//   };

//   /* End Trip Button */
//   const endTripButtonStyle = {
//     backgroundColor: "#7A60E0",
//     borderRadius: "12px",
//     padding: "12px 0",
//     textAlign: "center",
//     cursor: "pointer",
//   };

//   const endTripButtonTextStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#FFF",
//   };

//   /* Alert Button */
//   const alertButtonStyle = {
//     backgroundColor: "#2E2E2E",
//     borderRadius: "12px",
//     padding: "14px 0",
//     textAlign: "center",
//     margin: "0 20px",
//     position: "absolute",
//     bottom: "20px",
//     width: "90%",
//     cursor: "pointer",
//   };

//   const alertButtonTextStyle = {
//     color: "#FFF",
//     fontSize: "16px",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyle}>

//       {/* Header */}
//       <div style={headerStyle}>
//         <div style={screenTitleStyle}></div>

//         <div style={profileContainerStyle}>
//           <div style={profileCircleStyle}>👤</div>
//           <div style={profileTextStyle}>Driver</div>
//         </div>
//       </div>

//       {/* Tab Bar */}
//       <div style={tabBarStyle}>
//         <div style={{ ...tabItemStyle, ...activeTabStyle }}>
//           <div style={tabTextStyle}>Trip</div>
//         </div>
//         <div style={tabItemStyle}>
//           <div style={tabTextStyle}>Profile</div>
//         </div>
//         <div style={tabItemStyle}>
//           <div style={tabTextStyle}>Alerts</div>
//         </div>
//       </div>

//       {/* Active Trip Card */}
//       <div style={cardStyle}>
//         <div style={routeTextStyle}>Route No: 02</div>
//         <div style={routeTextStyle}>Current Stop: 3 - Main Gate</div>
//         <div style={routeTextStyle}>Next Stop: 4 - Mandi Morr</div>

//         {/* Status Buttons */}
//         <div style={statusRowStyle}>
//           <div style={{ ...statusButtonStyle, ...approachingStyle }}>
//             <div style={approachingTextStyle}>Approaching</div>
//           </div>
//           <div style={{ ...statusButtonStyle, ...reachedStyle }}>
//             <div style={reachedTextStyle}>Reached</div>
//           </div>
//         </div>

//         {/* Map Placeholder */}
//         <div style={mapPlaceholderStyle}>Map View</div>

//         {/* End Trip Button */}
//         <div style={endTripButtonStyle}>
//           <div style={endTripButtonTextStyle}>End Trip</div>
//         </div>
//       </div>

//       {/* Emergency Alert Button */}
//       <div style={alertButtonStyle}>
//         <div style={alertButtonTextStyle}>Send Alerts</div>
//       </div>

//     </div>
//   );
// }

// export default DriverDashboardScreen;

