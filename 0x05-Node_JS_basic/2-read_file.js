const fs = require('fs');

function countStudents(path) {
  try {
    console.log(`Reading file from: ${path}`);
    const data = fs.readFileSync(path, 'utf8');
    
    console.log('File content:');
    console.log(data);
    
    const lines = data.split('\n').filter(line => line.trim() !== '');
    console.log(`Number of non-empty lines: ${lines.length}`);
    
    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    students.forEach(student => {
      console.log(`Processing student: ${student}`);
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, students: [] };
      }
      fields[field].count += 1;
      fields[field].students.push(firstName);
    });
    
    console.log('Fields object:');
    console.log(JSON.stringify(fields, null, 2));
    
    for (const [field, data] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;