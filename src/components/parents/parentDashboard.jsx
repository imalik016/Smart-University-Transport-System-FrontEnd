import React from "react";
import { useNavigate } from "react-router-dom";

function ParentDashboardScreen() {
  const navigate = useNavigate();

  // Example data for children
  const children = [
    { name: "Hamza Ahmed", semester: "07" },
    { name: "Mohsin Ishfaq", semester: "05" },
    { name: "Ali Raza", semester: "06" },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.profileContainer}>
          <div style={styles.profileCircle}>
            <span style={styles.profileIcon}>👤</span>
          </div>
          <span style={styles.profileText}>Parent</span>
        </div>
      </div>

      {/* Secondary Dashboard Bar */}
      <div style={styles.navBar}>
        <span style={styles.navText}>Dashboard</span>
        <div style={styles.underline} />
      </div>

      {/* Child Details Cards */}
      <div style={styles.scrollContainer}>
        {children.map((child, index) => (
          <div key={index} style={styles.card}>
            <div>
              <p style={styles.studentName}>Name: {child.name}</p>
              <p style={styles.studentSemester}>Semester No: {child.semester}</p>
            </div>
            <button 
              style={styles.detailButton} 
              onClick={() => console.log("Navigate to details")}
            >
              <span style={styles.detailButtonText}>Check Details</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentDashboardScreen;

const styles = {
  container: {
    minHeight: "100vh",
    minWidth:"80vw",
    width:"70%",
    backgroundColor: "#7D58C1",
  },
  /* Header */
  header: {
    paddingTop: "40px",
    paddingHorizontal: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  profileIcon: {
    fontSize: "18px",
  },
  profileText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  /* Secondary Navigation Bar */
  navBar: {
    margin: "15px 20px 0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  navText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  underline: {
    height: "3px",
    backgroundColor: "#FFFFFF",
    width: "80px",
    marginTop: "4px",
    borderRadius: "2px",
  },
  /* Child Cards Container */
  scrollContainer: {
    padding: "20px",
    paddingBottom: "100px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  /* Child Cards */
  card: {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  studentName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000000",
    margin: 0,
  },
  studentSemester: {
    fontSize: "12px",
    color: "#000000",
    marginTop: "4px",
    margin: 0,
  },
  /* Check Details Button */
  detailButton: {
    backgroundColor: "#FFD700",
    padding: "8px 12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  detailButtonText: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#000000",
  },
};