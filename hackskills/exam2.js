document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-btn');
    const form = document.getElementById('exam-form');

    // Function to handle form submission
    function handleSubmit() {
        // Check if the form is valid
        if (form.checkValidity()) {
            // Gather form data
            const formData = new FormData(form);

            // Convert FormData to a plain object
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // For demo purposes, just log the data
            console.log('Form Data:', data);

            // Display a message or process the form data
            alert('Exam submitted successfully!');

            // Optionally, you can send the data to a server or perform other actions here
            // Example:
            // fetch('/submit-exam', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // }).then(response => response.json())
            //   .then(result => console.log(result))
            //   .catch(error => console.error('Error:', error));

            // Optionally redirect or clear the form
            // window.location.href = 'thankyou.html'; // Redirect to a thank you page
            form.reset(); // Reset the form fields
        } else {
            alert('Please fill in all required fields.');
        }
    }

    // Add event listener to submit button
    submitButton.addEventListener('click', handleSubmit);
});
