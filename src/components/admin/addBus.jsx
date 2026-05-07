import React, { useState, useEffect } from "react";
import DataService from "../../services/axios";
import { useNavigate } from "react-router-dom";

function AddBusScreen() {
  const [busNumber, setBusNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("Active");
  const [routeId, setRouteId] = useState("");
  const [routes, setRoutes] = useState([]); // To store routes from DB
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 1. Fetch routes from Database on component load
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await DataService.get("AdminBus/AddBus"); // Adjust endpoint name if needed
        setRoutes(response.data);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };
    fetchRoutes();
  }, []);

  const handleSave = async () => {
    if (!busNumber || !capacity || !routeId) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      await DataService.post("AdminBus/AddBus", {
        bus_number: busNumber,
        capacity: parseInt(capacity),
        status: status,
        route_id: parseInt(routeId),
      });
      alert("Bus added successfully!");
      navigate("/admin/dashboard"); // Redirect back
    } catch (error) {
      console.error(error);
      alert("Error adding bus");
    } finally {
      setLoading(false);
    }
  };

  // --- Styles to match your 2nd Image ---
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A243A",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
    padding: "30px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  };

  const busIconContainer = {
    backgroundColor: "#f0f0f0",
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    margin: "0 auto 20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
  };

  const inputGroupStyle = {
    textAlign: "left",
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
    fontSize: "14px",
  };

  const fieldStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const saveBtnStyle = {
    width: "100%",
    padding: "15px",
    backgroundColor: "#6A5AE0",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={busIconContainer}>🚌</div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Bus Number</label>
          <input
            style={fieldStyle}
            type="text"
            placeholder="e.g. RPT-5566"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Status</label>
          <select
            style={fieldStyle}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Capacity</label>
          <input
            style={fieldStyle}
            type="number"
            placeholder="e.g. 40"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Assign Route</label>
          <select
            style={fieldStyle}
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
          >
            <option value="">Select a Route</option>
            {routes.map((r) => (
              <option key={r.route_id} value={r.route_id}>
                {r.route_name}
              </option>
            ))}
          </select>
        </div>

        <button style={saveBtnStyle} onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}

export default AddBusScreen;
















// import React, { useState } from "react";
// import DataService from "../../services/axios";
// import { useNavigate} from "react-router-dom";

// function AddBusScreen() {
//   const [busNumber, setBusNumber] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [status, setStatus] = useState("Active");
//   const [routeId, setRouteId] = useState("");
//   const navigate = useNavigate();

//   const handleSave = async () => {
//     try {
//       const response = await DataService.post("AdminBus/AddBus", {
//         bus_number: busNumber,
//         capacity: parseInt(capacity),
//         status: status,
//         route_id: parseInt(routeId)
//       });

//       alert(response.data);
//     } catch (error) {
//       console.error(error);
//       alert("Error adding bus");
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh",width:"100vw", backgroundColor: "#1A243A" }}>

//       <div style={{ padding: "20px" }}>

//         <input
//           type="text"
//           placeholder="Bus Number"
//           value={busNumber}
//           onChange={(e) => setBusNumber(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="Capacity"
//           value={capacity}
//           onChange={(e) => setCapacity(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="Route ID"
//           value={routeId}
//           onChange={(e) => setRouteId(e.target.value)}
//         />

//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>

//         <button onClick={handleSave}>Save</button>

//       </div>
//     </div>
//   );
// }

// export default AddBusScreen;
















// import React from "react";

// function AddBusScreen() {
//   const containerStyle = {
//     minHeight: "100vh",
//     width: "100vw",
//     backgroundColor: "#1A243A",
//     boxSizing: "border-box",
//   };

//   /* Header */
//   const headerStyle = {
//     paddingTop: "20px",
//     padding: "0 20px",
//     display: "flex",
//     justifyContent: "space-between",
//   };

//   const adminContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const adminIconStyle = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     backgroundColor: "#9C8CF0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const adminTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//   };

//   /* Logo */
//   const logoContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "30px",
//     marginBottom: "20px",
//   };

//   const logoStyle = {
//     width: "120px",
//     height: "120px",
//     objectFit: "contain",
//   };

//   /* Form Card */
//   const formCardStyle = {
//     backgroundColor: "#E6E6E6",
//     margin: "0 20px",
//     borderRadius: "20px",
//     padding: "20px",
//   };

//   const inputStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "14px",
//     fontSize: "16px",
//     marginBottom: "14px",
//     border: "none",
//     outline: "none",
//   };

//   const dropdownStyle = {
//     backgroundColor: "#FFFFFF",
//     borderRadius: "10px",
//     padding: "14px",
//     marginBottom: "14px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   };

//   const dropdownTextStyle = {
//     fontSize: "16px",
//     color: "#555",
//   };

//   const arrowStyle = {
//     fontSize: "14px",
//     color: "#555",
//   };

//   const saveButtonStyle = {
//     backgroundColor: "#7A60E0",
//     borderRadius: "12px",
//     marginTop: "10px",
//     padding: "10px",
//     border: "none",
//     color: "#FFFFFF",
//     fontSize: "18px",
//     fontWeight: "bold",
//     cursor: "pointer",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header */}
//       <div style={headerStyle}>
//         <div></div>
//         <div style={adminContainerStyle}>
//           <div style={adminIconStyle}>👤</div>
//           <div style={adminTextStyle}>Admin</div>
//         </div>
//       </div>

//       {/* Bus Icon */}
//       <div style={logoContainerStyle}>
//         <img
//           src={require("../../assets/images/bus.png")}
//           alt="Bus"
//           style={logoStyle}
//         />
//       </div>

//       {/* Form Card */}
//       <div style={formCardStyle}>
//         <input
//           type="text"
//           placeholder="Bus Number"
//           style={inputStyle}
//         />

//         {/* Status Dropdown */}
//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Status</div>
//           <div style={arrowStyle}>▼</div>
//         </div>

//         <input
//           type="number"
//           placeholder="Capacity"
//           style={inputStyle}
//         />

//         {/* Assign Route */}
//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Assign Route</div>
//           <div style={arrowStyle}>▼</div>
//         </div>

//         {/* Assign Driver */}
//         <div style={dropdownStyle}>
//           <div style={dropdownTextStyle}>Assign Driver</div>
//           <div style={arrowStyle}>▼</div>
//         </div>

//         {/* Save Button */}
//         <button style={saveButtonStyle}>Save</button>
//       </div>
//     </div>
//   );
// }

// export default AddBusScreen;

