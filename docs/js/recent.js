document.addEventListener("DOMContentLoaded", () => {

  // ---- 1. 找到隐藏容器 ----
  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) {
    console.error("Hidden container not found");
    return;
  }

  // ---- 2. 收集全部 paper-entry ----
  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));
  console.log("Total papers found:", papers.length);

  // ---- 3. 准备三个目标区域 ----
  const thisWeekContainer = document.getElementById("recent-this-week");
  const lastWeekContainer = document.getElementById("recent-last-week");
  const earlierContainer = document.getElementById("recent-earlier");

  // 防御：如果容器不存在就报错
  if (!thisWeekContainer || !lastWeekContainer || !earlierContainer) {
    console.error("Recent containers missing");
    return;
  }

  // ---- 4. 计算当前时间、周起点 ----
  const today = new Date();
  const currentWeekDay = today.getDay(); // 0=Sunday
  const diffToMonday = (currentWeekDay + 6) % 7; // 将周一视为一周的开始
  const mondayThisWeek = new Date(today);
  mondayThisWeek.setDate(today.getDate() - diffToMonday);

  const mondayLastWeek = new Date(mondayThisWeek);
  mondayLastWeek.setDate(mondayThisWeek.getDate() - 7);

  console.log("This week starts:", mondayThisWeek);
  console.log("Last week starts:", mondayLastWeek);

  // ---- 5. 解析日期并排序 ----
  const parsed = papers
    .map(p => ({
      element: p.cloneNode(true),   // clone 节点，避免移动源节点
      date: new Date(p.dataset.date || "1970-01-01")
    }))
    .sort((a, b) => b.date - a.date);   // 最新排前

  // ---- 6. 将论文分配到不同区间 ----
  parsed.forEach(item => {
    const d = item.date;
    item.element.style.display = ""; // 显示节点

    if (d >= mondayThisWeek) {
      thisWeekContainer.appendChild(item.element);
    } else if (d >= mondayLastWeek) {
      lastWeekContainer.appendChild(item.element);
    } else {
      earlierContainer.appendChild(item.element);
    }
  });
});
