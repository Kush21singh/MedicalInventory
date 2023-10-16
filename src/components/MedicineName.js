import React from 'react';

const MedicineName = ({ medicineName, onSelectMedicine }) => {
  const medicineOptions = ["Select", "Paracetamol", "Dolo-65", "Azithromycin", "Ibuprofen", "Other Medicines"];

  return (
    <div>
      <label>Medicine Name:</label>
      <select value={medicineName} onChange={onSelectMedicine}>
        {medicineOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MedicineName;
