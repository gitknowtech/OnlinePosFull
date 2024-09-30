import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCodeFork, faPlus, faShoppingBag, faSnowflake, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css/ProductsMain.css"

const Product = () => {
    return (
      <div className="product-panel">
        <h2 className="panel-title">Products List</h2>
        <div className="button-list">
          <button><FontAwesomeIcon className="button-icon" icon={faPlus}/>Manage Products</button>
          <button><FontAwesomeIcon className="button-icon" icon={faShoppingBag}/>Manage Stock</button>
          <button><FontAwesomeIcon className="button-icon" icon={faCodeFork}/>Manage Unit</button>
          <button><FontAwesomeIcon className="button-icon" icon={faSnowflake}/>Manage Category</button>
          <button id="removed-button"><FontAwesomeIcon className="button-icon" icon={faTrash}/>Removed Products</button>
        </div>
        <div className="product-content">

        </div>
      </div>
    );
  };

export default Product;
