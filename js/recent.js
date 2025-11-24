document.addEventListener("DOMContentLoaded", () => {
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
    const el = item.element;
    el.style.display = "";
    container.appendChild(el);
  });

  // optionally hide the original container to avoid duplicates
  hiddenContainer.style.display = "none";
});
