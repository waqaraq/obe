# Embedding Reference — version2-2026

Generated from the consolidated OBE master reference workbook.

## Embedding contract
- Model: mixedbread-ai/mxbai-embed-xsmall-v1
- Revision: e6ac24e
- Transformers.js: 3.8.1
- dtype: q8
- pooling: mean
- normalization: L2
- dimension: 384
- binary format: Float32 little-endian

PLO/WK/EC embedding text uses the official statement plus entity-local richer context present in the workbook. The record `text` field remains the core official statement. Course embeddings use course title + contents. SDG embeddings remain goal/target records grouped by SDG at runtime.

Similarity thresholds are intentionally unset in calibration.json.
