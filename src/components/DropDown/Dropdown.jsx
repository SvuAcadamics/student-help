// Dropdown.js

import React from 'react';

const Dropdown = ({ label, options, onSelect, placeholder }) => {
    return (
      <div>
        <label>{label}</label>
        <select onChange={(e) => onSelect(e.target.value)}>
          {placeholder && <option value="">{placeholder}</option>}
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
