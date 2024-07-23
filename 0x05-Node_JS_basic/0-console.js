#!/usr/bin/env node

module.exports = function displayMessage(str) {
  process.stdout.write(`${str}\n`);
};
