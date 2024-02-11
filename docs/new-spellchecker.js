let dictionary = []; // Will hold the dictionary words after loading

// Function to load the dictionary from an external file
function loadDictionary() {
    fetch('dict-en.txt')
        .then(response => response.text())
        .then(text => {
            dictionary = text.split(/\r?\n/); // Split the file content into an array of words
        })
        .catch(error => console.error('Error loading the dictionary:', error));
}

// Call loadDictionary at the start to ensure the dictionary is loaded
loadDictionary();

// Adjusted function to check the spelling of words in the text input
function checkSpelling() {
    const textInput = document.getElementById('textInput').value;
    const words = textInput.split(/\s+/); // Split input text into words
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ''; // Clear previous suggestions

    words.forEach(word => {
        if (!dictionary.includes(word.toLowerCase())) {
            const correction = suggestCorrection(word);
            const message = correction ? `Did you mean: ${correction}?` : 'No suggestion.';
            suggestions.innerHTML += `<p>${word}: ${message}</p>`;
        }
    });
}

// Your suggestCorrection function remains the same
