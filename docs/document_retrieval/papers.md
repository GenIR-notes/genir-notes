

# Papers: Document Retrieval

This page organizes Generative Document Retrieval papers **by their core innovation**.  
To keep the page compact, each paper is listed using lightweight formatting (bold titles instead of section headers).

---

## 🔷 A. ID Space & Indexing Innovations

<div class="paper-entry" data-tags="title,ms-marco-doc" data-date="2025-11-01" data-source="document_retrieval">

<p><strong>AAAAAAAAAA (Tay et al. 2022)</strong></p>

<p>
Tags:
<a class="paper-tag" data-tag="title">title</a>
<a class="paper-tag" data-tag="ms-marco-doc">MS MARCO Doc</a>
</p>

</div>

<div class="paper-entry" data-tags="title,nq" data-date="2025-11-18" data-source="document_retrieval">

<p><strong>BBBBBBBBB (Tay et al. 2022)</strong></p>

<p>
Tags:
<a class="paper-tag" data-tag="title">title</a>
<a class="paper-tag" data-tag="nq">NQ</a>

</p>

</div>

<div class="paper-entry" data-tags="title,ms-marco-doc" data-date="2025-11-21" data-source="document_retrieval">

<p><strong>CCCCCCCC (Tay et al. 2022)</strong></p>

<p>
Tags:
<a class="paper-tag" data-tag="title">title</a>
<a class="paper-tag" data-tag="ms-marco-doc">MS MARCO Doc</a>
</p>

</div>





## 🔷 B. Training Paradigms & Learning Signals



## 🔷 C. Model Architecture Innovations

---



## 🔷 D. Decoding & Inference Innovations



<script>
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const selectedTag = params.get("tag");

  const papers = document.querySelectorAll(".paper-entry");

  if (selectedTag) {
    papers.forEach(p => {
      const tags = p.dataset.tags.toLowerCase();
      if (!tags.includes(selectedTag.toLowerCase())) {
        p.style.display = "none";
      } else {
        p.style.display = "block";
      }
    });
  }

  // Clear filters
  const clear = document.querySelector("#clear-filters");
  if (clear) {
    clear.addEventListener("click", () => {
      window.location.href = window.location.pathname;
    });
  }
});
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
