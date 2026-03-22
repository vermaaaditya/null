# Asset Usage Guide

This project keeps only curated assets that are used in the React app.

## Current Structure

- `src/assets/LOGO.png`
- `src/assets/homepageimage/`
- `src/assets/prienciplephoto/`
- `src/assets/sietpanchkula.ac.in/wp-content/uploads/`

## How These Are Used

- Direct imports in components/pages for hero, logo, faculty docs, departments, and placements.
- Dynamic gallery selection from:
  - `src/assets/sietpanchkula.ac.in/wp-content/uploads/**/*.{jpg,jpeg,png,webp}`

## Cleanup Policy

- Do not add full website mirrors under `src/assets`.
- Keep only media/docs actually used by UI components.
- Prefer placing new SIET media in `wp-content/uploads/<year>/<month>/` for consistency with existing paths.
- Remove orphan files if no static import or dynamic glob can reference them.

## Before Deleting Assets

1. Search static references in `src/**/*.{js,jsx,ts,tsx}`.
2. Check dynamic globs (currently in Facilities and LifeAtSIET pages).
3. Run `npm run build` to validate no missing asset imports.
