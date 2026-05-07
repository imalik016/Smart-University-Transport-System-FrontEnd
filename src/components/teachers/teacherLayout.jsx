import { Outlet, Link } from "react-router-dom";

export default function TeacherLayout() {
  return (
    <div>
      {/* <h2 style={{marginLeft:"30px"}}>Admin Panel</h2>

      <nav>
        <Link to="report-issue">Report Issue | </Link>
        <Link to="manage-alerts">Alerts | </Link>
        <Link to="student-status">Student Status | </Link>
        
      </nav> */}

      <hr />

      <Outlet />
    </div>
  );
}

