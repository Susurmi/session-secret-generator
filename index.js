const crypto = require('crypto');
const fs = require('fs');

// Generate a new session secret
const sessionSecret = crypto.randomBytes(32).toString('hex');

// Set the filename to use for the secret file
const fileName = 'secret.txt';

// Try to delete the existing secret file, if it exists
fs.unlink(fileName, (err) => {
  if (err && err.code !== 'ENOENT') {
    // If there was an error that wasn't "file not found"
    console.error(err);
  } else {
    // Write the new session secret to the secret file
    fs.writeFile(fileName, sessionSecret, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('New session secret written to', fileName);
      }
      // End the Node.js process
      process.exit();
    });
  }
});
