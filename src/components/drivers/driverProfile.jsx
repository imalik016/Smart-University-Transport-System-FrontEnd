import React from "react";

function DriverProfileScreen() {
  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#3B5998",
    boxSizing: "border-box",
  };

  /* Header */
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    padding: "20px",
  };

  const screenTitleStyle = {
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const profileContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const profileCircleStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const profileTextStyle = {
    color: "#FFFFFF",
    fontSize: "12px",
    marginTop: "4px",
    fontWeight: "bold",
  };

  /* Navigation Bar */
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#2E2E2E",
    margin: "15px 20px 0 20px",
    borderRadius: "12px",
    padding: "10px 0",
  };

  const navTabStyle = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "6px 10px",
  };

  const activeTabStyle = {
    backgroundColor: "#5A5A5A",
    borderRadius: "12px",
  };

  /* Profile Card */
  const profileCardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    padding: "20px",
    margin: "20px",
    width:"70%",
    marginLeft:"250px",
  };

  const infoTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1A243A",
    marginBottom: "10px",
    marginLeft:"150px",
  };

  /* Logout Button */
  const logoutButtonStyle = {
    backgroundColor: "#2E2E2E",
    borderRadius: "12px",
    padding: "14px 0",
    textAlign: "center",
    marginTop: "20px",
    cursor: "pointer",
  };

  const logoutTextStyle = {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={screenTitleStyle}></div>

        <div style={profileContainerStyle}>
          <div style={profileCircleStyle}>👤</div>
          <div style={profileTextStyle}>Driver</div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <div style={navTabStyle}>Trip Details</div>
        <div style={{ ...navTabStyle, ...activeTabStyle }}>Profile</div>
        <div style={navTabStyle}>Alerts</div>
      </div>

      {/* Profile Card */}
      <div style={profileCardStyle}>
        <div style={infoTextStyle}>Name: John Ali</div>
        <div style={infoTextStyle}>Assigned Bus: 01</div>
        <div style={infoTextStyle}>Assigned Route: 03</div>

        {/* Logout Button */}
        <div style={logoutButtonStyle}>
          <div style={logoutTextStyle}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default DriverProfileScreen;

