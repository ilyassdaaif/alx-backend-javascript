const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Remove header

    const fields = {};
    let totalStudents = 0;

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (field) {
        if (!fields[field]) {
          fields[field] = { count: 0, names: [] };
        }
        fields[field].count += 1;
        fields[field].names.push(firstName);
        totalStudents += 1;
      }
    });

    let output = `Number of students: ${totalStudents}\n`;
    for (const [field, data] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    if (!databasePath) {
      throw new Error('Cannot load the database');
    }
    const studentsInfo = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
