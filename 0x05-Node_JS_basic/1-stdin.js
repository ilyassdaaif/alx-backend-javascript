console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.trim(); // Capture and trim the user input

  // Display the name
  console.log(`Your name is: ${name}`);

  // End the input stream after getting the name
  if (!process.stdin.isTTY) {
    process.stdin.end(); // Only end for piped input (not for interactive)
  }
});

// Handle the process end to display the closing message (only for piped input)
process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    console.log("This important software is now closing");
  }
});
