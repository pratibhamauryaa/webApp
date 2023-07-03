import React, { useState } from 'react';
import '../styles/dashboard.css'
import '../styles/bootstrap.min.css'
import '../app/globals.css'


const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="gst-dropdown">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="option1">342567ZAZ898435</option>
        <option value="option2">342567ZAZ898434</option>
        <option value="option3">342567ZAZ898433</option>
      </select>
    </div>
  );
};

export default Dropdown;
