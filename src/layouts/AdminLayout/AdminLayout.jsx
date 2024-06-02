// AdminLayout.jsx

import ADNavbar from "../../components/admin/ADNavbar/ADNavbar";
import ADSideBar from "../../components/admin/ADSideBar/ADSideBar";
import ADFooter from "../../components/admin/ADFooter/ADFooter";
import { Outlet } from "react-router-dom";
import {useState} from "react";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <ADNavbar toggleSidebar={toggleSidebar} />
      <div id="layoutSidenav" className={isSidebarOpen ? "" : "sidenav-closed"}>
        <ADSideBar isOpen={isSidebarOpen} />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <section>
                <Outlet />
              </section>
            </div>
          </main>
          <ADFooter />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
