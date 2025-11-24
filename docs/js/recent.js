document.addEventListener("DOMContentLoaded", () => {
  if (window._recentInitialized) return;
  window._recentInitialized = true;

  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) {
    console.error("Hidden container not found");
    return;
  }

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));
  console.log("Hidden paper-entry count:", papers.length);

  const container = document.getElementById("recent-list");
  if (!container) {
    console.error("recent-list not found");
    return;
  }
  container.innerHTML = "";

  // 解析并排序
  const parsed = papers
    .map(p => ({
      element: p.cloneNode(true),
      date: new Date(p.dataset.date || "1970-01-01")
    }))
    .sort((a, b) => b.date - a.date);

  // ---- Week bucketing ----
  const now = new Date();
  const ONE_DAY = 24 * 60 * 60 * 1000;

  const buckets = {
    thisWeek: [],
    lastWeek: [],
    older: []
  };

  parsed.forEach(item => {
    const diffDays = Math.floor((now - item.date) / ONE_DAY);

    if (diffDays <= 7) {
      buckets.thisWeek.push(item);
    } else if (diffDays <= 14) {
      buckets.lastWeek.push(item);
    } else {
      buckets.older.push(item);
    }
  });

  // ---- Rendering function ----
  function addSection(title, items) {
    if (items.length === 0) return;
    const h = document.createElement("h2");
    h.textContent = title;
    container.appendChild(h);

    items.forEach(it => {
      it.element.style.display = "";
      container.appendChild(it.element);
    });
  }

  addSection("🟦 This week", buckets.thisWeek);
  addSection("🟩 Last week", buckets.lastWeek);
  addSection("⬜ Older", buckets.older);

  hiddenContainer.style.display = "none";
});
