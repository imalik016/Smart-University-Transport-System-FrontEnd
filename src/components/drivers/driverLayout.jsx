import { Outlet, Link } from "react-router-dom";

export default function DriverLayout() {
  return (
    <div>
      <h2 style={{marginLeft:"40px"}}>Driver Panel</h2>

      <nav>
        <Link to="dashboard"> Dashboard | </Link>
        
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

