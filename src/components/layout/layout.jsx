import Header from "./Header";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container-fluid">

      <Header />

      <div className="row">

        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9 p-4">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Layout;