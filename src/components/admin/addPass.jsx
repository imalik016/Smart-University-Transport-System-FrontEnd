import React from "react";

function AddPassScreen() {
  const containerStyle = {
    minHeight: "100vh",
    minwidth:"100vw",
    // width: "100%",
    backgroundColor: "#1A243A",
    position: "relative",
    paddingBottom: "60px",
    boxSizing: "border-box",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    paddingTop: "20px",
  };

  const screenTitleStyle = {
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const adminContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const adminCircleStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "19px",
    backgroundColor: "#E5E7EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const adminIconStyle = { fontSize: "16px" };
  const adminTextStyle = {
    color: "#FFFFFF",
    fontSize: "12px",
    marginTop: "4px",
    fontWeight: "bold",
  };

  const formCardStyle = {
    backgroundColor: "#E6E6E6",
    margin: "30px 20px 0 20px",
    borderRadius: "20px",
    padding: "20px",
    width:"70%",
  };

  const labelStyle = {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#000",
    marginBottom: "6px",
    marginTop: "10px",
    display: "block",
  };

  const inputStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "14px",
    fontSize: "16px",
    marginBottom: "12px",
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    outline: "none",
  };

  const dropdownStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "14px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  };

  const dropdownTextStyle = { fontSize: "16px", color: "#555" };
  const arrowStyle = { fontSize: "14px", color: "#555" };

  const addButtonStyle = {
    backgroundColor: "#7A60E0",
    borderRadius: "12px",
    padding: "12px",
    marginTop: "20px",
    width: "100%",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFFFFF",
    border: "none",
    cursor: "pointer",
  };

  const paginationStyle = {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const dotActiveStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#7A60E0",
    margin: "0 4px",
  };

  const dotInactiveStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#555",
    margin: "0 4px",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={screenTitleStyle}>Add Pass</div>
        <div style={adminContainerStyle}>
          <div style={adminCircleStyle}>
            <span style={adminIconStyle}>👤</span>
          </div>
          <div style={adminTextStyle}>Admin</div>
        </div>
      </div>

      {/* Form Card */}
      <div style={formCardStyle}>
        <label style={labelStyle}>Student Name</label>
        <div style={dropdownStyle}>
          <span style={dropdownTextStyle}>Select Student</span>
          <span style={arrowStyle}>▼</span>
        </div>

        <label style={labelStyle}>Route</label>
        <div style={dropdownStyle}>
          <span style={dropdownTextStyle}>Select Route</span>
          <span style={arrowStyle}>▼</span>
        </div>

        <label style={labelStyle}>Expiry Date</label>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          style={inputStyle}
        />

        <label style={labelStyle}>Max Tickets per Month</label>
        <input
          type="number"
          placeholder="Enter Number"
          style={inputStyle}
        />

        <button style={addButtonStyle}>Add Pass</button>
      </div>

      {/* Pagination Dots */}
      <div style={paginationStyle}>
        <div style={dotInactiveStyle}></div>
        <div style={dotActiveStyle}></div>
      </div>
    </div>
  );
}

export default AddPassScreen;

