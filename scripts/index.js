//select  HTML elements and store  in  variables

let studentName = document.getElementById("sname");
let mathScore = document.getElementById("ms");
let engScore = document.getElementById("es");
let scienceScore = document.getElementById("ss");
let addButton = document.getElementById("add-btn");
let validationMsg = document.getElementById("validation-msg");
//function to add student
const addStudent = () => {
  //input validation
  if (!studentName.value.trim()) {
    validationMsg.style.display = "inline-block";
    validationMsg.textContent = "Student name cannot be empty!";
    return;
  }
};

addButton.addEventListener("click", addStudent);
