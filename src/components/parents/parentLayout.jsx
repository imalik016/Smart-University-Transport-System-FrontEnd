import { Outlet, Link } from "react-router-dom";

export default function ParentLayout() {
  return (
    <div>
      {/* <h2 style={{marginLeft:"40px"}}>Parent Panel</h2> 
      <nav>
        <Link to="dashboard">Dashboard | </Link>
        {/* <Link to="add-bus">Add Bus | </Link>
        <Link to="manage-routes">Manage Routes | </Link>
        <Link to="travel-logs">Travel Logs</Link> 
      </nav> */}

      <hr />

      <Outlet />
    </div>
  );
}

