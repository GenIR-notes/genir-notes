document.addEventListener("DOMContentLoaded", () => {

    // 抓取所有 paper-entry
    const papers = Array.from(document.querySelectorAll(".paper-entry"));

    // 读取 data-date
    const parsed = papers
        .map(p => ({
            element: p,
            date: new Date(p.dataset.date || "1970-01-01")
        }))
        .sort((a, b) => b.date - a.date);  // 最新在前

    // 把排序后的 DOM 插入 recent-list
    const container = document.getElementById("recent-list");

    parsed.forEach(p => {
        const clone = p.element.cloneNode(true);
        container.appendChild(clone);
    });
});
