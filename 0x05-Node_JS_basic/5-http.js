#!/usr/bin/env node

const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
  let resp = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    return res.end(resp);
  }

  resp = 'This is the list of our students';
  return new Promise((resolve) => {
    console.log(resp);
    resolve();
  })
    .then(() => {
      countStudents(process.argv[2]);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
