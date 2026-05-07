import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios";

function ManageRoutes() {
  //const [routes, setRoutes] = useState([]);
  const [routes, setRoutes] = useState([
  { id: 1, name: "City Center Express", distance: "12.5", stops: "8", buses: "3" },
  { id: 2, name: "University Loop", distance: "8.2", stops: "5", buses: "2" },
  { id: 3, name: "Suburban Connector", distance: "25.0", stops: "12", buses: "5" }
]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const res = await DataService.get("/Routes/GetAllRoutes");
      setRoutes(res.data);
    } catch (error) {
      console.error("Error fetching routes:", error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div />
        <div style={styles.adminContainer}>
          <div style={styles.adminCircle}>
            <span style={styles.adminIcon}>👤</span>
          </div>
          <span style={styles.adminText}>Admin</span>
        </div>
      </header>

      {/* Routes List */}
      <main style={styles.list}>
        {routes.map((route) => (
          <div key={route.id} style={styles.card}>
            <h3 style={styles.routeTitle}>{route.name}</h3>
            <p style={styles.metrics}>
              Distance: {route.distance} kms | Stops: {route.stops} | Buses: {route.buses}
            </p>

            <div style={styles.mapPlaceholder}>
              <span style={styles.mapText}>Map Preview</span>
            </div>

            <div style={styles.cardButtons}>
              <button 
                style={styles.editBtn} 
                onClick={() => navigate(`/edit-route/${route.id}`)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Action */}
      <footer style={styles.bottomArea}>
        <button style={styles.addButton} onClick={() => navigate("/add-route")}>
          Add New Route
        </button>
      </footer>
    </div>
  );
}

// Styling Object
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#1A243A",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  adminContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  adminCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E5E7EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  adminIcon: {
    fontSize: 16,
  },
  adminText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
  },
  list: {
    padding: "20px",
    paddingBottom: 140,
    overflowY: "auto",
  },
  card: {
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    margin: "0 0 6px 0",
  },
  metrics: {
    fontSize: 12,
    color: "#333",
    margin: "0 0 12px 0",
  },
  mapPlaceholder: {
    height: 120,
    width: "100%",
    backgroundColor: "#D1D5DB",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  mapText: {
    color: "#555",
    fontWeight: "bold",
  },
  cardButtons: {
    display: "flex",
  },
  editBtn: {
    backgroundColor: "#374151",
    padding: "8px 16px",
    borderRadius: 20,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  bottomArea: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: "20px",
    backgroundColor: "#1A243A",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  addButton: {
    backgroundColor: "#7A60E0",
    width: "100%",
    padding: "16px",
    borderRadius: 30,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
};

export default ManageRoutes;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function ManageRoutesScreen() {

// const navigate = useNavigate();

//   const containerStyle = {
//     minHeight: "100vh",
//     //width: "100vw",
//     backgroundColor: "#1A243A",
//     position: "relative",
//     paddingBottom: "160px",
//     boxSizing: "border-box",
//     marginLeft:"400px",
//   };

//   /* Header */
//   const headerStyle = {
//     paddingTop: "20px",
//     paddingLeft: "30px",
//     paddingRight: "30px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start"
//   };

//   const adminContainerStyle = {
//     textAlign: "center"
//   };

//   const adminCircleStyle = {
//     width: "38px",
//     height: "38px",
//     borderRadius: "50%",
//     backgroundColor: "#E5E7EB",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "0 auto"
//   };

//   const adminIconStyle = {
//     fontSize: "16px"
//   };

//   const adminTextStyle = {
//     color: "#FFFFFF",
//     fontSize: "12px",
//     marginTop: "4px",
//     fontWeight: "bold"
//   };

//   /* List */
//   const listStyle = {
//     padding: "20px 30px"
//   };

//   /* Card */
//   const cardStyle = {
//     backgroundColor: "#E6E6E6",
//     borderRadius: "20px",
//     padding: "16px",
//     marginBottom: "20px"
//   };

//   const routeTitleStyle = {
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#111",
//     marginBottom: "6px"
//   };

//   const metricsStyle = {
//     fontSize: "12px",
//     color: "#333",
//     marginBottom: "12px"
//   };

//   /* Map Placeholder */
//   const mapPlaceholderStyle = {
//     height: "120px",
//     width: "100%",
//     backgroundColor: "#D1D5DB",
//     borderRadius: "12px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: "14px"
//   };

//   const mapTextStyle = {
//     color: "#555",
//     fontWeight: "bold"
//   };

//   /* Buttons */
//   const cardButtonsStyle = {
//     display: "flex",
//     flexDirection: "row"
//   };

//   const editBtnStyle = {
//     backgroundColor: "#374151",
//     padding: "8px 16px",
//     borderRadius: "20px",
//     marginRight: "10px",
//     color: "#FFFFFF",
//     fontSize: "12px",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer"
//   };

//   /* Bottom Area */
//   const bottomAreaStyle = {
//     position: "fixed",
//     bottom: "0",
//     width: "25%",
//     padding: "20px",
//     backgroundColor: "#1A243A",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   };

//   const addButtonStyle = {
//     backgroundColor: "#7A60E0",
//     width: "90%",
//     padding: "16px",
//     borderRadius: "30px",
//     color: "#FFFFFF",
//     fontSize: "18px",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer"
//   };

//   /* Dots */
//   const dotsRowStyle = {
//     display: "flex",
//     flexDirection: "row",
//     marginTop: "10px"
//   };

//   const dotStyle = (active) => ({
//     width: "8px",
//     height: "8px",
//     borderRadius: "50%",
//     backgroundColor: active ? "#FFFFFF" : "#555",
//     margin: "0 4px"
//   });

//   return (
//     <div style={containerStyle}>

//       {/* Header */}
//       <div style={headerStyle}>
//         <div></div>
//         <div style={adminContainerStyle}>
//           <div style={adminCircleStyle}>
//             <span style={adminIconStyle}>👤</span>
//           </div>
//           <div style={adminTextStyle}>Admin</div>
//         </div>
//       </div>

//       {/* Routes List */}
//       <div style={listStyle}>

//         {/* Route Card 1 */}
//         <div style={cardStyle}>
//           <div style={routeTitleStyle}>
//             Route-02 Westridge 3 to Carriage Factory
//           </div>

//           <div style={metricsStyle}>
//             Distance: 12 kms | Stops: 08 | Buses: 03
//           </div>

//           <div style={mapPlaceholderStyle}>
//             <span style={mapTextStyle}>Map Preview</span>
//           </div>

//           <div style={cardButtonsStyle}>
//             <button style={editBtnStyle}>Edit</button>
//           </div>
//         </div>

//         {/* Route Card 2 */}
//         <div style={cardStyle}>
//           <div style={routeTitleStyle}>
//             Route-05 University to Saddar
//           </div>

//           <div style={metricsStyle}>
//             Distance: 18 kms | Stops: 12 | Buses: 04
//           </div>

//           <div style={mapPlaceholderStyle}>
//             <span style={mapTextStyle}>Map Preview</span>
//           </div>

//           <div style={cardButtonsStyle}>
//             <button style={editBtnStyle}>Edit</button>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Area */}
//       <div style={bottomAreaStyle}>
//         <button style={addButtonStyle} 
//         onClick={() => navigate("../admin/add-route")}>Add New Route</button>

//         <div style={dotsRowStyle}>
//           <div style={dotStyle(true)}></div>
//           <div style={dotStyle(false)}></div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default ManageRoutesScreen;

