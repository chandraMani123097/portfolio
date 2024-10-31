document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

// Handle newsletter subscription (for demonstration purposes)
document
  .querySelector(".newsletter button")
  .addEventListener("click", function () {
    const emailInput = document.querySelector(".newsletter input");
    console.log(`Subscribed with email: ${emailInput.value}`);
    emailInput.value = ""; // Clear the input after subscription
  });
