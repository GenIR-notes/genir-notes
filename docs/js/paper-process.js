<script>
document.addEventListener("DOMContentLoaded", () => {
  updateFiltering();
  window.addEventListener("popstate", updateFiltering);
});

function updateFiltering() {
  const params = new URLSearchParams(window.location.search);
  const selectedTag = params.get("tag");

  const papers = document.querySelectorAll(".paper-entry");
  const clearBtn = document.getElementById("clear-filters");

  if (!clearBtn) return;

  if (selectedTag) {
    clearBtn.style.display = "block";   // ★★ 点击任何 tag 都会出现按钮

    papers.forEach(p => {
      const tags = p.dataset.tags.toLowerCase();
      if (!tags.includes(selectedTag.toLowerCase())) {
        p.style.display = "none";
      } else {
        p.style.display = "block";
      }
    });

  } else {
    clearBtn.style.display = "none";   // 没 tag → 隐藏按钮
    papers.forEach(p => (p.style.display = "block"));
  }
}
</script>

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
