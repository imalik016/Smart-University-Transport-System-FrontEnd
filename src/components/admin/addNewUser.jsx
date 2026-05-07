import React from "react";

function AddNewUser() {
  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1A243A",
    paddingBottom: "40px",
    position: "relative",
    boxSizing: "border-box",
    overflowY: "auto",
  };

  const adminContainerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    alignItems: "center",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
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

  const avatarContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    marginBottom: "30px",
  };

  const avatarCircleStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "80px",
    backgroundColor: "#9C8CF0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const avatarImageStyle = {
    width: "80px",
    height: "80px",
    filter: "brightness(0.55)", // similar to tintColor
  };

  const titleStyle = {
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "16px",
  };

  const formSectionStyle = {
    padding: "0 30px",
  };

  const inputStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "16px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    border: "none",
    outline: "none",
  };

  const labelStyle = {
    color: "#FFFFFF",
    fontSize: "16px",
    marginBottom: "8px",
    marginTop: "10px",
  };

  const dropdownStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    cursor: "pointer",
  };

  const dropdownTextStyle = {
    fontSize: "16px",
    color: "#000",
  };

  const dropdownArrowStyle = {
    fontSize: "14px",
    color: "#555",
  };

  const saveButtonStyle = {
    backgroundColor: "#7A60E0",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "12px",
    fontSize: "18px",
    color: "#FFFFFF",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      {/* Admin Profile Top Right */}
      <div style={adminContainerStyle}>
        <img
          src={require("../../assets/images/UserL.png")}
          alt="Admin"
          style={adminIconStyle}
        />
        <div style={adminTextStyle}>Admin</div>
      </div>

      {/* Main Avatar */}
      <div style={avatarContainerStyle}>
        <div style={avatarCircleStyle}>
          <img
            src={require("../../assets/images/UserL.png")}
            alt="User Avatar"
            style={avatarImageStyle}
          />
        </div>
        <div style={titleStyle}>Add new user</div>
      </div>

      {/* Form Section */}
      <div style={formSectionStyle}>
        <input type="text" placeholder="Full Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        <div style={labelStyle}>Select Role</div>
        <div style={dropdownStyle}>
          <div style={dropdownTextStyle}>Student</div>
          <div style={dropdownArrowStyle}>▼</div>
        </div>

        <div style={labelStyle}>Select Status</div>
        <div style={dropdownStyle}>
          <div style={dropdownTextStyle}>Active</div>
          <div style={dropdownArrowStyle}>▼</div>
        </div>

        <button style={saveButtonStyle}>Add</button>
      </div>
    </div>
  );
}

export default AddNewUser;

