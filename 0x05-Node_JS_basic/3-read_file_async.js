const fs = require('fs');

async function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').slice(1);
        const numOfStudents = students.length;
        if (students[numOfStudents - 1] === '') {
          students.pop();
        }
        console.log(`Number of students: ${students.length}`);

        const studentsByFields = {};
        for (const student of students) {
          const studentArray = student.split(',');
          const field = studentArray[3];
          if (field in studentsByFields) {
            studentsByFields[field].push(studentArray[0]);
          } else {
            studentsByFields[field] = [studentArray[0]];
          }
        }

        for (const field in studentsByFields) {
          if (Object.prototype.hasOwnProperty.call(studentsByFields, field)) {
            const list = studentsByFields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
          }
        }
        res();
      }
    });
  });
}

module.exports = countStudents;
