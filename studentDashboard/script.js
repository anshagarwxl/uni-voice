/* dashboard.js */

let selectedCollege = "";

function selectCollege(collegeName) {
    selectedCollege = collegeName;
    document.getElementById("confirm-section").style.display = "block";
    document.getElementById("confirm-btn").innerText = `Confirm ${selectedCollege}`;
}

function confirmCollege() {
    if (selectedCollege) {
        alert(`You have selected ${selectedCollege}.`);

        // Disable all college buttons
        const collegeButtons = document.querySelectorAll('.college-grid button');
        collegeButtons.forEach(button => {
            button.disabled = true;
            button.style.backgroundColor = '#ccc';  // Change the color to indicate disabled state
            button.style.cursor = 'not-allowed';    // Change cursor to indicate the button is not clickable
        });

        // Disable the confirm button
        const confirmButton = document.getElementById("confirm-btn");
        confirmButton.disabled = true;
        confirmButton.style.backgroundColor = '#ccc';
        confirmButton.style.cursor = 'not-allowed';

        // Mark step 1 as completed
        document.getElementById("step1").classList.add("checked");

        document.getElementById("datetime-section").style.display = "block";
        window.scrollTo(0, document.body.scrollHeight); // Scroll down to the date and time section
    }
}

function scheduleMeeting() {
    const selectedDate = document.getElementById("meeting-date").value;
    const selectedTime = document.getElementById("meeting-time").value;
    if (selectedDate && selectedTime) {
        alert(`Your meeting for ${selectedCollege} is scheduled on ${selectedDate} at ${selectedTime}.`);

        // Mark step 2 as completed
        document.getElementById("step2").classList.add("checked");
    } else {
        alert("Please select both date and time for the meeting.");
    }
}
