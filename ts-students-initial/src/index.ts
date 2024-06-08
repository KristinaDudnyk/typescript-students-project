import data from "./data.js";

const students = JSON.parse(data);
// console.log(students);

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateAdmission: string;
  birthYear: string;
  focusArea?: string | string[];
  dateRegistrationSuspended?: string;
}

function addRow(table: HTMLTableElement, student: Student) {
  const tableBody = table.querySelector("tbody") as HTMLTableSectionElement;

  const tableRow = tableBody.insertRow();

  const name = tableRow.insertCell();

  name.appendChild(
    document.createTextNode(`${student.firstName}  ${student.lastName}`)
  );

  const age = tableRow.insertCell();

  age.appendChild(
    document.createTextNode(
      (new Date().getFullYear() - parseInt(student.birthYear)).toString()
    )
  );

  const majors = tableRow.insertCell();

  if (student.focusArea) {
    if (typeof student.focusArea === "string") {
      majors.appendChild(document.createTextNode(student.focusArea));
    } else {
      const majorsList = student.focusArea.join(", ");
      majors.appendChild(document.createTextNode(majorsList));
    }
  } else {
    majors.appendChild(document.createTextNode("---"));
  }

  const status = tableRow.insertCell();

  if (student.dateRegistrationSuspended) {
    status.appendChild(document.createTextNode("Inactive"));
  } else {
    status.appendChild(document.createTextNode("Active"));
  }
}

function selectTable() {
  return <HTMLTableElement>document.querySelector("#students-table");
}

function populateTable(students: Student) {}
for (const student in students) {
  addRow(selectTable(), students[student]);
}

populateTable(students);
