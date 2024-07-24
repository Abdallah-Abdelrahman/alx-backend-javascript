const fs = require('fs');
const readline = require('readline');

/**
 * Attempt to read the database file synchronously
 *
 * @param {string} path - path to the database file
 */
const countStudents = (filePath) => {
  const stream = fs.createReadStream(filePath);

  stream.on('error', () => {
    throw new Error('Cannot load the database');
  });

  const rl = readline.createInterface({ input: stream });
  const stduents = [];

  rl.on('line', (row) => {
    if (row.trim()) {
      stduents.push(row.split(','));
    }
  });

  rl.on('close', () => {
    const cs = [];
    const swe = [];
    for (let i = 1; i < stduents.length; i += 1) {
      const field = stduents[i];
      if (field.includes('CS')) {
        cs.push(field[0]);
      } else {
        swe.push(field[0]);
      }
    }
    console.log(`Number of students: ${stduents.length - 1}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  });
};

module.exports = countStudents;
