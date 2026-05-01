document.getElementById('registrationForm').addEventListener('submit', function(event) {

    const isValid = validateForm();

    if (!isValid) {
        event.preventDefault(); //prevents default browser behavior of reloading the page
        console.log("Form invalid: submission blocked.");
    } else {
        console.log("Form valid: Submission allowed.");
    }
});

function validateForm() {
    let isValid = true; //clear previous error messages at the start of the function so that only current errors are displayed

    const errors = document.getElementsByClassName('error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
    document.getElementById('successMessage').innerHTML = "";

    //BAIC INFORMATION:
    //no fullname
    if (document.getElementById('fullname').value.trim() === "") { //use trim to ignore spaces as input
        document.getElementById('fullnameError').innerHTML = "Full name is required.";
        isValid = false;
    }
    //no birthdate
    if (document.getElementById('birthdate').value === "") {
        document.getElementById('birthdateError').innerHTML = "Birthdate is required.";
        isValid = false;
    }
    //check if sex is selected, sends message if none selected
    let sexOptions = document.getElementsByName('sex');
    let sexSelected = false;
    for (let i = 0; i < sexOptions.length; i++) {
        if (sexOptions[i].checked) sexSelected = true;
    }
    if (!sexSelected) {
        document.getElementById('sexError').innerHTML = "Please select your sex.";
        isValid = false;
    }
    //no email
    if (document.getElementById('email').value.trim() === "") {
        document.getElementById('emailError').innerHTML = "Email is required.";
        isValid = false;
    }
    //no username
    if (document.getElementById('username').value.trim() === "") {
        document.getElementById('usernameError').innerHTML = "Username is required.";
        isValid = false;
    }

    //no password
    if (document.getElementById('password').value === "") {
        document.getElementById('passwordError').innerHTML = "Password is required.";
        isValid = false;
    }
    //password authentication
    if (document.getElementById('confirmPassword').value !== document.getElementById('password').value) {
        document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match.";
        isValid = false;
    }

    //TOPIC QUESTIONS:
    // Checkboxes for the volunteer options
    let tasks = document.getElementsByName('volunteer_tasks');
    let taskSelected = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].checked) taskSelected = true;
    }
    if (!taskSelected) {
        document.getElementById('checkboxError').innerHTML = "Please select at least one task.";
        isValid = false;
    }

    // Dropdown for frequency of work
    if (document.getElementById('topicDropdown').value === "") { //Check if the option is still the default empty string, because that dropdown has no value
        document.getElementById('dropdownError').innerHTML = "Please select an option.";
        isValid = false;
    }

    // Checkboxes for Motivation
    let motivations = document.getElementsByName('motivation');
    let motSelected = false;
    for (let i = 0; i < motivations.length; i++) {
        if (motivations[i].checked) motSelected = true;
    }
    if (!motSelected) {
        document.getElementById('motivationError').innerHTML = "Please select at least one.";
        isValid = false;
    }

    //Show a success message only when isValid is true at the end of the function. Return isValid as the last line.
    if (isValid) {
        document.getElementById('successMessage').innerHTML = "Registration successful!";
    }
    return isValid;
}