document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const activeTagRaw = params.get("tag") || "";
  const activeTag = activeTagRaw.toLowerCase().trim();

  const papers = document.querySelectorAll(".paper-entry");
  const clearBtn = document.getElementById("clear-filters");

  // 过滤逻辑
  if (activeTag) {
    papers.forEach(p => {
      const tags = (p.dataset.tags || "")
        .toLowerCase()
        .split(",")
        .map(t => t.trim());

      p.style.display = tags.includes(activeTag) ? "" : "none";
    });

    // 激活浮动按钮
    if (clearBtn) {
      clearBtn.style.display = "block";
    }
  } else {
    // 没 tag → 全部显示
    papers.forEach(p => (p.style.display = ""));
    if (clearBtn) {
      clearBtn.style.display = "none";
    }
  }

  // 按钮行为
  if (clearBtn) {
    clearBtn.addEventListener("click", e => {
      e.preventDefault();
      window.location.href = window.location.pathname;
    });
  }
});
