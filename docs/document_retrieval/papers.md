

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
  const params = new URLSearchParams(window.location.search);
  const selectedTag = params.get("tag");

  const papers = document.querySelectorAll(".paper-entry");

  /* ----------- 自动为 tag 生成 href ----------- */
  const tagLinks = document.querySelectorAll(".paper-tag");
  tagLinks.forEach(a => {
    const tag = a.dataset.tag; // 直接读取 data-tag
    if (tag) {
      a.href = `?tag=${tag}`;  // 自动插入 href
    }
  });

  /* ----------- tag filtering 逻辑 ----------- */
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

  /* ----------- Clear filter 按钮 ----------- */
  const clear = document.querySelector("#clear-filters");
  if (clear) {
    clear.addEventListener("click", () => {
      window.location.href = window.location.pathname;
    });
  }
});
</script>
