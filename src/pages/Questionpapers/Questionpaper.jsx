// question.jsx
import React, { useState } from "react";
import "./QuestionPaper.css";
import { QuestionPaper } from "../../constants/Question";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";

const Questionpaper = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const optionsForBranch = [
    { value: "CSE", label: "Computer Science and Engineering" },
    { value: "ECE", label: "Electronics and Communication Engineering" },
    { value: "EEE", label: "Electrical and Electronics Engineering" },
    { value: "MEC", label: "Mechanical Engineering" },
    { value: "CIV", label: "Civil Engineering" },
    { value: "CHE", label: "Chemical Engineering" },
  ];

  const optionsForSemester = [
    { value: "semester1", label: "Semester 1" },
    { value: "semester2", label: "Semester 2" },
    { value: "semester3", label: "Semester 3" },
    { value: "semester4", label: "Semester 4" },
    { value: "semester5", label: "Semester 5" },
    { value: "semester6", label: "Semester 6" },
    { value: "semester7", label: "Semester 7" },
    { value: "semester8", label: "Semester 8" },
  ];

  const handleSubmit = () => {
    if (
      QuestionPaper[selectedSemester] &&
      QuestionPaper[selectedSemester][selectedBranch]
    ) {
      const selectedQuestionPaper = QuestionPaper[selectedSemester][selectedBranch];
      console.log(
        `QuestionPaper for ${selectedSemester} - ${selectedBranch}:`,
        selectedQuestionPaper
      );


      window.location.href = selectedQuestionPaper;
    } else {
      console.log("Invalid semester or branch");
    }
  };

  const handleSemesterChange = (semester) => {
    console.log("Selected Semester:", semester);
    setSelectedSemester(semester);
  };

  return (
    <div className="for-overallproject-que">
      <div className="question">
        <h1>Question Paper</h1>
        <div>
          <p>Select the below dropdowns to get the question Copy</p>
          <div>
            <Dropdown
              label="Select The Branch :"
              options={optionsForBranch}
              onSelect={setSelectedBranch}
              placeholder="Select the branch"
            />
            <br />
            <Dropdown
              label="Select The Semester :"
              options={optionsForSemester}
              onSelect={handleSemesterChange}
              placeholder="Select the semester"
            />
            <br />
          </div>
          <Button buttonText="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Questionpaper;
