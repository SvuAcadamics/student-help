// Syllabus.jsx
import React, { useState } from 'react';
import './Syllabus.css';
import Dropdown from '../../components/DropDown/Dropdown';
import Button from '../../components/Button/Button';

const Syllabus = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const optionsForBranch = [
    { value: 'cse', label: 'Computer Science and Engineering' },
    { value: 'ece', label: 'Electronics and Communication Engineering' },
    { value: 'eee', label: 'Electrical and Electronics Engineering' },
    { value: 'mech', label: 'Mechanical Engineering' },
    { value: 'civil', label: 'Civil Engineering' },
    { value: 'chem', label: 'Chemical Engineering' },
  ];

  const optionsForYear = [
    { value: '1', label: 'First Year' },
    { value: '2', label: 'Second Year' },
    { value: '3', label: 'Third Year' },
    { value: '4', label: 'Fourth Year' }, // Added 4th year
  ];

  const optionsForSemester = [
    { value: '1', label: 'Semester 1' },
    { value: '2', label: 'Semester 2' },
    { value: '3', label: 'Semester 3' },
    { value: '4', label: 'Semester 4' }, // Added 4th semester
    { value: '5', label: 'Semester 5' }, // Added 5th semester
    { value: '6', label: 'Semester 6' }, // Added 6th semester
  ];

  const handleSubmit = () => {
    // Use selectedBranch, selectedYear, and selectedSemester for further processing
    console.log('Selected Branch:', selectedBranch);
    console.log('Selected Year:', selectedYear);
    console.log('Selected Semester:', selectedSemester);
  };

  return (
    <div className='for-overallproject'>
    <div className='syllabus'>
      <h1>Syllabus</h1>
      <div>
        <p>Select the below dropdowns to get the Syllabus Copy</p>
        <div>
          <Dropdown label="Select The Branch :" options={optionsForBranch} onSelect={setSelectedBranch} placeholder="Select the branch" />
          <br/>
          <Dropdown label="Select The Year :" options={optionsForYear} onSelect={setSelectedYear} placeholder="Select the year" />
          <br/>
          <Dropdown label="Select The Semester :" options={optionsForSemester} onSelect={setSelectedSemester} placeholder="Select the semester" />
        </div>
        <Button buttonText="Submit" onClick={handleSubmit} />
      </div>
    </div>
    </div>
  );
};

export default Syllabus;
