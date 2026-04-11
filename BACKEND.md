# Backend Implementation Guide for SIET Website

This project is currently a frontend-only Vite + React website. This guide explains one practical way to add a backend for dynamic content, forms, admin updates, and future integrations.

## 1) Recommended Stack

- Runtime: Node.js 20+
- Framework: Express.js (or NestJS if you prefer structure)
- Database: PostgreSQL
- ORM: Prisma
- Auth: JWT + refresh token (or Clerk/Auth0)
- File storage: Cloudinary/S3 for notices, PDFs, images
- Deployment: Vercel (frontend) + Render/Railway/Fly.io (backend)

## 2) Suggested Folder Structure

```text
backend/
  src/
    app.ts
    server.ts
    config/
      env.ts
      db.ts
    modules/
      auth/
      notices/
      courses/
      departments/
      events/
      admissions/
      uploads/
    middlewares/
      auth.ts
      errorHandler.ts
    utils/
      logger.ts
  prisma/
    schema.prisma
  package.json
  tsconfig.json
  .env.example
```

## 3) Core API Modules

- Auth:
  - POST /api/auth/login
  - POST /api/auth/refresh
  - POST /api/auth/logout
- Notices:
  - GET /api/notices
  - GET /api/notices/:id
  - POST /api/notices
  - PATCH /api/notices/:id
  - DELETE /api/notices/:id
- Courses:
  - GET /api/courses
  - PATCH /api/courses/:id
- Departments:
  - GET /api/departments
  - GET /api/departments/:slug
  - PATCH /api/departments/:slug
- Events:
  - GET /api/events
  - POST /api/events
- Admissions:
  - POST /api/admissions/enquiry

## 4) Minimal Database Schema (Prisma idea)

```prisma
model Notice {
  id          Int      @id @default(autoincrement())
  title       String
  category    String
  priority    String
  details     String
  dateLabel   String
  downloadUrl String?
  readMoreUrl String?
  isPublished Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Course {
  id          Int      @id @default(autoincrement())
  title       String
  shortCode   String
  slug        String   @unique
  description String
  duration    String
  seats       Int
  imageUrl    String?
  isActive    Boolean  @default(true)
  updatedAt   DateTime @updatedAt
}

model Department {
  id        Int      @id @default(autoincrement())
  name      String
  slug      String   @unique
  overview  String
  points    String[]
  imageUrl  String?
  updatedAt DateTime @updatedAt
}
```

## 5) Frontend Integration Plan

1. Move hardcoded content from:
   - src/data/noticesData.js
   - src/pages/submenu/submenuData.js
   - src/components/Courses.jsx
   into backend tables.
2. Create API service helpers in frontend:
   - src/services/api.js
3. Fetch data in pages/components with loading/error states.
4. Keep temporary fallback data for zero-downtime rollout.

## 6) Admin Panel Options

Option A: Simple protected routes in current React app:
- /admin/notices
- /admin/courses
- /admin/departments

Option B: Separate admin app (recommended for larger workflows).

## 7) Security Checklist

- Validate request bodies (zod/joi).
- Rate-limit auth and public form endpoints.
- Enable CORS only for your frontend domains.
- Store secrets in environment variables.
- Use signed URL upload for files.
- Log all admin writes.

## 8) Quick Start Commands (example)

```bash
# in backend/
npm init -y
npm install express cors helmet morgan dotenv jsonwebtoken bcrypt zod
npm install prisma @prisma/client
npx prisma init
```

## 9) Migration Strategy

1. Start with Notices API first (highest update frequency).
2. Switch frontend notices from static file to API.
3. Repeat for Courses and Departments.
4. Add admin authentication and edit screens.
5. Remove remaining hardcoded content once stable.

## 10) Future Enhancements

- Search index API for navbar search suggestions.
- CMS-like rich text for department sections.
- Audit trail for all content edits.
- Scheduled publish/unpublish for notices and popups.
