// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";

const ADNavbar = ({ toggleSidebar }) => {


  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link to="/admin" className="navbar-brand ps-3">
          Admin Panel
        </Link>

        <button
          onClick={toggleSidebar}
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
        >
          <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        <div className="dropdown-center">
          <a
            href="#"
            className="dropdown-toggle me-3 text-light"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-2x text-light fs-4 "></i>
          </a>

          <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/admin">
                  Dashboard
                </Link>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ADNavbar;
