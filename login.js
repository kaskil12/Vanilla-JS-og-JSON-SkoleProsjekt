let people;

fetch('people.json')
    .then(response => response.json())
    .then(data => people = data);

function checkEmail() {
    const email = document.getElementById('email').value;
    const person = people.find(person => person.email === email);

    if (person) {
        const loginBox = document.getElementById('loginBox');
        loginBox.innerHTML = `
            <img src="${person.image}" alt="Person Image">
            <p>${person.name}</p>
            <input type="password" id="password" placeholder="Password">
            <button onclick="verifyPassword('${person.password}')">Verify</button>
        `;
    }
}

function verifyPassword(correctPassword) {
    const password = document.getElementById('password').value;

    if (password === correctPassword) {
        alert('Logget inn!');
    }
}