// =====================
// RENDER TRAILERS
// =====================
function renderTrailers(filter = "all") {
  const grid = document.getElementById("trailersGrid");
  const filtered = filter === "all" ? trailers : trailers.filter(t => t.tab === filter);
  grid.innerHTML = filtered.map(t => `
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
}

// =====================
// RENDER REVIEWS
// =====================
function renderReviews(filter = "all") {
  const grid = document.getElementById("reviewsGrid");
  const filtered = filter === "all" ? reviews : reviews.filter(r => r.tab === filter);
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:#444;font-size:13px;">No reviews found for this platform.</div>`;
    return;
  }
  grid.innerHTML = filtered.map(r => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      `<span${i < r.stars ? ' class="filled"' : ""}></span>`
    ).join("");
    return `
      <div class="article-card" onclick="openModal('${r.title}', '${r.game}')">
        <div class="ac-thumb ${r.bg}">${r.icon}</div>
        <div class="ac-body">
          <div class="ac-cat">${r.platform}</div>
          <div class="score-strip">
            <div class="score-box" style="background:${r.scoreColor}">${r.score}</div>
            <div class="rating-bar">${stars}</div>
          </div>
          <div class="ac-title">${r.title}</div>
          <div class="ac-excerpt">${r.excerpt}</div>
          <div class="ac-meta">by ${r.author} &bull; ${r.date}</div>
        </div>
      </div>
    `;
  }).join("");
}

// =====================
// RENDER NEWS
// =====================
function renderNews() {
  const grid = document.getElementById("newsGrid");
  grid.innerHTML = news.map(n => `
    <div class="article-card" onclick="openModal('${n.title}', '${n.cat}')">
      <div class="ac-thumb ${n.bg}" style="font-size:20px">${n.icon}</div>
      <div class="ac-body">
        <div class="ac-cat">${n.cat}</div>
        <div class="ac-title">${n.title}</div>
        <div class="ac-excerpt">${n.excerpt}</div>
        <div class="ac-meta">${n.date} &bull; ${n.reads} reads</div>
      </div>
    </div>
  `).join("");
}

// =====================
// RENDER TRENDING
// =====================
function renderTrending() {
  document.getElementById("trendingList").innerHTML = trending.map(t => `
    <div class="trending-item" onclick="openModal('${t.title}', 'Trending')">
      <div class="trending-num">${t.rank}</div>
      <div class="mini-thumb ${t.bg}">${t.icon}</div>
      <div class="trending-info">
        <div class="t-title">${t.title}</div>
        <div class="t-views">${t.views}</div>
      </div>
    </div>
  `).join("");
}

// =====================
// RENDER TOP RATED
// =====================
function renderTopRated() {
  document.getElementById("topRatedList").innerHTML = topRated.map(r => `
    <div class="trending-item">
      <div class="score-box" style="min-width:40px;text-align:center;font-size:14px;padding:4px 6px;background:${r.color}">${r.score}</div>
      <div class="trending-info">
        <div class="t-title">${r.title}</div>
        <div class="t-views">${r.platform}</div>
      </div>
    </div>
  `).join("");
}

// =====================
// RENDER GENRE GRID
// =====================
function renderGenres() {
  document.getElementById("genreGrid").innerHTML = genres.map(g => `
    <div class="genre-btn" onclick="filterByGenre('${g}')">${g}</div>
  `).join("");
}

// =====================
// RENDER COMING SOON
// =====================
function renderComingSoon() {
  document.getElementById("comingSoonList").innerHTML = comingSoon.map(c => `
    <div class="trending-item">
      <div class="mini-thumb ${c.bg}">${c.icon}</div>
      <div class="trending-info">
        <div class="t-title">${c.title}</div>
        <div class="t-views">${c.date}</div>
      </div>
    </div>
  `).join("");
}

// =====================
// GENRE FILTER (subnav)
// =====================
function filterByGenre(genre) {
  const subnavLinks = document.querySelectorAll(".subnav a");
  subnavLinks.forEach(a => a.classList.remove("active"));
  const match = Array.from(subnavLinks).find(a => a.dataset.genre === genre.toLowerCase());
  if (match) match.classList.add("active");
  // Could extend to filter content by genre
}