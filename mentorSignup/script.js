/* signup.js */

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    if (name === "" || email === "" || phone === "" || password === "") {
        alert("All fields are required.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If validation passes, redirect to the sign-in page
    alert("Sign-up successful! Redirecting to sign-in page...");
    window.location.href = "../mentorDashboard/mentorDashboard.html"; // Adjust the path according to your folder structure
    return false; // Prevent default form submission
}
