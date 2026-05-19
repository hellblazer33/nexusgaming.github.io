// =====================
// VIDEO MODAL
// =====================
function openModal(title, game) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = game;
  document.getElementById("videoModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("videoModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("videoModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

// Hero play button
document.getElementById("heroPlayBtn").addEventListener("click", function() {
  openModal("PHANTOM WARZONE 2 — Official Gameplay Reveal Trailer", "ACTION / FPS");
});