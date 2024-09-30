import "../css/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook

import {
  faStore,
  faArchive,
  faReceipt,
  faDashboard,
  faSignal,
  faVcard,
  faUser,
  faWrench,
  faCartPlus,
  faFileText,
  faUserSecret,
  faTrashRestore,
  faHistory,
  faBars,
  faUserGroup,
  faChartBar,
  faRightFromBracket,
  faUserCircle,
  faBarsProgress,
} from "@fortawesome/free-solid-svg-icons";
import adminImage from "../assets/images/user.png";


const Dashboard = () => {
  const location = useLocation(); // Get location object
  const [isOpen, setIsOpen] = useState(true); // Sidebar state
  const [username, setUsername] = useState(""); // User's name
  const [store, setStore] = useState("Berty Sport Corner"); // Store name
  const [type, setType] = useState("N/A"); // User type
  const [email, setEmail] = useState("N/A"); // Email address
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Check if location.state exists and contains user data
    if (location.state) {
      const { UserName, Store, Type, Email } = location.state;

      setUsername(UserName || "Guest");
      setStore(Store || "Berty Sport Corner");
      setType(Type || "N/A");
      setEmail(Email || "N/A");
    } else {
      // Set an error message if location.state does not exist
      setError("No user data available");
    }
    setLoading(false); // Stop loading after processing data
  }, [location.state]); // Only re-run the effect when location.state changes

  if (loading) {
    return <div className="loading">Loading...</div>; // Show loading message
  }

  if (error) {
    return <div className="error">{error}</div>; // Show error message if there is an error
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard_wrapper">
      {/* Dashboard main navbar */}
      <div className="dashboard_header">
        <div className="company-name">
          <h2>GitKnowTech</h2>
        </div>
        <div className="togglerIcon">
          <FontAwesomeIcon
            className="sidebar-toggle-icon"
            icon={isOpen ? faBars : faBarsProgress}
            onClick={toggleSidebar}
          />
        </div>
        <div className="user-info">
          <div className="user-details">
            {/* Display the admin image and username */}
            <img src={adminImage} alt="Admin" className="admin-image" />

            {/* Hover popup */}
            <div className="user-popup">
              <p>
                <strong>Username:</strong> {username}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p>
                <strong>Store:</strong> {store}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and main container */}
      <div className="dashboard_main">
        {/* Dashboard side bar */}
        <div className={`dashboard_sidebar ${isOpen ? "" : "close"}`}>
          {/* Sidebar links */}
          <div className="scrollbox">
            <div className="scrollbox-inner">
              <ul className="nav-links">
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon
                        className="nav-icon"
                        icon={faDashboard}
                      />
                      <span className="link-name">DASHBOARD</span>
                    </a>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faReceipt} />
                      <span className="link-name">INVOICE</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faSignal} />
                      <span className="link-name">SALES</span>
                    </a>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faCartPlus} />
                      <span className="link-name">STOCK</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faVcard} />
                      <span className="link-name">CREDIT SALES</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faArchive} />
                      <span className="link-name">PRODUCTS</span>
                    </a>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon
                        className="nav-icon"
                        icon={faUserSecret}
                      />
                      <span className="link-name">SUPPLIER</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon
                        className="nav-icon"
                        icon={faUserGroup}
                      />
                      <span className="link-name">USER</span>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon
                        className="nav-icon"
                        icon={faUserCircle}
                      />
                      <span className="link-name">EMPLOYEE</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faUser} />
                      <span className="link-name">CUSTOMER</span>
                    </a>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faStore} />
                      <span className="link-name">QUOTATION</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faFileText} />
                      <span className="link-name">REPORTS</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faChartBar} />
                      <span className="link-name">CHART</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faHistory} />
                      <span className="link-name">HISTORY</span>
                    </a>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon className="nav-icon" icon={faWrench} />
                      <span className="link-name">SETTING</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon
                        className="nav-icon"
                        icon={faTrashRestore}
                      />
                      <span className="link-name">BACKUP</span>
                    </a>
                  </div>
                  <hr />
                </li>
                <li>
                  <div className="icon-link">
                    <a href="#">
                      <FontAwesomeIcon
                        className="nav-icon"
                        icon={faRightFromBracket}
                      />
                      <span className="link-name">LOGOUT</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main content container */}
        <div className={`dashboard_container ${isOpen ? "" : "full-width"}`}>
          {/* This is where your dynamic components will be loaded */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
