import React from "react";

function ReportsScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A243A",
        fontFamily: "Arial, sans-serif",
        paddingBottom: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "#FFFFFF", margin: 0 }}>
          Manage Info
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

      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#D8298C",
          margin: "0 20px",
          borderRadius: "12px",
          padding: "8px 0",
        }}
      >
        <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Schedule
        </span>

        <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Travel Logs
        </span>

        <span
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Reports
        </span>
      </div>

      {/* Form Section */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          Generate Reports
        </h3>

        {/* Form Card */}
        <div
          style={{
            backgroundColor: "#E6E6E6",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          {/* Report Type */}
          <label
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#000",
            }}
          >
            Report Type
          </label>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "14px",
              marginTop: "6px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span style={{ color: "#555" }}>
              Select Report Type
            </span>
            <span style={{ color: "#555" }}>▼</span>
          </div>

          {/* Start Date */}
          <label
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#000",
            }}
          >
            Start Date
          </label>
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "14px",
              fontSize: "16px",
              border: "none",
              marginTop: "6px",
              marginBottom: "10px",
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
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "14px",
              fontSize: "16px",
              border: "none",
              marginTop: "6px",
              marginBottom: "10px",
            }}
          />

          {/* Generate Button */}
          <button
            style={{
              width: "100%",
              backgroundColor: "#7A60E0",
              borderRadius: "12px",
              padding: "14px",
              marginTop: "15px",
              border: "none",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportsScreen;

