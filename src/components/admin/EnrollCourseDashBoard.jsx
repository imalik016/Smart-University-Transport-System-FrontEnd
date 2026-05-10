
import React from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar"; 

export default function EnrollCourse() {
  const navigate = useNavigate();

  const options = [
    { title: "Student Enrollment", desc: "Enroll student in course", path: "/admin/add-user/asg-enroll-course/enroll-course", icon: "🎓", color: "#7D58C1" },
    { title: "Assign Teacher", desc: "Link faculty to courses and sections", path: "/admin/add-user/asg-enroll-course/assign-teacher", icon: "👨‍🏫", color: "#4CC9F0" },

  ];

  return (
    <div style={styles.container}>
      {/* <Sidebar active="add-new" /> */}
      <div style={styles.mainWrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Enrollment</h1>
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