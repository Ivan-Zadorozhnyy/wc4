// Reference to the search results container
var searchResults = document.getElementById('searchResults');

// Function to show the search results
function showSearchResults() {
    searchResults.style.display = 'block';
}

// Function to hide the search results
function hideSearchResults() {
    searchResults.style.display = 'none';
}

// Event listener for the search input
var searchInput = document.querySelector('.text-field');
searchInput.addEventListener('input', function() {
    if (this.value.trim()) { // Check if there's any non-whitespace character
        showSearchResults();
    } else {
        hideSearchResults();
    }
});

// Event listener to hide the search results when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) { // Check if the clicked element is outside the search container
        hideSearchResults();
    }
});

// Event listener to prevent the above listener from hiding results when clicking on the search input or results
searchInput.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
});

searchResults.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
});

// Event listener for FAQ items
var faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
