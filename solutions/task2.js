// Cache DOM references once to avoid repeated queries
const updateButton = document.querySelector("#update-btn");
const statusElement = document.querySelector("#status");

function handleStatusUpdate() {
  if (!statusElement) return;

  // Ensure screen readers announce dynamic text updates
  statusElement.setAttribute("aria-live", "polite");
  // Use textContent instead of innerHTML for safe plain-text updates
  statusElement.textContent = "Status updated successfully!";
}

if (updateButton) {
  updateButton.addEventListener("click", handleStatusUpdate);
}
