interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Andres',
  lastName: 'Gonzalez',
  age: 30,
  location: 'Bogota',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Smith',
  age: 42,
  location: 'California',
};

const studentList = [student1, student2];
const table = document.createElement('table');

studentList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.appendChild(
    document.createTextNode(student.firstName)
  );

  locationCell.appendChild(
    document.createTextNode(student.location)
  );
});

document.body.appendChild(table);
