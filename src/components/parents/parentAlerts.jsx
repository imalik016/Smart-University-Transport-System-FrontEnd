import React from "react";

function ParentAlertsScreen() {

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
    cursor: "pointer",
  };

  const activeTabStyle = {
    textDecoration: "underline",
  };

  /* Alerts Container */
  const scrollContainerStyle = {
    padding: "0 20px 20px 20px",
  };

  /* Alert Cards */
  const cardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "15px",
    marginRight:"100px",
    marginLeft:"100px",
    marginBottom: "15px",
  };

  const cardTitleStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#2C3E50",
    marginBottom: "6px",
  };

  const cardMessageStyle = {
    fontSize: "14px",
    color: "#000000",
  };

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={parentIconStyle}>👤</div>
        <div style={parentTextStyle}>Parent</div>
      </div>

      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <div style={navTabStyle}>Dashboard</div>
        <div style={{ ...navTabStyle, ...activeTabStyle }}>Alerts</div>
        <div style={navTabStyle}>Student info</div>
      </div>

      {/* Alerts List */}
      <div style={scrollContainerStyle}>

        {/* PreBoard Alert */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>PreBoard Alert</div>
          <div style={cardMessageStyle}>Bus Leaving in 5 mins</div>
        </div>

        {/* Boarding Notification */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Boarding Notification</div>
          <div style={cardMessageStyle}>
            Abdullah Munawar has boarded the bus
          </div>
        </div>

        {/* Delayed Notification */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Delayed Notification</div>
          <div style={cardMessageStyle}>Bus 12 delayed 10 mins</div>
        </div>

      </div>
    </div>
  );
}

export default ParentAlertsScreen;

