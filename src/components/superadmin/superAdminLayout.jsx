import { Outlet, Link } from "react-router-dom";

export default function SuperAdminLayout() {
  return (
    <div>
      {/* <h2 style={{marginLeft:"40px"}}>Super Admin Panel</h2>

      <nav>
        <Link to="dashboard">Dashboard | </Link>
        <Link to="add-admins">Add Admins | </Link>
        <Link to="manage-admin">Manage Admins</Link>
      </nav>
*/}
      <hr />

      <Outlet /> 
    </div>
  );
}

