import React from "react";

function RechargePassScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A243A",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#FFFFFF", margin: 0 }}>
          Recharge Pass
        </h2>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#E5E7EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <span style={{ fontSize: "16px" }}>👤</span>
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: "bold",
              marginTop: "4px",
            }}
          >
            Admin
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div
        style={{
          backgroundColor: "#E6E6E6",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "30px",
          maxWidth: "500px",
        }}
      >
        {/* Pass ID */}
        <label
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#000",
          }}
        >
          Pass ID
        </label>
        <input
          type="text"
          placeholder="Enter Pass ID"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            marginTop: "6px",
            marginBottom: "12px",
            fontSize: "16px",
          }}
        />

        {/* Add Tickets */}
        <label
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#000",
          }}
        >
          Add Tickets
        </label>
        <input
          type="number"
          placeholder="Number of Tickets"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            marginTop: "6px",
            marginBottom: "12px",
            fontSize: "16px",
          }}
        />

        {/* Expiry Date */}
        <label
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "#000",
          }}
        >
          Expiry Date
        </label>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            marginTop: "6px",
            marginBottom: "12px",
            fontSize: "16px",
          }}
        />

        {/* Recharge Button */}
        <button
          style={{
            width: "100%",
            backgroundColor: "#7A60E0",
            borderRadius: "12px",
            padding: "12px",
            marginTop: "10px",
            border: "none",
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Recharge
        </button>
      </div>

      {/* Pagination Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#555",
            margin: "0 4px",
          }}
        ></div>

        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#7A60E0",
            margin: "0 4px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default RechargePassScreen;

