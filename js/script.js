document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("plannerForm");
    const result = document.getElementById("recommendationResult");
  
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        result.innerHTML = "Suggested Crops: 🌾 Millets, 🌽 Maize, 🥦 Broccoli (based on your region and soil type)";
      });
    }
  });
  