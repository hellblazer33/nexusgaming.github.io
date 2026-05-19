// =====================
// TRAILERS DATA
// =====================
const trailers = [
  {
    id: 1,
    game: "Cyberstrike Online",
    title: "Season 4 Battle Pass Trailer — New Weapons & Maps",
    views: "892K",
    time: "3h ago",
    duration: "2:34",
    badge: "new",
    icon: "&#127918;",
    bg: "bg-game2",
    tab: "gameplay"
  },
  {
    id: 2,
    game: "Dark Realm IV",
    title: "World Premiere — Official Cinematic Announcement",
    views: "3.1M",
    time: "6h ago",
    duration: "1:48",
    badge: "hot",
    icon: "&#9876;",
    bg: "bg-game3",
    tab: "reveals"
  },
  {
    id: 3,
    game: "Iron Legends",
    title: "Gameplay Deep Dive — 12 Minutes of Combat",
    views: "540K",
    time: "1d ago",
    duration: "4:12",
    badge: null,
    icon: "&#128296;",
    bg: "bg-game4",
    tab: "gameplay"
  },
  {
    id: 4,
    game: "Inferno Rising",
    title: "Teaser Trailer — Coming 2026",
    views: "1.8M",
    time: "2d ago",
    duration: "0:58",
    badge: "new",
    icon: "&#128293;",
    bg: "bg-game5",
    tab: "teasers"
  },
  {
    id: 5,
    game: "Starfield Chronicles",
    title: "New Expansion Pack Reveal Trailer",
    views: "670K",
    time: "3d ago",
    duration: "3:22",
    badge: null,
    icon: "&#127775;",
    bg: "bg-game6",
    tab: "dlc"
  },
  {
    id: 6,
    game: "HyperRacer X",
    title: "Official Launch Trailer — Out Now",
    views: "2.3M",
    time: "4d ago",
    duration: "2:05",
    badge: "hot",
    icon: "&#9889;",
    bg: "bg-game7",
    tab: "reveals"
  },
  {
    id: 7,
    game: "Vanguard Protocol",
    title: "Extended Gameplay — Stealth Missions Preview",
    views: "410K",
    time: "5d ago",
    duration: "5:46",
    badge: null,
    icon: "&#128737;",
    bg: "bg-game8",
    tab: "gameplay"
  },
  {
    id: 8,
    game: "Neon Abyss 2",
    title: "Roguelike Dungeon Expansion — Trailer",
    views: "289K",
    time: "5d ago",
    duration: "1:30",
    badge: "new",
    icon: "&#128248;",
    bg: "bg-game1",
    tab: "dlc"
  }
];

// =====================
// REVIEWS DATA
// =====================
const reviews = [
  {
    id: 1,
    game: "Dark Realm IV",
    platform: "PC / Action RPG",
    score: 9.2,
    scoreColor: "#e60012",
    stars: 5,
    title: "Dark Realm IV Review — A Masterpiece in Modern RPG Design",
    excerpt: "Delivers a massive open world with stunning visuals and brutal combat that redefines the genre.",
    author: "Marcus K.",
    date: "Apr 20, 2026",
    icon: "&#9876;",
    bg: "bg-game2",
    tab: "pc"
  },
  {
    id: 2,
    game: "Phantom Warzone 2",
    platform: "PS6 / FPS",
    score: 8.5,
    scoreColor: "#ff6a00",
    stars: 4,
    title: "Phantom Warzone 2 Review — Bigger, Louder, Better",
    excerpt: "The sequel delivers on every front with tighter gunplay and spectacular set pieces.",
    author: "Sarah T.",
    date: "Apr 19, 2026",
    icon: "&#127918;",
    bg: "bg-game3",
    tab: "ps"
  },
  {
    id: 3,
    game: "Iron Legends",
    platform: "Xbox / Strategy",
    score: 7.8,
    scoreColor: "#cc8800",
    stars: 4,
    title: "Iron Legends Review — Solid Foundation, Room to Grow",
    excerpt: "A competent strategy title that struggles to stand out in a crowded field of genre titans.",
    author: "Jake R.",
    date: "Apr 18, 2026",
    icon: "&#128293;",
    bg: "bg-game4",
    tab: "xbox"
  },
  {
    id: 4,
    game: "HyperRacer X",
    platform: "Multi / Racing",
    score: 9.0,
    scoreColor: "#e60012",
    stars: 5,
    title: "HyperRacer X Review — The Racing Game We Deserved",
    excerpt: "Blazing fast, visually gorgeous, and packed with content — this is the definitive racing experience.",
    author: "Nina P.",
    date: "Apr 17, 2026",
    icon: "&#9889;",
    bg: "bg-game5",
    tab: "all"
  }
];

// =====================
// NEWS DATA
// =====================
const news = [
  {
    id: 1,
    cat: "Industry News",
    title: "Sony Announces PlayStation 6 Pro — Specs and Release Window Revealed",
    excerpt: "The next-gen powerhouse is set to launch Q4 2026 with 12K support and full ray tracing.",
    date: "Apr 21, 2026",
    reads: "18.2K",
    icon: "&#128240;",
    bg: "bg-game6"
  },
  {
    id: 2,
    cat: "Esports",
    title: "Team Nexus Wins World Championship — $2M Grand Final Victory",
    excerpt: "In a stunning 3-2 series, Team Nexus claimed the world title in front of 80,000 fans.",
    date: "Apr 20, 2026",
    reads: "34.7K",
    icon: "&#127941;",
    bg: "bg-game7"
  },
  {
    id: 3,
    cat: "PC Gaming",
    title: "NVIDIA RTX 6090 Benchmarks Leak — Crushes Every Game at 8K",
    excerpt: "Early performance data suggests a 60% improvement over the 5090 series in all major titles.",
    date: "Apr 19, 2026",
    reads: "22.1K",
    icon: "&#128190;",
    bg: "bg-game8"
  },
  {
    id: 4,
    cat: "Mobile Gaming",
    title: "The 10 Best Mobile Games You Should Be Playing Right Now",
    excerpt: "From brutal roguelikes to epic open worlds — these titles are redefining handheld gaming.",
    date: "Apr 18, 2026",
    reads: "11.5K",
    icon: "&#127918;",
    bg: "bg-game1"
  }
];

// =====================
// TRENDING DATA
// =====================
const trending = [
  { rank: 1, title: "Dark Realm IV Launch Trailer", views: "3.1M views", icon: "&#9876;", bg: "bg-game2" },
  { rank: 2, title: "Phantom Warzone 2 Reveal", views: "4.2M views", icon: "&#127918;", bg: "bg-game3" },
  { rank: 3, title: "HyperRacer X — Launch Trailer", views: "2.3M views", icon: "&#9889;", bg: "bg-game5" },
  { rank: 4, title: "Starfield Chronicles DLC", views: "670K views", icon: "&#127775;", bg: "bg-game6" },
  { rank: 5, title: "Iron Legends Combat Preview", views: "540K views", icon: "&#128296;", bg: "bg-game4" }
];

// =====================
// TOP RATED DATA
// =====================
const topRated = [
  { title: "Dark Realm IV", platform: "PC / Action RPG", score: 9.2, color: "#e60012" },
  { title: "HyperRacer X", platform: "Multi / Racing", score: 9.0, color: "#e60012" },
  { title: "Phantom Warzone 2", platform: "PS6 / FPS", score: 8.5, color: "#ff6a00" },
  { title: "Iron Legends", platform: "Xbox / Strategy", score: 7.8, color: "#cc8800" }
];

// =====================
// COMING SOON DATA
// =====================
const comingSoon = [
  { title: "Inferno Rising", date: "June 15, 2026", icon: "&#128293;", bg: "bg-game5" },
  { title: "Neon Abyss 2", date: "July 4, 2026", icon: "&#128248;", bg: "bg-game1" },
  { title: "Vanguard Protocol", date: "Aug 22, 2026", icon: "&#128737;", bg: "bg-game7" }
];

// =====================
// GENRES
// =====================
const genres = ["FPS", "RPG", "Action", "Strategy", "Horror", "Sports", "Racing", "Indie", "MMORPG", "Fighting"];