const apiBase = 'http://localhost:8080/api/auth';

async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${apiBase}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const message = await response.text();
        document.getElementById('message').innerText = message;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'Error during registration';
    }
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${apiBase}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            document.getElementById('message').innerText = 'Login successful!';
        } else {
            document.getElementById('message').innerText = 'Invalid credentials';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'Error during login';
    }
}
