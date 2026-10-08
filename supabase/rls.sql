-- ==============================================================================
-- DORA GLOBAL RESEARCH — SUPABASE RLS SECURITY MIGRATION
-- ==============================================================================
-- Run this in: Supabase Dashboard → SQL Editor
--
-- SECURITY MODEL:
--
--   PUBLIC (anon role):
--     - Can INSERT enquiries (contact form submissions)
--     - Cannot SELECT, UPDATE, or DELETE any enquiries
--
--   ADMIN (authenticated role — must sign in via Supabase Auth):
--     - Can SELECT all enquiries (read the dashboard)
--     - Can UPDATE enquiries (e.g. change status)
--     - Can DELETE enquiries (optional, for cleanup)
--
--   SERVER (service_role key — NEVER exposed to browser):
--     - Bypasses all RLS — used only in server-side API routes
--     - Used by /api/admin/enquiries with server-only key
--
-- NOTE: The service_role key is stored in SUPABASE_SERVICE_ROLE_KEY
--       which is a server-only env variable (no NEXT_PUBLIC_ prefix).
--       It is NEVER sent to the browser.
-- ==============================================================================

-- ──────────────────────────────────────────────────────────────────────────────
-- Step 1: Verify RLS is enabled on all tables
-- ──────────────────────────────────────────────────────────────────────────────
ALTER TABLE public.enquiries  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;

-- ──────────────────────────────────────────────────────────────────────────────
-- Step 2: Enquiries RLS Policies
-- ──────────────────────────────────────────────────────────────────────────────

-- Drop all existing enquiries policies for a clean slate
DROP POLICY IF EXISTS "Public visitors can submit enquiries"     ON public.enquiries;
DROP POLICY IF EXISTS "Authenticated users can view enquiries"   ON public.enquiries;
DROP POLICY IF EXISTS "Authenticated users can update enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Authenticated users can delete enquiries" ON public.enquiries;

-- POLICY 1: Anyone (incl. anonymous visitors from the contact form) can INSERT
-- This enables the public contact form to submit enquiries.
CREATE POLICY "anon_insert_enquiries"
    ON public.enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        -- Basic sanity checks replicated at DB level
        name IS NOT NULL AND char_length(name) >= 2 AND
        email IS NOT NULL AND email LIKE '%@%' AND
        service IS NOT NULL AND char_length(service) >= 2 AND
        message IS NOT NULL AND char_length(message) >= 10
    );

-- POLICY 2: Only authenticated admins can SELECT all enquiries
-- Anonymous users get zero rows — no data leak possible.
CREATE POLICY "admin_read_enquiries"
    ON public.enquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- POLICY 3: Only authenticated admins can UPDATE enquiry fields (e.g. status)
-- The check ensures status is always one of the allowed values.
CREATE POLICY "admin_update_enquiries"
    ON public.enquiries
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (
        status IN ('new', 'contacted', 'in_progress', 'closed')
    );

-- POLICY 4: Only authenticated admins can DELETE enquiries
CREATE POLICY "admin_delete_enquiries"
    ON public.enquiries
    FOR DELETE
    TO authenticated
    USING (true);

-- ──────────────────────────────────────────────────────────────────────────────
-- Step 3: Services & Industries RLS Policies
-- ──────────────────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "Public can view active services"         ON public.services;
DROP POLICY IF EXISTS "Authenticated users can manage services" ON public.services;

-- Anyone can read active service records (used by public site dropdowns)
CREATE POLICY "public_read_active_services"
    ON public.services
    FOR SELECT
    TO anon, authenticated
    USING (active = true);

-- Admins can manage service records
CREATE POLICY "admin_manage_services"
    ON public.services
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view active industries"         ON public.industries;
DROP POLICY IF EXISTS "Authenticated users can manage industries" ON public.industries;

-- Anyone can read active industry records
CREATE POLICY "public_read_active_industries"
    ON public.industries
    FOR SELECT
    TO anon, authenticated
    USING (active = true);

-- Admins can manage industry records
CREATE POLICY "admin_manage_industries"
    ON public.industries
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────────────────────
-- Step 4: Verify RLS is active (informational query — run manually to check)
-- ──────────────────────────────────────────────────────────────────────────────
-- SELECT
--     tablename,
--     rowsecurity,
--     (SELECT count(*) FROM pg_policies WHERE tablename = pg_tables.tablename) AS policy_count
-- FROM pg_tables
-- WHERE schemaname = 'public'
-- ORDER BY tablename;

-- ──────────────────────────────────────────────────────────────────────────────
-- Step 5: Create Admin User (DO THIS IN SUPABASE DASHBOARD)
-- ──────────────────────────────────────────────────────────────────────────────
-- Do NOT create admin accounts via SQL INSERT into auth.users.
-- Instead, use the Supabase Dashboard:
--   1. Go to Authentication → Users
--   2. Click "Invite user" or "Add user"
--   3. Enter the admin email + password
--   4. The user will have role = 'authenticated' automatically
--
-- To verify an admin user can access enquiries from the SQL editor:
-- SET LOCAL role = authenticated;
-- SELECT id, name, email, status, created_at FROM public.enquiries LIMIT 5;
-- RESET role;
