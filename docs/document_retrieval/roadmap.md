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

    A --> A1["Number-based docid"]
    A --> A2["Word-based docid"]

    %% Number-based docids breakdown
    A1 --> A1a["Unstructured atomic integers <br>  <a href='https://arxiv.org/pdf/2202.06991' target='_blank'>(Tay et al. 2022)</a>"]
    A1 --> A1b["Naively structured strings <br>  <a href='https://arxiv.org/pdf/2202.06991' target='_blank'>(Tay et al. 2022)</a>"]
    A1 --> A1c["Semantically structured strings <br>  <a href='https://arxiv.org/pdf/2202.06991' target='_blank'>(Tay et al. 2022)</a>"]
    A1 --> A1d["Product quantization strings <br> <a href='https://arxiv.org/pdf/2208.09257' target='_blank'>(Zhou et al. 2022)</a>"]

    %% Word-based docids breakdown
    A2 --> A2a["Titles <br> <a href='https://arxiv.org/pdf/2010.00904' target='_blank'>(De Cao et al. 2021)</a>"]
    A2 --> A2b["URLs <br>  <a href='https://arxiv.org/pdf/2208.09257' target='_blank'>(Zhou et al. 2022)</a>"]
    A2 --> A2c["Pseudo queries <br> <a href='https://arxiv.org/pdf/2305.15115' target='_blank'>(Tang et al. 2023a)</a>"]
    A2 --> A2d["N-grams <br>  <a href='https://arxiv.org/pdf/2204.10628' target='_blank'>(Bevilacqua et al. 2022)</a>"]

    %% Single → Multiple
    B["Multi-docid"]
    A --> B
```

# TODO
- [ ] Add training roadmap

