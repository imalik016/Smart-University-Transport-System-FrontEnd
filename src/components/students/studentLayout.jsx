import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function StudentLayout() {
  return (
    <div style={{ display: "flex", height: "100vh",width:"200vh", backgroundColor: "#1A243A" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", flex: 1, overflow: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}