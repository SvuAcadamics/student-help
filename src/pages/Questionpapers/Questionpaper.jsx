// question.jsx
import React, { useState } from 'react';
import './QuestionPaper.css';
import Dropdown from '../../components/DropDown/Dropdown';
import Button from '../../components/Button/Button';

const Questionpaper = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

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

  const subjectsForSemester = {
    '1': ['Subject A', 'Subject B', 'Subject C'],
    '2': ['Subject D', 'Subject E', 'Subject F'],
    '3': ['Subject G', 'Subject H', 'Subject I'],
    '4': ['Subject J', 'Subject K', 'Subject L'],
    '5': ['Subject M', 'Subject N', 'Subject O'],
    '6': ['Subject P', 'Subject Q', 'Subject R'],
  };

  const handleSubmit = () => {
    // Use selectedBranch, selectedYear, selectedSemester, and selectedSubjects for further processing
    console.log('Selected Branch:', selectedBranch);
    console.log('Selected Year:', selectedYear);
    console.log('Selected Semester:', selectedSemester);
    console.log('Selected Subjects:', selectedSubjects);
  };

  const handleSemesterChange = (semester) => {
    // Log to check if the function is called and the correct semester is received
    console.log('Selected Semester:', semester);
    
    // Update selected semester and subjects
    setSelectedSemester(semester);
    
    // Log to check if subjects are updated correctly
    console.log('Selected Subjects:', subjectsForSemester[semester] || []);
    setSelectedSubjects(subjectsForSemester[semester] || []);
  };
  
  const handleSubjectChange = (subject) => {
    // Log to check if the function is called and the correct subject is received
    console.log('Selected Subject:', subject);
    
    // Update selected subjects
    setSelectedSubjects([...selectedSubjects, subject]);
  };
  
  return (
    <div className='for-overallproject-que'>
      <div className='question'>
        <h1>Question  Paper</h1>
        <div>
          <p>Select the below dropdowns to get the question Copy</p>
          <div>
            <Dropdown label="Select The Branch :" options={optionsForBranch} onSelect={setSelectedBranch} placeholder="Select the branch" />
            <br />
            <Dropdown label="Select The Year :" options={optionsForYear} onSelect={setSelectedYear} placeholder="Select the year" />
            <br />
            <Dropdown label="Select The Semester :" options={optionsForSemester} onSelect={handleSemesterChange} placeholder="Select the semester" />
            <br />
            <Dropdown label='Select your Subject: ' options={subjectsForSemester[selectedSemester] || []} onSelect={handleSubjectChange} placeholder="Select the Subject" />
          </div>
          <Button buttonText="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Questionpaper;
