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

const Product = () => {
  const location = useLocation(); // Get location object
  const { UserName, Store } = location.state || {};

  const [showCategoryModal, setShowCategoryModal] = useState(false); // Control modal visibility

  // Function to toggle the category modal
  const toggleCategoryModal = () => {
    setShowCategoryModal(!showCategoryModal);
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
          Manage Products
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faShoppingBag} />
          Manage Stock
        </button>
        <button>
          <FontAwesomeIcon className="button-icon" icon={faCodeFork} />
          Manage Unit
        </button>
        <button onClick={toggleCategoryModal}> {/* Open the modal on click */}
          <FontAwesomeIcon className="button-icon" icon={faSnowflake} />
          Manage Category
        </button>
        <button id="removed-button">
          <FontAwesomeIcon className="button-icon" icon={faTrash} />
          Removed Products
        </button>
      </div>

      <div className="product-content"></div>

      {/* Modal for CategoryModel */}
      {showCategoryModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleCategoryModal}>X</button>
            <CategoryModel />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
