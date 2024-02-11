// Sample dictionary of correct words
const dictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog'];

// Function to check the spelling of words in the text input
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

// Function to suggest corrections for a misspelled word
function suggestCorrection(word) {
    // This is a placeholder for a more sophisticated correction algorithm
    // For now, it simply checks if removing the last character fixes the spelling
    const trimmedWord = word.slice(0, -1);
    if (dictionary.includes(trimmedWord.toLowerCase())) {
        return trimmedWord;
    }
    return null;
}
