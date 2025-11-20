

```mermaid
flowchart LR

    %% Main categories
    A[["A single docid"]]
    B[["Multiple docids"]]

    A --> A1[Number-based docids]
    A --> A2[Word-based docids]

    %% Number-based docids breakdown
    A1 --> A1a[Unstructured atomic integers<br/>(Tay et al. 2022)]
    A1 --> A1b[Naively structured strings<br/>(Tay et al. 2022)]
    A1 --> A1c[Semantically structured strings<br/>(Tay et al. 2022)]
    A1 --> A1d[Product quantization strings<br/>(Zhou et al. 2022)]

    %% Word-based docids breakdown
    A2 --> A2a[Titles<br/>(De Cao et al. 2021)]
    A2 --> A2b[URLs<br/>(Zhou et al. 2022)]
    A2 --> A2c[Pseudo queries<br/>(Tang et al. 2023a)]
    A2 --> A2d[Important terms<br/>(Zhang et al. 2023)]

    %% Single → Multiple
    A --> B
```
