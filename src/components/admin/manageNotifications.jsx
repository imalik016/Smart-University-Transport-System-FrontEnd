import React from "react";
import userImage from "../../assets/images/Usericon.png";

function ManageNotificationsScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1A243A",
    paddingBottom: "60px",
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

  const categoryBarStyle = {
    backgroundColor: "#D8298C",
    margin: "0 30px",
    borderRadius: "12px",
    padding: "10px",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    textDecoration: "underline",
    marginBottom: "20px",
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

  const fabStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#2E2E2E",
    color: "#FFF",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>

      <div style={headerStyle}>
        <div style={titleStyle}>Manage Notifications</div>

        <div style={adminContainerStyle}>
          <img src={userImage} alt="Admin" style={adminIconStyle} />
          <div style={adminTextStyle}>Admin</div>
        </div>
      </div>

      <div style={categoryBarStyle}>
        Notifications and Alerts
      </div>

      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <strong>Bus-01 Delayed 10 mins</strong>
          <div>Sent to: Students (Route A)</div>
          <div>(Time: 7:30 AM)</div>
          <button style={deleteButtonStyle}>Delete</button>
        </div>

        <div style={cardStyle}>
          <strong>Student Ali Boarded</strong>
          <div>Sent to: Parents</div>
          <div>(Time: 8:00 AM)</div>
          <button style={deleteButtonStyle}>Delete</button>
        </div>
      </div>

      <button style={fabStyle}>+</button>

    </div>
  );
}

export default ManageNotificationsScreen;
