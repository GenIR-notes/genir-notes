document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const activeTagRaw = params.get("tag") || "";
  const activeTag = activeTagRaw.toLowerCase().trim();

  const papers = document.querySelectorAll(".paper-entry");

  // 有 tag 时做过滤
  if (activeTag) {
    papers.forEach(p => {
      const tagStr = (p.dataset.tags || "").toLowerCase();
      const tags = tagStr
        .split(",")
        .map(t => t.trim())
        .filter(Boolean);

      if (tags.includes(activeTag)) {
        p.style.display = "";
      } else {
        p.style.display = "none";
      }
    });
  } else {
    // 没有 tag，全部显示
    papers.forEach(p => {
      p.style.display = "";
    });
  }

  // Clear filters 按钮
  const clearBtn = document.getElementById("clear-filters");
  if (clearBtn) {
    clearBtn.addEventListener("click", e => {
      e.preventDefault();
      // 去掉 ?tag=... 参数
      window.location.href = window.location.pathname;
    });
  }
});
