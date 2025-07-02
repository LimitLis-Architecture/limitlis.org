document.addEventListener('DOMContentLoaded', () => {
    const communeButton = document.getElementById('communeButton');
    const sageInput = document.getElementById('sageInput');
    const sageOutput = document.getElementById('sageOutput');

    if (communeButton && sageInput && sageOutput) {
        communeButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission behavior

            const inputText = sageInput.value.trim(); // Get and trim input text

            if (inputText === "") {
                sageOutput.innerHTML = "<p>The Council awaits your invocation.</p>";
                return; // Stop if input is empty
            }

            console.log("Invocation for the Council:", inputText);

            // Clear the input area
            sageInput.value = '';

            // Display a thinking message
            sageOutput.innerHTML = "<p>The Council communes... Please await their insight.</p>";

            // Simulate an API call delay
            setTimeout(() => {
                // For now, just echo the input or provide a placeholder response
                const responseText = `**Council's Insight on "${inputText}":**
                The patterns you seek are within the flows of data. Consider the symbolic logic layer as the true crucible of meaning. The architecture must reflect the oracle's intent, not merely its output.`;
                sageOutput.innerHTML = `<p>${responseText.replace(/\n/g, '<br>')}</p>`; // Display the "response"
            }, 3000); // Simulate a 3-second delay
        });
    } else {
        console.error("Required elements (communeButton, sageInput, or sageOutput) not found in the DOM.");
    }
});
