const fs = require('fs');

/**
 * Attempt to read the database file synchronously
 *
 * @param {string} path - path to the database file
 */
const countStudents = (dataFilePath) => {
  if (!fs.existsSync(dataFilePath) || !fs.statSync(dataFilePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataFilePath, 'utf8').trim().split('\n');
  if (fileLines.length < 2) {
    throw new Error('Cannot load the database');
  }

  const [header, ...rows] = fileLines;
  const dbFieldNames = header.split(',');
  const studentPropsNames = dbFieldNames.slice(0, -1);

  const studentGroups = new Map();

  rows.forEach((line) => {
    const studentRecord = line.trim().split(',');

    if (studentRecord.length < dbFieldNames.length) return;

    // Create an object representing the student
    const studentObject = Object.fromEntries(
      studentPropsNames.map((propName, idx) => [propName, studentRecord[idx]]),
    );

    const field = studentRecord[studentRecord.length - 1];

    if (!studentGroups.has(field)) {
      studentGroups.set(field, []);
    }

    // Add the student object to the appropriate array in the fields map
    studentGroups.get(field).push(studentObject);
  });

  // The total number of students
  const totalStudents = Array.from(studentGroups.values()).reduce(
    (sum, students) => sum + students.length,
    0,
  );

  let buff = `Number of students: ${totalStudents}\n`;
  let i = 0;

  studentGroups.forEach((students, field) => {
    const studentNames = students
      .map((student) => student.firstname)
      .join(', ');

    buff += `Number of students in ${field}: ${students.length}. List: ${studentNames}`;
    if (i < studentGroups.size - 1) buff += '\n';
    i += 1;
  });

  console.log(buff);
};

module.exports = countStudents;
