// Get the select dropdown and button
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.querySelector('input[type="button"]');

// Add an event listener to the button
removeButton.addEventListener('click', function() {
  // Get the selected index
  const selectedIndex = colorSelect.selectedIndex;

  // If an option is selected, remove it
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});
