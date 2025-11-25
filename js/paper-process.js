<script>
// docs/js/papers-filter.js
document.addEventListener("DOMContentLoaded", () => {
  if (window._papersFilterInitialized) return;
  window._papersFilterInitialized = true;

  // 点击 Tag 跳转逻辑
  document.body.addEventListener("click", e => {
    const a = e.target;
    if (a.matches("a.paper-tag")) {
      e.preventDefault();
      const tag = a.getAttribute("data-tag");
      const entry = a.closest(".paper-entry");
      const source = entry ? entry.getAttribute("data-source") : "";
      if (!tag || !source) return;

      const targetURL = `/genir-notes/${source}/papers/?tag=${encodeURIComponent(tag)}`;
      window.location.href = targetURL;
    }
  });

  // 设置 href 自动化
  document.querySelectorAll("a.paper-tag").forEach(a => {
    const tag = a.getAttribute("data-tag");
    const entry = a.closest(".paper-entry");
    const source = entry ? entry.getAttribute("data-source") : "";
    if (!tag || !source) return;
    a.setAttribute("href", `/genir-notes/${source}/papers/?tag=${encodeURIComponent(tag)}`);
    a.setAttribute("target", "_blank");
  });

  // 处理 ?tag=xxx 参数过滤逻辑
  const params = new URLSearchParams(window.location.search);
  const selectedTag = params.get("tag");
  if (selectedTag) {
    const papers = document.querySelectorAll(".paper-entry");
    papers.forEach(p => {
      const tags = (p.getAttribute("data-tags") || "").toLowerCase().split(",");
      if (!tags.includes(selectedTag.toLowerCase().trim())) {
        p.style.display = "none";
      } else {
        p.style.display = "";
      }
    });

    const clearBtn = document.getElementById("clear-filters");
    if (clearBtn) {
      clearBtn.style.display = "";
      clearBtn.addEventListener("click", e => {
        e.preventDefault();
        window.location.href = window.location.pathname;
      });
    }
  }
});
</script>

<!-- Floating Button -->
<button id="clear-filters" class="floating-clear-btn" style="display: none;">
  Clear Filters ✖
</button>

<style>
.floating-clear-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #3f51b5;
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    border: none;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    z-index: 9999;
}
.floating-clear-btn:hover {
    background-color: #303f9f;
}
</style>

