import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faCodeFork,
  faDollar,
  faPlus,
  faShoppingBag,
  faSnowflake,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../css/SupplierMain.css";

const Supplier = () => {
  const location = useLocation(); // Get location object
  const { UserName, Store } = location.state || {}; // Default destructuring

  const [activeContent, setActiveContent] = useState(null); // Manage active content ('supplier' or 'purchase')

  // Function to toggle the purchasing content
  const togglePurchasingContent = () => {
    setActiveContent(activeContent === "purchasing" ? null : "purchasing"); // Toggle purchasing content
  };

  // Function to toggle the supplier content
  const toggleSupplierContent = () => {
    setActiveContent(activeContent === "supplier" ? null : "supplier"); // Toggle supplier content
  };

  return (
    <div className="supplier-panel">
      <h2 className="panel-title">Manage Suppliers</h2>

      {/* Display user info */}
      <div className="user-info-panel">
        <p><strong>Username:</strong> {UserName}</p>
        <p><strong>Store:</strong> {Store}</p>
      </div>

      <div className="button-list">
        <button>
          <FontAwesomeIcon className="button-icon" icon={faCodeFork} />
          Active Supplier List
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faCodeFork} />
          Inactive Supplier List
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faPlus} />
          Manage Supplier
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faDollar} />
          Supplier Payment
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faShoppingBag} />
          Manage Bank
        </button>
        <button onClick={togglePurchasingContent}>
          <FontAwesomeIcon className="button-icon" icon={faCodeFork} />
          Create New Purchase
        </button>
        <button onClick={toggleSupplierContent}>
          <FontAwesomeIcon className="button-icon" icon={faSnowflake} />
          Purchasing Details
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faSnowflake} />
          Due Summary
        </button>
        <button id="removed-button">
          <FontAwesomeIcon className="button-icon" icon={faTrash} />
          Removed Suppliers
        </button>
      </div>

      {/* Content area for dynamic supplier or purchase details */}
      <div className="supplier-content">
        {activeContent === "purchasing" && <div>Purchasing Content Goes Here</div>}
        {activeContent === "supplier" && <div>Supplier Content Goes Here</div>}
      </div>
    </div>
  );
};

export default Supplier;
