


import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import DataService from "../../services/axios";

const containerStyle = { width: '100%', height: '300px', borderRadius: '15px' };
const center = { lat: 33.6844, lng: 73.0479 }; // Default to Islamabad/Rawalpindi

function  AddStopScreen() {
 
  
    const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: "AIzaSyCdmIHvKSHu-vKEeN0hcvjQrOtr8row6qE" });
    const [stopName, setStopName] = useState("");
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    const onMapClick = (e) => {
        setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    };

    const handleSaveStop = async () => {
        if (!stopName || location.lat === 0) return alert("Please enter name and pick location");
        try {
            await DataService.post("/AdminRouteStop/AddStop", {
                stop_name: stopName,
                latitude: location.lat.toString(),
                longitude: location.lng.toString()
            });
            alert("Stop Saved!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{color: 'white'}}>Add New Stop</h2>
            <div style={styles.mapContainer}>
                {isLoaded ? (
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} onClick={onMapClick}>
                        {location.lat !== 0 && <Marker position={location} />}
                    </GoogleMap>
                ) : <p>Loading Maps...</p>}
            </div>

            <div style={styles.formCard}>
                <label>Stop Name</label>
                <input style={styles.input} placeholder="e.g. Committee Chowk" onChange={(e) => setStopName(e.target.value)} />
                
                <div style={{display: 'flex', gap: '10px'}}>
                    <div style={{flex: 1}}>
                        <label>Latitude</label>
                        <input style={styles.input} value={location.lat.toFixed(4)} readOnly />
                    </div>
                    <div style={{flex: 1}}>
                        <label>Longitude</label>
                        <input style={styles.input} value={location.lng.toFixed(4)} readOnly />
                    </div>
                </div>
                <button style={styles.btnSave} onClick={handleSaveStop}>Save Stop</button>
            </div>
        </div>
    );
}

const styles = {
    container: { padding: '20px', backgroundColor: '#1a233a', minHeight: '100vh' },
    mapContainer: { marginBottom: '20px', border: '5px solid #7e57c2', borderRadius: '20px', overflow: 'hidden' },
    formCard: { backgroundColor: '#cfd8dc', padding: '20px', borderRadius: '20px' },
    input: { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', border: 'none' },
    btnSave: { width: '100%', padding: '15px', backgroundColor: '#7e57c2', color: 'white', borderRadius: '12px', border: 'none', marginTop: '10px' }
};

export default AddStopScreen;