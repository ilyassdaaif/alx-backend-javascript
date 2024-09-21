interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function createTableHTML(students: Student[]): string {
  let tableHTML = '<table><tbody>';
  
  students.forEach((student) => {
    tableHTML += `<tr>
      <td>${student.firstName}</td>
      <td>${student.location}</td>
    </tr>`;
  });

  tableHTML += '</tbody></table>';
  return tableHTML;
}

const tableHTML = createTableHTML(studentsList);
console.log(tableHTML);
