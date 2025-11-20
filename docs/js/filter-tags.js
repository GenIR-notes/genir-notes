document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const activeTag = params.get("tag");

  const papers = document.querySelectorAll(".paper-entry");

  if (activeTag) {
    papers.forEach(p => {
      const tags = p.dataset.tags.split(",");
      if (!tags.includes(activeTag)) {
        p.style.display = "none";
      }
    });
  }

  // Clear filter button
  const clearBtn = document.getElementById("clear-filters");
  if (clearBtn) {
    clearBtn.addEventListener("click", e => {
      e.preventDefault();
      window.location.href = window.location.pathname;
    });
  }
});
