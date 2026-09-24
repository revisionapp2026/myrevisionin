# REVISION — build phases (from the PRD)

## Phase 0 — App shell & UI (done)

- [x] Splash → Program → Semester → Dashboard → Subject → Unit → Highlights/Bookmarks
- [x] Model papers + Q/A, Premium, Search, Profile, Settings, Bookmarks, desktop landing page
- [x] Navy/orange design system, bottom navigation, safe-area support
- [x] "Powered by ION App" removed from the splash screen

## Phase 1 — Accounts (done)

- [x] profiles + user_roles with RLS, auto profile on signup
- [x] /auth (sign up, sign in, forgot password) + /reset-password
- [x] session-aware profile, sign out, admin-only area shell

## Phase 2 — PWA (done)

- [x] manifest + app icons, installable shell
- [x] service worker with network-first pages, cached assets, auto update
- [x] install prompt and offline fallback page
- [x] never registers in dev/preview; ?sw=off kill switch

## Phase 3 — Ask & Revise (AI study help) (done)

- [x] /ai-help screen: topic or question in, explanation + key points + practice questions out
- [x] streaming server endpoint using Lovable AI, program/semester aware
- [x] friendly errors for credits/rate limits/offline

## Phase 4 — Content in the database (done)

- [x] subjects, units, highlights, model_papers, paper_questions tables (public read, admin write)
- [x] real syllabus loaded: 63 subjects + 274 units for B.Com and BBA (incl. BBA electives) from the official documents
- [x] app content layer rebuilt on the real syllabus; electives screen; honest empty states (no invented content)
- [ ] read subjects/units/highlights from the database instead of the bundled syllabus file
- [x] revision points loaded from the subject documents: 1,799 points across 60 units (highlight + key points)
- [x] 182 model papers with 1,641 solved questions, premium flags per paper
- [x] every BBA and B.Com unit now has revision points (6,137 points, no "coming soon" left)
- [x] unit, model paper and paper screens now read live content from the database
- [ ] bookmarks per signed-in user (currently saved on the device), database-backed search

## Phase 5 — Admin CMS (done)

- [x] admin-only panel with Content / Papers / Notifications tabs
- [x] add, edit, delete subjects → units → revision points (highlight + key points)
- [x] add, edit, delete model papers (free/premium, model/previous year) and their questions with answers
- [x] create, edit, publish and delete student announcements
- [ ] users list + role management, audit log of admin changes

## Phase 6 — Premium & payments (in progress)

- [x] premium dashboard: unlocked syllabus, solved papers, revision progress tracker
- [ ] plans, payments, entitlements tables
- [ ] Razorpay UPI checkout + server-side verification webhook
- [ ] server-checked premium locks on model papers, plan state in profile

## Phase 7 — Notifications & hardening (in progress)

- [x] in-app notifications: announcement screen, unread badge on the home bell, per-student read tracking
- [x] audience targeting by program and semester, categories for material / papers / premium
- [ ] FCM token registration after permission, notification preferences in settings
- [ ] RLS audit, rate limits, accessibility and responsive QA
- [ ] skeleton loading, empty/error states everywhere

## Phase 8 — Admin ops, landing & offline (done)

- New logo used for app icons (192/512/maskable/apple-touch), favicon and landing page; manifest updated.
- Landing page rebuilt for large screens: logo nav, hero with live stats, 9 features, steps, pricing, CTA.
- Admin panel extended: Users (registered students, program, premium status), Payments (demo transactions, plan, status, collected total), Analytics (platform counts + premium conversion), Import (JSON subject/unit/points importer).
- Payments table added; demo checkout now records a transaction and flags the profile premium.
- Offline: study data cached (Supabase GET NetworkFirst), fonts + assets cached, offline banner with auto-refetch on reconnect.

Remaining: real Razorpay keys, Google provider config (user action), account-synced bookmarks, DB-backed search, push (FCM), admin role management + audit log.

## Phase 9 — Document imports (done 2026-09-20)

Imported 10 more subject documents (18 subjects): Business Laws, Auditing, Marketing Management, Business Statistics II, Cost Accounting, Business Ethics (B.Com + BBA), Introduction to Accounting, Cyber Security & Laws, Management Accounting, GST, Research Methodology, Fundamentals of AI Tools, and 7 HR/E-Commerce electives.
DB now: 63 subjects, 282 units, 7,314 revision points, 200 papers, 1,852 solved questions. 0 units without points, 0 subjects without papers, 0 empty answers.
Still AI-generated (docx not yet supplied): BBA Business Statistics (S2), Business Law & Ethics, Operations Management, Operations Research (S3), Business Environment, Quantitative Techniques, Entrepreneurship (S4), Strategic Management, International Business (S5), Supply Chain Management (S6), all Finance/Marketing electives; B.Com Banking & Financial Services (S2), Advanced Accounting, Business Statistics I, Corporate Accounting (S3), Communication Skills, Environmental Science (S5), Computerized Accounting (S6).
Subjects with fewer than 5 units (need unit names): BBA electives E-Filing of Tax Returns, International Auditing, International Financial Reporting-I (1 unit), Financial Derivatives (4); B.Com Communication Skills, Environmental Science, Computerized Accounting (1), Fundamentals of AI Tools (2), Research Methodology (3 - as per syllabus).

## Phase 10 — Legal, SEO & remaining scope (in progress 2026-09-20)

- [x] /privacy, /terms, /refund pages written for REVISION (from the supplied policy template), linked from Settings and the landing footer
- [x] Support email set to reachout.revision@gmail.com across the legal pages
- [x] sitemap.xml + robots sitemap reference, per-page SEO titles/descriptions/OG tags on the legal pages
- [ ] BBA Semester 6 electives surfaced on the semester screen
- [x] Highlighting feature: tap the pen on any revision point to highlight it (yellow → green → pink → off), highlights listed in the unit Saved tab and on the Bookmarks screen (saved on the device)
- [ ] Desktop polish for every in-app page (currently mobile-first only)
- [ ] Personalised RAG-style AI: program/semester/subject context, flashcards, illustrations, audio
- [ ] Admin JSON import screen upgrade (units + points + papers, preview before applying)
- [ ] Admin analytics: daily active users, units opened, papers downloaded, Ask & Revise questions (event table)
- [ ] BBA Sem 6 Project Work page: guidelines, downloadable template, progress tracker
- [ ] Download unit / model paper as PDF for offline use
- [ ] Walkthrough QA of BBA Sem 6 and B.Com Sem 6 after import

## Phase 10 — AI study buddy + admin import (done)

- Profile screen crash fixed (shared app data survives live updates).
- Admin JSON import: preview before applying, model papers + answers, replace/add toggle.
- Ask & Revise rebuilt: grounded in the student's own subject/unit material, modes Explain / Flashcards / Quiz / Audio, listen-to-answer audio.

## Phase 11 — Auth-first flow, plan limits, offline reading (done)

- Splash now goes to sign in, then program selection (admins go straight to the admin panel).
- Google sign-in opens in its own browser tab inside the preview frame (fixes the 403) with a clear message if the provider is off.
- Plan limits in one place (src/lib/entitlements.ts): premium read from the account, 10 highlights + 20 bookmarks per chapter, 5 AI questions a day on Free, paid papers and the premium dashboard locked for Free.
- Study material opened once is saved on the device, so chapters stay readable when the connection drops.

## Phase 12 — Splash image + admin papers & question bank

- [x] Splash screen uses the uploaded artwork full-screen (ION App credit cropped out)
- [x] Admin: model papers upload + preview per subject (paste/.txt past paper, parsed questions + answers, publish live)
- [ ] Admin: question bank — upload a past paper, AI generates chapter-wise questions with answers, preview + save
- [ ] Students: chapter-wise practice screen fed by the question bank

## Phase 13 — Navigation recovery and admin workspace (done)

- [x] Persistent back and Home access from every in-app screen, including Ask & Revise
- [x] Quick program and semester switcher on the dashboard with immediate refresh
- [ ] Browser walkthrough across B.Com semesters and nested study screens
- [x] Desktop SaaS-style admin sidebar with dashboard overview
- [x] Simplified live-database CRUD and JSON import preview/apply flow
- [ ] Admin desktop/mobile QA
