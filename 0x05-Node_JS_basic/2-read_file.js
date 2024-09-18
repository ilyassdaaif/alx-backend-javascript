const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    const lines = data.split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).filter(line => line.trim().length > 0).map(line => line.split(','));
    const fieldMap = {};

    students.forEach(student => {
      const field = student[3];
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(student[0]);
    });

    console.log(`Number of students: ${students.length}`);
    for (const field in fieldMap) {
      console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw err;
  }
}

module.exports = countStudents;
