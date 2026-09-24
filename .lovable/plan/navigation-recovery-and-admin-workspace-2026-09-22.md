# Navigation recovery and admin workspace

## What I’ll build

1. **Unstick navigation first**
   - Make the bottom Home control reliably open the student dashboard from Ask & Revise and every other bottom-navigation screen.
   - Add a consistent Back control and a direct Home control to nested screens, with a safe fallback when browser history is unavailable.
   - Keep the current program and semester when returning Home.

2. **Quick course switcher**
   - Add a compact BBA/B.Com and Semester 1–6 selector at the top of Home.
   - Apply changes immediately, clear stale subject/unit selection, and refresh the displayed subjects.
   - Keep BBA electives directly accessible from the same area.

3. **Admin workspace upgrade**
   - Reframe the existing admin tools as a desktop SaaS workspace with a left sidebar and a compact mobile navigation.
   - Keep Subjects, Units, Revision Points, Papers, Questions, Notifications, Users, Payments, Analytics, and Import connected to the current live Supabase data.
   - Make import easier with a sample, validation summary, clear Replace/Add choice, preview, progress, and success/error feedback.
   - Preserve the existing admin-only access check and row-level database permissions.

4. **Verification**
   - Walk Home → Ask & Revise → Home, nested subject/unit back paths, and B.Com Semester 3/4/5 switching.
   - Verify admin create/edit/delete and import controls render against live data without changing production content during QA.
   - Check mobile and desktop layouts, browser errors, and the latest build status.

## Technical notes

- Navigation will use typed TanStack links/navigation rather than browser-only anchors.
- Shared program/semester state remains in the existing app provider and local device storage.
- The admin redesign changes presentation and control flow; it does not replace Supabase or weaken admin authorization.
