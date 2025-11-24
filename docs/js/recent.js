document.addEventListener("DOMContentLoaded", () => {

  // 防止重复执行
  if (window._recentInitialized) return;
  window._recentInitialized = true;

  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) return;

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));

  // 解析日期
  const parsed = papers.map(p => ({
      element: p.cloneNode(true),
      date: new Date(p.dataset.date || "1970-01-01")
  })).sort((a, b) => b.date - a.date);

  // 获取各列表容器
  const listThisWeek = document.getElementById("recent-this-week");
  const listLastWeek = document.getElementById("recent-last-week");
  const listEarlier = document.getElementById("recent-earlier");

  const now = new Date();
  const currentWeek = getWeekNumber(now);
  const currentYear = now.getFullYear();

  parsed.forEach(item => {
    const el = item.element;
    el.style.display = "";

    const itemWeek = getWeekNumber(item.date);
    const itemYear = item.date.getFullYear();

    if (itemYear === currentYear && itemWeek === currentWeek) {
      // 本周
      listThisWeek.appendChild(el);
    } else if (itemYear === currentYear && itemWeek === currentWeek - 1) {
      // 上一周
      listLastWeek.appendChild(el);
    } else {
      // 更早
      listEarlier.appendChild(el);
    }

    // recent 页面中，点击 tag 会跳转到 doc retrieval 的 papers 页面进行过滤
    const tagLinks = el.querySelectorAll("a[href^='?tag=']");
    tagLinks.forEach(a => {
      const tag = a.getAttribute("href").replace("?tag=", "").trim();
      a.setAttribute("href", "/genir-notes/document_retrieval/papers/?tag=" + tag);
    });
  });
});


// --- WEEK NUMBER FUNCTION ---
function getWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}
