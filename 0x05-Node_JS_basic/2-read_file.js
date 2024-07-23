#!/usr/bin/env node
const fs = require('fs');

/**
 * Attempt to read the database file synchronously
 *
 * @param {string} path - path to the database file
 */
function countStudents(path) {
  let buff = '';
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // Read the file content synchronously
  const fileContent = fs.readFileSync(path, 'utf8');

  // Split the file content into lines
  const lines = fileContent.trim().split('\n');

  if (lines.length <= 1) {
    throw new Error('Cannot load the database');
  }

  const students = {};
  let totalStudents = 0;
  let i = 0;

  // Process each line except the header
  for (const line of lines) {
    // const line = lines[i].trim();
    if (line.trim() !== '' && i > 0) {
      const toks = line.split(',');
      const field = toks[toks.length - 1];
      const firstname = toks[0];

      if (!students[field]) {
        students[field] = { count: 0, list: [] };
      }
      students[field].count += 1;
      students[field].list.push(firstname);
      totalStudents += 1;
    }
    i += 1;
  }

  // Log the results
  buff = `Number of students: ${totalStudents}\n`;
  i = 0;
  const studentsMap = Object.entries(students);
  for (const [field, { count, list }] of studentsMap) {
    buff += `Number of students in ${field}: ${count}. List: ${list.join(', ')}`;
    if (i < studentsMap.length - 1) buff += '\n';
    i += 1;
  }
  console.log(buff);
}

module.exports = countStudents;
