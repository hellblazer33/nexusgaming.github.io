// =====================
// TRAILER TABS
// =====================
document.getElementById("trailerTabs").addEventListener("click", function(e) {
  const tab = e.target.closest(".content-tab");
  if (!tab) return;
  this.querySelectorAll(".content-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  renderTrailers(tab.dataset.tab);
});

// =====================
// REVIEW TABS
// =====================
document.getElementById("reviewTabs").addEventListener("click", function(e) {
  const tab = e.target.closest(".content-tab");
  if (!tab) return;
  this.querySelectorAll(".content-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  renderReviews(tab.dataset.tab);
});

// =====================
// MAIN NAV TABS
// =====================
document.getElementById("mainNav").addEventListener("click", function(e) {
  const link = e.target.closest("a[data-page]");
  if (!link) return;
  e.preventDefault();
  this.querySelectorAll("a").forEach(a => a.classList.remove("active"));
  link.classList.add("active");
});

// =====================
// SUBNAV TABS
// =====================
document.getElementById("subnav").addEventListener("click", function(e) {
  const link = e.target.closest("a");
  if (!link) return;
  e.preventDefault();
  this.querySelectorAll("a").forEach(a => a.classList.remove("active"));
  link.classList.add("active");
});