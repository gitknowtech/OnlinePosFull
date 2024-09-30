import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/AddProducts.css"; // Assuming a separate CSS file for AddProducts

export default function AddProducts({ UserName, store }) {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productNameSinhala, setProductNameSinhala] = useState("");
  const [barcode, setBarcode] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState(new Date());
  const [expiringDate, setExpiringDate] = useState(new Date());
  const [costPrice, setCostPrice] = useState("");
  const [mrpPrice, setMrpPrice] = useState("");
  const [profitPercentage, setProfitPercentage] = useState("");
  const [profitAmount, setProfitAmount] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [wholesalePrice, setWholesalePrice] = useState("");
  const [wholesalePercentage, setWholesalePercentage] = useState("");
  const [lockedPrice, setLockedPrice] = useState("");
  const [availableStock, setAvailableStock] = useState("");
  const [supplierList, setSupplierList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [stockAlert, setStockAlert] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [saveStoreAsAll, setSaveStoreAsAll] = useState(false);

  // Fetch supplier, category, and unit data when the component mounts
  useEffect(() => {
    const fetchSuppliers = async () => {
      const supplierResponse = await axios.get("http://localhost:5000/api/suppliers");
      setSupplierList(supplierResponse.data);
    };

    const fetchCategories = async () => {
      const categoryResponse = await axios.get("http://localhost:5000/api/categories");
      setCategoryList(categoryResponse.data);
    };

    const fetchUnits = async () => {
      const unitResponse = await axios.get("http://localhost:5000/api/units");
      setUnitList(unitResponse.data);
    };

    fetchSuppliers();
    fetchCategories();
    fetchUnits();
  }, []);

  // Auto-generate barcode with 5 digits
  const generateBarcode = () => {
    const newBarcode = `0000${Math.floor(Math.random() * 100000)}`.slice(-5);
    setBarcode(newBarcode);
  };

  // Form validation
  const validateFormData = () => {
    if (productId.trim() === "" || productName.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product ID and Product Name are required!",
      });
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSave = async () => {
    if (!validateFormData()) return;

    const productData = {
      productId,
      productName,
      productNameSinhala,
      barcode,
      batchNumber,
      selectedSupplier,
      selectedCategory,
      selectedUnit,
      manufacturingDate,
      expiringDate,
      costPrice,
      mrpPrice,
      profitPercentage,
      profitAmount,
      discountPrice,
      discountPercentage,
      wholesalePrice,
      wholesalePercentage,
      lockedPrice,
      availableStock,
      user: UserName,
      store: saveStoreAsAll ? "all" : store,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/create_product", productData);
      if (response.status === 201) {
        resetFormFields();
        Swal.fire({
          icon: "success",
          title: "Product Added",
          text: "Product has been added successfully!",
        });
      } else {
        throw new Error("Failed to save product");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error saving product: ${error.message}`,
      });
    }
  };

  // Reset form fields after submission
  const resetFormFields = () => {
    setProductId("");
    setProductName("");
    setProductNameSinhala("");
    setBarcode("");
    setBatchNumber("");
    setSelectedSupplier("");
    setSelectedCategory("");
    setSelectedUnit("");
    setManufacturingDate(new Date());
    setExpiringDate(new Date());
    setCostPrice("");
    setMrpPrice("");
    setProfitPercentage("");
    setProfitAmount("");
    setDiscountPrice("");
    setDiscountPercentage("");
    setWholesalePrice("");
    setWholesalePercentage("");
    setLockedPrice("");
    setAvailableStock("");
    setSaveStoreAsAll(false);
  };

  return (
    <div className="add-product-model">
      <h2>Product Details</h2>
      <div className="check-box">
        <input
          type="checkbox"
          checked={saveStoreAsAll}
          onChange={(e) => setSaveStoreAsAll(e.target.checked)}
        />
        <label>All Store</label>
      </div>
      <div className="add-product-form">
        <div className="form-group">
          <label htmlFor="productId">Product ID</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Product Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="productNameSinhala">Product Name (Sinhala)</label>
          <input
            type="text"
            id="productNameSinhala"
            value={productNameSinhala}
            onChange={(e) => setProductNameSinhala(e.target.value)}
            placeholder="Enter Product Name in Sinhala"
          />
        </div>

        <div className="form-group">
          <label htmlFor="barcode">Barcode</label>
          <input type="text" id="barcode" value={barcode} readOnly />
        </div>

        <div className="form-group option">
          <button type="button" onClick={generateBarcode}>
            Auto Generate
          </button>
        </div>

        <h2>Supplier and Other Details</h2>
        <div className="form-group">
          <label htmlFor="selectedSupplier">Supplier</label>
          <select className="option-list"
            id="selectedSupplier"
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
          >
            <option value="">Select Supplier</option>
            {supplierList.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group option">
          <label htmlFor="selectedCategory">Category</label>
          <select
            id="selectedCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}style={{ width: "100%", padding: "5px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "12px", color: "black" }}
            >
            <option value="">Select Category</option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group option">
          <label htmlFor="selectedUnit">Units</label>
          <select
            id="selectedUnit"
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
          >
            <option value="">Select Unit</option>
            {unitList.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="manufacturingDate">Manufacturing Date</label>
          <DatePicker
            selected={manufacturingDate}
            onChange={(date) => setManufacturingDate(date)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiringDate">Expiring Date</label>
          <DatePicker
            selected={expiringDate}
            onChange={(date) => setExpiringDate(date)}
          />
        </div>

        <h2>Product Price Details</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="costPrice">Cost Price</label>
            <input
              type="number"
              id="costPrice"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
              placeholder="Enter Cost Price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mrpPrice">MRP Price</label>
            <input
              type="number"
              id="mrpPrice"
              value={mrpPrice}
              onChange={(e) => setMrpPrice(e.target.value)}
              placeholder="Enter MRP Price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="profitPercentage">Profit Percentage</label>
            <input
              type="number"
              id="profitPercentage"
              value={profitPercentage}
              onChange={(e) => setProfitPercentage(e.target.value)}
              placeholder="Enter Profit Percentage"
            />
          </div>

          <div className="form-group">
            <label htmlFor="profitAmount">Profit Amount</label>
            <input
              type="number"
              id="profitAmount"
              value={profitAmount}
              onChange={(e) => setProfitAmount(e.target.value)}
              placeholder="Enter Profit Amount"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="discountPercentage">Discount Percentage</label>
            <input
              type="number"
              id="discountPercentage"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              placeholder="Enter Discount Percentage"
            />
          </div>

          <div className="form-group">
            <label htmlFor="discountPrice">Discount Price</label>
            <input
              type="number"
              id="discountPrice"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              placeholder="Enter Discount Price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="wholesalePercentage">Wholesale Percentage</label>
            <input
              type="number"
              id="wholesalePercentage"
              value={wholesalePercentage}
              onChange={(e) => setWholesalePercentage(e.target.value)}
              placeholder="Enter Wholesale Percentage"
            />
          </div>

          <div className="form-group">
            <label htmlFor="wholesalePrice">Wholesale Price</label>
            <input
              type="number"
              id="wholesalePrice"
              value={wholesalePrice}
              onChange={(e) => setWholesalePrice(e.target.value)}
              placeholder="Enter Wholesale Price"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lockedPrice">Locked Price</label>
          <input
            type="number"
            id="lockedPrice"
            value={lockedPrice}
            onChange={(e) => setLockedPrice(e.target.value)}
            placeholder="Enter Locked Price"
          />
        </div>

        <div className="form-group">
          <label htmlFor="StockAlert">Stock Alert</label>
          <input
            type="number"
            id="stockAlert"
            value={stockAlert}
            onChange={(e) => setStockAlert(e.target.value)}
            placeholder="Enter Stock Alert Count"
          />
        </div>

        <div className="button-group">
          <button className="saveButton" onClick={handleSave}>
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}

// Validate props with PropTypes
AddProducts.propTypes = {
  UserName: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
};
