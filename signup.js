document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!fullName || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    if (users.some(user => user.email === email)) {
        alert("Email already exists. Please use a different email.");
        return;
    }

    users.push({ fullName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-up successful! You can now log in.");
    document.getElementById("signupForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful! Welcome, " + user.fullName + "!");
    } else {
        alert("Invalid email or password.");
    }
});


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}


function validatePassword(password) {
    return password.length >= 6;
}


function socialLogin(provider) {
    alert(provider + " login clicked! (Backend required)");
}
