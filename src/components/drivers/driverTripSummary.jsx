import React from "react";

function DriverTripSummaryScreen() {
  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#4169E1",
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

  /* Tab Navigation */
  const tabBarStyle = {
    display: "flex",
    backgroundColor: "#2E2E2E",
    margin: "15px 20px 0 20px",
    borderRadius: "12px",
  };

  const tabItemStyle = {
    flex: 1,
    padding: "10px 0",
    textAlign: "center",
    borderRadius: "12px",
  };

  const activeTabStyle = {
    backgroundColor: "#555555",
  };

  const tabTextStyle = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
  };

  /* Cards */
  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    padding: "16px",
    margin: "0 20px 16px 20px",
  };

  const tripHeaderStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000000",
    marginBottom: "6px",
  };

  const tripDetailStyle = {
    fontSize: "14px",
    color: "#000000",
    marginBottom: "4px",
  };

  const tripStatusStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  /* Start Trip Button */
  const startButtonStyle = {
    backgroundColor: "#7A60E0",
    borderRadius: "12px",
    padding: "10px 0",
    textAlign: "center",
    marginTop: "10px",
    cursor: "pointer",
  };

  const startButtonTextStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFFFFF",
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

      {/* Tab Navigation */}
      <div style={{ display: "flex", ...tabBarStyle }}>
        <div style={{ ...tabItemStyle, ...activeTabStyle }}>
          <div style={tabTextStyle}>Trip Details</div>
        </div>
        <div style={tabItemStyle}>
          <div style={tabTextStyle}>Alerts</div>
        </div>
        <div style={tabItemStyle}>
          <div style={tabTextStyle}>Profile</div>
        </div>
      </div>

      {/* Trip Assignment Cards */}
      <div style={{ marginTop: "20px" }}>
        {[1, 2, 3].map((trip, index) => (
          <div key={index} style={cardStyle}>
            <div style={tripHeaderStyle}>Trip Status: Bus No: 12</div>
            <div style={tripDetailStyle}>
              Departure: 7:30 AM | End Time: 10:00 AM
            </div>
            <div style={tripDetailStyle}>Stops: 5</div>
            <div style={tripStatusStyle}>Status: Not Started</div>

            {/* Start Trip Button */}
            <div style={startButtonStyle}>
              <div style={startButtonTextStyle}>Start Trip</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriverTripSummaryScreen;

