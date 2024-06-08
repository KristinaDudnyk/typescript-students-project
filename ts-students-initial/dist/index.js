import data from "./data.js";
const students = JSON.parse(data);
function addRow(table, student) {
    const tableBody = table.querySelector("tbody");
    const tableRow = tableBody.insertRow();
    const name = tableRow.insertCell();
    name.appendChild(document.createTextNode(`${student.firstName}  ${student.lastName}`));
    const age = tableRow.insertCell();
    age.appendChild(document.createTextNode((new Date().getFullYear() - parseInt(student.birthYear)).toString()));
    const majors = tableRow.insertCell();
    if (student.focusArea) {
        if (typeof student.focusArea === "string") {
            majors.appendChild(document.createTextNode(student.focusArea));
        }
        else {
            const majorsList = student.focusArea.join(", ");
            majors.appendChild(document.createTextNode(majorsList));
        }
    }
    else {
        majors.appendChild(document.createTextNode("---"));
    }
    const status = tableRow.insertCell();
    if (student.dateRegistrationSuspended) {
        status.appendChild(document.createTextNode("Inactive"));
    }
    else {
        status.appendChild(document.createTextNode("Active"));
    }
}
function selectTable() {
    return document.querySelector("#students-table");
}
function populateTable(students) { }
for (const student in students) {
    addRow(selectTable(), students[student]);
}
populateTable(students);
