document.addEventListener('DOMContentLoaded', () => {
    const communeButton = document.getElementById('communeButton');
    const sageInput = document.getElementById('sageInput');

    if (communeButton && sageInput) {
        communeButton.addEventListener('click', () => {
            const inputText = sageInput.value;
            console.log("Text from Sage Chamber:", inputText);
        });
    } else {
        console.error("Required elements (communeButton or sageInput) not found in the DOM.");
    }
});
