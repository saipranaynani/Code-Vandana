function submitForm() {
    // Retrieve form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const selectedGenders = Array.from(genderElements).filter(el => el.checked).map(el => el.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    // Check if all fields are filled
    if (!firstName || !lastName || !dateOfBirth || !country || selectedGenders.length === 0 || !profession || !email || !mobileNumber) {
        alert("Please fill in all the fields.");
        return;
    }

    // Display results in the popup
    document.getElementById("popup-first-name").textContent = firstName;
    document.getElementById("popup-last-name").textContent = lastName;
    document.getElementById("popup-date-of-birth").textContent = dateOfBirth;
    document.getElementById("popup-country").textContent = country;
    document.getElementById("popup-gender").textContent = selectedGenders.join(", ");
    document.getElementById("popup-profession").textContent = profession;
    document.getElementById("popup-email").textContent = email;
    document.getElementById("popup-mobile-number").textContent = mobileNumber;

    // Show the popup
    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    // Reset the form
    document.getElementById("survey-form").reset();

    // Hide the popup
    document.getElementById("popup").style.display = "none";
}

function closePopup() {
    // Close the popup
    document.getElementById("popup").style.display = "none";
}
