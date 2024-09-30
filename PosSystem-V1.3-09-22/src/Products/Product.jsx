import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faCodeFork,
  faPlus,
  faShoppingBag,
  faSnowflake,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../css/ProductsMain.css";
import CategoryModel from "../Products/CategoryModel"; // Import the CategoryModel component
import UnitModel from "../Products/UnitModel";

const Product = () => {
  const location = useLocation(); // Get location object
  const { UserName, Store } = location.state || {};

  const [activeContent, setActiveContent] = useState(null); // Manage active content ('category' or 'unit')

  // Function to toggle the category content
  const toggleCategoryContent = () => {
    if (activeContent === "category") {
      setActiveContent(null); // Hide category if already active
    } else {
      setActiveContent("category"); // Show category and hide unit
    }
  };

  // Function to toggle the unit content
  const toggleUnitContent = () => {
    if (activeContent === "unit") {
      setActiveContent(null); // Hide unit if already active
    } else {
      setActiveContent("unit"); // Show unit and hide category
    }
  };

  return (
    <div className="product-panel">
      <h2 className="panel-title">Manage Products</h2>

      {/* Display user info */}
      <div className="user-info-panel">
        <p>
          <strong>Username:</strong> {UserName}
        </p>
        <p>
          <strong>Store:</strong> {Store}
        </p>
      </div>

      <div className="button-list">
        <button>
          <FontAwesomeIcon className="button-icon" icon={faCodeFork} />
          Active Product List
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faPlus} />
          Add Products
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faShoppingBag} />
          Manage Stock
        </button>
        <button onClick={toggleUnitContent}> {/* open unit content on click */}
          <FontAwesomeIcon className="button-icon" icon={faCodeFork} />
          Manage Unit
        </button>
        <button onClick={toggleCategoryContent}> {/* Open category content on click */}
          <FontAwesomeIcon className="button-icon" icon={faSnowflake} />
          Manage Category
        </button>
        <button id="removed-button">
          <FontAwesomeIcon className="button-icon" icon={faTrash} />
          Removed Products
        </button>
      </div>

      {/* Replace modal with embedded content */}
      <div className="product-content">
        {activeContent === "category" && <CategoryModel UserName={UserName} store={Store}/>} {/* Load CategoryModel directly */}
        {activeContent === "unit" && <UnitModel UserName={UserName} store={Store}/>} {/*Load Unit Model Directly*/}
      </div>
    </div>
  );
};

export default Product;
