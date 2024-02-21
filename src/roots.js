const Route = {
  Home: "home",
  Syllabus: "syllabus",
  QuestionPaper: "questionpaper",
  Aboutus: "AboutUs",
};
const RoutePrefix='/student-help';
if (typeof module !== 'undefined' && module.exports) 
module.exports={Route,RoutePrefix}
if (typeof exports !== 'undefined') 
exports.myVariable = {Route,RoutePrefix}