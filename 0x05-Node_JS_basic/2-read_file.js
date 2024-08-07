#!/usr/bin/env node
const fs = require('fs');

/**
 * Attempt to read the database file synchronously
 *
 * @param {string} path - path to the database file
 */
function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the file content synchronously
  const fileContent = fs.readFileSync(path, 'utf8');

  // Split the file content into lines
  const lines = fileContent.trim().split('\n');
  if (lines.length < 2) throw new Error('Cannot load the database');

  const students = {};
  let totalStudents = 0;
  let i = 0;

  // Process each line except the header
  for (let line of lines) {
    line = line.trim();
    if (line && i > 0) {
      const toks = line.split(',');
      if (toks.length < 4) {
        // eslint-disable-next-line
        continue;
      }
      const major = toks[toks.length - 1];
      const firstname = toks[0];

      if (!students[major]) {
        students[major] = { count: 0, list: [] };
      }
      students[major].count += 1;
      students[major].list.push(firstname);
      totalStudents += 1;
    }
    i += 1;
  }

  // Log the results
  console.log(`Number of students: ${totalStudents}`);
  const studentsEntries = Object.entries(students);
  for (const [major, { count, list }] of studentsEntries) {
    console.log(`Number of students in ${major}: ${count}. List: ${list.join(', ')}`);
  }
}

module.exports = countStudents;
