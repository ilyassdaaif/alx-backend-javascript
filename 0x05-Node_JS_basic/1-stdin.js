// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Capture and trim the user input

  // Display the name
  console.log(`Your name is: ${name}`);

  // End the process and display closing message
  process.exit();
});

// Listen for the 'exit' event
process.on("exit", () => {
  console.log("This important software is now closing");
});
