import React from "react";

function ManageStudentPassScreen() {

  const containerStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1A243A",
    position: "relative",
    paddingBottom: "120px",
    boxSizing: "border-box",
  };

  /* Header */
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
  };
  const screenTitleStyle = {
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
  };
  const adminContainerStyle = { textAlign: "center" };
  const adminCircleStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  };
  const adminIconStyle = { fontSize: "16px" };
  const adminTextStyle = {
    color: "#FFFFFF",
    fontSize: "12px",
    marginTop: "4px",
    fontWeight: "bold",
  };

  /* Search Section */
  const searchRowStyle = {
    display: "flex",
    padding: "0 30px",
    marginTop: "16px",
    width:"750px",
    marginBottom: "10px",
    marginLeft:"280px",
  };
  const searchInputStyle = {
    flex: 1,
    width:"300px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "0 12px",
    height: "42px",
    border: "none",
    outline: "none",
  };
  const searchButtonStyle = {
    marginLeft: "10px",
    width:"100px",
    backgroundColor: "#00b894",
    borderRadius: "10px",
    padding: "0 16px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };
  const searchButtonTextStyle = {
    color: "#FFFFFF",
    fontWeight: "bold",
  };

  /* Cards */
  const listStyle = { padding: "0 30px" };
  const cardStyle = {
    width:"700px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E6E6E6",
    borderRadius: "15px",
    marginLeft:"280px",
    padding: "12px",
    marginBottom: "16px",
    alignItems: "center",
  };
  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "12px",
  };
  const avatarTextStyle = { fontSize: "22px" };
  const cardInfoStyle = { flex: 1 };
  const studentNameStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000",
    marginBottom: "4px",
  };
  const passDetailsStyle = {
    fontSize: "14px",
    color: "#333",
    marginBottom: "2px",
  };
  const ticketStyle = { fontSize: "14px", color: "#333", marginBottom: "2px" };
  const expiryStyle = { fontSize: "14px", color: "#FF9900", marginBottom: "8px" };
  const actionRowStyle = { display: "flex", gap: "6px" };
  const actionButtonStyle = {
    flex: 1,
    backgroundColor: "#555",
    borderRadius: "10px",
    padding: "6px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  };

  /* Floating Action Button */
  const fabStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#7A60E0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    color: "#FFFFFF",
    cursor: "pointer",
    border: "none",
  };

  /* Pagination */
  const paginationStyle = {
    position: "fixed",
    bottom: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "6px",
  };
  const dotStyle = (color) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: color,
  });

  return (
    <div style={containerStyle}>

      {/* Header */}
      <div style={headerStyle}>
        <div style={screenTitleStyle}>Manage Student Pass</div>
        <div style={adminContainerStyle}>
          <div style={adminCircleStyle}>
            <span style={adminIconStyle}>👤</span>
          </div>
          <div style={adminTextStyle}>Admin</div>
        </div>
      </div>

      {/* Search Section */}
      <div style={searchRowStyle}>
        <input type="text" placeholder="Search student" style={searchInputStyle} />
        <button style={searchButtonStyle}>
          <span style={searchButtonTextStyle}>Search</span>
        </button>
      </div>

      {/* Cards */}
      <div style={listStyle}>

        <div style={cardStyle}>
          <div style={avatarStyle}>
            <span style={avatarTextStyle}>👤</span>
          </div>
          <div style={cardInfoStyle}>
            <div style={studentNameStyle}>Abdullah Munawar</div>
            <div style={passDetailsStyle}>Pass ID: 12345 | Route: Campus-City</div>
            <div style={ticketStyle}>Ticket: 3/100</div>
            <div style={expiryStyle}>Exp: 18-oct-2025</div>
            <div style={actionRowStyle}>
              <button style={actionButtonStyle}>Recharge</button>
              <button style={{ ...actionButtonStyle, backgroundColor: "#d8298c" }}>Delete</button>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={avatarStyle}>
            <span style={avatarTextStyle}>👤</span>
          </div>
          <div style={cardInfoStyle}>
            <div style={studentNameStyle}>Sara Ahmed</div>
            <div style={passDetailsStyle}>Pass ID: 67890 | Route: City-Campus</div>
            <div style={ticketStyle}>Ticket: 5/100</div>
            <div style={expiryStyle}>Exp: 22-oct-2025</div>
            <div style={actionRowStyle}>
              <button style={actionButtonStyle}>Recharge</button>
              <button style={{ ...actionButtonStyle, backgroundColor: "#d8298c" }}>Delete</button>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <button style={fabStyle}>+</button>

      {/* Pagination */}
      <div style={paginationStyle}>
        <div style={dotStyle("#7A60E0")}></div>
        <div style={dotStyle("#555")}></div>
      </div>

    </div>
  );
}

export default ManageStudentPassScreen;

