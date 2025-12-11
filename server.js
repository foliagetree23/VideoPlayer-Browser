const express = require('express');
const path = require('path');
const notifier = require('node-notifier');
const getPort = require('get-port');
const open = require('open');
const clipboardy = require('clipboardy');

const app = express();

// Function to show a notification with a copy button
function showErrorNotification(title, message) {
    notifier.notify({
        title: title,
        message: message,
        actions: ['Copy Error'], // Button text
        wait: true // Wait for user interaction
    }, (err, response, metadata) => {
        if (err) {
            console.error('Notifier Error:', err);
            return;
        }
        // Check if the 'Copy Error' button was clicked
        if (metadata && metadata.activationValue === 'Copy Error') {
            try {
                clipboardy.writeSync(message);
                console.log('Error message copied to clipboard.');
            } catch (copyError) {
                console.error('Failed to copy error message to clipboard:', copyError);
            }
        }
    });
}


// Serve static files from the current directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

async function startServer() {
    let port = 8000;
    try {
        // Get an available port, starting the search from 8000
        port = await getPort({ port: port });
        
        const server = app.listen(port, async () => {
            const url = `http://localhost:${port}`;
            console.log(`Server running at ${url}`);
            await open(url);
        });

        server.on('error', (err) => {
            const errorMessage = `An unexpected error occurred: ${err.message}`;
            console.error('Server error:', err.message);
            showErrorNotification('Video Player Server Error', errorMessage);
        });

    } catch (error) {
        const errorMessage = `Could not start server: ${error.message}`;
        console.error("Critical: Could not find an open port or start the server.", error);
        showErrorNotification('Critical Server Failure', errorMessage);
    }
}

startServer();
