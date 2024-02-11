document.getElementById('checkSpelling').addEventListener('click', function() {
    const text = document.getElementById('textArea').innerText;
    // Example: Call your spell check API here
    fetch('https://api.spellcheck.com/check?text=' + encodeURIComponent(text), {
        method: 'GET', // or 'POST'
        headers: {
            'Content-Type': 'application/json',
            'ApiKey': 'YOUR_API_KEY_HERE'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Process and display the spell check results here
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
