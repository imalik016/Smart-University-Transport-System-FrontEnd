import React from "react";
import { useNavigate } from "react-router-dom";

function ManageTravelScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1A243A",
    position: "relative",
    paddingBottom: "140px",
    boxSizing: "border-box"
  };

  /* Header */
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px"
  };

  const headerTitleStyle = {
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: "bold"
  };

  const adminContainerStyle = {
    textAlign: "center"
  };

  const adminIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#9C8CF0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  };

  const adminIconTextStyle = {
    fontSize: "18px"
  };

  const adminTextStyle = {
    color: "#FFFFFF",
    fontSize: "12px",
    marginTop: "4px"
  };

  /* Navigation Bar */
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#1538d644",
    margin: "20px 30px",
    padding: "12px 0",
    borderRadius: "14px"
  };

  const navItemStyle = {
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  };

  /* Content */
  const contentStyle = {
    padding: "0 30px"
  };

  const subHeadingStyle = {
    color: "#FFFFFF",
    fontSize: "18px",
    marginBottom: "12px"
  };

  /* Card */
  const cardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "14px",
    padding: "12px",
    marginLeft:"280px",
    marginBottom: "16px",
    width:"60%"
  };

  const cardTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#3B2F2F",
    marginBottom: "8px"
  };

  const cardTextStyle = {
    fontSize: "14px",
    color: "#333",
    marginBottom: "4px"
  };

  const deleteButtonStyle = {
    backgroundColor: "#C62828",
    padding: "8px",
    borderRadius: "8px",
    marginTop: "12px",
    color: "#FFFFFF",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    width: "40%"
  };

  /* Bottom Add Button */
  const bottomButtonContainerStyle = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%"
  };

  const addButtonStyle = {
    backgroundColor: "#7A60E0",
    borderRadius: "12px",
    padding: "12px",
    fontSize: "18px",
    color: "#FFFFFF",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    marginLeft:"120px",
    width: "40%"
  };


  const navigate = useNavigate();

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={headerTitleStyle}>Manage Travel</div>

        <div style={adminContainerStyle}>
          <div style={adminIconStyle}>
            <span style={adminIconTextStyle}>👤</span>
          </div>
          <div style={adminTextStyle}>Admin</div>
        </div>
      </div>

      {/* Navigation */}
      <div style={navBarStyle}>
        <div style={navItemStyle}>Bus</div>
        <div style={navItemStyle}>Route</div>
        <div style={navItemStyle}>Stop</div>
      </div>

      {/* Content */}
      <div style={contentStyle}>

        <div style={subHeadingStyle}>All Buses:</div>

        {/* Bus 1 */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Bus-01</div>
          <div style={cardTextStyle}>Capacity: 50</div>
          <div style={cardTextStyle}>Route: Campus-City</div>
          <div style={cardTextStyle}>Status: Active</div>
          <button style={deleteButtonStyle}>Delete Bus</button>
        </div>

        {/* Bus 2 */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Bus-02</div>
          <div style={cardTextStyle}>Capacity: 40</div>
          <div style={cardTextStyle}>Route: Hostel-Campus</div>
          <div style={cardTextStyle}>Status: Active</div>
          <button style={deleteButtonStyle}>Delete Bus</button>
        </div>

      </div>

      {/* Add New Bus Button */}
      <div style={bottomButtonContainerStyle}>
        <button 
            style={addButtonStyle}
            onClick={() => navigate("/admin/add-bus")}
            >
              Add New Bus
        </button>
      </div>

    </div>
  );
}

export default ManageTravelScreen;

