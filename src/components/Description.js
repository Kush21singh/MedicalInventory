import React from 'react';

const Description = ({ selectedDescription, onSelectDescription }) => {
  const descriptionOptions = ["Select", "Used for Fever", "Used for Headache", "Other Descriptions"];

  return (
    <div>
      <label>Description:</label>
      <select value={selectedDescription} onChange={onSelectDescription}>
        {descriptionOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Description;
