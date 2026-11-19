
// Show or hide password
function togglePassword() {
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Switch to registration form
function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.querySelector(".subtitle").classList.add("hidden");
    document.querySelector(".register").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

// Switch to login form
function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.querySelector(".subtitle").classList.remove("hidden");
    document.querySelector(".register").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
}

// Student registration
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (password.length < 6) {
        document.getElementById("regMessage").style.color = "red";
        document.getElementById("regMessage").innerText =
            "Password must contain at least 6 characters.";
        return;
    }

    let student = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("student", JSON.stringify(student));

    document.getElementById("regMessage").style.color = "green";
    document.getElementById("regMessage").innerText =
        "Registration successful! Please login.";

    document.getElementById("registerForm").reset();

    setTimeout(showLogin, 1500);
});

// Student login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let student = JSON.parse(localStorage.getItem("student"));

    if (student && email === student.email &&
        password === student.password) {

        document.querySelector(".right-side").innerHTML = `
            <h2>Login Successful!</h2>
            <p class="subtitle">
                Welcome, ${student.name}!
            </p>
            <p>You have successfully logged into your student portal.</p>
            <button onclick="logout()">Logout</button>
        `;

    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText =
            "Invalid email or password. Please try again.";
    }
});

// Forgot password
function forgotPassword() {
    alert("Please contact your college administrator to reset your password.");
}

// Logout
function logout() {
    location.reload();
}
