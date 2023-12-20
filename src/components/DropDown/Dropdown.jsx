// Dropdown.js
import './Dropdown.css';
import React from 'react';

const Dropdown = ({ label, options, onSelect, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <select onChange={(e) => onSelect(e.target.value)} defaultValue="">
        {placeholder && <option key="__placeholder" value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
