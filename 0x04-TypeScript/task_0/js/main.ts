interface Student {
  firstName: string;
  lastName: string;
  location: string;
  age: number;
}

const std1: Student = { firstName: 'a', lastName: 'b', location: 'c', age: 21 };
const std2: Student = { firstName: 'd', lastName: 'e', location: 'f', age: 22 };
const stds = [std1, std2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
stds.forEach(student => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
