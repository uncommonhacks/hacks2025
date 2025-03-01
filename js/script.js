document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    { title: "Section 1", content: "This is content for Section 1." },
    { title: "Section 2", content: "This is content for Section 2." },
    { title: "Section 3", content: "This is content for Section 3." },
  ];

  const container = document.getElementsByClassName("items")[0];

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
</svg>`; // ▼ Downward triangle
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

      // Toggle between ▼ (down) and ▲ (up)
      dropdownIcon.innerHTML = isVisible
        ? `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10l5 5 5-5H7z"></path>
</svg>`
        : `<svg width="30" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14l5-5 5 5H7z"></path>
</svg>`; // ▲ Upward triangle
    });

    item.appendChild(button);
    item.appendChild(contentContainer);
    container.appendChild(item);
  });
});
