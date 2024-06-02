
import { Link } from "react-router-dom";

const ADSideBar = () => {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Pages</div>
              <Link to="/admin" className="nav-link">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Quotes
              </Link>



            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Admin Panel
          </div>
        </nav>
      </div>
    </>
  );
};

export default ADSideBar;
