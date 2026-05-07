import React from "react";
import userImage from "../../assets/images/Usericon.png";

function ManageStopsScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1A243A",
    position: "relative",
    paddingBottom: "100px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px 30px",
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

  const iconWrapperStyle = {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "20px",
  };

  const iconBoxStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "20px",
    backgroundColor: "#E6E6E6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 12px auto",
    fontSize: "48px",
  };

  const titleStyle = {
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const cardContainerStyle = {
    padding: "0 30px",
  };

  const cardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "20px",
    padding: "16px",
    marginBottom: "16px",
  };

  const stopTitleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#7A60E0",
    marginBottom: "6px",
  };

  const coordinatesStyle = {
    fontSize: "14px",
    color: "#111",
    marginBottom: "12px",
  };

  const deleteButtonStyle = {
    backgroundColor: "#d8298c",
    borderRadius: "12px",
    padding: "8px",
    color: "#FFFFFF",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  };

  const addButtonStyle = {
    backgroundColor: "#7A60E0",
    borderRadius: "20px",
    padding: "16px",
    textAlign: "center",
    position: "fixed",
    bottom: "20px",
    left: "30px",
    right: "30px",
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={adminContainerStyle}>
          <img src={userImage} alt="Admin" style={adminIconStyle} />
          <div style={adminTextStyle}>Admin</div>
        </div>
      </div>

      {/* Icon & Title */}
      <div style={iconWrapperStyle}>
        <div style={iconBoxStyle}>🛑</div>
        <div style={titleStyle}>Stops</div>
      </div>

      {/* Stop Cards */}
      <div style={cardContainerStyle}>

        <div style={cardStyle}>
          <div style={stopTitleStyle}>Stop: Main Gate</div>
          <div style={coordinatesStyle}>
            Latitude: 24.8607 | Longitude: 67.0011
          </div>
          <button style={deleteButtonStyle}>
            Delete Stop
          </button>
        </div>

        <div style={cardStyle}>
          <div style={stopTitleStyle}>Stop: Carriage Factory</div>
          <div style={coordinatesStyle}>
            Latitude: 24.8610 | Longitude: 67.0025
          </div>
          <button style={deleteButtonStyle}>
            Delete Stop
          </button>
        </div>

        <div style={cardStyle}>
          <div style={stopTitleStyle}>Stop: Mandimorr</div>
          <div style={coordinatesStyle}>
            Latitude: 24.8620 | Longitude: 67.0030
          </div>
          <button style={deleteButtonStyle}>
            Delete Stop
          </button>
        </div>

      </div>

      {/* Add New Stop Button */}
      <button style={addButtonStyle}>
        Add New Stop
      </button>

    </div>
  );
}

export default ManageStopsScreen;

