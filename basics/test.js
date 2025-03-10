
console.log("Authentication starts");

async function authenticate() {
    for (let i = 0; i < 10; i++) {
        console.log("Processing authentication");
        await new Promise(resolve => setTimeout(resolve, 1000)); // Sleep for 1 second
    }
}

authenticate();