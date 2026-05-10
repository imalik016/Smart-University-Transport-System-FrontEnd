// import React from "react";
// import { useNavigate } from "react-router-dom";
// import DataService from "../../services/axios"; // Kept for consistency

// export default function QuickAddScreen() {
//   const navigate = useNavigate();

//   const actions = [
//     {
//       id: 1,
//       title: "Add Student & Parent",
//       subtitle: "Register new student and link parent",
//       icon: "🎓",
//       route: "/add-student", 
//       color: "#B39DDB",
//     },
//     {
//       id: 2,
//       title: "Add Faculty",
//       subtitle: "Add new teacher or staff member",
//       icon: "👨‍🏫",
//       route: "/add-teacher", 
//       color: "#81D4FA",
//     },
//     {
//       id: 3,
//       title: "Add Driver",
//       subtitle: "Register new bus driver",
//       icon: "🆔",
//       route: "/add-driver",
//       color: "#A5D6A7",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Header Section */}
//       <div style={styles.header}>
//         <h1 style={styles.headerTitle}>Add New Record</h1>
//         <p style={styles.headerSubtitle}>Choose an action to proceed</p>
//       </div>

//       {/* Cards List */}
//       <div style={styles.cardContainer}>
//         {actions.map((item) => (
//           <div
//             key={item.id}
//             style={styles.card}
//             onClick={() => navigate(item.route)}
//           >
//             <div style={{ ...styles.iconContainer, backgroundColor: item.color }}>
//               <span style={styles.icon}>{item.icon}</span>
//             </div>
//             <div style={styles.textContainer}>
//               <h3 style={styles.cardTitle}>{item.title}</h3>
//               <p style={styles.cardSubtitle}>{item.subtitle}</p>
//             </div>
//             <span style={styles.arrow}>❯</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: { minHeight: '100vh',minWidth:"100vw", backgroundColor: "#1A243A", paddingBottom: '30px' },
//   header: {
//     backgroundColor: "#7D58C1",
//     paddingTop: '60px',
//     paddingBottom: '30px',
//     paddingHorizontal: '20px',
//     borderBottomLeftRadius: '30px',
//     borderBottomRightRadius: '30px',
//     textAlign: 'center',
//   },
//   headerTitle: { color: "#FFF", fontSize: '26px', fontWeight: "bold", margin: 0 },
//   headerSubtitle: { color: "#D1C4E9", fontSize: '14px', marginTop: '5px', margin: 0 },
  
//   cardContainer: { padding: '20px', marginTop: '10px', maxWidth: '600px', margin: '10px auto' },
//   card: {
//     backgroundColor: "#2D3436",
//     borderRadius: '20px',
//     padding: '20px',
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: '15px',
//     border: '1px solid #444',
//     cursor: 'pointer',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
//   },
//   iconContainer: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '15px',
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: '15px',
//   },
//   icon: { fontSize: '30px' },
//   textContainer: { flex: 1 },
//   cardTitle: { color: "#FFF", fontSize: '18px', fontWeight: "bold", margin: 0 },
//   cardSubtitle: { color: "#BDC3C7", fontSize: '12px', marginTop: '3px', margin: 0 },
//   arrow: { color: "#7D58C1", fontSize: '18px', fontWeight: "bold", marginLeft: '10px' },
// };






import React from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar"; 

export default function AddNewRecord() {
  const navigate = useNavigate();

  const options = [
    { title: "Add Student & Parent", desc: "Register new student and link parent", path: "/admin/add-user/add-student", icon: "🎓", color: "#7D58C1" },
    { title: "Add Faculty", desc: "Add new teacher or staff member", path: "/admin/add-user/add-faculty", icon: "👨‍🏫", color: "#4CC9F0" },
    { title: "Add Driver", desc: "Register new bus driver", path: "/admin/add-user/add-driver", icon: "🆔", color: "#80ED99" },
    { title: "Add Stop", desc: "Add New Stop", path: "/admin/add-user/add-stop", icon: "🛑", color: "#e5e4ee" },
    { title: "Add Route", desc: "Add New Route", path: "/admin/add-user/add-route", icon: "📍", color: "#2c2379" },
    { title: "Add Course", desc: "Add new courses", path: "/admin/add-user/add-course", icon: "📚", color: "#2c2379" },
    { title: "Course enrollment", desc: "Assign teacher & enroll in course", path: "/admin/add-user/asg-enroll-course", icon: "📄", color: "#2c2379" }, 
    { title: "Add New Trips", desc: "Generate Trips", path: "/admin/add-user/generate-trips", icon: "🗺️", color: "#2c2379" }

  ];

  return (
    <div style={styles.container}>
      {/* <Sidebar active="add-new" /> */}
      <div style={styles.mainWrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Add New Record</h1>
          <p style={styles.subtitle}>Choose an action to proceed</p>
        </div>
        <div style={styles.content}>
          {options.map((opt, i) => (
            <button key={i} style={styles.card} onClick={() => navigate(opt.path)}>
              <div style={{ ...styles.iconBox, backgroundColor: opt.color }}>{opt.icon}</div>
              <div style={styles.cardText}>
                <h3 style={styles.cardTitle}>{opt.title}</h3>
                <p style={styles.cardDesc}>{opt.desc}</p>
              </div>
              <span style={styles.arrow}>❯</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { height: '140vh', width: '60vw', backgroundColor: "#1A243A", display: 'flex' },
  mainWrapper: { flex: 1, marginLeft: "260px", display: 'flex', flexDirection: 'column' },
  header: { backgroundColor: "#7D58C1", padding: "40px", textAlign: "center", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" },
  title: { color: "#FFF", fontSize: "28px", margin: 0 },
  subtitle: { color: "#E0E0E0", marginTop: "10px" },
  content: { padding: "30px", display: 'flex', flexDirection: 'column', gap: "20px", alignItems: 'center' },
  card: { width: "100%", maxWidth: "600px", backgroundColor: "#0D1117", border: "none", borderRadius: "15px", padding: "20px", display: 'flex', alignItems: 'center', cursor: "pointer", textAlign: "left" },
  iconBox: { width: "60px", height: "60px", borderRadius: "12px", display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "24px", marginRight: "20px" },
  cardText: { flex: 1 },
  cardTitle: { color: "#FFF", margin: 0, fontSize: "18px" },
  cardDesc: { color: "#A0AEC0", margin: "5px 0 0 0", fontSize: "14px" },
  arrow: { color: "#7D58C1", fontSize: "20px" }
};
