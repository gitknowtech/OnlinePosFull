import { useState } from 'react';
import "../css/CategoryModel.css";

export default function CategoryModel() {
  const [categoryName, setCategoryName] = useState(''); // State to store category name
  const [categories, setCategories] = useState([ // Dummy data for categories
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Grocery' },
  ]);
  const [editCategoryId, setEditCategoryId] = useState(null); // Store ID of category being edited
  const [error, setError] = useState(''); // For validation messages

  // Function to handle saving new categories
  const handleSave = () => {
    if (categoryName.trim() === '') {
      setError('Category name cannot be empty!');
      return;
    }

    // Check for duplicate category names
    const isDuplicate = categories.some(
      (category) => category.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (isDuplicate) {
      setError('Category name already exists!');
      return;
    }

    // Add new category
    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
    };
    setCategories([...categories, newCategory]);
    setCategoryName(''); // Clear input field after saving
    setError(''); // Clear error
  };

  // Function to handle updating an existing category
  const handleUpdate = () => {
    if (categoryName.trim() === '') {
      setError('Category name cannot be empty!');
      return;
    }

    const updatedCategory = categories.map((category) =>
      category.id === editCategoryId ? { ...category, name: categoryName } : category
    );
    setCategories(updatedCategory);
    setCategoryName(''); // Clear input field after updating
    setEditCategoryId(null); // Clear editing state
    setError(''); // Clear error
  };

  // Function to delete a category
  const handleDelete = (id) => {
    const filteredCategories = categories.filter((category) => category.id !== id);
    setCategories(filteredCategories);
  };

  // Function to start editing a category
  const startEditCategory = (id, name) => {
    setCategoryName(name);
    setEditCategoryId(id); // Set the ID of the category being edited
  };

  return (
    <div className="category-model">
      {/* Category Form */}
      <div className="category-form">
        <h2>Manage Categories</h2>
        <label htmlFor="categoryName">Category Name</label>
        <input
          type="text"
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
        />
        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
        <div className="button-group">
          {!editCategoryId ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleUpdate}>Update</button>
          )}
        </div>
      </div>

      {/* Category Grid View */}
      <div className="category-grid">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className={editCategoryId === category.id ? 'editing-row' : ''}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <button onClick={() => startEditCategory(category.id, category.name)}>Edit</button>
                  <button onClick={() => handleDelete(category.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
