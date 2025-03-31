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

    alert("Sign-up successful!");
    // Here, you can send data to backend using AJAX or fetch API
});

// Validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Validate password length
function validatePassword(password) {
    return password.length >= 6;
}

// Social login placeholder function
function socialLogin(provider) {
    alert(provider + " login clicked! (Backend required)");
}
