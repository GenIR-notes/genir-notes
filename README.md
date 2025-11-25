### Homepage: https://genir-notes.github.io/genir-notes/


### ✅ Instructions for Adding New Papers & Updating Roadmaps

Hi!
This following explains how to correctly add new papers to the GenIR Notes website and how to edit the roadmap diagrams.

#### 1. 📄 Writing a Paper Entry

Each paper should follow the exact HTML structure below.

```
<div class="paper-entry"
     data-tags="title,ms-marco-doc"
     data-date="2025-11-01"
     data-source="document_retrieval">

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
    <a class="paper-tag" data-tag="ms-marco-doc" href="?tag=ms-marco-doc">MS MARCO Doc</a>
  </p>

</div>
```

##### File path: 
- docs/document_retrieval/papers.md
- docs/recommendation/papers.md
- docs/multimodal/papers.md


##### Rules for data-tags

✔️ Must be lowercase, comma-separated without spaces

```
✔️ Correct: title,ms-marco-doc
❌ Wrong: title, ms-marco-doc
```

✔️ Must match each <a class="paper-tag">

Example:
```
data-tags="title,nq"
```
should correspond to:
```
<a class="paper-tag" data-tag="title" href="?tag=title">title</a>
<a class="paper-tag" data-tag="nq" href="?tag=nq">NQ</a>
```
⸻

##### Rules for data-date

✔️ Format must be ISO date:
```
YYYY-MM-DD
```
⸻

##### Rules for data-source

This determines which category page the tag click will return to.

Use exactly one of the following:

| Section              | data-source value   |
|----------------------|----------------------|
| Document Retrieval   | document_retrieval   |
| Recommendation       | recommendation       |
| Multimodal Retrieval | multimodal           |

Example:
```
data-source="recommendation"
```
⸻

#### 2. IMPORTANT: Do NOT modify the script at the bottom of papers.md
```
<script src="../js/paper-process.js"></script>
```

#### 3. Editing the Roadmap

Each section has its own roadmap.md using Mermaid diagrams.

Please check the example in: docs/document_retrieval/roadmap.md

If unsure, you may ask ChatGPT: “Rewrite this node in valid Mermaid format” (Or refer to the existing roadmap for examples.)

⸻

#### 3. ⭐ Summary: What you should follow

✔️ DO:

- Follow the exact Paper Entry template
- Use lowercase tags, comma-separated
- Use valid ISO dates
- Set correct data-source
- Keep tag <a> elements consistent
- Maintain the script import at the bottom of each papers.md
- Follow Mermaid syntax for the roadmap


##### If You Have Questions

Just message Yubao — small mistakes can break the filtering system, so it’s better to ask!

