# Resources for Getting Started with Generative IR

This page provides a curated set of **entry-level resources** for students and researchers who want to quickly understand and start working on **Generative Information Retrieval (GenIR)**, **Generative Recommendation (GenRec)**, and **Multimodal Generative Retrieval**.

It includes tutorials, starter code, datasets, beginner-friendly papers, and tools.

---

## 🔹 1. What is Generative IR?

Generative IR treats retrieval as a **sequence generation problem**.  
Instead of scoring documents (dense/sparse retrieval), a model **directly generates document identifiers (DocIDs)** conditioned on a query.

This paradigm enables:
- flexible reasoning  
- multimodal integration  
- unifying retrieval with generation  
- direct indexing via generative models

---

## 🔹 2. Tutorials & Surveys

**Our tutorial (recommended starting point):**  
👉 [GenIR Tutorial](your-link-here)

**Other helpful materials:**
- *Generative Search and Retrieval (2024)* — overview slides  
- *The rise of generative retrieval models (2023)* — survey  
- *SIGIR/ECIR tutorial slides (if any available public)*  

You may also find NeurIPS and ICLR spotlight videos helpful for high-level intuition.

---

## 🔹 3. Starter Code Repositories

Begin with small, runnable implementations:

- **Minimal T5-based Generative Retriever**  
  https://github.com/example/t5-simple-genir

- **GR2-style constrained decoding demo**  
  https://github.com/example/gr2-decoding-demo

- **Prefix-tree decoding example**  
  https://github.com/example/prefix-tree-search

- **BM25-labeled GR Training**  
  A simple script: generate docIDs from BM25 labels and train a seq2seq model.

Recommended starting exercise:  
👉 Train a small T5 model to generate document IDs on a tiny dataset.

---

## 🔹 4. Datasets for Experiments

### Text Retrieval
- **MS MARCO (Passage / Document)**  
- **BEIR** (benchmark suite)  
- **Natural Questions (NQ)**  
- **MIRACL**

### Multimodal Retrieval
- **MS-COCO**  
- **Flickr30K**  
- **BookCover30K**  
- **WhatsThatBook**  

### For Teaching / Prototyping
- Small Wikipedia slices  
- QA subsets  
- Your own prepared toy datasets

---

## 🔹 5. Beginner start reading recommendations

**Recommended Entry Path (Beginner ↝ Intermediate ↝ Modern):**

1. **GENRE (2020)** — first works on generative retrieval  
2. **T5 for Retrieval (2021)** — simple baseline  
3. **ASI (ICLR 2023)** — introduces hierarchical DocIDs  
4. **GR2 (ICLR 2023)** — constrained decoding  
5. **ReasonGR (NeurIPS 2024)** — reasoning-based decoding  
6. **DCI (SIGIR 2025)** — discriminative indexing  
7. **NOVA (AAAI 2026)** — unified-to-specialized architecture

Reading these gives a complete understanding of the field’s evolution.

---

## 🔹 6. Tools & Practical Components

Helpful elements commonly used in GR systems:

- **Prefix tree builder**
- **ID quantization / clustering**
- **DocID templates (hierarchical IDs)**
- **Synthetic query generators**
- **Constrained beam search tools**
- **Visual-text encoders (for multimodal work)**

We recommend building a minimal pipeline:
> query → encoder → decoder → docID → matching → evaluation

to get hands-on experience.

---

## 🔹 7. Extra: Joining the Community

- SIGIR paper reading groups  
- Open-source GR communities  
- Relevant GitHub organizations and curated lists  
- Discord/Slack groups (if applicable)

---

*Feel free to suggest new resources — this page is intended to grow with the community.*
