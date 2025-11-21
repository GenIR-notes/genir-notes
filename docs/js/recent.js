document.addEventListener("DOMContentLoaded", () => {
  // 找到隐藏容器，只处理这里面的 .paper-entry
  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) {
    console.error("Hidden container for recent updates not found");
    return;
  }

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));
  console.log("Found hidden paper-entry count:", papers.length);

  // 解析每条的日期
  const parsed = papers.map(p => ({
    element: p,
    date: new Date(p.dataset.date || "1970-01-01")
  })).sort((a, b) => b.date - a.date);  // 最新在前

  const container = document.getElementById("recent-list");
  if (!container) {
    console.error("Container #recent-list not found");
    return;
  }

  // 插入排序后的条目
  parsed.forEach(item => {
    const clone = item.element.cloneNode(true);
    clone.style.display = "";  // 确保显示
    container.appendChild(clone);
  });
});
