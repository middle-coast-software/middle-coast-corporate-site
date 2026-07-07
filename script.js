const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const copyButton = document.querySelector("[data-copy]");
const copyStatus = document.querySelector(".copy-status");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const value = copyButton.getAttribute("data-copy") || "";

    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent = value;
    }
  });
}
