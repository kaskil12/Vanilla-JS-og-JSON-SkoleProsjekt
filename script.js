// Simulerer AJAX for å laste JSON-data (du vil kanskje bruke en server for dette i en ekte applikasjon)
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

function checkLogin() {
    var emailInput = document.getElementById('email').value;

    loadJSON(function (data) {
        var user = data.find(function (obj) {
            return obj.email === emailInput;
        });

        if (user) {
            document.getElementById('name').innerText = user.name;
            document.getElementById('image').src = user.image;
            document.getElementById('login-box').style.display = 'none';
            document.getElementById('user-info').style.display = 'block';
        } else {
            alert('User not found');
        }
    });
}

function verifyPassword() {
    var passwordInput = document.getElementById('password').value;

    // Her kan du implementere en passordverifikasjon mot brukerens objekt i JSON-filen
    // I dette eksemplet sjekker vi bare om passordet er "passwordX"

    if (passwordInput === 'passwordX') {
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
}
