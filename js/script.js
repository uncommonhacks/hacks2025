// Prize flash animation and FAQ initialization
let prizeFlashInterval = null;
let faqInitialized = false;

const sections = [
  { title: "Schedule", content: "View the full event schedule." },
  { title: "About", content: "Learn more about Uncommon Hacks." },
  { title: "FAQ", content: "Find answers to common questions." },
  { title: "MLH Code of Conduct", content: "Read the official code of conduct." },
  { title: "Contact", content: "Get in touch with the team." },
];

function initializePrizeFlash() {
  if (window.innerWidth >= 1000) {
    if (!prizeFlashInterval) {
      prizeFlashInterval = setInterval(() => {
        $("#prize").toggleClass("flash");
      }, 500);
    }
  } else if (prizeFlashInterval) {
    clearInterval(prizeFlashInterval);
    prizeFlashInterval = null;
  }
}

function initializeFAQ() {
  const container = document.getElementsByClassName("items")[0];
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  if (window.innerWidth < 1000) {
    sections.forEach((section) => {
      const item = document.createElement("div");
      item.classList.add("item");

      const button = document.createElement("button");
      button.textContent = section.title;
      button.classList.add("accordion-button");

      // Create dropdown icon (Initially a down arrow)
      const dropdownIcon = document.createElement("span");
      dropdownIcon.innerHTML = `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5H7z"></path>
      </svg>`;
      dropdownIcon.classList.add("dropdown-icon");
      dropdownIcon.style.fontSize = "20px";

      button.appendChild(dropdownIcon);

      // Create content container (hidden by default)
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("item-content-container");
      contentContainer.textContent = section.content;
      contentContainer.style.display = "none";

      // Toggle content visibility & icon when clicking the button
      button.addEventListener("click", function () {
        const isVisible = contentContainer.style.display === "block";
        contentContainer.style.display = isVisible ? "none" : "block";

        // Toggle between down and up arrow
        dropdownIcon.innerHTML = isVisible
          ? `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5H7z"></path>
            </svg>`
          : `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14l5-5 5 5H7z"></path>
            </svg>`;
      });

      item.appendChild(button);
      item.appendChild(contentContainer);
      container.appendChild(item);
    });
    faqInitialized = true;
  } else {
    faqInitialized = false;
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  initializePrizeFlash();
  initializeFAQ();
});

// Check window resize. Display FAQ if we are in mobile
let resizeTimeout;
window.addEventListener("resize", function () {
  // Debounce resize events
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    initializePrizeFlash();
    initializeFAQ();
  }, 250);
});

