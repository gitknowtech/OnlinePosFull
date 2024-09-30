import { useState } from 'react';
import "../css/UnitModel.css"; // Create CSS for UnitModel similar to CategoryModel.css

export default function UnitModel() {
  const [unitName, setUnitName] = useState(''); // State to store unit name
  const [units, setUnits] = useState([ // Dummy data for units
    { id: 1, name: 'Kilogram' },
    { id: 2, name: 'Liter' },
    { id: 3, name: 'Piece' },
  ]);
  const [editUnitId, setEditUnitId] = useState(null); // Store ID of unit being edited
  const [error, setError] = useState(''); // For validation messages

  // Function to handle saving new units
  const handleSave = () => {
    if (unitName.trim() === '') {
      setError('Unit name cannot be empty!');
      return;
    }

    // Check for duplicate unit names
    const isDuplicate = units.some(
      (unit) => unit.name.toLowerCase() === unitName.toLowerCase()
    );

    if (isDuplicate) {
      setError('Unit name already exists!');
      return;
    }

    // Add new unit
    const newUnit = {
      id: units.length + 1,
      name: unitName,
    };
    setUnits([...units, newUnit]);
    setUnitName(''); // Clear input field after saving
    setError(''); // Clear error
  };

  // Function to handle updating an existing unit
  const handleUpdate = () => {
    if (unitName.trim() === '') {
      setError('Unit name cannot be empty!');
      return;
    }

    const updatedUnits = units.map((unit) =>
      unit.id === editUnitId ? { ...unit, name: unitName } : unit
    );
    setUnits(updatedUnits);
    setUnitName(''); // Clear input field after updating
    setEditUnitId(null); // Clear editing state
    setError(''); // Clear error
  };

  // Function to delete a unit
  const handleDelete = (id) => {
    const filteredUnits = units.filter((unit) => unit.id !== id);
    setUnits(filteredUnits);
  };

  // Function to start editing a unit
  const startEditUnit = (id, name) => {
    setUnitName(name);
    setEditUnitId(id); // Set the ID of the unit being edited
  };

  return (
    <div className="unit-model">
      {/* Unit Form */}
      <div className="unit-form">
        <h2>Manage Units</h2>
        <label htmlFor="unitName">Unit Name</label>
        <input
          type="text"
          id="unitName"
          value={unitName}
          onChange={(e) => setUnitName(e.target.value)}
          placeholder="Enter unit name"
        />
        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
        <div className="button-group">
          {!editUnitId ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleUpdate}>Update</button>
          )}
        </div>
      </div>

      {/* Unit Grid View */}
      <div className="unit-grid">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Unit Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit) => (
              <tr key={unit.id} className={editUnitId === unit.id ? 'editing-row' : ''}>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td>
                  <button onClick={() => startEditUnit(unit.id, unit.name)}>Edit</button>
                  <button onClick={() => handleDelete(unit.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
