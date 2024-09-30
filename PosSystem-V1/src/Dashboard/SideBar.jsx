import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"; // Import PropTypes
import userImage from "../assets/images/user.png";
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
  faChartBar,
  faTimes,
  faBars,
  faRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../css/SideBar.css"; // Make sure the CSS path is correct
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { useState } from "react";

const SideBar = ({ username }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-bar ${isOpen ? "open" : "closed"}`}>
      <ul className="nav-links">
        {/* Profile Section */}
        <div className="profile-details">
          <img src={userImage} alt="Profile" className="profile-img" />
          {isOpen && <span className="username">{username || "Guest"}</span>}
        </div>
        <hr/>
        <li>
          <div className="icon-link">
            <a href="#">
              <FontAwesomeIcon className="nav-icon" icon={faDashboard} />
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
              <FontAwesomeIcon className="nav-icon" icon={faUserSecret} />
              <span className="link-name">SUPPLIER</span>
            </a>
          </div>
        </li>
        <li>
          <div className="icon-link">
            <a href="#">
              <FontAwesomeIcon className="nav-icon" icon={faUserGroup} />
              <span className="link-name">USER</span>
            </a>
          </div>
        </li>

        <li>
          <div className="icon-link">
            <a href="#">
              <FontAwesomeIcon className="nav-icon" icon={faUserCircle} />
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
              <FontAwesomeIcon className="nav-icon" icon={faTrashRestore} />
              <span className="link-name">BACKUP</span>
            </a>
          </div>
          <hr/>
        </li>
        <li>
          <div className="icon-link">
            <a href="#">
              <FontAwesomeIcon  className="nav-icon" icon={faRightFromBracket} />
              <span className="link-name">LOGOUT</span>
            </a>
          </div>
        </li>
      </ul>

      <FontAwesomeIcon
        className="sidebar-toggle-icon"
        icon={isOpen ? faTimes : faBars}
        onClick={toggleSidebar}
      />
    </div>
  );
};

// PropTypes validation for username
SideBar.propTypes = {
  username: PropTypes.string, // Specify that username is a string and optional
};

export default SideBar;
