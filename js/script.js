const menuButton = document.getElementById("menuButton");
const navigationLinks = document.getElementById("navigationLinks");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModalButton = document.getElementById("closeModalButton");

menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
});

document.querySelectorAll("#navigationLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.classList.remove("open");
  });
});

function openImageModal(imagePath, title) {
  modalImage.src = imagePath;
  modalImage.alt = title;
  modalTitle.textContent = title;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.src = "";
}

document.querySelectorAll(".image-preview-button").forEach((button) => {
  button.addEventListener("click", () => {
    openImageModal(button.dataset.image, button.dataset.title);
  });
});

closeModalButton.addEventListener("click", closeImageModal);

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeImageModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
