// // import React from "react";

// // function StudentAlertsScreen() {

// //   const containerStyle = {
// //     minHeight: "100vh",
// //     //width: "100vw",
// //     backgroundColor: "#5DADE2",
// //     paddingTop: "40px",
// //     boxSizing: "border-box",
// //   };

// //   const headerStyle = {
// //     display: "flex",
// //     alignItems: "center",
// //     padding: "0 20px",
// //     marginBottom: "10px",
// //   };

// //   const avatarStyle = {
// //     width: "36px",
// //     height: "36px",
// //     borderRadius: "50%",
// //     backgroundColor: "#D6EAF8",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginRight: "8px",
// //     fontSize: "16px",
// //   };

// //   const headerTextStyle = {
// //     fontSize: "16px",
// //     fontWeight: "bold",
// //     color: "#000",
// //   };

// //   const navBarStyle = {
// //     display: "flex",
// //     justifyContent: "space-around",
// //     backgroundColor: "#1B2631",
// //     padding: "10px 0",
// //   };

// //   const navItemStyle = {
// //     color: "#FFFFFF",
// //     fontWeight: "bold",
// //     padding: "6px 14px",
// //     borderRadius: "14px",
// //     cursor: "pointer",
// //   };

// //   const activeTabStyle = {
// //     backgroundColor: "#5DADE2",
// //   };

// //   const contentStyle = {
// //     padding: "20px",
// //   };

// //   const alertCardStyle = {
// //     backgroundColor: "#E6E6E6",
// //     borderRadius: "16px",
// //     padding: "16px",
// //     marginBottom: "14px",
// //   };

// //   const alertTitleStyle = {
// //     fontSize: "16px",
// //     fontWeight: "bold",
// //     color: "#1F3A93",
// //     marginBottom: "6px",
// //   };

// //   const alertTextStyle = {
// //     fontSize: "14px",
// //     color: "#000000",
// //   };

// //   return (
// //     <div style={containerStyle}>

// //       {/* Header */}
// //       <div style={headerStyle}>
// //         <div style={avatarStyle}>👤</div>
// //         <div style={headerTextStyle}>Student</div>
// //       </div>

// //       {/* Navigation Bar */}
// //       <div style={navBarStyle}>
// //         <div style={navItemStyle}>Dashboard</div>
// //         <div style={{ ...navItemStyle, ...activeTabStyle }}>Alerts</div>
// //         <div style={navItemStyle}>My Pass</div>
// //       </div>

// //       {/* Alerts Content */}
// //       <div style={contentStyle}>

// //         {/* PreBoard Alert */}
// //         <div style={alertCardStyle}>
// //           <div style={alertTitleStyle}>PreBoard Alert</div>
// //           <div style={alertTextStyle}>
// //             Bus Leaving in 5 mins Get ready
// //           </div>
// //         </div>

// //         {/* Delayed Notification */}
// //         <div style={alertCardStyle}>
// //           <div style={alertTitleStyle}>Delayed Notification</div>
// //           <div style={alertTextStyle}>
// //             Bus08 delayed 10 mins
// //           </div>
// //         </div>

// //         {/* Drop Off Alert */}
// //         <div style={alertCardStyle}>
// //           <div style={alertTitleStyle}>Drop Off Alert</div>
// //           <div style={alertTextStyle}>
// //             Reaching destination in 5 mins
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default StudentAlertsScreen;

// import React from "react";

// function StudentAlertsScreen() {

//   const containerStyle = {
//     minHeight: "100vh",
//     minWidth:"80vw",
//     backgroundColor: "#5DADE2",
//     paddingTop: "20px", // resized for mobile
//     boxSizing: "border-box",
//   };

//   const headerStyle = {
//     display: "flex",
//     width:"50%",
//     alignItems: "center",
//     padding: "0 15px", // smaller padding
//     marginBottom: "8px",
//   };

//   const avatarStyle = {
//     width: "30px",       // smaller avatar
//     height: "30px",
//     borderRadius: "50%",
//     backgroundColor: "#D6EAF8",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "6px",
//     fontSize: "14px",    // smaller emoji
//   };

//   const headerTextStyle = {
//     fontSize: "14px",    // smaller text
//     fontWeight: "bold",
//     color: "#000",
//   };

//   const navBarStyle = {
//     width:"75%",
//     display: "flex",
//     justifyContent: "space-around",
//     backgroundColor: "#1B2631",
//     padding: "6px 0",  // smaller padding
//   };

//   const navItemStyle = {
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     padding: "4px 8px",   // smaller buttons
//     borderRadius: "12px",
//     cursor: "pointer",
//     fontSize: "12px",     // smaller font
//   };

//   const activeTabStyle = {
//     backgroundColor: "#5DADE2",
//   };

//   const contentStyle = {
//     padding: "15px", // smaller padding
//   };

//   const alertCardStyle = {
//     backgroundColor: "#E6E6E6",
//     borderRadius: "14px", // slightly smaller
//     padding: "12px",
//     marginBottom: "10px",
//     width:"70%",
//   };

//   const alertTitleStyle = {
//     fontSize: "14px",  // smaller
//     fontWeight: "bold",
//     color: "#1F3A93",
//     marginBottom: "4px",
//   };

//   const alertTextStyle = {
//     fontSize: "12px",  // smaller
//     color: "#000000",
//   };

//   return (
//     <div style={containerStyle}>

//       {/* Header */}
//       <div style={headerStyle}>
//         <div style={avatarStyle}>👤</div>
//         <div style={headerTextStyle}>Student</div>
//       </div>

//       {/* Navigation Bar */}
//       <div style={navBarStyle}>
//         <div style={navItemStyle}>Dashboard</div>
//         <div style={{ ...navItemStyle, ...activeTabStyle }}>Alerts</div>
//         <div style={navItemStyle}>My Pass</div>
//       </div>

//       {/* Alerts Content */}
//       <div style={contentStyle}>

//         {/* PreBoard Alert */}
//         <div style={alertCardStyle}>
//           <div style={alertTitleStyle}>PreBoard Alert</div>
//           <div style={alertTextStyle}>
//             Bus Leaving in 5 mins Get ready
//           </div>
//         </div>

//         {/* Delayed Notification */}
//         <div style={alertCardStyle}>
//           <div style={alertTitleStyle}>Delayed Notification</div>
//           <div style={alertTextStyle}>
//             Bus08 delayed 10 mins
//           </div>
//         </div>

//         {/* Drop Off Alert */}
//         <div style={alertCardStyle}>
//           <div style={alertTitleStyle}>Drop Off Alert</div>
//           <div style={alertTextStyle}>
//             Reaching destination in 5 mins
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default StudentAlertsScreen;





import React from "react";
import Sidebar from "./BottomNavbar";

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "Emergency Bus Alert",
      time: "11:24 AM",
      desc: "Route: University Circular Route. Issue: Bus technical fault/Breakdown. Expect significant delays.",
      type: "emergency"
    },
    {
      id: 2,
      title: "Bus Approaching",
      time: "11:17 AM",
      desc: "Bus Bus01 is approaching University.",
      type: "info"
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Live Alerts</h1>
        <div style={styles.dateBadge}>📅 4/25/2026</div>
      </div>

      <div style={styles.list}>
        {alerts.map(alert => (
          <div key={alert.id} style={styles.card}>
            <div style={{...styles.indicator, backgroundColor: alert.type === 'emergency' ? '#FFD700' : '#FFF'}} />
            <div style={styles.cardBody}>
              <div style={styles.cardHeader}>
                <span style={styles.cardTitle}>{alert.title}</span>
                <span style={styles.cardTime}>{alert.time}</span>
              </div>
              <p style={styles.cardDesc}>{alert.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Sidebar active="alerts" />
    </div>
  );
}

const styles = {
  container: { height: '100vh', backgroundColor: "#1A243A", display: 'flex', flexDirection: 'column' },
  header: { padding: '30px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#FFF', fontSize: '28px', fontWeight: 'bold' },
  dateBadge: { backgroundColor: '#7D58C1', padding: '8px 15px', borderRadius: '15px', color: '#FFF' },
  list: { flex: 1, padding: '0 20px', overflowY: 'auto' },
  card: { backgroundColor: '#FFF', borderRadius: '15px', marginBottom: '15px', display: 'flex', overflow: 'hidden' },
  indicator: { width: '10px' },
  cardBody: { padding: '15px', flex: 1 },
  cardHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
  cardTitle: { fontWeight: 'bold', fontSize: '18px', color: '#1A243A' },
  cardTime: { color: '#666', fontSize: '14px' },
  cardDesc: { color: '#444', lineHeight: '1.4' }
};




