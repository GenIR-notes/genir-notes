document.addEventListener("DOMContentLoaded", () => {

  // ---- Avoid double execution ----
  if (window._recentInitialized) return;
  window._recentInitialized = true;

  // ---- Find hidden container ----
  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) return;

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));

  // ---- Parse and sort by date ----
  const parsed = papers.map(p => ({
      element: p.cloneNode(true),        // clone to avoid display:none inheritance
      date: new Date(p.dataset.date || "1970-01-01"),
      source: p.dataset.source || "document_retrieval"
  })).sort((a, b) => b.date - a.date);

  // ---- Get containers in recent.md ----
  const listThisWeek  = document.getElementById("recent-this-week");
  const listLastWeek  = document.getElementById("recent-last-week");
  const listEarlier   = document.getElementById("recent-earlier");

  const now = new Date();
  const currentWeek = getWeekNumber(now);
  const currentYear = now.getFullYear();

  parsed.forEach(item => {
    const el = item.element;
    el.style.display = "";

    const itemWeek = getWeekNumber(item.date);
    const itemYear = item.date.getFullYear();

    // ---- Week grouping ----
    if (itemYear === currentYear && itemWeek === currentWeek) {
      listThisWeek.appendChild(el);
    } else if (
        itemYear === currentYear &&
        itemWeek === currentWeek - 1
    ) {
      listLastWeek.appendChild(el);
    } else {
      listEarlier.appendChild(el);
    }

    // ---- Fix tag links inside recent page ----
    const tagLinks = el.querySelectorAll(".paper-tag");
    tagLinks.forEach(tagLink => {

      const tag = tagLink.dataset.tag;
      const source = item.source;     // document_retrieval, recommendation, multimodal

      // Construct target URL
      const targetURL =
        `/genir-notes/${source}/papers/?tag=${encodeURIComponent(tag)}`;

      tagLink.setAttribute("href", targetURL);
    });

  });
});


// ---- Week number helper ----
function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;

  // Thursday-based week computation
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}
