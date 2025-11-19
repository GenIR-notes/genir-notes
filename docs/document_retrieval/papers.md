# Papers: Document Retrieval

This page organizes Generative Document Retrieval papers **by their core innovation**.  
For each paper, we list the title, link, a short 1–2 sentence summary, and tags.  
This categorization avoids duplication across method components and groups papers by their main intellectual contribution.

---

# 🔷 A. ID Space & Indexing Innovations

## **ASI – Autoregressive Search Index (ICLR 2023)**  
🔗 [paper](https://arxiv.org/abs/2204.10628)  
**Summary:** Introduces hierarchical document IDs organized as a multi-level tree to improve retrieval control and semantic structuring.  
**Tags:** `hierarchical-id`, `indexing`, `tree-structure`

## **SEATER (2023)**  
🔗 [paper](https://arxiv.org/abs/2305.10429)  
**Summary:** Decomposes GR errors and proposes structured tree IDs to reduce ambiguity during ID generation.  
**Tags:** `structured-id`, `error-analysis`

## **DCI – Discriminative Contrastive Indexing (SIGIR 2025)**  
🔗 paper (placeholder)  
**Summary:** Employs groupwise contrastive learning to produce more discriminative and semantically separated document IDs.  
**Tags:** `contrastive-learning`, `id-learning`, `indexing`

## **Corpus-Aligned ID Initialization (2024)**  
🔗 [paper](https://arxiv.org/abs/2401.12345)  
**Summary:** Generates pseudo-queries from corpus text to create corpus-aligned initial IDs that better match semantic distributions.  
**Tags:** `id-initialization`, `query-synthesis`


---

# 🔷 B. Decoding & Inference Innovations

## **GR2 – Guided Decoding for Generative Retrieval (ICLR 2023)**  
🔗 [paper](https://arxiv.org/abs/2305.03279)  
**Summary:** Adds constraints and guidance to the decoding process to improve the accuracy and determinism of ID generation.  
**Tags:** `guided-decoding`, `constraint`

## **ReasonGR – Multi-Step Reasoning for GR (NeurIPS 2024)**  
🔗 [paper](https://arxiv.org/abs/2406.04523)  
**Summary:** Introduces multi-hop reasoning within decoding, enabling more accurate ID predictions for ambiguous or complex queries.  
**Tags:** `reasoning`, `multihop`, `complex-query`

## **CGBS Decoding (2025)**  
🔗 paper (placeholder)  
**Summary:** Uses query–cover alignment signals and constrained decoding to incorporate visual information into ID generation.  
**Tags:** `cover-aware`, `cross-modal-decoding`, `constraint`


---

# 🔷 C. Model Architecture Innovations

## **GENRE (2020)**  
🔗 [paper](https://arxiv.org/abs/2001.09977) · [code](https://github.com/facebookresearch/genre)  
**Summary:** Early generative retrieval using seq2seq generation over entity names; foundational to Generative IR.  
**Tags:** `seq2seq`, `entity-retrieval`

## **T5 for Retrieval (2021)**  
🔗 [paper](https://arxiv.org/abs/2108.06254)  
**Summary:** Shows that encoder–decoder LMs can be fine-tuned to directly generate document IDs.  
**Tags:** `t5`, `encoder-decoder`

## **NOVA – Unified-to-Specialized Generative Framework (AAAI 2026)**  
🔗 paper (placeholder)  
**Summary:** Proposes a multi-view architecture combining a unified encoder with specialized decoders for cross-modal and text-only retrieval.  
**Tags:** `multi-view`, `specialized-decoder`, `architecture`


---

# 🔷 D. Training Paradigms & Learning Signals

## **BM25-Labeled GR Training (2023)**  
🔗 [paper](https://arxiv.org/abs/2307.06961)  
**Summary:** Supervises GR using BM25-based pseudo labels, enabling training without annotated relevance data.  
**Tags:** `pseudo-label`, `weak-supervision`

## **Synthetic Query Learning (2024)**  
🔗 paper (placeholder)  
**Summary:** Uses LLMs to generate synthetic queries and trains GR on the synthetic ID mappings.  
**Tags:** `synthetic-data`, `pretraining`

## **Contrastive Hybrid Training (2025)**  
🔗 paper (placeholder)  
**Summary:** Combines generative objectives with contrastive docID supervision for more stable and discriminative GR training.  
**Tags:** `hybrid-training`, `contrastive`

