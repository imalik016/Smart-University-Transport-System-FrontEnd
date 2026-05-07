
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <h2 style={{marginLeft:"40px"}}>Student Panel</h2>

      <nav>
        <Link to="dashboard">Dashboard | </Link>
        <Link to="alerts">Alerts | </Link>
        <Link to="pass">Student Pass | </Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

