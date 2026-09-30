# version1-2026 — CLO/PLO Validator Reference Embeddings

This directory is designed for direct upload to GitHub Pages, a static CDN, or any ordinary static host. It intentionally uses a small number of files.

## Embedding contract

- Model: `mixedbread-ai/mxbai-embed-xsmall-v1`
- Revision: `e6ac24e`
- Transformers.js: `3.8.1`
- dtype: `q8`
- pooling: `mean`
- normalization: L2
- dimension: 384
- binary format: Float32 little-endian

The CLO runtime must use the same contract.

## Compact hosted layout

Each logical family is represented by one metadata JSON file and one adjacent Float32 matrix. Relationships such as course folder, course UID, content chunk number, SDG parent and target number are preserved inside metadata rather than as thousands of physical files.

- `courses/courses.json + courses.f32` — 104 full-course embeddings.
- `courses/course-contents.json + course-contents.f32` — 819 individual course-content embeddings, each linked to its parent course.
- `plo/plo.json + plo.f32` — PLO definitions.
- `wk/wk.json + wk.f32` — WK definitions.
- `ec/ec.json + ec.f32` — EC definitions.
- `sdg/sdg.json + sdg.f32` — SDG goals and targets.

This compact structure is preferable for GitHub Pages/CDN hosting because the entire version can be uploaded in one batch and the runtime makes very few HTTP requests.

## Calibration

Similarity thresholds are intentionally unset in `calibration.json`. Calibrate them against faculty-labelled CLO examples.

## Provenance

- Workbook: Full_Underlying_Validator_Data.xlsx
- Workbook SHA-256: a24b41fbcd92100c660c6a8f099233ee66e0f9853f8075f1f7100c3724da085d
- Workbook app version: 2026-09-29-unified-lexical-v3.7-klm-nosidebar
- Actual courses: 104
- Full-course embeddings: 104
- Course-content embeddings: 819
- Total embeddings: 1142
