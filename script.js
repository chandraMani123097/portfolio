document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check if dark mode preference is saved
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    darkModeToggle.textContent = "☀️"; // Set sun icon for light mode
  }

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");

    // Save the preference
    localStorage.setItem("theme", isDark ? "dark" : "light");
    darkModeToggle.textContent = isDark ? "☀️" : "🌙";
  });

  // Smooth fade-in animation
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("fade-in-active");
  });

  // Newsletter Subscription
  document
    .querySelector(".newsletter button")
    .addEventListener("click", function () {
      const emailInput = document.querySelector(".newsletter input");
      if (emailInput.value.trim() !== "") {
        console.log(`Subscribed with email: ${emailInput.value}`);
        alert(`Thank you for subscribing, ${emailInput.value}!`);
        emailInput.value = ""; // Clear input field
      } else {
        alert("Please enter a valid email address.");
      }
    });
});
