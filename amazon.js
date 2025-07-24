// Search functionality
document.querySelector('.search-icon').addEventListener('click', () => {
    const value = document.querySelector('.search-input').value.trim();
    if (value) alert(`Searching for "${value}"...`);
    else alert("Please enter something to search.");
});

// Scroll to top
document.querySelector('#back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
