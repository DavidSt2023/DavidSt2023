document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.getElementById("myDropdown");
  const dropbtn = document.querySelector('.dropbtn');
  let isDropdownOpen = false;

  dropbtn.addEventListener("click", function(event) {
    event.stopPropagation();

    // Toggle the "show" class to open or close the dropdown
    dropdown.classList.toggle("show");

    // Toggle the "close-animation" class to initiate the closing animation
    if (dropdown.classList.contains('show')) {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      isDropdownOpen = true;
    } else {
      dropdown.classList.add('close-animation');
      dropdown.style.maxHeight = "0";
      isDropdownOpen = false;

      // Remove the "close-animation" class after the closing animation completes
      setTimeout(function() {
        dropdown.classList.remove('close-animation');
      }, 500); // Adjust the time to match your CSS transition duration
    }
  });

  // Close the dropdown when clicking outside
  window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
      if (isDropdownOpen) {
        dropdown.classList.remove('show');
        dropdown.style.maxHeight = "0";
        isDropdownOpen = false;
      }
    }
  });
});