

# Papers: Document Retrieval

This page organizes Generative Document Retrieval papers **by their core innovation**.  
To keep the page compact, each paper is listed using lightweight formatting (bold titles instead of section headers).

---

## 🔷 A. ID Space & Indexing Innovations

<div class="paper-entry" data-tags="title,ms-marco-doc" data-date="2025-11-01" data-source="document_retrieval">
 <p>
    <strong>AAAAAAAAAA (Tay et al. 2022)</strong>
    <span class="links">
      [<a href="https://arxiv.org/pdf/xxxx.xxxxx" target="_blank">PDF</a>]
      [<a href="https://github.com/...">Code</a>]
    </span>
  </p>

  <p>
    Tags:
   <a class="paper-tag" data-tag="title" href="?tag=title">title</a>
    <a class="paper-tag" data-tag="title">title</a>
  <a class="paper-tag" data-tag="ms-marco-doc" href="?tag=ms-marco-doc">MS MARCO Doc</a>
  </p>
</div>

<div class="paper-entry" data-tags="title,nq" data-date="2025-11-18" data-source="document_retrieval">

<p><strong>BBBBBBBBB (Tay et al. 2022)</strong>
[<a href="https://arxiv.org/pdf/xxxx.xxxxx" target="_blank">PDF</a>]
[<a href="https://github.com/...">Code</a>]
</p>

<p>
Tags:
   <a class="paper-tag" data-tag="title" href="?tag=title">title</a>
<a class="paper-tag" data-tag="nq" href="?tag=nq">NQ</a>

</p>

</div>

<div class="paper-entry" data-tags="title,ms-marco-doc" data-date="2025-11-21" data-source="document_retrieval">

<p><strong>CCCCCCCC (Tay et al. 2022)</strong> 
[<a href="https://arxiv.org/pdf/xxxx.xxxxx" target="_blank">PDF</a>]
[<a href="https://github.com/...">Code</a>]
</p>

<p>
Tags:
   <a class="paper-tag" data-tag="title" href="?tag=title">title</a>
  <a class="paper-tag" data-tag="ms-marco-doc" href="?tag=ms-marco-doc">MS MARCO Doc</a>
</p>

</div>





## 🔷 B. Training Paradigms & Learning Signals



## 🔷 C. Model Architecture Innovations

---



## 🔷 D. Decoding & Inference Innovations



<script>
document.addEventListener("DOMContentLoaded", () => {
  // 防止重复执行
  if (window._recentInitialized) return;
  window._recentInitialized = true;

  const hiddenContainer = document.querySelector('div[style*="display:none"]');
  if (!hiddenContainer) {
    console.error("Hidden container for recent updates not found");
    return;
  }

  const papers = Array.from(hiddenContainer.querySelectorAll(".paper-entry"));
  console.log("Hidden paper-entry count:", papers.length);

  const container = document.getElementById("recent-list");
  if (!container) {
    console.error("Container #recent-list not found");
    return;
  }
  container.innerHTML = "";

  const parsed = papers.map(p => ({
    element: p.cloneNode(true),
    date: new Date(p.dataset.date || "1970-01-01"),
    source: p.dataset.source || ""
  })).sort((a, b) => b.date - a.date);

  parsed.forEach(item => {
    const el = item.element;
    el.style.display = "";

    // 处理 tag 链接逻辑
    const tagLinks = el.querySelectorAll("a.paper-tag");
    tagLinks.forEach(a => {
      const tag = a.getAttribute("data-tag");
      if (!tag) return;
      // 构造跳转 URL（替换为你自己的仓库路径）
      const targetURL = `/genir-notes/${item.source}/papers/?tag=${encodeURIComponent(tag)}`;
      a.setAttribute("href", targetURL);
      a.setAttribute("target", "_blank");
    });

    container.appendChild(el);
  });

  // 隐藏原 container 避免展示
  hiddenContainer.style.display = "none";
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
