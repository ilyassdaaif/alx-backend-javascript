// task_4/js/main.ts

// Define and export constants for subjects
export const cpp = 'C++';
export const java = 'Java';
export const react = 'React';

// Define the Teacher class
class Teacher {
  experienceTeachingC: number;
  
  constructor(experienceTeachingC: number) {
    this.experienceTeachingC = experienceTeachingC;
  }

  getRequirements(): string {
    return 'Some requirements for the subject.';
  }

  getAvailableTeacher(): string {
    if (this.experienceTeachingC > 0) {
      return `Available teacher with experience: ${this.experienceTeachingC} years.`;
    }
    return 'No available teacher.';
  }
}

// create and export a Teacher object
export const cTeacher = new Teacher(10);

// Function to log subject details
function logSubject(subject: string, teacher: Teacher) {
  console.log(subject);
  console.log(`Teacher: ${teacher.getAvailableTeacher()}`);
  console.log(`Requirements: ${teacher.getRequirements()}`);
}

// Log details for each subject
logSubject(cpp, cTeacher);
logSubject(java, cTeacher);
logSubject(react, cTeacher);