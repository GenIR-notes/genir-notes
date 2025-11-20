document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const activeTagRaw = params.get("tag") || "";
  const activeTag = activeTagRaw.toLowerCase().trim();

  const papers = document.querySelectorAll(".paper-entry");

  // ========== 论文过滤 ==========
  if (activeTag) {
    papers.forEach((p) => {
      const tagStr = (p.dataset.tags || "").toLowerCase();
      const tags = tagStr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      if (tags.includes(activeTag)) {
        p.style.display = "";
      } else {
        p.style.display = "none";
      }
    });
  } else {
    papers.forEach((p) => {
      p.style.display = "";
    });
  }

  // ========== 悬浮 Clear Filters 按钮 ==========
  const clearBtn = document.getElementById("clear-filters");

  if (clearBtn) {
    if (activeTag) {
      clearBtn.classList.add("show"); // 只有点击 tag 后才出现
    }

    clearBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = window.location.pathname; // 去掉所有参数
    });
  }
});
