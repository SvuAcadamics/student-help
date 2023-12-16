// Syllabus.jsx
import React, { useState } from 'react';
import './Syllabus.css';
import Dropdown from '../../components/DropDown/Dropdown';
import Button from '../../components/Button/Button';


const  Syllabus = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const optionsforbranch = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const optionsforyear = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const optionsforsemester = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handlesubmit = () => {

  }

  return (
    <div className='syllabus'>
      <h1>Syllabus</h1>
      <div>
        <p>Select the below dropdown's to get the Syllabus Copy</p>
        <div>
          <Dropdown label="Select The Branch" options={optionsforbranch} onSelect={setSelectedOption} placeholder="Select the Branch"/>
          <Dropdown label="Select The Year" options={optionsforyear} onSelect={setSelectedOption} placeholder="Select the Branch"/>
          <Dropdown label="Select The Semester" options={optionsforsemester} onSelect={setSelectedOption} placeholder="Select the Branch"/>   
        </div>
        <Button buttonText="Submit" onClick={handlesubmit}/>
      </div>
    </div>
  )
}

export default Syllabus