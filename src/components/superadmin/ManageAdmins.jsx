function AddAdmin() {

  const containerStyle = {
    minHeight: "100vh",
    width:"100vw",
    background: "linear-gradient(to right, #323077d8, #062a61d5)",
    // padding: "40px 80px",
    margin:"10px",
  };

  const headerStyle = {
    background: "#6f42c1",
    color: "white",
    padding: "15px",
    textAlign: "center",
    borderRadius: "8px",
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const panelStyle = {
    background: "linear-gradient(to bottom, #4748587e, #4a515aa4)",
    borderRadius: "20px",
    padding: "45px",
    marginLeft:"80px",
    width: "85%",
    display: "flex",
    justifyContent: "center",
  };

  const inputStyle = {
    width: "60%",
  padding: "12px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "none",
  fontSize: "14px",
  outline: "none",
  background:"#f5ececda",
  };

  const buttonStyle = {
    background: "#7d2c96ce",
    borderRadius: "15px",
    width: "150px",
    height: "40px",
    display: "flex",
    marginLeft:"180px",
    flexDirection: "column",
    justifyContent: "center",
    //justifyItems:"center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
    fontWeight: "600",
    color: "#f8f8f8",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>Add Admin</div>

      {/* Center Panel */}
      <div style={panelStyle}>
        <div >

          <input style={inputStyle}
          type="text"
          placeholder="Name"
          />

          <input style={inputStyle}
          type="text"
          placeholder="Email"
          />

          <input style={inputStyle}
          type="password"
          placeholder="Password"
          />

            <button style={buttonStyle}> Add Admin</button>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;


