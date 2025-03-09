let debug = 0;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Select the form

    form.addEventListener("submit", function (event) {
        // Select all required inputs
        const inputs = form.querySelectorAll("input[required]");

        if (debug) {
            alert(inputs);
        }

        let allFilled = true;

        // Check if all required fields are filled
        inputs.forEach(input => {
            if (debug) {
                alert(input);
            }
            if (!input.value.trim()) {
                allFilled = false;
            }
        });


        if (allFilled) {
            alert("✅ Form submitted successfully!");
            form.reset(); 
        }
    });
});
