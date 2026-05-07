import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
{/*      <h4 style={{marginLeft:"40px"}}>Admin Panel</h4>
 
      <nav>
        <Link to="dashboard">Dashboard | </Link>
        <Link to="add-bus">Add Bus | </Link>
        <Link to="manage-routes">Manage Routes | </Link>
        <Link to="travel-logs">Travel Logs</Link>
      </nav> */}

      <hr />

      <Outlet />
    </div>
  );
}

