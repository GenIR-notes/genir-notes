document.addEventListener("DOMContentLoaded", () => {
  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  console.log("hiddenContainer:", hiddenContainer);
  if (!hiddenContainer) {
    console.error("Hidden container for recent updates not found");
    return;
  }

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));
  console.log("Initial paper-entry count:", papers.length);

  const container = document.getElementById("recent-list");
  console.log("recent-list container:", container);
  if (!container) {
    console.error("Container #recent-list not found");
    return;
  }

  container.innerHTML = "";
  console.log("Cleared container innerHTML");

  const parsed = papers.map(p => ({
      element: p,
      date: new Date(p.dataset.date || "1970-01-01")
    }))
    .sort((a, b) => {
      console.log("Comparing dates:", a.date, b.date);
      return b.date - a.date;
    });

  parsed.forEach(item => {
    const el = item.element;
    console.log("Appending element with date:", el.dataset.date);
    el.style.display = "";
    container.appendChild(el);
  });

  console.log("Final container children count:", container.children.length);

  hiddenContainer.style.display = "none";
  console.log("Hidden container hidden");
});
