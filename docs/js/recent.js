document.addEventListener("DOMContentLoaded", () => {
  // 避免重复执行
  if (window._recentInitialized) return;
  window._recentInitialized = true;

  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) {
    console.error("Hidden container for recent updates not found");
    return;
  }

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));
  console.log("Hidden paper-entry count:", papers.length);

  const container = document.getElementById("recent-list");
  if (!container) {
    console.error("Container #recent-list not found");
    return;
  }
  container.innerHTML = "";

  const parsed = papers
    .map(p => ({
      element: p,
      date: new Date(p.dataset.date || "1970-01-01")
    }))
    .sort((a, b) => b.date - a.date);

  parsed.forEach(item => {
    const el = item.element.cloneNode(true);
    el.style.display = "";
    container.appendChild(el);
  });

  hiddenContainer.style.display = "none";
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("paper-tag")) {
    e.preventDefault();
    const tag = e.target.dataset.tag;
    const entry = e.target.closest(".paper-entry");
    const source = entry.dataset.source;

    // 构造跳转 URL
    let targetURL = `/genir-notes/${source}/papers/?tag=${tag}`;

    window.location.href = targetURL;
  }
});
