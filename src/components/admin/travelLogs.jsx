import React from "react";

function TravelLogsScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1A243A",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        paddingBottom: "100px",
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

        <span
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Travel Logs
        </span>

        <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          Reports
        </span>
      </div>

      {/* Travel Log Cards */}
      <div style={{ padding: "20px" }}>
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#E6E6E6",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
            Student: Ali | Bus: 2
          </div>
          <div>Date: 14-oct-2025</div>
          <div>Boarded: Yes</div>
          <div>Driver: Ahmed</div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#E6E6E6",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
            Student: Sara | Bus: 1
          </div>
          <div>Date: 14-oct-2025</div>
          <div>Boarded: No</div>
          <div>Driver: Ali</div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#E6E6E6",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
            Student: Abdullah | Bus: 3
          </div>
          <div>Date: 15-oct-2025</div>
          <div>Boarded: Yes</div>
          <div>Driver: Ahmed</div>
        </div>
      </div>

      {/* Export Logs Button */}
      <button
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          backgroundColor: "#7A60E0",
          padding: "15px",
          borderRadius: "15px",
          border: "none",
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Export Logs
      </button>
    </div>
  );
}

export default TravelLogsScreen;

