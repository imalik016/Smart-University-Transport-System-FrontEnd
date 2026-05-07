import React from "react";
import userImage from "../../assets/images/Usericon.png";

function ManageInfoScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1A243A",
    paddingBottom: "40px",
    position: "relative",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
  };

  const titleStyle = {
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const adminContainerStyle = {
    textAlign: "center",
  };

  const adminIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };

  const adminTextStyle = {
    color: "#FFFFFF",
    fontSize: "12px",
    marginTop: "4px",
  };

  const tabBarStyle = {
    backgroundColor: "#D8298C",
    margin: "0 30px",
    borderRadius: "12px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  };

  const tabStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const activeTabStyle = {
    textDecoration: "underline",
  };

  const cardContainerStyle = {
    padding: "0 30px",
  };

  const cardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "15px",
    marginBottom: "15px",
    color: "#000",
  };

  const deleteButtonStyle = {
    backgroundColor: "#D8298C",
    border: "none",
    color: "#FFF",
    padding: "6px 12px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "8px",
  };

  return (
    <div style={containerStyle}>

      <div style={headerStyle}>
        <div style={titleStyle}>Manage Info</div>

        <div style={adminContainerStyle}>
          <img src={userImage} alt="Admin" style={adminIconStyle} />
          <div style={adminTextStyle}>Admin</div>
        </div>
      </div>

      <div style={tabBarStyle}>
        <span style={{ ...tabStyle, ...activeTabStyle }}>Schedule</span>
        <span style={tabStyle}>Travel Logs</span>
        <span style={tabStyle}>Reports</span>
      </div>

      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <strong>Bus-01</strong>
          <div>Departure: 7:30 | Return: 2</div>
          <div>Type: Morning</div>
          <button style={deleteButtonStyle}>Delete</button>
        </div>

        <div style={cardStyle}>
          <strong>Bus-02</strong>
          <div>Departure: 8:30 | Return: 3</div>
          <div>Type: Evening</div>
          <button style={deleteButtonStyle}>Delete</button>
        </div>
      </div>

    </div>
  );
}

export default ManageInfoScreen;
