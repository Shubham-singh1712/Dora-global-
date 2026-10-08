-- ==============================================================================
-- DORA GLOBAL RESEARCH - SUPABASE POSTGRESQL SCHEMA & INITIAL SEED
-- ==============================================================================

-- Enable UUID extension if not already present
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 1. TABLE: enquiries
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT NOT NULL,
    industry TEXT,
    project_type TEXT,
    message TEXT NOT NULL,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for operational status filtering and chronological sorting
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries (status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries (email);

-- ==============================================================================
-- 2. TABLE: services
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    short_description TEXT,
    icon TEXT,
    display_order INT DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_services_slug ON public.services (slug);
CREATE INDEX IF NOT EXISTS idx_services_active_order ON public.services (active, display_order);

-- ==============================================================================
-- 3. TABLE: industries
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.industries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    short_description TEXT,
    icon TEXT,
    display_order INT DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_industries_slug ON public.industries (slug);
CREATE INDEX IF NOT EXISTS idx_industries_active_order ON public.industries (active, display_order);

-- ==============================================================================
-- 4. AUTO-UPDATE UPDATED_AT TRIGGER
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_enquiries_updated_at ON public.enquiries;
CREATE TRIGGER trigger_enquiries_updated_at
    BEFORE UPDATE ON public.enquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trigger_services_updated_at ON public.services;
CREATE TRIGGER trigger_services_updated_at
    BEFORE UPDATE ON public.services
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS trigger_industries_updated_at ON public.industries;
CREATE TRIGGER trigger_industries_updated_at
    BEFORE UPDATE ON public.industries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- ==============================================================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;

-- ------------------------------------------------------------------------------
-- ENQUIRIES RLS POLICIES
-- ------------------------------------------------------------------------------
-- 1. Public visitors can INSERT enquiries (lead generation)
DROP POLICY IF EXISTS "Public visitors can submit enquiries" ON public.enquiries;
CREATE POLICY "Public visitors can submit enquiries"
    ON public.enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 2. Public visitors MUST NOT be able to SELECT all enquiries
-- (No SELECT policy for 'anon' role means SELECT returns 0 rows)

-- 3. Authenticated administrative users can SELECT enquiries
DROP POLICY IF EXISTS "Authenticated users can view enquiries" ON public.enquiries;
CREATE POLICY "Authenticated users can view enquiries"
    ON public.enquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- 4. Authenticated administrative users can UPDATE enquiries (e.g. status changes)
DROP POLICY IF EXISTS "Authenticated users can update enquiries" ON public.enquiries;
CREATE POLICY "Authenticated users can update enquiries"
    ON public.enquiries
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 5. Authenticated administrative users can DELETE enquiries
DROP POLICY IF EXISTS "Authenticated users can delete enquiries" ON public.enquiries;
CREATE POLICY "Authenticated users can delete enquiries"
    ON public.enquiries
    FOR DELETE
    TO authenticated
    USING (true);

-- ------------------------------------------------------------------------------
-- SERVICES & INDUSTRIES RLS POLICIES
-- ------------------------------------------------------------------------------
-- Public can read active services
DROP POLICY IF EXISTS "Public can view active services" ON public.services;
CREATE POLICY "Public can view active services"
    ON public.services
    FOR SELECT
    TO anon, authenticated
    USING (active = true);

-- Authenticated users can manage services
DROP POLICY IF EXISTS "Authenticated users can manage services" ON public.services;
CREATE POLICY "Authenticated users can manage services"
    ON public.services
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Public can read active industries
DROP POLICY IF EXISTS "Public can view active industries" ON public.industries;
CREATE POLICY "Public can view active industries"
    ON public.industries
    FOR SELECT
    TO anon, authenticated
    USING (active = true);

-- Authenticated users can manage industries
DROP POLICY IF EXISTS "Authenticated users can manage industries" ON public.industries;
CREATE POLICY "Authenticated users can manage industries"
    ON public.industries
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ==============================================================================
-- 6. SEED DATA
-- ==============================================================================

-- Seed 7 Core Services
INSERT INTO public.services (slug, name, short_description, icon, display_order, active)
VALUES
    ('translation', 'Translation', 'Rigorous document, regulatory, and technical translation delivered by accredited subject-matter linguists.', 'FileText', 1, true),
    ('remote-interpretation', 'Remote Interpretation', 'High-definition Simultaneous and Consecutive Remote Interpretation (RSI) across video platforms.', 'Headphones', 2, true),
    ('on-site-interpretation', 'On-Site Interpretation', 'In-person professional conference and diplomatic interpreters deployed globally with booth coordination.', 'Users', 3, true),
    ('sign-language-interpretation', 'Sign Language Interpretation', 'Certified sign language interpreters across regional variants ensuring accessibility and compliance.', 'Hand', 4, true),
    ('transcription', 'Transcription', 'Verbatim, intelligent-verbatim, and time-stamped audio/video transcription paired with direct translation.', 'Mic', 5, true),
    ('in-language-coding', 'In-Language Coding', 'Native-language qualitative verbatim categorization, codeframe development, and sentiment mapping.', 'Binary', 6, true),
    ('website-globalization', 'Website Globalization', 'End-to-end linguistic localization, CMS translation connectors, UI string testing, and multilingual SEO.', 'Globe', 7, true)
ON CONFLICT (slug) DO UPDATE
SET
    name = EXCLUDED.name,
    short_description = EXCLUDED.short_description,
    icon = EXCLUDED.icon,
    display_order = EXCLUDED.display_order,
    active = EXCLUDED.active;

-- Seed 7 Target Industries
INSERT INTO public.industries (slug, name, short_description, icon, display_order, active)
VALUES
    ('healthcare', 'Healthcare & Life Sciences', 'Clinical trial protocols, regulatory submissions, patient communications, and medical device compliance.', 'Stethoscope', 1, true),
    ('finance-banking', 'Finance & Banking', 'SEC disclosures, annual reports, multilingual investor calls, and M&A data room translation.', 'Landmark', 2, true),
    ('technology', 'Technology & Software', 'Software UI string localization, API documentation, continuous CI/CD pipelines, and developer portals.', 'Cpu', 3, true),
    ('legal', 'Legal & Regulatory', 'Certified evidentiary translation, cross-border litigation, arbitration interpretation, and trade contracts.', 'Scale', 4, true),
    ('retail-ecommerce', 'Retail & E-commerce', 'Culturally resonant transcreation, localized catalogues, multilingual SEO, and global checkout flows.', 'ShoppingCart', 5, true),
    ('education', 'Education & Academic Publishing', 'Curricula adaptation, scholarly journals, multilingual LMS courseware, and international admissions.', 'GraduationCap', 6, true),
    ('media', 'Media & Entertainment', 'Studio voiceover, timed subtitling, closed captioning, audio description, and cultural adaptation.', 'Clapperboard', 7, true)
ON CONFLICT (slug) DO UPDATE
SET
    name = EXCLUDED.name,
    short_description = EXCLUDED.short_description,
    icon = EXCLUDED.icon,
    display_order = EXCLUDED.display_order,
    active = EXCLUDED.active;
