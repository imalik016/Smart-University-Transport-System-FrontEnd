import React from "react";

function ParentStudentInfoScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#7D58C1",
    paddingTop: "40px",
    boxSizing: "border-box",
  };

  /* Header */
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    marginBottom: "10px",
  };

  const parentIconStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#9C8CF0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px",
    fontSize: "16px",
  };

  const parentTextStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "16px",
  };

  /* Navigation Bar */
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#000000",
    padding: "10px 0",
    marginBottom: "10px",
  };

  const navTabStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
  };

  const activeTabStyle = {
    textDecoration: "underline",
  };

  /* Scroll Content */
  const scrollContainerStyle = {
    padding: "0 20px 20px 20px",
  };

  /* Cards */
  const cardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "15px",
  };

  const cardTitleStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#2C3E50",
    marginBottom: "8px",
  };

  const cardInfoStyle = {
    fontSize: "14px",
    color: "#000000",
    marginBottom: "4px",
  };

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={parentIconStyle}>👤</div>
        <div style={parentTextStyle}>Parent</div>
      </div>

      {/* Secondary Navigation Bar */}
      <div style={navBarStyle}>
        <div style={navTabStyle}>Dashboard</div>
        <div style={{ ...navTabStyle, ...activeTabStyle }}>Student info</div>
        <div style={navTabStyle}>Alerts</div>
      </div>

      {/* Main Content */}
      <div style={scrollContainerStyle}>

        {/* Student Details Card */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Student Details</div>
          <div style={cardInfoStyle}>Name: Hamza Ahmed</div>
          <div style={cardInfoStyle}>Arid No: 2022-Arid-4000</div>
          <div style={cardInfoStyle}>Course: PF, OOP, MAP</div>
          <div style={cardInfoStyle}>Bus Route: Campus to City</div>
        </div>

        {/* Trip History Card */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Trip History</div>
          <div style={cardInfoStyle}>12 OCT: On Time</div>
          <div style={cardInfoStyle}>14 OCT: Late</div>
        </div>

      </div>
    </div>
  );
}

export default ParentStudentInfoScreen;

