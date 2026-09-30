# Hybrid lexical sidecar — version1-2026

This package is designed to merge directly into the same hosted version folder as the embedding reference assets. It does not replace or modify any embedding file.

## Folder alignment
- courses/courses.lexical.json — one lexical profile per full course.
- plo/plo.lexical.json — one lexical profile per PLO.
- wk/wk.lexical.json — one lexical profile per WK.
- ec/ec.lexical.json — one lexical profile per EC.
- sdg/sdg.lexical.json — one lexical profile per SDG, combining its goal statement and all targets.

There is deliberately no course-content lexical file. Course lexical document frequency is calculated across 104 full courses, not across individual syllabus bullets/chunks.

## Rule
- F1: word occurs in exactly 1 entity within its family.
- F2: word occurs in exactly 2 entities.
- F3: word occurs in exactly 3 entities.
- 4+: excluded from lexical eligibility.
- Eligibility: at least 1 F1 word OR at least 2 distinct F2 words OR at least 3 distinct F3 words. Routes are independent.

Bloom action openers and configured stop words are excluded. Exact words only; no stemming or synonym expansion.

Use these lexical profiles alongside embedding similarity in the hybrid validator. Lexical tiers are evidence, not semantic similarity scores.
