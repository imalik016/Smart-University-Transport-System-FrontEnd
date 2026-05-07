import React from "react";

function StudentMyPassScreen() {

  const containerStyle = {
    minHeight: "100vh",
    //width: "100vw",
    backgroundColor: "#5DADE2",
    paddingTop: "40px",
    boxSizing: "border-box",
  };

  /* Header */
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    marginBottom: "10px",
    width:"35%",
  };

  const studentIconStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#AED6F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px",
    fontSize: "16px",
  };

  const studentTextStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000000",
  };

  /* Navigation Bar */
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#2E4053",
    padding: "10px 0",
    marginBottom: "10px",
  };

  const navTabStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: "5px 10px",
    borderRadius: "12px",
    cursor: "pointer",
  };

  const activeTabStyle = {
    backgroundColor: "#5DADE2",
  };

  /* Main Content */
  const scrollContainerStyle = {
    padding: "0 20px 20px 20px",
  };

  /* Pass Card */
  const passCardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "20px",
    marginRight:"350px",
    marginLeft:"400px",
    marginBottom: "20px",
  };

  const passHeaderStyle = {
    display: "flex",
    alignItems: "center",
  };

  const avatarCircleStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#AED6F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginRight: "5px",
    fontSize: "20px",
  };

  const passInfoStyle = {
    flex: 1,
  };

  const passNameStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000000",
    marginBottom: "4px",
  };

  const passDetailsStyle = {
    fontSize: "14px",
    color: "#000000",
  };

  const expiryTextStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#E67E22",
    marginTop: "4px",
  };

  /* Recharge Section */
  const rechargeCardStyle = {
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    padding: "20px",
    marginRight:"350px",
    marginLeft:"400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const checkPassButtonStyle = {
    backgroundColor: "#7A60E0",
    padding: "12px 25px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
  };

  const checkPassTextStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={studentIconStyle}>👤</div>
        <div style={studentTextStyle}>Student</div>
      </div>

      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <div style={navTabStyle}>Dashboard</div>
        <div style={navTabStyle}>Alerts</div>
        <div style={{ ...navTabStyle, ...activeTabStyle }}>My Pass</div>
      </div>

      {/* Main Content */}
        <div style={scrollContainerStyle}>

            {/* Pass Details Card */}
            <div style={passCardStyle}>
                <div style={passHeaderStyle}>

                    <div style={avatarCircleStyle}>👤</div>

                    <div style={passInfoStyle}>
                    <div style={passNameStyle}>Ashir Sarfraz</div>
                    <div style={passDetailsStyle}>Pass ID: 101</div>
                    <div style={passDetailsStyle}>Route: Campus City</div>
                    {/* <div style={passDetailsStyle}>Ticket: 3/100</div> */}
                    <div style={expiryTextStyle}>Exp: 30-Apr-2026</div>
                    </div>

                </div>
            </div>

            {/* Recharge Section */}
            <div style={rechargeCardStyle}>
            <button style={checkPassButtonStyle}>
                <span style={checkPassTextStyle}>Recharge</span>
            </button>
            </div>
        </div>
    </div>
  );
}

export default StudentMyPassScreen;

