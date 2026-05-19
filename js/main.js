// =====================
// INIT — render all sections on page load
// =====================
document.addEventListener("DOMContentLoaded", function() {
  renderTrailers("all");
  renderReviews("all");
  renderNews();
  renderTrending();
  renderTopRated();
  renderGenres();
  renderComingSoon();
});

// =====================
// SEARCH
// =====================
document.getElementById("searchBtn").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  if (!query) return;

  // Filter trailers
  const filteredTrailers = trailers.filter(t =>
    t.title.toLowerCase().includes(query) || t.game.toLowerCase().includes(query)
  );
  const grid = document.getElementById("trailersGrid");
  if (filteredTrailers.length > 0) {
    grid.innerHTML = filteredTrailers.map(t => `
      <div class="video-card" onclick="openModal('${t.title}', '${t.game}')">
        <div class="thumb">
          <div class="thumb-bg ${t.bg}">${t.icon}</div>
          <div class="duration">${t.duration}</div>
          ${t.badge === "new" ? '<div class="badge-new">NEW</div>' : ""}
          ${t.badge === "hot" ? '<div class="badge-hot">HOT</div>' : ""}
        </div>
        <div class="vc-info">
          <div class="vc-game">${t.game}</div>
          <div class="vc-title">${t.title}</div>
          <div class="vc-meta">${t.views} views &bull; ${t.time}</div>
        </div>
      </div>
    `).join("");
  } else {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:#444;font-size:13px;">No results found for "${query}"</div>`;
  }

  // Scroll to trailers
  document.getElementById("trailersGrid").scrollIntoView({ behavior: "smooth", block: "start" });

  // Reset tab UI
  document.querySelectorAll("#trailerTabs .content-tab").forEach(t => t.classList.remove("active"));
  const allTab = document.querySelector("#trailerTabs .content-tab[data-tab='all']");
  if (allTab) allTab.classList.add("active");
}