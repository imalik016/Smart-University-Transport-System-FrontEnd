import React from "react";
import { useNavigate } from "react-router-dom";
import DataService from "../../services/axios"; // Kept for consistency

export default function QuickAddScreen() {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      title: "Add Student & Parent",
      subtitle: "Register new student and link parent",
      icon: "🎓",
      route: "/add-student", 
      color: "#B39DDB",
    },
    {
      id: 2,
      title: "Add Faculty",
      subtitle: "Add new teacher or staff member",
      icon: "👨‍🏫",
      route: "/add-teacher", 
      color: "#81D4FA",
    },
    {
      id: 3,
      title: "Add Driver",
      subtitle: "Register new bus driver",
      icon: "🆔",
      route: "/add-driver",
      color: "#A5D6A7",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Add New Record</h1>
        <p style={styles.headerSubtitle}>Choose an action to proceed</p>
      </div>

      {/* Cards List */}
      <div style={styles.cardContainer}>
        {actions.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onClick={() => navigate(item.route)}
          >
            <div style={{ ...styles.iconContainer, backgroundColor: item.color }}>
              <span style={styles.icon}>{item.icon}</span>
            </div>
            <div style={styles.textContainer}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardSubtitle}>{item.subtitle}</p>
            </div>
            <span style={styles.arrow}>❯</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh',minWidth:"100vw", backgroundColor: "#1A243A", paddingBottom: '30px' },
  header: {
    backgroundColor: "#7D58C1",
    paddingTop: '60px',
    paddingBottom: '30px',
    paddingHorizontal: '20px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    textAlign: 'center',
  },
  headerTitle: { color: "#FFF", fontSize: '26px', fontWeight: "bold", margin: 0 },
  headerSubtitle: { color: "#D1C4E9", fontSize: '14px', marginTop: '5px', margin: 0 },
  
  cardContainer: { padding: '20px', marginTop: '10px', maxWidth: '600px', margin: '10px auto' },
  card: {
    backgroundColor: "#2D3436",
    borderRadius: '20px',
    padding: '20px',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: '15px',
    border: '1px solid #444',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
  },
  iconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '15px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: '15px',
  },
  icon: { fontSize: '30px' },
  textContainer: { flex: 1 },
  cardTitle: { color: "#FFF", fontSize: '18px', fontWeight: "bold", margin: 0 },
  cardSubtitle: { color: "#BDC3C7", fontSize: '12px', marginTop: '3px', margin: 0 },
  arrow: { color: "#7D58C1", fontSize: '18px', fontWeight: "bold", marginLeft: '10px' },
};
