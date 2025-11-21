

# Papers: Document Retrieval

This page organizes Generative Document Retrieval papers **by their core innovation**.  
To keep the page compact, each paper is listed using lightweight formatting (bold titles instead of section headers).

---

## 🔷 A. ID Space & Indexing Innovations

<div class="paper-entry" data-tags="title,ms-marco-doc" data-date="2025-11-01">

<p><strong>AAAAAAAAAA (Tay et al. 2022)</strong></p>

<p>
Tags:
<a href="?tag=title">title</a> ·
<a href="?tag=ms-marco-doc">MS MARCO Doc</a>
</p>

</div>

<div class="paper-entry" data-tags="title,nq" data-date="2025-11-18">

<p><strong>BBBBBBBBB (Tay et al. 2022)</strong></p>

<p>
Tags:
<a href="?tag=title">title</a> ·
<a href="?tag=nq">NQ</a>
</p>

</div>

<div class="paper-entry" data-tags="title,ms-marco-doc" data-date="2025-11-21">

<p><strong>CCCCCCCC (Tay et al. 2022)</strong></p>

<p>
Tags:
<a href="?tag=title">title</a> ·
<a href="?tag=ms-marco-doc">MS MARCO Doc</a>
</p>

</div>


**DCI – Discriminative Contrastive Indexing (SIGIR 2025)**  
🔗 paper (placeholder)  
*Uses groupwise contrastive learning to produce discriminative document IDs.*  
**Tags:** `contrastive`, `id-learning`

**Corpus-Aligned ID Initialization (2024)**  
🔗 [paper](https://arxiv.org/abs/2401.12345)  
*Initializes docIDs using synthetic queries aligned with corpus semantics.*  
**Tags:** `id-initialization`, `query-synthesis`



## 🔷 B. Training Paradigms & Learning Signals

**BM25-Labeled GR Training (2023)**  
🔗 [paper](https://arxiv.org/abs/2307.06961)  
*Trains GR using BM25 pseudo relevance labels, enabling training without human annotations.*  
**Tags:** `pseudo-label`, `weak-supervision`

**Synthetic Query Learning (2024)**  
🔗 paper (placeholder)  
*Uses LLM-generated synthetic queries to improve GR training and corpus coverage.*  
**Tags:** `synthetic-data`, `pretraining`

**Contrastive Hybrid Training (2025)**  
🔗 paper (placeholder)  
*Combines generative decoding loss with contrastive objectives for discriminative docIDs.*  
**Tags:** `hybrid-training`, `contrastive`


## 🔷 C. Model Architecture Innovations

**GENRE (2020)**  
🔗 [paper](https://arxiv.org/abs/2001.09977) · [code](https://github.com/facebookresearch/genre)  
*Early seq2seq generative retrieval using entity generation.*  
**Tags:** `seq2seq`, `entity-retrieval`

**T5 for Retrieval (2021)**  
🔗 [paper](https://arxiv.org/abs/2108.06254)  
*Demonstrates encoder–decoder LMs can generate document IDs directly.*  
**Tags:** `t5`, `encoder-decoder`

**NOVA – Unified-to-Specialized Framework (AAAI 2026)**  
🔗 paper (placeholder)  
*Multi-view encoder with specialized decoders for cross-modal and text-only retrieval.*  
**Tags:** `multi-view`, `decoder`, `architecture`

---

---

## 🔷 D. Decoding & Inference Innovations

**GR2 – Guided Decoding for GR (ICLR 2023)**  
🔗 [paper](https://arxiv.org/abs/2305.03279)  
*Adds constrained / guided decoding for more accurate ID generation.*  
**Tags:** `guided-decoding`, `constraint`

**ReasonGR – Multi-Step Reasoning (NeurIPS 2024)**  
🔗 [paper](https://arxiv.org/abs/2406.04523)  
*Models multi-hop reasoning during decoding to improve retrieval on complex queries.*  
**Tags:** `reasoning`, `multihop`

**CGBS Decoding (2025)**  
🔗 paper (placeholder)  
*Cover-aware and constrained decoding for multimodal ID generation.*  
**Tags:** `cover-aware`, `multimodal`, `constraint`

---


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
