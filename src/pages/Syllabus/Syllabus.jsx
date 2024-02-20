// Syllabus.jsx
import React, { useState } from 'react';
import './Syllabus.css';
import { syllabus } from '../../constants/Syllabus';
import Dropdown from '../../components/DropDown/Dropdown';
import Button from '../../components/Button/Button';

const Syllabus = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const optionsForBranch = [
    { value: 'CSE', label: 'Computer Science and Engineering' },
    { value: 'ECE', label: 'Electronics and Communication Engineering' },
    { value: 'EEE', label: 'Electrical and Electronics Engineering' },
    { value: 'MEC', label: 'Mechanical Engineering' },
    { value: 'CIV', label: 'Civil Engineering' },
    { value: 'CHE', label: 'Chemical Engineering' },
  ];

  const optionsForSemester = [
    { value: 'semester1', label: 'Semester 1' },
    { value: 'semester2', label: 'Semester 2' },
    { value: 'semester3', label: 'Semester 3' },
    { value: 'semester4', label: 'Semester 4' }, 
    { value: 'semester5', label: 'Semester 5' }, 
    { value: 'semester6', label: 'Semester 6' },
    { value: 'semester7', label: 'Semester 7' }, 
    { value: 'semester8', label: 'Semester 8' }, 
  ];

  const handleSubmit = () => {
    // Use selectedBranch, selectedYear, and selectedSemester for further processing
    console.log('Selected Branch:', selectedBranch);
    console.log('Selected Semester:', selectedSemester);

    if (
      syllabus[selectedSemester] &&
      syllabus[selectedSemester][selectedBranch]
    ) {
      const selectedsyllabus = syllabus[selectedSemester][selectedBranch];
      console.log(
        `syllabus for ${selectedSemester} - ${selectedBranch}:`,
        selectedsyllabus
      );


      window.location.href = selectedsyllabus;
    } else {
      console.log("Invalid semester or branch");
    }


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
          <Dropdown label="Select The Semester :" options={optionsForSemester} onSelect={setSelectedSemester} placeholder="Select the semester" />
        </div>
        <Button buttonText="Submit" onClick={handleSubmit} />
      </div>
    </div>
    </div>
  );
};

export default Syllabus;
