# Identifier Design Roadmap

This roadmap provides an overview of predefined document identifier (docid) design strategies in GenIR. 
Docid design is typically organized around two major categories: **Single-docid** (using one docid to represent the doc) and **Multi-docid** (using multiple docids to represent the doc). 
A *Single docid* can be constructed using either **number-based docids** or **word-based docids**, each representing different encoding principles. 
These individual docid types can also be combined or extended to form **Multi-docid** structures, which aim to capture richer or more diverse document representations.

The diagram below summarizes the relationships among these design families and lists representative approaches for each category.


```mermaid
flowchart LR

    %% Main categories
    A["Single-docid"]
    B["Multi-docid"]

    A --> A1["Number-based docid"]
    A --> A2["Word-based docid"]

    %% Number-based docids breakdown
    A1 --> A1a["Unstructured atomic integers <br> (Tay et al. 2022) <br> [PDF](https://arxiv.org/pdf/2202.06991)"]
    A1 --> A1b["Naively structured strings <br> (Tay et al. 2022) <br> [PDF](https://arxiv.org/pdf/2202.06991)"]
    A1 --> A1c["Semantically structured strings <br> (Tay et al. 2022) <br> [PDF](https://arxiv.org/pdf/2202.06991)"]
    A1 --> A1d["Product quantization strings <br> (Zhou et al. 2022) <br> [PDF](https://arxiv.org/pdf/2208.09257)"]

    %% Word-based docids breakdown
    A2 --> A2a["Titles <br> (De Cao et al. 2021) <br> [PDF](https://arxiv.org/pdf/2010.00904)"]
    A2 --> A2b["URLs <br> (Zhou et al. 2022) <br> [PDF](https://arxiv.org/pdf/2208.09257)"]
    A2 --> A2c["Pseudo queries <br> (Tang et al. 2023a) <br> [PDF](https://arxiv.org/pdf/2305.15115)"]
    A2 --> A2d["N-grams <br> (Bevilacqua et al. 2022) <br> [PDF](https://arxiv.org/pdf/2204.10628)"]

    %% Single → Multiple
    A --> B
```
