import React from "react";
import mapImage from "../../assets/images/map.jpeg"; // adjust path if needed

function ParentChildDetailsScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#7D58C1",
    boxSizing: "border-box",
  };

  /* Header */
  const headerStyle = {
    paddingTop: "40px",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
  };

  const profileContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const profileCircleStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    fontSize: "18px",
  };

  const profileTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFFFFF",
  };

  /* Navigation Bar */
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#000000",
    padding: "10px 0",
    margin: "10px 20px",
    borderRadius: "10px",
  };

  const navTextStyle = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const activeTabStyle = {
    textDecoration: "underline",
    fontSize: "15px",
  };

  /* Content */
  const scrollContainerStyle = {
    padding: "20px",
    paddingBottom: "100px",
  };

  const sectionTitleStyle = {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const cardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "20px",
  };

  const mapContainerStyle = {
    height: "200px",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "8px",
  };

  const mapImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "#CCCCCC",
  };

  const statusFooterStyle = {
    backgroundColor: "#FFFFFF",
    padding: "8px",
    borderRadius: "8px",
    textAlign: "center",
  };

  const statusTextStyle = {
    color: "#000000",
    fontWeight: "bold",
  };

  const summaryTextStyle = {
    fontSize: "14px",
    color: "#000000",
    marginBottom: "6px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={profileContainerStyle}>
          <div style={profileCircleStyle}>👤</div>
          <div style={profileTextStyle}>Parent</div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <div style={{ ...navTextStyle, ...activeTabStyle }}>Dashboard</div>
        <div style={navTextStyle}>Alerts</div>
        <div style={navTextStyle}>Student info</div>
      </div>

      {/* Main Content */}
      <div style={scrollContainerStyle}>

        {/* Live Bus Tracking */}
        <div style={sectionTitleStyle}>Live Bus Tracking</div>

        <div style={cardStyle}>

          <div style={mapContainerStyle}>
            <img src={mapImage} alt="map" style={mapImageStyle} />
          </div>

          <div style={statusFooterStyle}>
            <div style={statusTextStyle}>
              Bus# 12 | Status: Arriving in 5 mins
            </div>
          </div>
        </div>

        {/* Trip Summary */}
        <div style={cardStyle}>
          <div style={summaryTextStyle}>Boarded: Yes</div>
          <div style={summaryTextStyle}>Departure: 7:30 AM</div>
          <div style={summaryTextStyle}>Arrival: 8:30 AM</div>
        </div>

      </div>
    </div>
  );
}

export default ParentChildDetailsScreen;
