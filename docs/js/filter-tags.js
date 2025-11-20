document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const activeTagRaw = params.get("tag") || "";
  const activeTag = activeTagRaw.toLowerCase().trim();

  const papers = document.querySelectorAll(".paper-entry");
  const clearBtn = document.getElementById("clear-filters");

  // == Tag filtering ==
  if (activeTag) {
    papers.forEach(p => {
      const tagStr = (p.dataset.tags || "").toLowerCase();
      const tags = tagStr.split(",").map(t => t.trim()).filter(Boolean);

      if (tags.includes(activeTag)) {
        p.style.display = "";
      } else {
        p.style.display = "none";
      }
    });

    // 显示悬浮 Clear 按钮
    if (clearBtn) {
      clearBtn.style.display = "block";
    }

  } else {
    // 无 tag：全部显示并隐藏 Clear 按钮
    papers.forEach(p => (p.style.display = ""));
    if (clearBtn) {
      clearBtn.style.display = "none";
    }
  }

  // == Clear Filters ==
  if (clearBtn) {
    clearBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = window.location.pathname;
    });
  }
});
