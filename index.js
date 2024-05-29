// Run the script after the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Get the magic box
    const magicBox = document.getElementById('magic-box');
    // Get the color change button
    const colorChangeButton = document.getElementById('color-change-button');

    // Function to generate a random hex color
    function generateRandomColor() {
        const hexChars = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexChars[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change the color of the box when the button is clicked
    colorChangeButton.addEventListener('click', () => {
        magicBox.style.backgroundColor = generateRandomColor();
    });
});
