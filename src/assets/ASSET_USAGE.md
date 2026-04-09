# Asset Usage Guide

This project keeps only curated assets that are used in the React app.

## Current Structure

- `src/assets/new-assets/hero-home/`
- `src/assets/new-assets/logos/`
- `src/assets/new-assets/principal-photo/`
- `src/assets/new-assets/gallery/`
- `src/assets/new-assets/departments/`
- `src/assets/new-assets/campus/`
- `src/assets/new-assets/events/`
- `src/assets/new-assets/teachers/`
- `src/assets/new-assets/notifications/`
- `src/assets/new-assets/documents/`

## How These Are Used

- Direct imports in components/pages for hero, logo, faculty docs, departments, and placements.
- Dynamic gallery selection from:
  - `src/assets/new-assets/**/*.{jpg,jpeg,png,webp}`

## Cleanup Policy

- Keep only media/docs actually used by UI components.
- Keep assets organized under `src/assets/new-assets/` by category.
- Remove orphan files if no static import or dynamic glob can reference them.

## Before Deleting Assets

1. Search static references in `src/**/*.{js,jsx,ts,tsx}`.
2. Check dynamic globs (currently in Facilities and LifeAtSIET pages).
3. Run `npm run build` to validate no missing asset imports.
