interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Onion',
  lastName: 'Salam',
  age: 19,
  location: 'Illinois'
}

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
  location: 'Abuja'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
const titleRow = document.createElement('tr');
const colTitle1 = document.createElement('th');
const colTitle2 = document.createElement('th');

colTitle1.textContent = 'First Name';
colTitle2.textContent = 'Location';
titleRow.append(colTitle1, colTitle2);
thead.appendChild(titleRow);

for (const student of studentsList) {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  locCell.textContent = student.location;
  row.append(nameCell, locCell);
  tbody.append(row);
}

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
document.querySelectorAll('td, th').forEach((cell: HTMLTableCellElement) => {
  cell.style.border = '1px solid black';
  cell.style.padding = '2px 4px';
});

