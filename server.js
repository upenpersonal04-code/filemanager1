// Import the built-in fs (File System) module
const fs = require('fs');

// File name to work with
const fileName = 'example.txt';

// CREATE FILE
fs.writeFile(fileName, 'This is the initial file content.', (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File created successfully!');
    }

    // READ FILE
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }

        // UPDATE FILE (append new content)
        fs.appendFile(fileName, '\nThis is appended content.', (err) => {
            if (err) {
                console.error('Error updating file:', err);
            } else {
                console.log('File updated successfully!');
            }

            // DELETE FILE
            fs.unlink(fileName, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                } else {
                    console.log('File deleted successfully!');
                }
            });
        });
    });
});
