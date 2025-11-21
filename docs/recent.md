# 🕒 Recent Updates

Below is a chronological list of all recently added or updated papers across  
**Document Retrieval**, **Recommendation**, and **Multimodal Retrieval**.

(Automatically sorted by `data-date`)

<div id="recent-container"></div>

<script>
// ---- Collect all papers across the entire site ----
document.addEventListener("DOMContentLoaded", () => {
    // 1. 找到所有 paper-entry（跨多个页面）
    //    MkDocs Material 在 client-side SPA 模式中，页面是通过 JS 载入的
    //    因此我们直接 fetch 三个 papers.md 的 HTML
    const pages = [
        "document_retrieval/papers/",
        "recommendation/papers/",
        "multimodal/papers/"
    ];

    const container = document.getElementById("recent-container");
    let allPapers = [];

    Promise.all(
        pages.map(url => fetch(url).then(res => res.text()))
    ).then(pagesHtml => {
        pagesHtml.forEach(html => {
            // 创建临时 DOM
            const tmp = document.createElement("div");
            tmp.innerHTML = html;

            // 读取所有 paper-entry
            const papers = tmp.querySelectorAll(".paper-entry");
            papers.forEach(p => allPapers.push(p));
        });

        // ---- 按日期排序（最新在前） ----
        allPapers.sort((a, b) => {
            const da = new Date(a.dataset.date || "1970-01-01");
            const db = new Date(b.dataset.date || "1970-01-01");
            return db - da;
        });

        // ---- 插入到 recent.md 页面中 ----
        allPapers.forEach(p => {
            const clone = p.cloneNode(true);
            clone.style.marginBottom = "1.2rem";
            container.appendChild(clone);
        });
    });
});
</script>
